/* Fortschritt: nur lokal im Browser (localStorage, Schlüssel nachtschicht-v1). Kein Protokoll. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var KEY = 'nachtschicht-v1';
  var PREFIX = 'NACHTSCHICHT:';

  function fresh() {
    return {
      v: 1, name: '', ton: false, begruesst: false,
      items: {}, erkl: {}, abschluss: {}, karten: {}, wv: {},
      pruefung: { laeufe: [], best: {}, laufend: null },
      triage: { best: 0 }
    };
  }

  function zusammen(d) {
    var f = fresh();
    Object.keys(f).forEach(function (k) { if (d[k] !== undefined) f[k] = d[k]; });
    f.pruefung = Object.assign(fresh().pruefung, d.pruefung || {});
    f.triage = Object.assign(fresh().triage, d.triage || {});
    return f;
  }

  var listeners = [];
  function emit() { listeners.forEach(function (fn) { try { fn(S.data); } catch (e) { /* weiter */ } }); }

  var S = (W.state = {
    data: fresh(),
    on: function (fn) { listeners.push(fn); },

    load: function () {
      var d = W.store.get(KEY, null);
      S.data = d && typeof d === 'object' && d.v === 1 ? zusammen(d) : fresh();
      return S.data;
    },
    save: function () { W.store.set(KEY, S.data); emit(); },
    reset: function () { S.data = fresh(); W.store.remove(KEY); emit(); },

    setName: function (n) { S.data.name = String(n || '').trim().slice(0, 30); S.save(); },
    set: function (feld, wert) { S.data[feld] = wert; S.save(); },

    /** Ergebnis einer automatisch geprüften Aufgabe. Fehler kommen in die Wiedervorlage. */
    itemErgebnis: function (itemId, richtig) {
      var prev = S.data.items[itemId] || { ok: false, n: 0 };
      S.data.items[itemId] = { ok: prev.ok || !!richtig, n: prev.n + 1 };
      var behoben = false;
      if (!richtig) S.data.wv[itemId] = 0;
      else if (itemId in S.data.wv) {
        S.data.wv[itemId]++;
        if (S.data.wv[itemId] >= 2) { delete S.data.wv[itemId]; behoben = true; }
      }
      S.save();
      return { behoben: behoben };
    },

    /** Selbst bewertete Erklärung. Unter 60 % in die Wiedervorlage, ab 80 % wieder raus. */
    erklSpeichern: function (id, r) {
      var prev = S.data.erkl[id] || { best: 0 };
      var p = Math.max(0, Math.min(1, +r.prozent || 0));
      S.data.erkl[id] = { text: r.text || '', haken: (r.haken || []).slice(), prozent: p, best: Math.max(prev.best || 0, p) };
      var k = 'e:' + id;
      if (p < W.logic.ERKL_OK) S.data.wv[k] = 0;
      else if (p >= 0.8 && k in S.data.wv) delete S.data.wv[k];
      S.save();
    },

    abschlussSetzen: function (fallId) { S.data.abschluss[fallId] = true; S.save(); },
    karteGesehen: function (fallId, idx) {
      var bisher = S.data.karten[fallId] == null ? -1 : S.data.karten[fallId];
      if (idx > bisher) { S.data.karten[fallId] = idx; S.save(); }
    },
    wvListe: function () { return Object.keys(S.data.wv); },

    /* Facharztprüfung: laufende Prüfung wird gespeichert und übersteht Neuladen. */
    pruefungStarten: function (teil, seed, dauerMin) {
      S.data.pruefung.laufend = { teil: teil, start: Date.now(), dauerMin: dauerMin, seed: seed, antworten: {}, abgegeben: false };
      S.save();
    },
    pruefungAntwort: function (key, wert) {
      var l = S.data.pruefung.laufend;
      if (!l) return;
      l.antworten[key] = wert;
      S.save();
    },
    pruefungLaufend: function () { return S.data.pruefung.laufend || null; },
    pruefungAbgeben: function () {
      var l = S.data.pruefung.laufend;
      if (l) { l.abgegeben = true; S.save(); }
    },
    /** ergebnisse: [{ teil, punkte, max }] – ein Eintrag je Prüfungsteil. */
    pruefungBeenden: function (ergebnisse) {
      var datum = new Date().toISOString();
      (ergebnisse || []).forEach(function (e) {
        S.data.pruefung.laeufe.push({ teil: e.teil, punkte: e.punkte, max: e.max, datum: datum });
        var q = e.max ? e.punkte / e.max : 0;
        S.data.pruefung.best[String(e.teil)] = Math.max(S.data.pruefung.best[String(e.teil)] || 0, q);
      });
      while (S.data.pruefung.laeufe.length > 20) S.data.pruefung.laeufe.shift();
      S.data.pruefung.laufend = null;
      S.save();
    },
    pruefungVerwerfen: function () { S.data.pruefung.laufend = null; S.save(); },

    recordTriage: function (punkte) {
      var neu = punkte > (S.data.triage.best || 0);
      if (neu) S.data.triage.best = punkte;
      S.save();
      return neu;
    },

    /** Fortschritt als Text, um ihn auf ein anderes Gerät zu übertragen. */
    exportCode: function () { return PREFIX + JSON.stringify(S.data); },
    importCode: function (code) {
      var t = String(code || '').trim();
      if (t.indexOf(PREFIX) !== 0) return false;
      try {
        var d = JSON.parse(t.slice(PREFIX.length));
        if (!d || d.v !== 1) return false;
        S.data = zusammen(d);
        S.save();
        return true;
      } catch (e) { return false; }
    }
  });
})();
