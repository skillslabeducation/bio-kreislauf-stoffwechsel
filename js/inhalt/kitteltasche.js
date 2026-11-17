/* Kitteltasche: Spickzettel zum Drucken. Merksätze aus den Fällen plus feste Tabellen und Gleichungen. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  var EXTRA = [
    { titel: 'Gasaustausch als Text', extra: '<p>Die Einatemluft bringt viel O<sub>2</sub> ins Lungenbläschen, das Blut kommt sauerstoffarm und CO<sub>2</sub>-reich an. O<sub>2</sub> diffundiert vom Ort hoher zum Ort niedriger Konzentration durch die dünne Wand (eine Zellschicht) ins Blut, CO<sub>2</sub> umgekehrt. Große Oberfläche (ca. 300 Mio. Bläschen, ca. 100 m²), feucht, dichtes Kapillarnetz. Atmung und Durchblutung halten das Konzentrationsgefälle aufrecht.</p>' },
    { titel: 'Weg des Blutes', extra: '<p>Rechter Vorhof → rechte Kammer → Lungenarterie → Kapillaren der Lunge (Gasaustausch) → Lungenvene → linker Vorhof → linke Kammer → Aorta → Arterien → Kapillaren der Körperorgane → Venen → Hohlvene → rechter Vorhof. Abbildung von vorn: Die rechte Herzhälfte liegt im Bild links.</p><p><strong>O<sub>2</sub>:</strong> Lungenbläschen → Lungenkapillare → Lungenvene → linkes Herz → Aorta → Arterie → Kapillare im Muskel → Muskelzelle (Mitochondrien). CO<sub>2</sub> den umgekehrten Weg über Venen, Hohlvene, rechtes Herz und Lungenarterie zur Lunge.</p>' },
    { titel: 'Zellatmung: Gleichungen', nurWennFehlt: true, extra: '<p><strong>Zellatmung (Wort):</strong> Glucose + Sauerstoff → Kohlenstoffdioxid + Wasser (+ Energie)</p><p><strong>Zellatmung (Formel):</strong> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O (+ Energie)</p>' },
    { titel: 'Arterien und Venen', extra: '<table><tr><th></th><th>Arterien</th><th>Venen</th></tr><tr><td>Richtung</td><td>vom Herzen weg</td><td>zum Herzen hin</td></tr><tr><td>Wand</td><td>dick, muskulös, elastisch</td><td>dünn</td></tr><tr><td>Blutdruck</td><td>hoch</td><td>niedrig</td></tr><tr><td>Klappen</td><td>keine</td><td>Venenklappen</td></tr><tr><td>O<sub>2</sub> Körperkreislauf</td><td>reich</td><td>arm</td></tr><tr><td>O<sub>2</sub> Lungenkreislauf</td><td>arm</td><td>reich</td></tr></table>' },
    { titel: 'Blutgruppen und Transfusion', extra: '<table><tr><th>Gruppe</th><th>Antigene</th><th>Antikörper</th><th>Genotyp</th></tr><tr><td>A</td><td>A</td><td>Anti-B</td><td>AA, A0</td></tr><tr><td>B</td><td>B</td><td>Anti-A</td><td>BB, B0</td></tr><tr><td>AB</td><td>A und B</td><td>keine</td><td>AB</td></tr><tr><td>0</td><td>keine</td><td>Anti-A, Anti-B</td><td>00</td></tr></table><p><strong>Spender → Empfänger (rote Blutkörperchen):</strong> 0 → alle · A → A, AB · B → B, AB · AB → AB. Unverträglich: Agglutination (Verklumpung).</p><p><strong>Kreuzung A0 × B0:</strong> AB, A0, B0, 00 → je 25 % AB, A, B, 0. <strong>AB × AB:</strong> nie 0. <strong>Rückschluss:</strong> Kind mit 0 → beide Eltern tragen ein 0-Allel.</p>' },
    { titel: 'Formen äußerer Atmung', extra: '<table><tr><th>Form</th><th>Tiere</th><th>Organ</th></tr><tr><td>Lungenatmung</td><td>Säugetiere, Vögel, Reptilien, erwachsene Amphibien</td><td>Lunge</td></tr><tr><td>Kiemenatmung</td><td>Fische, Kaulquappen</td><td>Kiemen (Kiemenblättchen), im Wasser</td></tr><tr><td>Hautatmung</td><td>Regenwurm, Frosch (zusätzlich)</td><td>feuchte, dünne Haut</td></tr><tr><td>Tracheenatmung</td><td>Insekten</td><td>Stigmen → Tracheen → Zellen</td></tr></table><p>Prinzip immer: große Oberfläche, dünne, feuchte Wand, Diffusion. Äußere Atmung = Gasaustausch mit der Umgebung, innere Atmung = Zellatmung. Mensch: Brustatmung (Zwischenrippenmuskeln) und Bauchatmung (Zwerchfell).</p>' }
  ];

  /** Abschnitte für die Kitteltasche: Merksätze (ohne Plus) der Themen der Lehrerin und ihrer Grundlagen, dazu die festen Übersichten. */
  function abschnitte(faelle) {
    var rang = { kern: 0, grundlage: 1 };
    var out = faelle.filter(function (f) { return W.logic.stufe(f.id) in rang; }).sort(function (a, b) {
      return rang[W.logic.stufe(a.id)] - rang[W.logic.stufe(b.id)] || a.box - b.box;
    }).map(function (f) {
      return { titel: 'Box ' + f.box + ' · ' + f.titel, merk: f.karten.filter(function (k) { return k.merk && !k.plus; }).map(function (k) { return k.merk; }) };
    }).filter(function (a) { return a.merk.length; });
    var merkText = out.map(function (a) { return a.merk.join(' '); }).join(' ');
    // Übersichten, die schon als Merksatz dastehen, nicht doppelt drucken.
    var extras = EXTRA.filter(function (e) { return !(e.nurWennFehlt && /C₆H₁₂O₆|C<sub>6<\/sub>/.test(merkText)); });
    return out.concat(extras.map(function (e) { return { titel: e.titel, merk: [], extra: e.extra }; }));
  }

  W.kitteltasche = { abschnitte: abschnitte };
})();
