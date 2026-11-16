/* Spiellogik und Fortschritt: Plan, Fallstatus, Rang, Note, Wiedervorlage, Prüfung, Speicher. */
const laden = require('./laden');
const { test, ok, eq, fertig } = require('./mini');
const DATEIEN = ['js/util.js', 'js/text.js', 'js/bio.js', 'js/logic.js', 'js/state.js'];

function neu() { const W = laden(DATEIEN); return { W, ctx: laden.kontext }; }

const FALL = {
  id: 'f', box: 3,
  ueben: [{ id: 'f-u1' }, { id: 'f-u2' }, { id: 'f-u3' }, { id: 'f-u4' }, { id: 'f-u5' }, { id: 'f-u6', plus: true }],
  erklaeren: [{ id: 'f-e1' }, { id: 'f-e2' }, { id: 'f-e3', plus: true }],
  abschluss: [{ id: 'f-a1' }]
};

test('planFuer: fester Plan bis zum 19.11., danach nichts', () => {
  const { W } = neu();
  const L = W.logic;
  eq(L.ARBEIT, '2026-11-19');
  const mo = L.planFuer('2026-11-16');
  eq(mo.tage, 3);
  eq(mo.heute, ['box:0', 'box:1', 'box:2', 'box:3', 'box:4']);
  eq(mo.liste.length, 3);
  eq(L.planFuer('2026-11-17').heute, ['box:0', 'box:1', 'box:2', 'box:3', 'box:4']);
  eq(L.planFuer('2026-11-17').tage, 2);
  eq(L.planFuer('2026-11-18').heute, ['box:5', 'box:6', 'box:7', 'box:8', 'box:9', 'pruefung', 'wv']);
  eq(L.planFuer('2026-11-19').heute, ['kitteltasche', 'triage']);
  eq(L.planFuer('2026-11-19').tage, 0);
  eq(L.planFuer('2026-11-20'), null);
  eq(L.planFuer('2026-11-10').heute, ['box:0', 'box:1', 'box:2', 'box:3', 'box:4']);
});

test('fallStatus: wartet, Behandlung, entlassen erst mit allen drei Bedingungen', () => {
  const { W } = neu();
  const S = W.state, L = W.logic;
  S.load();
  eq(L.fallStatus(FALL, S.data).status, 'wartet');
  S.karteGesehen('f', 0);
  eq(L.fallStatus(FALL, S.data).status, 'behandlung');
  ['f-u1', 'f-u2', 'f-u3', 'f-u4'].forEach((id) => S.itemErgebnis(id, true));
  eq(L.fallStatus(FALL, S.data).quote, 0.8, 'Plus-Item zählt nicht');
  S.abschlussSetzen('f');
  eq(L.fallStatus(FALL, S.data).status, 'behandlung', 'Erklärungen fehlen');
  S.erklSpeichern('f-e1', { text: 'x', haken: [0], prozent: 0.6 });
  S.erklSpeichern('f-e2', { text: 'x', haken: [0], prozent: 0.5 });
  const st = L.fallStatus(FALL, S.data);
  eq(st.status, 'behandlung');
  ok(st.fehlt.some((t) => /Erklärung 2/.test(t)), 'nennt Erklärung 2: ' + st.fehlt.join('; '));
  S.erklSpeichern('f-e2', { text: 'y', haken: [0, 1], prozent: 0.75 });
  eq(L.fallStatus(FALL, S.data).status, 'entlassen');
});

test('fallStatus: fehlende Übungen werden konkret genannt', () => {
  const { W } = neu();
  W.state.load();
  W.state.itemErgebnis('f-u1', true);
  const st = W.logic.fallStatus(FALL, W.state.data);
  ok(st.fehlt.indexOf('Noch 3 Übungen richtig lösen') >= 0, st.fehlt.join('; '));
  ok(st.fehlt.indexOf('Fallabschluss') >= 0);
});

test('rang: Praktikant, Assistenzarzt, Facharzt, Oberarzt', () => {
  const { W } = neu();
  const L = W.logic, S = W.state;
  S.load();
  const faelle = [];
  for (let i = 0; i < 10; i++) faelle.push({ id: 'x' + i, ueben: [], erklaeren: [], abschluss: [] });
  eq(L.rang(S.data, faelle).titel, 'Praktikant');
  S.abschlussSetzen('x0'); S.abschlussSetzen('x1');
  eq(L.rang(S.data, faelle).titel, 'Assistenzarzt');
  for (let i = 2; i < 6; i++) S.abschlussSetzen('x' + i);
  eq(L.rang(S.data, faelle).titel, 'Facharzt');
  S.pruefungBeenden([{ teil: 1, punkte: 40, max: 50 }, { teil: 2, punkte: 47, max: 60 }]);
  eq(L.rang(S.data, faelle).titel, 'Facharzt', '47/60 < 80 %');
  S.pruefungBeenden([{ teil: 2, punkte: 48, max: 60 }]);
  eq(L.rang(S.data, faelle).titel, 'Oberarzt');
});

