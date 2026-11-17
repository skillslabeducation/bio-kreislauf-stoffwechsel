/* Facharztprüfung: Aufbau wie das Blatt (50 / 60 Punkte), jede Variante lösbar, Auswertung stimmt. */
const laden = require('./laden');
const { test, ok, eq, fertig } = require('./mini');
const W = laden(['js/util.js', 'js/text.js', 'js/bio.js', 'js/logic.js', 'js/state.js', 'js/abb.js', 'js/aufgaben.js', 'js/inhalt/pruefung.js']);
const A = W.aufgaben, P = W.pruefung;

function teile(aufgaben) { return [].concat.apply([], aufgaben.map((a) => a.teile)); }
function summe(aufgaben) { return teile(aufgaben).reduce((s, t) => s + t.punkte, 0); }

test('Punktverteilung wie auf dem Blatt', () => {
  eq(P.erzeugen(1, 1).map((a) => a.teile.reduce((s, t) => s + t.punkte, 0)), [4, 8, 6, 8, 8, 10, 6]);
  eq(P.erzeugen(2, 1).map((a) => a.teile.reduce((s, t) => s + t.punkte, 0)), [10, 8, 8, 8, 8, 10, 8]);
  eq(P.DAUER, { 1: 45, 2: 60, 3: 45 });
});

test('200 Varianten je Teil: 50, 60 bzw. 50 Punkte, alles lösbar, Schlüssel eindeutig', () => {
  for (let s = 1; s <= 200; s++) {
    [1, 2, 3].forEach((teil) => {
      const a = P.erzeugen(teil, s);
      eq(summe(a), teil === 2 ? 60 : 50, 'Teil ' + teil + ' Seed ' + s);
      const keys = teile(a).map((t) => t.key);
      eq(new Set(keys).size, keys.length, 'Schlüssel doppelt');
      teile(a).forEach((t) => {
        ok(/^p[123]-\d[a-f]+\d?$/.test(t.key), 'Schlüssel ' + t.key);
        ok(!!t.item !== !!t.erkl, t.key + ': genau item oder erkl');
        if (t.item) {
          eq(t.item.id, t.key);
          ok(A.richtig(t.item, A.loesung(t.item)), t.key + ' Seed ' + s + ': Lösung nicht richtig');
          if (t.item.typ === 'beschriften') ok(t.item.nummern, t.key + ': feste Nummern nötig');
        } else {
          eq(t.erkl.id, t.key);
          eq(t.erkl.punkte.reduce((x, p) => x + p.p, 0), t.punkte, t.key + ': Erwartungshorizont = Punktzahl');
          const fehlt = W.text.radar(t.erkl.muster, t.erkl.begriffe).filter((r) => !r.gefunden);
          eq(fehlt.map((r) => r.name), [], t.key + ': Musterantwort ohne Fachbegriff');
        }
      });
    });
  }
});

test('gleicher Seed, gleiche Prüfung', () => {
  eq(JSON.stringify(P.erzeugen(1, 42)), JSON.stringify(P.erzeugen(1, 42)));
  eq(JSON.stringify(P.erzeugen(2, 7)), JSON.stringify(P.erzeugen(2, 7)));
});

test('Varianten unterscheiden sich', () => {
  const riegel = new Set(), kreuz = new Set(), nr = new Set(), trans = new Set();
  for (let s = 1; s <= 60; s++) {
    const t2 = teile(P.erzeugen(2, s));
    const t1 = teile(P.erzeugen(1, s));
    riegel.add(t2.find((t) => t.key === 'p2-2c').item.antwort);
    const k = t2.find((t) => t.item && t.item.typ === 'kreuzung').item;
    kreuz.add(k.mutter + 'x' + k.vater);
    nr.add(JSON.stringify(t1.find((t) => t.key === 'p1-6a').item.nummern));
    trans.add(t2.find((t) => t.key === 'p2-5d').erkl.frage);
  }
  ok(riegel.size >= 5, 'Riegel: ' + riegel.size);
  ok(kreuz.size >= 5, 'Kreuzungen: ' + kreuz.size);
  ok(nr.size >= 10, 'Nummerierungen: ' + nr.size);
  ok(trans.size >= 3, 'Transfusionsfälle: ' + trans.size);
});

