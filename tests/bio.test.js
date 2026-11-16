/* Fachlogik: Blutgruppen, Kreuzung, Transfusion, Agglutination, Energie. */
const laden = require('./laden');
const { test, ok, eq, near, fertig } = require('./mini');
const W = laden(['js/util.js', 'js/bio.js']);
const B = W.bio;

test('phaenotyp: dominant, rezessiv, kodominant', () => {
  eq(B.phaenotyp('AA'), 'A');
  eq(B.phaenotyp('A0'), 'A');
  eq(B.phaenotyp('B0'), 'B');
  eq(B.phaenotyp('AB'), 'AB');
  eq(B.phaenotyp('00'), '0');
});

test('genotyp: feste Schreibweise A vor B vor 0', () => {
  eq(B.genotyp('0', 'A'), 'A0');
  eq(B.genotyp('B', 'A'), 'AB');
  eq(B.genotyp('0', '0'), '00');
  eq(B.genotyp('B', '0'), 'B0');
});

test('kreuzung: Zeilen Mutter, Spalten Vater', () => {
  eq(B.kreuzung('A0', 'B0'), [['AB', 'A0'], ['B0', '00']]);
  eq(B.kreuzung('AB', 'AB'), [['AA', 'AB'], ['AB', 'BB']]);
});

test('verteilung in Prozent', () => {
  eq(B.verteilung('A0', 'B0'), { A: 25, B: 25, AB: 25, '0': 25 });
  const v = B.verteilung('AB', 'AB');
  eq(v['0'], 0); eq(v.AB, 50); eq(v.A, 25); eq(v.B, 25);
  eq(B.verteilung('A0', 'A0'), { A: 75, B: 0, AB: 0, '0': 25 });
});

test('vertraeglich: alle 16 Kombinationen (nur AB0)', () => {
  const tab = { '0': ['0', 'A', 'B', 'AB'], A: ['A', 'AB'], B: ['B', 'AB'], AB: ['AB'] };
  ['0', 'A', 'B', 'AB'].forEach((s) => ['0', 'A', 'B', 'AB'].forEach((e) => {
    eq(B.vertraeglich(s, e), tab[s].indexOf(e) >= 0, s + '→' + e);
  }));
});

test('agglutiniert: Serum verklumpt Blut mit passendem Antigen', () => {
  ok(B.agglutiniert('A', 'anti-a'));
  ok(!B.agglutiniert('A', 'anti-b'));
  ok(!B.agglutiniert('0', 'anti-a'));
  ok(!B.agglutiniert('0', 'anti-b'));
  ok(B.agglutiniert('AB', 'anti-a'));
  ok(B.agglutiniert('AB', 'anti-b'));
  ok(B.agglutiniert('B', 'anti-b'));
});

test('agglutiniert: Anti-D erkennt Rhesus-positiv, AB0 bleibt gültig mit Rh-Angabe', () => {
  ok(B.agglutiniert('A+', 'anti-d'));
  ok(!B.agglutiniert('0-', 'anti-d'));
  ok(!B.agglutiniert('AB−', 'anti-d'));
  ok(B.agglutiniert('A+', 'anti-a'));
  ok(!B.agglutiniert('0+', 'anti-b'));
});

test('kcal: Standardwerte 4/9/4 und genauere Werte', () => {
  eq(B.kcal(25, 8, 5), 192);
  near(B.kcal(25, 8, 5, { kh: 4.1, fett: 9.3, eiweiss: 4.1 }), 197.4, 1e-9);
});

fertig('bio');
