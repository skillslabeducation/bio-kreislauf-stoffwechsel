/* Inhalte: Vollständigkeit, eindeutige IDs, jede Aufgabe mit ihrer Lösung lösbar, Abbildungen existieren,
   Erklärungen passen zu ihren Fachbegriffen, alle Blattblöcke abgedeckt, Prüfung ergibt 50/60 Punkte. */
const laden = require('./laden');
const { test, ok, eq, fertig } = require('./mini');
const W = global.__dateien ? laden(global.__dateien) : laden();
const A = W.aufgaben;
const faelle = (W.faelle || []).slice().sort((a, b) => a.box - b.box);

test('Abbildungen: jede Struktur hat Name und Position', () => {
  Object.keys(W.abb.liste).forEach((n) => {
    const s = W.abb.liste[n].strukturen;
    Object.keys(s).forEach((id) => ok(s[id].label && typeof s[id].x === 'number' && typeof s[id].y === 'number', n + '/' + id));
  });
});

function pruefeItem(it, wo) {
  ok(it.id, wo + ': id fehlt');
  ok(A.TYPEN.indexOf(it.typ) >= 0, it.id + ': unbekannter Typ ' + it.typ);
  ok(A.richtig(it, A.loesung(it)), it.id + ': Musterlösung wird nicht als richtig erkannt');
  if (it.typ === 'wahl' || it.typ === 'mehrfach') {
    ok(it.optionen.length >= 2, it.id + ': zu wenige Optionen');
    eq(new Set(it.optionen).size, it.optionen.length, it.id + ': doppelte Optionen');
    const r = [].concat(it.richtig);
    ok(r.every((i) => i >= 0 && i < it.optionen.length), it.id + ': richtig außerhalb');
  }
  if (it.typ === 'luecke') A.parseLuecke(it.text).filter((s) => s.optionen).forEach((s) => ok(s.optionen.length >= 2, it.id + ': Lücke mit nur einer Option'));
  if (it.typ === 'beschriften') {
    const liste = W.abb.liste[it.abb];
    ok(liste, it.id + ': Abbildung fehlt ' + it.abb);
    it.strukturen.forEach((s) => ok(liste.strukturen[s], it.id + ': Struktur fehlt ' + s));
    eq(new Set(it.strukturen).size, it.strukturen.length, it.id + ': doppelte Struktur');
  }
  if (it.abb && it.typ !== 'beschriften') ok(W.abb.liste[it.abb], it.id + ': Abbildung fehlt ' + it.abb);
  if (it.typ === 'behauptung') ok(typeof it.stimmt === 'boolean' && it.gruende.length >= 2 && it.richtig < it.gruende.length, it.id + ': Behauptung unvollständig');
  if (it.typ === 'tabelle') it.zeilen.forEach((z) => eq(z.zellen.length, it.spalten.length - 1, it.id + ': Spaltenzahl'));
  if (it.typ === 'matrix') { eq(it.richtig.length, it.zeilen.length, it.id); it.richtig.forEach((z) => eq(z.length, it.spalten.length, it.id)); }
  if (it.typ === 'zuordnen') eq(new Set(it.paare.map((p) => p[1])).size, it.paare.length, it.id + ': doppelte rechte Seite');
}

function pruefeErkl(e) {
  ok(e.id && e.frage && e.muster, e.id + ': Frage oder Musterantwort fehlt');
  ok(Array.isArray(e.punkte) && e.punkte.length >= 2 && e.punkte.every((p) => p.text && p.p > 0), e.id + ': Erwartungshorizont unvollständig');
  ok(Array.isArray(e.begriffe) && e.begriffe.length >= 2 && e.begriffe.every((b) => b.name && b.muster && b.muster.length), e.id + ': Fachbegriffe fehlen');
  const r = W.text.radar(e.muster, e.begriffe);
  const fehlend = r.filter((x) => !x.gefunden).map((x) => x.name);
  ok(fehlend.length === 0, e.id + ': Musterantwort enthält Fachbegriffe nicht: ' + fehlend.join(', '));
}

if (!process.env.NUR_FAELLE) test('Fälle: zehn Stück, Boxen 0 bis 9', () => {
  eq(faelle.map((f) => f.box), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

faelle.forEach((f) => {
  test('Fall ' + f.box + ' (' + f.id + '): Pflichtfelder und Umfang', () => {
    ['id', 'titel', 'patient', 'symptom', 'blatt', 'epikrise'].forEach((k) => ok(f[k], k + ' fehlt'));
    ok(f.teil === 1 || f.teil === 2, 'teil');
    ok(f.aufnahme && f.aufnahme.text && f.aufnahme.oberaerztin && f.aufnahme.leitfrage, 'aufnahme unvollständig');
    ok(f.karten.length >= 3 && f.karten.length <= 8, 'Karten: ' + f.karten.length);
    ok(f.ueben.length >= 12 && f.ueben.length <= 22, 'Üben: ' + f.ueben.length);
    ok(f.erklaeren.length >= 2 && f.erklaeren.length <= 4, 'Erklären: ' + f.erklaeren.length);
    ok(f.abschluss.length >= 3 && f.abschluss.length <= 5, 'Abschluss: ' + f.abschluss.length);
    f.karten.forEach((k, i) => { ok(k.titel && k.text, 'Karte ' + i); if (k.abb) ok(W.abb.liste[k.abb], 'Karte ' + i + ': Abbildung ' + k.abb); });
  });
  test('Fall ' + f.box + ': Aufgaben lösbar und vollständig', () => {
    f.ueben.forEach((it) => { pruefeItem(it, f.id); ok(new RegExp('^' + f.id + '-u\\d+$').test(it.id), it.id + ': ID-Schema'); });
    f.abschluss.forEach((it) => { pruefeItem(it, f.id); ok(!it.plus, it.id + ': Abschluss darf nicht Plus sein'); ok(new RegExp('^' + f.id + '-a\\d+$').test(it.id), it.id + ': ID-Schema'); });
  });
  test('Fall ' + f.box + ': Erklärungen mit Erwartungshorizont', () => {
    f.erklaeren.forEach((e) => { pruefeErkl(e); ok(new RegExp('^' + f.id + '-e\\d+$').test(e.id), e.id + ': ID-Schema'); });
  });
  test('Fall ' + f.box + ': keine Platzhalter', () => {
    const t = JSON.stringify(f);
    ok(!/TODO|XXX|Lorem|FIXME/.test(t), 'Platzhalter gefunden');
  });
});

test('IDs sind über alle Fälle eindeutig', () => {
  const ids = [];
  faelle.forEach((f) => { ids.push(f.id); f.ueben.concat(f.abschluss, f.erklaeren).forEach((x) => ids.push(x.id)); });
  const doppelt = ids.filter((x, i) => ids.indexOf(x) !== i);
  eq(doppelt, []);
});

if (!process.env.NUR_FAELLE) test('Jeder Block des Übungsblatts ist einem Fall zugeordnet', () => {
  const da = new Set();
  faelle.forEach((f) => String(f.blatt).split(/\s*,\s*/).forEach((b) => da.add(b.replace(/[a-e–-]+$/, ''))));
  const soll = [];
  for (let i = 1; i <= 7; i++) { soll.push('T1-' + i); soll.push('T2-' + i); }
  const fehlt = soll.filter((b) => !da.has(b));
  eq(fehlt, []);
});

fertig('inhalt');