test('Wiedervorlage: Aufgaben und Erklärungen der Prüfung sind über ihre ID auffindbar', () => {
  const it = P.itemNachId('p2-2c');
  eq(it.typ, 'zahl');
  eq(it.id, 'p2-2c');
  ok(P.erklNachId('p1-1a').frage);
  eq(P.itemNachId('p1-1a'), null);
  eq(P.itemNachId('p9-9z'), null);
});

test('auswerten: alles richtig ergibt volle Punkte, nichts ergibt 0', () => {
  [1, 2].forEach((teil) => {
    const a = P.erzeugen(teil, 3);
    const antworten = {}, bewertung = {};
    teile(a).forEach((t) => {
      if (t.item) antworten[t.key] = A.loesung(t.item);
      else bewertung[t.key] = t.erkl.punkte.map((p, i) => i);
    });
    const voll = P.auswerten(a, antworten, bewertung);
    eq(voll.punkte, voll.max);
    eq(voll.max, teil === 1 ? 50 : 60);
    eq(voll.aufgaben.length, 7);
    const leer = P.auswerten(a, {}, {});
    eq(leer.punkte, 0);
    ok(leer.falsch.length > 0);
  });
});

test('auswerten: Teilpunkte auf halbe Punkte abgerundet', () => {
  const a = P.erzeugen(1, 5);
  const t = teile(a).find((x) => x.key === 'p1-6a');
  const halb = {};
  const ids = t.item.strukturen;
  ids.forEach((id, i) => { halb[id] = i < 5 ? id : ids[(i + 1) % ids.length]; });
  const r = P.auswerten(a, { 'p1-6a': halb }, {});
  eq(r.aufgaben[5].teile[0].erreicht, 2.5);
});

test('Wie im Blatt frei zu schreiben: Teilgebiete, Gleichungen, Rechenweg', () => {
  const t1 = teile(P.erzeugen(1, 9)), t2 = teile(P.erzeugen(2, 9));
  ['p1-1b'].forEach((k) => ok(t1.find((t) => t.key === k).erkl, k + ' soll Erklär-Aufgabe sein'));
  ['p2-6c', 'p2-6d', 'p2-7d', 'p2-2c2'].forEach((k) => { const x = t2.find((t) => t.key === k); ok(x && x.erkl, k + ' soll Erklär-Aufgabe sein'); });
  eq(t2.find((t) => t.key === 'p2-2c').punkte, 1);
  ok(P.erklNachId('p2-2c2'), 'Rechenweg über ID auffindbar');
});

test('Schwerpunkt-Probearbeit (Teil 3): fünf Aufgaben zur Stoffliste der Lehrerin', () => {
  const a = P.erzeugen(3, 4);
  eq(a.map((x) => x.titel), ['Gasaustausch (Textaufgabe)', 'Weg des Blutes', 'Vererbung der Blutgruppen', 'Zusammenhang Atmung – Zellatmung – Verdauung', 'Formen äußerer Atmung']);
  eq(a.map((x) => x.teile.reduce((s, t) => s + t.punkte, 0)), [12, 10, 10, 10, 8]);
  ok(P.TITEL[3], 'Titel Teil 3');
  const varianten = new Set();
  for (let s = 1; s <= 40; s++) varianten.add(teile(P.erzeugen(3, s)).find((t) => t.key === 'p3-1d').erkl.frage);
  eq(varianten.size, 2, 'Transfer Raucher/Bergsteiger');
  ok(P.itemNachId('p3-5a'), 'p3-5a auffindbar');
});

fertig('pruefung');
