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

if (!process.env.NUR_FAELLE) test('Fälle: elf Stück, Boxen 0 bis 10', () => {
  eq(faelle.map((f) => f.box), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

faelle.forEach((f) => {
  test('Fall ' + f.box + ' (' + f.id + '): Pflichtfelder und Umfang', () => {
    ['id', 'titel', 'patient', 'symptom', 'blatt', 'epikrise'].forEach((k) => ok(f[k], k + ' fehlt'));
    ok(f.teil === 1 || f.teil === 2, 'teil');
    ok(f.aufnahme && f.aufnahme.text && f.aufnahme.oberaerztin && f.aufnahme.leitfrage, 'aufnahme unvollständig');
    ok(f.karten.length >= 3 && f.karten.length <= 9, 'Karten: ' + f.karten.length);
    ok(f.ueben.length >= 12 && f.ueben.length <= 28, 'Üben: ' + f.ueben.length);
    ok(f.erklaeren.length >= 2 && f.erklaeren.length <= 5, 'Erklären: ' + f.erklaeren.length);
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

if (!process.env.NUR_FAELLE) {
  test('Triage: mindestens 60 Aussagen, ausgewogen, jede mit Erklärung und gültigem Fall', () => {
    ok(W.triage && Array.isArray(W.triage.pool), 'W.triage.pool fehlt');
    const pool = W.triage.pool;
    ok(pool.length >= 60, 'nur ' + pool.length);
    const wahr = pool.filter((a) => a.stimmt === true).length / pool.length;
    ok(wahr >= 0.4 && wahr <= 0.6, 'Anteil wahr: ' + wahr.toFixed(2));
    const fallIds = faelle.map((f) => f.id);
    pool.forEach((a, i) => {
      ok(a.s && typeof a.stimmt === 'boolean' && a.erkl, 'Aussage ' + i + ' unvollständig');
      ok(fallIds.indexOf(a.fall) >= 0, 'Aussage ' + i + ': Fall ' + a.fall);
    });
    eq(new Set(pool.map((a) => a.s)).size, pool.length, 'doppelte Aussagen');
  });

  test('Triage: Aussage als Wiedervorlage-Aufgabe auffindbar und lösbar', () => {
    const it = W.triage.itemNachId('t-3');
    eq(it.typ, 'wahl');
    eq(it.id, 't-3');
    ok(A.richtig(it, A.loesung(it)));
    eq(W.triage.itemNachId('t-9999'), null);
  });

  test('Kitteltasche: Daten für alle Fälle vorhanden', () => {
    ok(W.kitteltasche && typeof W.kitteltasche.abschnitte === 'function', 'W.kitteltasche fehlt');
    const ab = W.kitteltasche.abschnitte(faelle);
    ok(ab.length >= 10, 'Abschnitte: ' + ab.length);
    ab.forEach((x) => ok(x.titel && (x.merk.length || x.extra), 'leerer Abschnitt ' + x.titel));
  });
}

if (!process.env.NUR_FAELLE) {
  test('Oberärztin am 18.11. nennt den Plan nach der Stoffliste (Box 6, 9, 8)', () => {
    W.state.load();
    W.state.itemErgebnis('herz-u1', true);
    const s = W.ansichten.spruch('2026-11-18');
    ok(/Box 6/.test(s) && !/Box 5/.test(s), s);
  });
  test('Triage: Punkte = richtig minus falsch, mindestens 0', () => {
    eq(W.triage.punkte(5, 2), 3);
    eq(W.triage.punkte(1, 4), 0);
  });
  test('Triage: IDs t-<n> bleiben stabil (neue Aussagen nur hinten anhängen)', () => {
    ok(W.triage.pool.length >= 78, 'Länge ' + W.triage.pool.length);
    eq(W.triage.pool[5].s, 'Reizbarkeit bedeutet, dass ein Lebewesen schnell gereizt reagiert.');
    eq(W.triage.pool[40].s, 'Die Zellatmung findet zum größten Teil in den Mitochondrien statt.');
    eq(W.triage.pool[75].s, 'Äußere und innere Atmung bedeuten dasselbe.');
  });
}

fertig('inhalt');
