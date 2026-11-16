/* Fachlogik Blut: AB0-Blutgruppen, Vererbung, Transfusion, Agglutination; Energie der Nährstoffe. Ohne DOM. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var ORD = { A: 0, B: 1, '0': 2 };

  /** Genotyp in fester Schreibweise wie auf dem Blatt: A vor B vor 0 (A0, AB, B0, 00). */
  function genotyp(a1, a2) {
    return [a1, a2].sort(function (x, y) { return ORD[x] - ORD[y]; }).join('');
  }

  function phaenotyp(g) {
    var a = g.indexOf('A') >= 0, b = g.indexOf('B') >= 0;
    return a && b ? 'AB' : a ? 'A' : b ? 'B' : '0';
  }

  /** Kreuzungsschema: Zeilen = Allele der Mutter, Spalten = Allele des Vaters. */
  function kreuzung(mutter, vater) {
    return mutter.split('').map(function (m) {
      return vater.split('').map(function (v) { return genotyp(m, v); });
    });
  }

  function verteilung(mutter, vater) {
    var out = { A: 0, B: 0, AB: 0, '0': 0 };
    kreuzung(mutter, vater).forEach(function (zeile) {
      zeile.forEach(function (g) { out[phaenotyp(g)] += 25; });
    });
    return out;
  }

  /** Blutgruppe ohne Rhesus-Angabe ('A+' → 'A'). */
  function ab0(bg) { return String(bg).replace(/[+\-−]$/, ''); }
  function antigene(bg) {
    var g = ab0(bg);
    return g === 'AB' ? ['A', 'B'] : g === '0' ? [] : [g];
  }

  /** Nur AB0: Die roten Blutkörperchen des Spenders dürfen kein Antigen tragen, das dem Empfänger fehlt. */
  function vertraeglich(spender, empfaenger) {
    var e = antigene(empfaenger);
    return antigene(spender).every(function (a) { return e.indexOf(a) >= 0; });
  }

  /** Verklumpt das Testserum (anti-a, anti-b, anti-d) dieses Blut? */
  function agglutiniert(bg, serum) {
    if (serum === 'anti-d') return /\+$/.test(String(bg));
    var ziel = serum === 'anti-a' ? 'A' : serum === 'anti-b' ? 'B' : null;
    return !!ziel && antigene(bg).indexOf(ziel) >= 0;
  }

  /** Energiegehalt in kcal. Standard wie im Unterricht: 4 / 9 / 4 kcal pro Gramm. */
  function kcal(kh, fett, eiweiss, f) {
    f = f || { kh: 4, fett: 9, eiweiss: 4 };
    return kh * f.kh + fett * f.fett + eiweiss * f.eiweiss;
  }

  W.bio = {
    genotyp: genotyp, phaenotyp: phaenotyp, kreuzung: kreuzung, verteilung: verteilung,
    antigene: antigene, vertraeglich: vertraeglich, agglutiniert: agglutiniert, kcal: kcal,
    GENOTYPEN: ['AA', 'A0', 'BB', 'B0', 'AB', '00'], GRUPPEN: ['A', 'B', 'AB', '0']
  };
})();