test('note und punkteRunden', () => {
  const { W } = neu();
  const L = W.logic;
  eq(L.note(100), 1); eq(L.note(87.5), 1); eq(L.note(87.4), 2); eq(L.note(72.5), 2);
  eq(L.note(57.5), 3); eq(L.note(45), 4); eq(L.note(20), 5); eq(L.note(19.9), 6);
  eq(L.punkteRunden(0.66, 3), 1.5);
  eq(L.punkteRunden(1, 3), 3);
  eq(L.punkteRunden(0.49, 1), 0);
});

test('Wiedervorlage: zweimal hintereinander richtig behebt', () => {
  const { W } = neu();
  const S = W.state;
  S.load();
  S.itemErgebnis('a', false);
  eq(S.wvListe(), ['a']);
  eq(S.itemErgebnis('a', true).behoben, false);
  S.itemErgebnis('a', false);
  S.itemErgebnis('a', true);
  eq(S.itemErgebnis('a', true).behoben, true);
  eq(S.wvListe(), []);
  ok(S.data.items.a.ok, 'einmal richtig bleibt richtig');
});

test('Wiedervorlage: Erklärung unter 60 % rein, ab 80 % raus', () => {
  const { W } = neu();
  const S = W.state;
  S.load();
  S.erklSpeichern('e1', { text: '', haken: [], prozent: 0.5 });
  eq(S.wvListe(), ['e:e1']);
  S.erklSpeichern('e1', { text: '', haken: [0], prozent: 0.7 });
  eq(S.wvListe(), ['e:e1']);
  S.erklSpeichern('e1', { text: '', haken: [0, 1], prozent: 0.9 });
  eq(S.wvListe(), []);
  eq(S.data.erkl.e1.best, 0.9);
});

test('Speicher: kaputtes JSON und werfendes localStorage', () => {
  const a = neu();
  a.ctx.localStorage.setItem('nachtschicht-v1', '{kaputt');
  a.W.state.load();
  eq(a.W.state.data.v, 1);
  eq(a.W.state.data.name, '');
  const b = neu();
  b.ctx.localStorage.getItem = () => { throw new Error('gesperrt'); };
  b.ctx.localStorage.setItem = () => { throw new Error('gesperrt'); };
  b.W.state.load();
  b.W.state.setName('Test');
  eq(b.W.state.data.name, 'Test');
});

test('Prüfung: laufende Prüfung übersteht Neuladen', () => {
  const a = neu();
  a.W.state.load();
  a.W.state.pruefungStarten(1, 12345, 45);
  a.W.state.pruefungAntwort('1a', 'Lebewesen');
  const gespeichert = a.ctx.localStorage.getItem('nachtschicht-v1');
  const b = neu();
  b.ctx.localStorage.setItem('nachtschicht-v1', gespeichert);
  b.W.state.load();
  const l = b.W.state.pruefungLaufend();
  eq(l.teil, 1); eq(l.seed, 12345); eq(l.dauerMin, 45);
  eq(l.antworten['1a'], 'Lebewesen');
  b.W.state.pruefungBeenden([{ teil: 1, punkte: 25, max: 50 }]);
  eq(b.W.state.pruefungLaufend(), null);
  eq(b.W.state.data.pruefung.best['1'], 0.5);
});

test('Fortschritt übertragen: Export und Import', () => {
  const a = neu();
  a.W.state.load();
  a.W.state.setName('Kim');
  a.W.state.itemErgebnis('f-u1', true);
  const code = a.W.state.exportCode();
  ok(code.indexOf('NACHTSCHICHT:') === 0);
  const b = neu();
  b.W.state.load();
  eq(b.W.state.importCode('Unsinn'), false);
  eq(b.W.state.importCode(code), true);
  eq(b.W.state.data.name, 'Kim');
  ok(b.W.state.data.items['f-u1'].ok);
});

test('Speicher: gültiges JSON mit falscher Struktur wird repariert', () => {
  const a = neu();
  a.ctx.localStorage.setItem('nachtschicht-v1', JSON.stringify({ v: 1, wv: null, items: 5, erkl: 'x', pruefung: null, triage: [] }));
  a.W.state.load();
  eq(typeof a.W.state.data.wv, 'object'); ok(a.W.state.data.wv !== null);
  eq(a.W.state.wvListe(), []);
  a.W.state.itemErgebnis('x', false);
  eq(a.W.state.wvListe(), ['x']);
  ok(a.W.state.data.pruefung.best && typeof a.W.state.data.pruefung.best === 'object');
});

test('Erklärung: Entwurf wird gespeichert, ohne die Bewertung zu ändern', () => {
  const a = neu();
  a.W.state.load();
  a.W.state.erklEntwurf('e9', 'halber Satz');
  eq(a.W.state.erklText('e9'), 'halber Satz');
  eq(a.W.state.data.erkl.e9 && a.W.state.data.erkl.e9.best || 0, 0);
  eq(a.W.state.wvListe(), []);
  a.W.state.erklSpeichern('e9', { text: 'fertig', haken: [0], prozent: 0.7 });
  a.W.state.erklEntwurf('e9', 'neuer Versuch');
  eq(a.W.state.data.erkl.e9.best, 0.7);
  eq(a.W.state.erklText('e9'), 'neuer Versuch');
});

fertig('logic');
