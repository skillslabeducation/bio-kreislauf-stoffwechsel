/* Box 9: Neugeborenenstation, zwei Babys vertauscht? – Vererbung der Blutgruppen (Blatt Teil 2, Aufgabe 4) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'vererbung', box: 9, teil: 2, blatt: 'T2-4',
    titel: 'Vererbung der Blutgruppen',
    patient: 'Neugeborenenstation', symptom: 'Wurden zwei Babys vertauscht?',
    aufnahme: {
      text: '<p>Heute Nacht lagen zwei Neugeborene kurz nebeneinander im Wärmebett, die Namensbänder waren noch nicht angelegt. Jetzt ist unklar, welches Baby zu welcher Familie gehört. Beide Babys sind gesund.</p><p>Das Labor hat die Blutgruppen bestimmt: <strong>Baby 1</strong> hat Blutgruppe 0, <strong>Baby 2</strong> Blutgruppe AB. <strong>Familie Krüger:</strong> Mutter und Vater haben beide Blutgruppe AB. <strong>Familie Yilmaz:</strong> Die Mutter hat Blutgruppe A, der Vater Blutgruppe B.</p>',
      werte: { puls: 130, af: 40, spo2: 97 },
      oberaerztin: 'Box 9. Zwei Babys, zwei Familien, keine Namensbänder. Die Blutgruppen liegen vor, der Rest ist Genetik.',
      leitfrage: 'Welche Blutgruppen können die Kinder der beiden Familien haben, und welches Baby gehört deshalb zu wem?'
    },
    karten: [
      {
        titel: 'Gen, Allel, Genotyp, Phänotyp',
        text: '<p>Die Blutgruppe wird vererbt. Die Information dafür liegt auf einem <strong>Gen</strong>, einem Abschnitt der Erbinformation. Von diesem Gen gibt es drei Varianten, die <strong>Allele</strong> A, B und 0.</p><p>Jeder Mensch besitzt das Gen zweimal: Ein Allel stammt von der Mutter, eines vom Vater. Die beiden Allele zusammen sind der <strong>Genotyp</strong>, zum Beispiel A0. Die Blutgruppe, die man im Labor misst, ist der <strong>Phänotyp</strong>, hier Blutgruppe A.</p><p>In jede Eizelle und jede Spermienzelle gelangt nur eines der beiden Allele, und zwar per Zufall.</p>',
        merk: 'Gen: Erbanlage für ein Merkmal. Allel: Variante des Gens. Genotyp: die beiden Allele. Phänotyp: das ausgeprägte Merkmal.'
      },
      {
        titel: 'Dominant, rezessiv, kodominant',
        text: '<p>A und B sind gegenüber 0 <strong>dominant</strong>: Sie setzen sich durch. Wer A0 hat, hat Blutgruppe A. Das Allel 0 ist <strong>rezessiv</strong>: Es zeigt sich nur, wenn es doppelt vorliegt, also beim Genotyp 00.</p><p>A und B sind untereinander <strong>kodominant</strong>: Keines überdeckt das andere, beide zeigen sich. Wer die Allele A und B hat, trägt beide Antigene und hat Blutgruppe AB.</p>',
        merk: 'A und B sind gegenüber 0 dominant und untereinander kodominant.',
        achtung: '<strong>Achtung, Falle</strong>Blutgruppe 0 heißt nicht „kein Allel“. Ein Mensch mit Blutgruppe 0 hat zwei 0-Allele, den Genotyp 00.'
      },
      {
        titel: 'Vom Phänotyp zum Genotyp',
        text: '<div class="tab-wrap"><table class="tab"><thead><tr><th>Blutgruppe (Phänotyp)</th><th>Mögliche Genotypen</th></tr></thead><tbody><tr><th scope="row">A</th><td>AA oder A0</td></tr><tr><th scope="row">B</th><td>BB oder B0</td></tr><tr><th scope="row">AB</th><td>AB</td></tr><tr><th scope="row">0</th><td>00</td></tr></tbody></table></div><p>Bei Blutgruppe A und B kann man vom Phänotyp nicht sicher auf den Genotyp schließen, denn ein 0-Allel wird überdeckt. Hinweise geben die Eltern oder die Kinder: Hat ein Mensch mit Blutgruppe A ein Kind mit Blutgruppe 0, muss er A0 sein.</p>',
        merk: 'A = AA oder A0. B = BB oder B0. AB = AB. 0 = 00.'
      },
      {
        titel: 'Das Kreuzungsschema',
        text: '<p>Im Kreuzungsschema stehen die Allele der Mutter an der einen Seite, die des Vaters an der anderen. In jedes Feld kommt ein Allel von jeder Seite. Jedes der vier Felder ist gleich wahrscheinlich, also 25 %.</p><p>Beispiel: Mutter A0, Vater B0. Die Felder sind AB, A0, B0 und 00. Ein Kind hat also mit je 25 % Wahrscheinlichkeit die Blutgruppe AB, A, B oder 0.</p>',
        merk: 'Jedes Feld im Kreuzungsschema steht für 25 %. Erst die Genotypen eintragen, dann in Blutgruppen übersetzen.',
        achtung: '<strong>Achtung, Falle</strong>25 % heißt nicht, dass von vier Kindern genau eines Blutgruppe 0 hat. Die Wahrscheinlichkeit gilt für jedes Kind neu.'
      },
      {
        titel: 'AB-Eltern und Blutgruppe 0',
        text: '<p>Mutter AB, Vater AB. Jeder gibt entweder das Allel A oder das Allel B weiter. Ein 0-Allel hat keiner von beiden.</p><p>Mögliche Kinder: AA, AB, AB, BB. Das sind Blutgruppe A (25 %), AB (50 %) und B (25 %). Blutgruppe 0 bräuchte den Genotyp 00 und ist deshalb unmöglich.</p>',
        merk: 'Ein Kind kann nur Allele bekommen, die seine Eltern besitzen.'
      },
      {
        titel: 'Reinerbig und mischerbig',
        plus: true,
        text: '<p>Sind beide Allele gleich (AA, BB, 00), heißt der Genotyp <strong>homozygot</strong> oder reinerbig. Sind sie verschieden (A0, B0, AB), heißt er <strong>heterozygot</strong> oder mischerbig.</p><p>In manchen Büchern sind die Allele anders geschrieben: I<sup>A</sup> für A, I<sup>B</sup> für B und i für 0. Der Kleinbuchstabe zeigt, dass 0 rezessiv ist. I<sup>A</sup>i bedeutet also dasselbe wie A0.</p>'
      },
      {
        titel: 'Vererbung des Rhesusfaktors',
        plus: true,
        text: '<p>Auch der Rhesusfaktor wird vererbt. Das Allel für Rh+ (oft D geschrieben) ist <strong>dominant</strong>, das Allel für Rh− (d) ist <strong>rezessiv</strong>. Rh+ sind also DD und Dd, Rh− ist nur dd.</p><p>Zwei Rh+-Eltern können deshalb ein Rh−-Kind bekommen, wenn beide Dd sind, mit 25 % Wahrscheinlichkeit. Zwei Rh−-Eltern (dd × dd) bekommen dagegen immer Rh−-Kinder.</p>',
        merk: 'Rh+ ist dominant über Rh−.'
      }
    ],
    ueben: [
      {
        id: 'vererbung-u1', typ: 'tabelle', frage: 'Die Blutgruppen werden durch die drei Allele A, B und 0 bestimmt. A und B sind gegenüber 0 dominant und untereinander kodominant. Ergänze die möglichen Genotypen.',
        spalten: ['Blutgruppe (Phänotyp)', 'Mögliche Genotypen'],
        zeilen: [
          { kopf: 'A', zellen: [{ optionen: ['00', 'A0 oder 00', 'AA oder A0', 'AB', 'B0 oder 00', 'BB oder B0', 'nur AA'], richtig: 2 }] },
          { kopf: 'B', zellen: [{ optionen: ['00', 'A0 oder 00', 'AA oder A0', 'AB', 'B0 oder 00', 'BB oder B0', 'nur AA'], richtig: 5 }] },
          { kopf: 'AB', zellen: [{ optionen: ['00', 'A0 oder 00', 'AA oder A0', 'AB', 'B0 oder 00', 'BB oder B0', 'nur AA'], richtig: 3 }] },
          { kopf: '0', zellen: [{ optionen: ['00', 'A0 oder 00', 'AA oder A0', 'AB', 'B0 oder 00', 'BB oder B0', 'nur AA'], richtig: 0 }] }
        ],
        erkl: 'A und B überdecken 0. Deshalb gibt es bei A und B zwei mögliche Genotypen, bei AB und 0 nur einen.'
      },
      { id: 'vererbung-u2', typ: 'kreuzung', frage: 'Mutter: Genotyp A0. Vater: Genotyp B0. Vervollständige das Kreuzungsschema.', mutter: 'A0', vater: 'B0', mitWahrscheinlichkeit: false },
      { id: 'vererbung-u3', typ: 'kreuzung', frage: 'Mutter A0, Vater B0: Mit welcher Wahrscheinlichkeit haben die Kinder jeweils die Blutgruppen A, B, AB und 0? Fülle zuerst das Kreuzungsschema aus.', mutter: 'A0', vater: 'B0', mitWahrscheinlichkeit: true, erkl: 'Vier Felder, vier verschiedene Blutgruppen: je 25 %.' },
      { id: 'vererbung-u4', typ: 'kreuzung', frage: 'Beide Eltern haben Blutgruppe AB. Vervollständige das Kreuzungsschema und gib die Wahrscheinlichkeiten an.', mutter: 'AB', vater: 'AB', mitWahrscheinlichkeit: true, erkl: 'AA, AB, AB, BB: Blutgruppe A 25 %, AB 50 %, B 25 %, 0 gar nicht.' },
      { id: 'vererbung-u5', typ: 'behauptung', aussage: 'Zwei Eltern mit Blutgruppe AB können ein Kind mit Blutgruppe 0 bekommen, weil 0 rezessiv ist und eine Generation überspringen kann.', stimmt: false, gruende: ['Stimmt, rezessive Merkmale können bei den Eltern verborgen sein.', 'Stimmt nicht: Der Genotyp AB enthält kein 0-Allel. Jedes Kind bekommt von jedem Elternteil A oder B, also AA, AB oder BB.', 'Stimmt nicht, weil Kinder immer die Blutgruppe der Mutter haben.'], richtig: 1 },
      { id: 'vererbung-u6', typ: 'zuordnen', frage: 'Ordne jedem Begriff die passende Erklärung zu.', paare: [['Gen', 'Abschnitt der Erbinformation für ein Merkmal'], ['Allel', 'Variante eines Gens, zum Beispiel A, B oder 0'], ['Genotyp', 'die beiden Allele eines Menschen, zum Beispiel A0'], ['Phänotyp', 'ausgeprägtes Merkmal, zum Beispiel Blutgruppe A']] },
      { id: 'vererbung-u7', typ: 'zuordnen', frage: 'Ordne jedem Begriff die passende Erklärung zu.', paare: [['dominant', 'setzt sich gegenüber einem anderen Allel durch'], ['rezessiv', 'wird überdeckt und zeigt sich nur, wenn es doppelt vorliegt'], ['kodominant', 'beide Allele zeigen sich gleichzeitig']] },
      { id: 'vererbung-u8', typ: 'wahl', frage: 'Durch welche Allele wird die Blutgruppe im AB0-System bestimmt?', optionen: ['A, B und 0', 'A und B', 'A, B, AB und 0', 'nur A und 0'], richtig: 0, erkl: 'Es gibt drei Allele. AB ist kein Allel, sondern ein Genotyp und eine Blutgruppe.' },
      { id: 'vererbung-u9', typ: 'luecke', text: 'Das Allel A ist gegenüber 0 {dominant|rezessiv}. Ein Mensch mit dem Genotyp A0 hat deshalb Blutgruppe {A|0}. Die Allele A und B sind untereinander {kodominant|rezessiv}: Beim Genotyp AB {zeigen sich beide|setzt sich nur A durch}.' },
      { id: 'vererbung-u10', typ: 'eingabe', frage: 'Welchen Genotyp hat ein Mensch mit Blutgruppe 0? Schreibe ihn wie auf dem Blatt.', akzeptiert: ['00', 'OO', '0 0'] },
      { id: 'vererbung-u11', typ: 'wahl', frage: 'Eine Mutter hat Blutgruppe A, ihr Kind hat Blutgruppe 0. Welchen Genotyp hat die Mutter?', optionen: ['A0', 'AA', 'AB', '00'], richtig: 0, erkl: 'Das Kind ist 00 und hat von jedem Elternteil ein 0-Allel bekommen. Die Mutter muss also A0 sein.' },
      { id: 'vererbung-u12', typ: 'mehrfach', frage: 'Ein Kind hat Blutgruppe AB. Welche Eltern (Blutgruppen) kommen infrage?', optionen: ['A und B', 'AB und A', 'AB und 0', '0 und 0', 'A und A'], richtig: [0, 1], erkl: 'Das Kind braucht ein A von einem Elternteil und ein B vom anderen. Bei AB und 0 gibt der eine nur 0 weiter.' },
      { id: 'vererbung-u13', typ: 'kreuzung', frage: 'Mutter AA, Vater B0. Vervollständige das Kreuzungsschema und gib die Wahrscheinlichkeiten an.', mutter: 'AA', vater: 'B0', mitWahrscheinlichkeit: true },
      { id: 'vererbung-u14', typ: 'kreuzung', frage: 'Mutter A0, Vater A0. Vervollständige das Kreuzungsschema und gib die Wahrscheinlichkeiten an.', mutter: 'A0', vater: 'A0', mitWahrscheinlichkeit: true, erkl: 'AA, A0, A0, 00: Drei von vier Feldern ergeben Blutgruppe A (75 %), eines Blutgruppe 0 (25 %).' },
      { id: 'vererbung-u15', typ: 'kreuzung', frage: 'Mutter AB, Vater 00. Vervollständige das Kreuzungsschema und gib die Wahrscheinlichkeiten an.', mutter: 'AB', vater: '00', mitWahrscheinlichkeit: true, erkl: 'A0, A0, B0, B0: Kein Kind hat die Blutgruppe eines Elternteils.' },
      { id: 'vererbung-u16', typ: 'kreuzung', frage: 'Mutter B0, Vater AB. Vervollständige das Kreuzungsschema und gib die Wahrscheinlichkeiten an.', mutter: 'B0', vater: 'AB', mitWahrscheinlichkeit: true },
      { id: 'vererbung-u17', typ: 'wahl', frage: 'Mutter A0, Vater B0. Ihr erstes Kind hat Blutgruppe 0. Wie wahrscheinlich ist es, dass auch das zweite Kind Blutgruppe 0 hat?', optionen: ['25 %', '0 %', '50 %', '100 %'], richtig: 0, erkl: 'Für jedes Kind werden die Allele neu verteilt. Das erste Kind ändert nichts an den 25 %.' },
      { id: 'vererbung-u18', typ: 'mehrfach', plus: true, frage: 'Welche Genotypen sind heterozygot (mischerbig)?', optionen: ['AA', 'A0', 'BB', 'B0', 'AB', '00'], richtig: [1, 3, 4] },
      { id: 'vererbung-u19', typ: 'wahl', plus: true, frage: 'In einem Buch steht der Genotyp I<sup>A</sup>i. Welcher Genotyp in der Schreibweise des Blatts ist gemeint?', optionen: ['A0', 'AA', 'AB', '00'], richtig: 0, erkl: 'I<sup>A</sup> steht für A, das kleine i für das rezessive Allel 0.' },
      { id: 'vererbung-u20', typ: 'wahl', plus: true, frage: 'Beide Eltern sind Rh+, ihr Kind ist Rh−. Wie ist das möglich?', optionen: ['Beide Eltern sind mischerbig (Dd) und haben das rezessive Allel d weitergegeben.', 'Rh− ist dominant und hat sich durchgesetzt.', 'Das Kind wird erst nach der Geburt Rh+.', 'Das ist unmöglich, das Kind muss vertauscht sein.'], richtig: 0 },
      { id: 'vererbung-u21', typ: 'wahl', plus: true, frage: 'Beide Eltern sind Rh−. Welchen Rhesusfaktor können ihre Kinder haben?', optionen: ['nur Rh−', 'nur Rh+', 'Rh+ oder Rh−, je 50 %', 'Rh+ mit 25 %'], richtig: 0, erkl: 'Rh− ist rezessiv, beide Eltern sind dd. Sie können nur d weitergeben.' }
    ],
    erklaeren: [
      {
        id: 'vererbung-e1',
        frage: 'Können zwei Eltern mit Blutgruppe AB ein Kind mit Blutgruppe 0 bekommen? Begründe.',
        tipp: 'Welchen Genotyp haben die Eltern, welche Allele können sie weitergeben, welchen Genotyp bräuchte das Kind?',
        begriffe: [
          { name: 'Genotyp', muster: ['genotyp'] }, { name: 'Allel', muster: ['allel'] },
          { name: 'Genotyp 00', muster: ['00'] }, { name: 'Kreuzungsschema', muster: ['kreuzung'] }
        ],
        punkte: [
          { text: 'Nein. Blutgruppe AB hat nur den Genotyp AB, die Eltern besitzen kein 0-Allel und können keines weitergeben.', p: 1 },
          { text: 'Für Blutgruppe 0 bräuchte das Kind den Genotyp 00. Möglich sind nur AA, AB und BB, also die Blutgruppen A, AB und B.', p: 1 }
        ],
        muster: 'Nein, das ist nicht möglich. Blutgruppe AB hat immer den Genotyp AB. Beide Eltern besitzen also nur die Allele A und B, aber kein 0-Allel. Jedes Kind bekommt von jedem Elternteil ein Allel. Das Kreuzungsschema ergibt deshalb nur AA, AB, AB und BB, also die Blutgruppen A, AB und B. Für Blutgruppe 0 bräuchte das Kind den Genotyp 00, also von jedem Elternteil ein 0-Allel.'
      },
      {
        id: 'vererbung-e2',
        frage: 'Erkläre am Beispiel der Blutgruppen die Begriffe dominant, rezessiv und kodominant.',
        tipp: 'Zu jedem Begriff ein Satz zur Bedeutung und ein Genotyp mit seiner Blutgruppe.',
        begriffe: [
          { name: 'dominant', muster: ['dominant'] }, { name: 'rezessiv', muster: ['rezessiv'] },
          { name: 'kodominant', muster: ['kodominant'] }, { name: 'Allel', muster: ['allel'] },
          { name: 'Genotyp', muster: ['genotyp'] }
        ],
        punkte: [
          { text: 'Dominant: Das Allel setzt sich durch. A ist dominant über 0, deshalb hat A0 die Blutgruppe A.', p: 1 },
          { text: 'Rezessiv: Das Allel wird überdeckt und zeigt sich nur, wenn es doppelt vorliegt. Blutgruppe 0 nur beim Genotyp 00.', p: 1 },
          { text: 'Kodominant: Beide Allele zeigen sich gleichzeitig. A und B ergeben zusammen Blutgruppe AB.', p: 1 }
        ],
        muster: 'Ein dominantes Allel setzt sich gegenüber einem anderen durch. Das Allel A ist dominant über 0, deshalb hat ein Mensch mit dem Genotyp A0 die Blutgruppe A. Ein rezessives Allel wird überdeckt und zeigt sich nur, wenn es doppelt vorliegt. Das Allel 0 ist rezessiv, Blutgruppe 0 gibt es nur beim Genotyp 00. Kodominant bedeutet, dass sich zwei Allele gleichzeitig zeigen. A und B sind kodominant, beim Genotyp AB entsteht deshalb Blutgruppe AB.'
      },
      {
        id: 'vererbung-e3',
        frage: 'Erkläre den Unterschied zwischen Genotyp und Phänotyp. Begründe, warum man bei einem Menschen mit Blutgruppe A den Genotyp nicht sicher kennt.',
        tipp: 'Erst die beiden Begriffe, dann die zwei möglichen Genotypen für Blutgruppe A.',
        begriffe: [
          { name: 'Genotyp', muster: ['genotyp'] }, { name: 'Phänotyp', muster: ['phaenotyp'] },
          { name: 'Allel', muster: ['allel'] }, { name: 'dominant', muster: ['dominant', 'ueberdeck'] }
        ],
        punkte: [
          { text: 'Der Genotyp ist die Kombination der beiden Allele (z. B. A0), der Phänotyp das ausgeprägte Merkmal, hier die Blutgruppe (z. B. A).', p: 1 },
          { text: 'Blutgruppe A kann AA oder A0 sein, weil A dominant über 0 ist und ein 0-Allel überdeckt.', p: 1 }
        ],
        muster: 'Der Genotyp beschreibt, welche beiden Allele ein Mensch für ein Merkmal besitzt, zum Beispiel A0. Der Phänotyp ist das Merkmal, das sich tatsächlich ausprägt, hier die Blutgruppe A. Ein Mensch mit Blutgruppe A kann den Genotyp AA oder A0 haben. Weil A dominant über 0 ist, überdeckt es ein 0-Allel. Man sieht der Blutgruppe deshalb nicht an, ob ein 0-Allel vorhanden ist.'
      },
      {
        id: 'vererbung-e4',
        frage: 'Baby 1 hat Blutgruppe 0, Baby 2 Blutgruppe AB. Bei Familie Krüger haben beide Eltern Blutgruppe AB, bei Familie Yilmaz hat die Mutter Blutgruppe A und der Vater Blutgruppe B. Begründe, welches Baby zu welcher Familie gehört.',
        tipp: 'Fang mit dem Baby an, das nur zu einer Familie passen kann.',
        begriffe: [
          { name: 'Allel', muster: ['allel'] }, { name: 'Genotyp', muster: ['genotyp'] },
          { name: 'A0 und B0', muster: ['a0 b0'] },
          { name: 'ausgeschlossen', muster: ['ausgeschlossen', 'ausschliess', 'unmoeglich', 'nicht moeglich'] }
        ],
        punkte: [
          { text: 'Familie Krüger (AB × AB) hat kein 0-Allel, ihre Kinder können nur A, AB oder B haben. Baby 1 (0) ist bei ihnen ausgeschlossen.', p: 1 },
          { text: 'Familie Yilmaz: Sind Mutter A0 und Vater B0, kann ein Kind den Genotyp 00 haben (25 %). Baby 1 gehört zu Familie Yilmaz.', p: 1 },
          { text: 'Baby 2 (AB) bleibt damit für Familie Krüger, bei der AB möglich ist (AB × AB: 50 %). Allein hätte Baby 2 nichts entschieden, weil AB auch bei Familie Yilmaz möglich ist.', p: 1 }
        ],
        muster: 'Bei Familie Krüger haben beide Eltern den Genotyp AB. Sie besitzen kein 0-Allel und können deshalb nur Kinder mit AA, AB oder BB bekommen. Baby 1 mit Blutgruppe 0 ist bei ihnen ausgeschlossen. Bei Familie Yilmaz kann die Mutter den Genotyp A0 und der Vater den Genotyp B0 haben. Dann bekommt ein Kind mit 25 % Wahrscheinlichkeit von beiden ein 0-Allel und hat Blutgruppe 0. Baby 1 gehört also zu Familie Yilmaz. Baby 2 mit Blutgruppe AB bleibt damit für Familie Krüger, bei der AB mit 50 % möglich ist. Allein hätte Baby 2 nichts entschieden, denn AB ist auch bei Familie Yilmaz möglich.'
      }
    ],
    abschluss: [
      { id: 'vererbung-a1', typ: 'kreuzung', frage: 'Familie Krüger: Beide Eltern haben Blutgruppe AB. Vervollständige das Kreuzungsschema und gib die Wahrscheinlichkeiten an.', mutter: 'AB', vater: 'AB', mitWahrscheinlichkeit: true },
      { id: 'vererbung-a2', typ: 'wahl', frage: 'Kann Baby 1 mit Blutgruppe 0 das Kind von Familie Krüger sein?', optionen: ['Nein. Beide Eltern haben den Genotyp AB und kein 0-Allel, ein Kind mit 00 ist unmöglich.', 'Ja, mit 25 % Wahrscheinlichkeit.', 'Ja, weil 0 rezessiv ist und eine Generation überspringen kann.', 'Nein, weil Babys immer die Blutgruppe der Mutter haben.'], richtig: 0 },
      { id: 'vererbung-a3', typ: 'wahl', frage: 'Familie Yilmaz: Mutter A, Vater B. Welche Genotypen müssen die Eltern haben, damit Baby 1 (Blutgruppe 0) ihr Kind sein kann?', optionen: ['Mutter A0 und Vater B0', 'Mutter AA und Vater BB', 'Mutter AA und Vater B0', 'Mutter A0 und Vater BB'], richtig: 0, erkl: 'Baby 1 hat den Genotyp 00. Es braucht von beiden Eltern ein 0-Allel.' },
      { id: 'vererbung-a4', typ: 'wahl', frage: 'Hätte Baby 2 mit Blutgruppe AB allein die Frage geklärt?', optionen: ['Nein. AB ist bei beiden Familien möglich: bei Krüger (AB × AB) und bei Yilmaz (A × B).', 'Ja, AB ist nur bei Familie Krüger möglich.', 'Ja, AB ist nur bei Familie Yilmaz möglich.', 'Nein, weil die Blutgruppe AB nicht vererbt wird.'], richtig: 0, erkl: 'Entscheidend ist Baby 1. Erst der Ausschluss bei Familie Krüger klärt die Zuordnung.' },
      { id: 'vererbung-a5', typ: 'zuordnen', frage: 'Ordne die Babys den Familien zu.', paare: [['Baby 1 (Blutgruppe 0)', 'Familie Yilmaz (Mutter A, Vater B)'], ['Baby 2 (Blutgruppe AB)', 'Familie Krüger (beide AB)']] }
    ],
    epikrise: '<p><strong>Ergebnis:</strong> Baby 1 (Blutgruppe 0) gehört zu Familie Yilmaz, Baby 2 (Blutgruppe AB) zu Familie Krüger. Ein zusätzlicher Gentest hat die Zuordnung bestätigt. Beide Babys sind gesund und bei ihren Eltern. Die Station legt die Namensbänder jetzt direkt nach der Geburt an.</p><p><strong>Die Biologie dahinter:</strong> Jedes Kind bekommt von jedem Elternteil ein Allel. AB-Eltern haben kein 0-Allel, ihre Kinder können nur AA, AB oder BB haben. Eltern mit A0 und B0 können dagegen Kinder aller vier Blutgruppen bekommen, je mit 25 %. Blutgruppen können eine Zuordnung ausschließen, aber nicht beweisen.</p>'
  });
})();
