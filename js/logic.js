/* Reine Spiellogik: Termin und Plan, Fallstatus, Rang, Note. Ohne DOM. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var ARBEIT = '2026-11-19';
  var TAG = 86400000;

  function parseISO(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
    return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) : NaN;
  }

  function tageBis(heute, ziel) {
    var a = parseISO(heute), b = parseISO(ziel);
    if (isNaN(a) || isNaN(b)) return NaN;
    return Math.round((b - a) / TAG);
  }

  function heuteISO() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  /* Stoffliste der Lehrerin (12.11.): Gasaustausch (Textaufgabe), Weg des Blutes, Vererbung der Blutgruppen,
     Zusammenhang Atmung – Zellatmung – Verdauung, Formen äußerer Atmung. */
  var STUFE = {
    gasaustausch: 'kern', herz: 'kern', vererbung: 'kern', zellatmung: 'kern', atmungsformen: 'kern',
    atemwege: 'grundlage', gefaesse: 'grundlage', blutgruppen: 'grundlage'
  };
  function stufe(fallId) { return STUFE[fallId] || 'zusatz'; }

  /** Einmaliger Hinweis für alle, die schon vor dem Update (Stoffliste der Lehrerin) gelernt haben. */
  var STAND = 2;
  function updateHinweis(data) { return Object.keys((data && data.items) || {}).length > 0 && ((data && data.stand) || 0) < STAND; }

  var TEIL1 = ['box:1', 'box:2', 'box:10', 'box:3', 'box:4'];
  var TEIL2 = ['box:6', 'box:9', 'box:8', 'pruefung', 'wv'];
  var LETZT = ['kitteltasche', 'triage'];
  var LISTE = [
    { tag: 'Mo-Abend und Di', text: 'Atmung und Kreislauf: Gasaustausch als Text, Formen äußerer Atmung, Weg des Blutes. Box 1 und 4 sind die Grundlagen dazu.', ziele: TEIL1 },
    { tag: 'Mi', text: 'Zusammenhang Atmung – Zellatmung – Verdauung und Vererbung der Blutgruppen (Box 8 als Grundlage). Danach die Schwerpunkt-Probearbeit und die Wiedervorlage.', ziele: TEIL2 },
    { tag: 'Do früh', text: 'Kitteltasche durchlesen, eine Runde Triage. Dann los.', ziele: LETZT }
  ];

  /** Fester Lernplan bis zur Arbeit am 19.11. Danach null. */
  function planFuer(heute) {
    var t = tageBis(heute, ARBEIT);
    if (isNaN(t) || t < 0) return null;
    var heuteZiele = t >= 2 ? TEIL1 : t === 1 ? TEIL2 : LETZT;
    return { tage: t, heute: heuteZiele.slice(), liste: LISTE.map(function (x) { return { tag: x.tag, text: x.text, ziele: x.ziele.slice() }; }) };
  }

  var QUOTE = 0.8;
  var ERKL_OK = 0.6;

  function fallStatus(fall, data) {
    var items = data.items || {}, erkl = data.erkl || {};
    var pflicht = (fall.ueben || []).filter(function (u) { return !u.plus; });
    var richtig = pflicht.filter(function (u) { return items[u.id] && items[u.id].ok; }).length;
    var quote = pflicht.length ? richtig / pflicht.length : 1;
    var fehlt = [];
    var noetig = Math.ceil(QUOTE * pflicht.length - 1e-9) - richtig;
    if (noetig > 0) fehlt.push('Noch ' + noetig + (noetig === 1 ? ' Übung' : ' Übungen') + ' richtig lösen');
    var erklOk = true;
    (fall.erklaeren || []).forEach(function (e, i) {
      if (e.plus) return;
      var r = erkl[e.id];
      if (!r || !(r.best >= ERKL_OK)) {
        erklOk = false;
        fehlt.push('Erklärung ' + (i + 1) + ' mit mindestens 60 %');
      }
    });
    var abschluss = !!(data.abschluss && data.abschluss[fall.id]);
    if (!abschluss) fehlt.push('Fallabschluss');
    var entlassen = abschluss && quote >= QUOTE - 1e-9 && erklOk;
    var angefasst = (data.karten && data.karten[fall.id] != null) ||
      (fall.ueben || []).concat(fall.abschluss || []).some(function (u) { return items[u.id]; }) ||
      (fall.erklaeren || []).some(function (e) { return erkl[e.id]; }) || abschluss;
    return {
      status: entlassen ? 'entlassen' : angefasst ? 'behandlung' : 'wartet',
      quote: quote, erklOk: erklOk, abschluss: abschluss, fehlt: entlassen ? [] : fehlt
    };
  }

  function entlasseneAnzahl(data, faelle) {
    return faelle.filter(function (f) { return fallStatus(f, data).status === 'entlassen'; }).length;
  }

  function rang(data, faelle) {
    var n = entlasseneAnzahl(data, faelle);
    var best = (data.pruefung && data.pruefung.best) || {};
    var pruefOk = (best['1'] >= 0.8 && best['2'] >= 0.8) || best['3'] >= 0.8;
    if (n >= 6 && pruefOk) return { titel: 'Oberarzt', naechster: null, entlassen: n };
    if (n >= 6) return { titel: 'Facharzt', naechster: 'Oberarzt: Schwerpunkt-Probearbeit oder beide Prüfungsteile mit mindestens 80 %', entlassen: n };
    if (n >= 2) return { titel: 'Assistenzarzt', naechster: 'Facharzt: 6 Patienten entlassen', entlassen: n };
    return { titel: 'Praktikant', naechster: 'Assistenzarzt: 2 Patienten entlassen', entlassen: n };
  }

  /** Richtwert-Note aus Prozent (Schlüssel wie bei der Physik-Probearbeit). */
  function note(prozent) {
    if (prozent >= 87.5) return 1;
    if (prozent >= 72.5) return 2;
    if (prozent >= 57.5) return 3;
    if (prozent >= 45) return 4;
    if (prozent >= 20) return 5;
    return 6;
  }

  /** Anteil × Punkte, auf halbe Punkte abgerundet. */
  function punkteRunden(anteil, punkte) {
    return Math.floor(anteil * punkte * 2 + 1e-9) / 2;
  }

  W.logic = {
    ARBEIT: ARBEIT, stufe: stufe, updateHinweis: updateHinweis, STAND: STAND, tageBis: tageBis, heuteISO: heuteISO, planFuer: planFuer,
    fallStatus: fallStatus, rang: rang, note: note, punkteRunden: punkteRunden, ERKL_OK: ERKL_OK
  };
})();
