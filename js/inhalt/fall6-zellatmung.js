/* Box 6: Schüler, 15, nach dem 1000-m-Lauf – Zellatmung, Atmung und Kreislauf bei Belastung (Blatt Teil 1, Aufgabe 7 und Teil 2, Aufgabe 6) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'zellatmung', box: 6, teil: 2, blatt: 'T1-7, T2-6',
    titel: 'Zellatmung und Sport',
    patient: 'Schüler, 15, nach dem 1000-m-Lauf', symptom: 'Herzrasen und schnelle Atmung',
    aufnahme: {
      text: '<p>Im Sportunterricht ist er 1000 Meter auf Zeit gelaufen. Danach spürt er sein Herz bis zum Hals schlagen und atmet schnell und tief. Die Sportlehrerin hat ihn vorsichtshalber vom Sportplatz nebenan herübergebracht.</p><p>Erste Untersuchung: Er spricht in ganzen Sätzen, das Gesicht ist rot und warm. Kein Pfeifen beim Atmen, kein Schmerz in der Brust, keine Vorerkrankungen.</p>',
      werte: { puls: 168, af: 36, spo2: 97 },
      oberaerztin: 'Box 6. Hoher Puls, schnelle Atmung, rotes Gesicht. Bevor du behandelst, klär, ob es überhaupt etwas zu behandeln gibt.',
      leitfrage: 'Warum schlagen Herz und Atmung nach dem Lauf so schnell, und was passiert dabei in seinen Muskelzellen?'
    },
    karten: [
      {
        titel: 'Zellatmung: Energie aus Glucose',
        abb: 'zellatmung', abbOpts: { beschriftet: true },
        text: '<p>Körperzellen brauchen ständig Energie, eine Muskelzelle zum Beispiel, um sich zusammenzuziehen. Diese Energie gewinnt die Zelle durch die <strong>Zellatmung</strong>. Dabei wird <strong>Glucose</strong> (Traubenzucker) mit <strong>Sauerstoff</strong> abgebaut. Es entstehen <strong>Kohlenstoffdioxid</strong> und <strong>Wasser</strong>, und <strong>Energie</strong> wird frei.</p><p>Einen Teil der Energie nutzt die Zelle für ihre Arbeit, der Rest wird als <strong>Wärme</strong> frei. Deshalb wird dir beim Sport warm.</p>',
        merk: 'Wortgleichung der Zellatmung: Glucose + Sauerstoff → Kohlenstoffdioxid + Wasser (+ Energie).',
        achtung: '<strong>Achtung, Falle</strong>Zellatmung ist nicht dasselbe wie Einatmen. Geatmet wird mit der Lunge, die Zellatmung läuft in den Körperzellen ab.'
      },
      {
        titel: 'Verdauung liefert die Bausteine',
        text: '<p>Brötchen, Käse, Butter: Die Nährstoffe in der Nahrung bestehen aus großen Teilchen, die nicht ins Blut gelangen können. Bei der <strong>Verdauung</strong> spalten <strong>Enzyme</strong> sie in kleine <strong>Bausteine</strong>:</p><ul><li><strong>Stärke</strong> (Kohlenhydrate) → <strong>Glucose</strong> (Traubenzucker)</li><li><strong>Eiweiße</strong> → <strong>Aminosäuren</strong></li><li><strong>Fette</strong> → <strong>Glycerin</strong> und <strong>Fettsäuren</strong></li></ul><p>Aufgenommen werden die Bausteine im <strong>Dünndarm</strong>. Seine Wand trägt Millionen fingerförmige <strong>Darmzotten</strong>, die die Oberfläche stark vergrößern. In jeder Darmzotte liegt ein Netz aus Blutkapillaren. Glucose und Aminosäuren gelangen hier direkt ins <strong>Blut</strong>, die Fettbausteine zuerst in die Lymphgefäße und von dort ebenfalls ins Blut.</p><p>Das Blut bringt die Glucose zu allen Körperzellen. Dort wird sie in den <strong>Mitochondrien</strong> mit Sauerstoff „verbrannt“, das ist die <strong>Zellatmung</strong>. Eine Flamme gibt es dabei nicht, aber wie beim Verbrennen entstehen Kohlenstoffdioxid und Wasser, und Energie wird frei.</p>',
        merk: 'Verdauung: Stärke → Glucose, Eiweiße → Aminosäuren, Fette → Glycerin und Fettsäuren. Im Dünndarm gelangen die Bausteine über die Darmzotten ins Blut, das Blut bringt die Glucose zu den Zellen.',
        achtung: '<strong>Achtung, Falle</strong>Bei der Verdauung wird die Nahrung nur zerlegt. Die Energie, mit der die Zelle arbeitet, wird erst bei der Zellatmung in den Mitochondrien frei.'
      },
      {
        titel: 'Der große Zusammenhang',
        abb: 'zellatmung',
        text: '<p>Die Zellatmung braucht zwei Stoffe, die der Körper von außen holt. Vier Vorgänge arbeiten dafür wie die Glieder einer Kette zusammen, danach schließt sich der Kreis:</p><ol><li><strong>Atmung:</strong> In den Lungenbläschen gelangt <strong>Sauerstoff</strong> (Stoff A) aus der Lunge ins Blut.</li><li><strong>Verdauung:</strong> Im Dünndarm gelangt <strong>Glucose</strong> (Stoff B) ins Blut.</li><li><strong>Blutkreislauf:</strong> Das Blut transportiert beide Stoffe zu den Körperzellen.</li><li><strong>Zellatmung:</strong> In den Mitochondrien wird Glucose mit Sauerstoff abgebaut. Energie wird frei, dabei entstehen <strong>Kohlenstoffdioxid</strong> (Stoff C) und <strong>Wasser</strong> (Stoff D).</li></ol><p><strong>Der Kreis schließt sich:</strong> Das Blut bringt das Kohlenstoffdioxid zur Lunge, dort wird es ausgeatmet. Das Wasser nutzt der Körper weiter oder scheidet es aus.</p>',
        merk: 'Atmung (Sauerstoff, Stoff A) und Verdauung (Glucose, Stoff B) liefern ins Blut. Der Blutkreislauf bringt beides zu den Zellen. Die Zellatmung setzt Energie frei, dabei entstehen Kohlenstoffdioxid (C) und Wasser (D). Das Kohlenstoffdioxid wird zur Lunge gebracht und ausgeatmet.',
        achtung: '<strong>Achtung, Falle</strong>Das Kohlenstoffdioxid in der Ausatemluft entsteht nicht in der Lunge, sondern bei der Zellatmung in den Körperzellen. Die Lunge gibt es nur ab.'
      },
      {
        titel: 'Die Mitochondrien',
        text: '<p>Der größte Teil der Zellatmung läuft in den <strong>Mitochondrien</strong> ab. Das sind winzige Zellorganellen, die man auch die <strong>Kraftwerke der Zelle</strong> nennt. Weil dabei Sauerstoff verbraucht wird, heißt diese Zellatmung <strong>aerob</strong>, das bedeutet: mit Sauerstoff.</p><p>Zellen, die viel Energie brauchen, haben besonders viele Mitochondrien, zum Beispiel Muskelzellen und die Zellen des Herzmuskels.</p>',
        merk: 'Die aerobe Zellatmung findet zum größten Teil in den Mitochondrien statt.',
        achtung: '<strong>Achtung, Falle</strong>Der Zellkern steuert die Zelle. Energie gewinnt sie aber in den Mitochondrien.'
      },
      {
        titel: 'Die Gleichung mit Summenformeln',
        text: '<p>Mit Summenformeln sieht die Zellatmung so aus:</p><p><strong>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O (+ Energie)</strong></p><p>Die kleinen tiefgestellten Zahlen gehören zur Formel und werden nie verändert. Die großen Zahlen davor heißen <strong>Koeffizienten</strong>. Sie geben an, wie viele Teilchen reagieren.</p><p>Links und rechts stehen gleich viele Atome: 6 C-Atome, 12 H-Atome und 18 O-Atome (links 6 + 6 · 2, rechts 6 · 2 + 6).</p>',
        merk: 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O (+ Energie)',
        achtung: '<strong>Achtung, Falle</strong>Sauerstoff kommt als O<sub>2</sub> vor, nicht als einzelnes O. Energie ist kein Stoff, deshalb steht sie ohne Formel in Klammern.'
      },
      {
        titel: 'Beim Sport legen Atmung und Herz zu',
        text: '<p>Beim Laufen brauchen die Muskeln viel mehr Energie. Also läuft in den Muskelzellen mehr <strong>Zellatmung</strong>. Dafür wird mehr <strong>Sauerstoff</strong> gebraucht, und es entsteht mehr <strong>Kohlenstoffdioxid</strong>, das abgeatmet werden muss.</p><p>Deshalb steigt die <strong>Atemfrequenz</strong>: Du atmest schneller und tiefer. Gleichzeitig schlägt das <strong>Herz</strong> schneller und pumpt pro Minute mehr Blut durch den Körper. So kommen mehr Sauerstoff und Glucose zu den Muskeln, und mehr Kohlenstoffdioxid wird abtransportiert.</p><p>Der Ruhepuls liegt bei Jugendlichen etwa bei 60 bis 100 Schlägen pro Minute. Beim Laufen steigt er deutlich darüber und sinkt in der Erholung wieder.</p>',
        merk: 'Mehr Muskelarbeit → mehr Zellatmung → mehr Sauerstoffbedarf und mehr Kohlenstoffdioxid → schnellere Atmung und schnellerer Herzschlag.',
        achtung: '<strong>Achtung, Falle</strong>Ein hoher Puls beim Sport ist keine Krankheit, sondern eine normale Anpassung. Nach der Belastung sinkt er wieder.'
      },
      {
        titel: 'Die Pulskurve lesen',
        plus: true,
        abb: 'pulskurve',
        text: '<p>Das Diagramm zeigt den Puls eines Schülers vor, während und nach einem Lauf. In <strong>Ruhe</strong> liegt er bei etwa 75 Schlägen pro Minute. Während des <strong>Laufs</strong> steigt er bis auf etwa 165. In der <strong>Erholung</strong> fällt er erst schnell, dann immer langsamer zurück Richtung Ruhewert.</p><p>Bei Trainierten pumpt das Herz pro Schlag mehr Blut. Ihr Ruhepuls ist niedriger, und nach der Belastung erholen sie sich schneller.</p>',
        merk: 'Trainierte erholen sich schneller: Ihr Puls sinkt nach der Belastung schneller zum Ruhewert.'
      },
      {
        titel: 'Aerob und anaerob',
        plus: true,
        text: '<p><strong>Aerob</strong> heißt: mit Sauerstoff. So gewinnt die Zelle aus Glucose viel Energie.</p><p>Bei einem harten Endspurt kommt nicht genug Sauerstoff in den Muskeln an. Dann gewinnt der Muskel kurzzeitig Energie <strong>anaerob</strong>, also ohne Sauerstoff. Dabei bildet er <strong>Milchsäure</strong> und gewinnt aus derselben Menge Glucose viel weniger Energie. Die Muskeln ermüden schnell.</p>',
        merk: 'Ohne genug Sauerstoff bildet der Muskel kurzzeitig Milchsäure und gewinnt dabei weniger Energie.'
      },
      {
        titel: 'Was das Atmen antreibt',
        plus: true,
        text: '<p>Den Takt der Atmung gibt das <strong>Atemzentrum</strong> im Gehirn vor. Es misst laufend, wie viel <strong>Kohlenstoffdioxid</strong> im Blut ist. Steigt der CO<sub>2</sub>-Gehalt, atmest du schneller und tiefer. Das ist der wichtigste Reiz für schnelleres Atmen, wichtiger als ein Mangel an Sauerstoff.</p><p>Deshalb kannst du die Luft nicht beliebig lange anhalten: Das Kohlenstoffdioxid im Blut steigt, und der Drang zu atmen wird immer stärker.</p>',
        merk: 'Der wichtigste Atemreiz ist der Anstieg von Kohlenstoffdioxid im Blut.'
      }
    ],
    ueben: [
      { id: 'zellatmung-u1', typ: 'beschriften', frage: 'Benenne die Stoffe A, B, C und D. In der Abbildung gilt: Stoff A = 1, B = 2, C = 3, D = 4.', abb: 'zellatmung', strukturen: ['stoff-a', 'stoff-b', 'stoff-c', 'stoff-d'], nummern: { 'stoff-a': 1, 'stoff-b': 2, 'stoff-c': 3, 'stoff-d': 4 } },
      { id: 'zellatmung-u2', typ: 'eingabe', frage: 'Wie heißt Stoff C? Er entsteht in der Körperzelle und wird über die Lunge ausgeatmet.', abb: 'zellatmung', akzeptiert: ['Kohlenstoffdioxid', 'Kohlendioxid', 'CO2'] },
      { id: 'zellatmung-u3', typ: 'eingabe', frage: 'In welchem Zellorganell findet der größte Teil der aeroben Zellatmung statt?', akzeptiert: ['Mitochondrien', 'Mitochondrium', 'Mitochondrion'] },
      { id: 'zellatmung-u4', typ: 'luecke', frage: 'Vervollständige die Wortgleichung der Zellatmung.', text: 'Glucose + {Sauerstoff|Kohlenstoffdioxid|Stickstoff} → {Kohlenstoffdioxid|Sauerstoff|Glucose} + {Wasser|Stärke|Sauerstoff} (+ Energie)' },
      { id: 'zellatmung-u5', typ: 'mehrfach', frage: 'Welche Stoffe entstehen bei der Zellatmung?', optionen: ['Kohlenstoffdioxid', 'Wasser', 'Sauerstoff', 'Glucose'], richtig: [0, 1], erkl: 'Sauerstoff und Glucose werden verbraucht. Es entstehen Kohlenstoffdioxid und Wasser, dazu wird Energie frei.' },
      { id: 'zellatmung-u6', typ: 'luecke', frage: 'Ergänze die Koeffizienten in der Reaktionsgleichung der Zellatmung.', text: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + {6|2|12} O<sub>2</sub> → {6|2|12} CO<sub>2</sub> + {6|2|12} H<sub>2</sub>O (+ Energie)' },
      { id: 'zellatmung-u7', typ: 'luecke', frage: 'Setze die Summenformeln ein.', text: '{C₆H₁₂O₆|C₁₂H₂₂O₁₁|CO₂} + 6 {O₂|O|H₂O} → 6 {CO₂|CO|O₂} + 6 {H₂O|H₂O₂|O₂} (+ Energie)' },
      { id: 'zellatmung-u8', typ: 'zahl', frage: 'Zähle die Sauerstoffatome auf der linken Seite: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub>', antwort: 18, tol: 0, einheit: 'O-Atome', erkl: '6 Atome in der Glucose und 6 · 2 = 12 im Sauerstoff, zusammen 18. Rechts sind es ebenfalls 18: 6 · 2 im CO<sub>2</sub> und 6 · 1 im H<sub>2</sub>O.' },
      { id: 'zellatmung-u9', typ: 'wahl', frage: 'Warum steigt die Atemfrequenz beim Laufen?', optionen: ['Die Muskelzellen betreiben mehr Zellatmung. Sie brauchen mehr Sauerstoff und bilden mehr Kohlenstoffdioxid, das abgeatmet werden muss.', 'Beim Laufen enthält die Luft weniger Sauerstoff.', 'Die Lungenbläschen werden beim Laufen kleiner.', 'Die Muskeln geben beim Laufen Sauerstoff ab, der ausgeatmet werden muss.'], richtig: 0 },
      { id: 'zellatmung-u10', typ: 'wahl', frage: 'Warum schlägt das Herz beim Laufen schneller?', optionen: ['Damit pro Minute mehr Blut mit Sauerstoff und Glucose zu den Muskeln gelangt und mehr Kohlenstoffdioxid abtransportiert wird.', 'Damit das Blut in der Lunge mehr Glucose aufnimmt.', 'Damit die Muskeln weniger Sauerstoff brauchen.', 'Weil beim Laufen weniger Blut im Körper ist.'], richtig: 0, erkl: 'Glucose kommt aus der Verdauung, nicht aus der Lunge. Das Herz sorgt dafür, dass mehr davon pro Minute ankommt.' },
      { id: 'zellatmung-u11', typ: 'luecke', text: 'Beim Laufen brauchen die Muskeln mehr {Energie|Wasser}. Dafür läuft in den Muskelzellen mehr {Zellatmung|Verdauung}. Die Zellen verbrauchen mehr {Sauerstoff|Kohlenstoffdioxid} und bilden mehr {Kohlenstoffdioxid|Glucose}. Deshalb atmet man {schneller|langsamer}, und das Herz schlägt {schneller|langsamer}.' },
      { id: 'zellatmung-u12', typ: 'reihenfolge', frage: 'Bring den Weg des Sauerstoffs von der Lunge bis in die Muskelzelle in die richtige Reihenfolge.', schritte: ['Lungenbläschen', 'Blut in den Lungenkapillaren', 'Herz', 'Arterien des Körperkreislaufs', 'Kapillaren im Muskel', 'Mitochondrien der Muskelzelle'] },
      { id: 'zellatmung-u13', typ: 'zuordnen', frage: 'Ordne jedem Vorgang zu, was er für die Zellatmung leistet.', paare: [['Gasaustausch', 'Sauerstoff gelangt in den Lungenbläschen ins Blut, Kohlenstoffdioxid hinaus'], ['Blutkreislauf', 'transportiert Sauerstoff und Glucose zu den Zellen'], ['Zellatmung', 'baut Glucose mit Sauerstoff ab und setzt Energie frei'], ['Verdauung', 'zerlegt die Nahrung, Glucose gelangt ins Blut']] },
      { id: 'zellatmung-u14', typ: 'behauptung', aussage: 'Ein Puls von 168 direkt nach einem 1000-m-Lauf zeigt, dass das Herz krank ist.', stimmt: false, gruende: ['Bei Belastung steigt der Puls ganz normal stark an, damit mehr Sauerstoff zu den Muskeln kommt. Danach sinkt er wieder.', 'Jeder Puls über 100 ist ein Zeichen für eine Herzkrankheit.', 'Der Puls steigt beim Sport nur, wenn die Lunge krank ist.'], richtig: 0 },
      { id: 'zellatmung-u15', typ: 'behauptung', aussage: 'Zellatmung findet nur in der Lunge statt.', stimmt: false, gruende: ['Zellatmung läuft in den Körperzellen ab, vor allem in den Mitochondrien. In der Lunge findet der Gasaustausch statt.', 'Zellatmung findet nur im Herzen statt, weil es am meisten arbeitet.', 'Zellatmung ist nur ein anderes Wort für Einatmen.'], richtig: 0 },
      { id: 'zellatmung-u16', typ: 'wahl', frage: 'Welcher Ruhepuls ist bei Jugendlichen normal?', optionen: ['etwa 60 bis 100 Schläge pro Minute', 'etwa 20 bis 40 Schläge pro Minute', 'etwa 120 bis 160 Schläge pro Minute', 'etwa 180 bis 200 Schläge pro Minute'], richtig: 0 },
      { id: 'zellatmung-u17', typ: 'zahl', plus: true, frage: 'Lies aus der Pulskurve ab: Um wie viele Schläge pro Minute steigt der Puls vom Ruhewert bis zum Höchstwert ungefähr?', abb: 'pulskurve', antwort: 90, tol: 10, einheit: 'Schläge pro Minute', erkl: 'Ruhe etwa 75, Höchstwert etwa 165. Der Unterschied beträgt etwa 90.' },
      { id: 'zellatmung-u18', typ: 'wahl', plus: true, frage: 'Was passiert im Abschnitt „Erholung“?', abb: 'pulskurve', optionen: ['Der Puls sinkt erst schnell, dann langsamer und nähert sich dem Ruhewert.', 'Der Puls bleibt auf dem Höchstwert.', 'Der Puls fällt sofort deutlich unter den Ruhewert.', 'Der Puls steigt weiter an.'], richtig: 0 },
      { id: 'zellatmung-u19', typ: 'wahl', plus: true, frage: 'Ein trainierter Läufer und ein untrainierter Schüler laufen dieselbe Strecke gleich schnell. Woran erkennt man den Trainierten in der Pulskurve?', optionen: ['Sein Puls sinkt nach dem Lauf schneller zum Ruhewert.', 'Sein Puls steigt beim Lauf höher.', 'Sein Puls bleibt nach dem Lauf länger hoch.', 'Sein Ruhepuls ist höher.'], richtig: 0 },
      { id: 'zellatmung-u20', typ: 'luecke', plus: true, text: 'Reicht der Sauerstoff, läuft die Zellatmung {aerob|anaerob} ab. Beim harten Endspurt kommt nicht genug Sauerstoff in den Muskeln an. Dann bildet der Muskel kurzzeitig {Milchsäure|Glucose} und gewinnt dabei {weniger|mehr} Energie.' },
      { id: 'zellatmung-u21', typ: 'wahl', plus: true, frage: 'Was ist der wichtigste Reiz für schnelleres Atmen?', optionen: ['ein Anstieg von Kohlenstoffdioxid im Blut', 'ein Anstieg von Glucose im Blut', 'ein Abfall der Körpertemperatur', 'ein voller Magen'], richtig: 0 },
      { id: 'zellatmung-u22', typ: 'zuordnen', frage: 'Bei der Verdauung spalten Enzyme die Nährstoffe in Bausteine. Ordne jedem Nährstoff seine Bausteine zu.', paare: [['Stärke (Kohlenhydrate)', 'Glucose (Traubenzucker)'], ['Eiweiße', 'Aminosäuren'], ['Fette', 'Glycerin und Fettsäuren']], erkl: 'Erst die kleinen Bausteine können im Dünndarm ins Blut gelangen.' },
      { id: 'zellatmung-u23', typ: 'wahl', frage: 'Wo gelangt die Glucose aus der Nahrung ins Blut?', optionen: ['im Dünndarm, über die Darmzotten', 'im Magen, über die Magenwand', 'im Dickdarm, zusammen mit dem Wasser', 'in den Lungenbläschen, zusammen mit dem Sauerstoff'], richtig: 0, erkl: 'Die Darmzotten vergrößern die Oberfläche des Dünndarms. In jeder Darmzotte liegen Blutkapillaren, die die Glucose aufnehmen.' },
      { id: 'zellatmung-u24', typ: 'reihenfolge', frage: 'Verfolge einen Glucose-Baustein aus der Stärke eines Brötchens bis in eine Muskelzelle. Bring die Stationen in die richtige Reihenfolge.', schritte: ['Mundhöhle', 'Speiseröhre', 'Magen', 'Dünndarm', 'Blut', 'Muskelzelle', 'Mitochondrium'], erkl: 'Im Dünndarm ist die Stärke fertig zu Glucose gespalten und gelangt über die Darmzotten ins Blut. Das Blut bringt sie zur Muskelzelle, abgebaut wird sie im Mitochondrium.' },
      {
        id: 'zellatmung-u25', typ: 'tabelle', frage: 'Was trägt jeder Vorgang zur Energieversorgung der Zelle bei, und wo läuft er ab? Ergänze die Tabelle.',
        spalten: ['Vorgang', 'Beitrag', 'Ort'],
        zeilen: [
          { kopf: 'Atmung', zellen: [{ optionen: ['liefert Sauerstoff (O₂)', 'liefert Glucose', 'transportiert O₂, Glucose und CO₂', 'setzt Energie frei'], richtig: 0 }, { optionen: ['Lungenbläschen', 'Dünndarm', 'Herz und Blutgefäße', 'Mitochondrien'], richtig: 0 }] },
          { kopf: 'Verdauung', zellen: [{ optionen: ['liefert Sauerstoff (O₂)', 'liefert Glucose', 'transportiert O₂, Glucose und CO₂', 'setzt Energie frei'], richtig: 1 }, { optionen: ['Lungenbläschen', 'Dünndarm', 'Herz und Blutgefäße', 'Mitochondrien'], richtig: 1 }] },
          { kopf: 'Blutkreislauf', zellen: [{ optionen: ['liefert Sauerstoff (O₂)', 'liefert Glucose', 'transportiert O₂, Glucose und CO₂', 'setzt Energie frei'], richtig: 2 }, { optionen: ['Lungenbläschen', 'Dünndarm', 'Herz und Blutgefäße', 'Mitochondrien'], richtig: 2 }] },
          { kopf: 'Zellatmung', zellen: [{ optionen: ['liefert Sauerstoff (O₂)', 'liefert Glucose', 'transportiert O₂, Glucose und CO₂', 'setzt Energie frei'], richtig: 3 }, { optionen: ['Lungenbläschen', 'Dünndarm', 'Herz und Blutgefäße', 'Mitochondrien'], richtig: 3 }] }
        ],
        erkl: 'Atmung und Verdauung liefern die Ausgangsstoffe, der Blutkreislauf verteilt sie, die Zellatmung in den Körperzellen macht daraus Energie.'
      },
      { id: 'zellatmung-u26', typ: 'behauptung', aussage: 'Die Energie aus einem Brötchen wird schon bei der Verdauung frei. Das Blut bringt diese Energie dann zu den Muskeln.', stimmt: false, gruende: ['Stimmt nicht: Die Verdauung zerlegt die Nährstoffe nur in Bausteine. Das Blut bringt die Glucose zu den Zellen, erst dort wird bei der Zellatmung Energie frei.', 'Stimmt: Die Enzyme im Dünndarm setzen die Energie frei, und das Blut verteilt sie.', 'Stimmt nicht: Die Energie wird in der Lunge frei, wenn der Sauerstoff ins Blut gelangt.'], richtig: 0 },
      { id: 'zellatmung-u27', typ: 'luecke', frage: 'Vervollständige den großen Zusammenhang.', text: 'Bei der {Atmung|Verdauung} gelangt Sauerstoff in den Lungenbläschen ins Blut. Bei der {Verdauung|Atmung} gelangt Glucose im {Dünndarm|Magen} ins Blut. Der {Blutkreislauf|Gasaustausch} bringt beide Stoffe zu den Körperzellen. Dort wird bei der {Zellatmung|Verdauung} Energie frei, und es entstehen Kohlenstoffdioxid und Wasser. Das Kohlenstoffdioxid gelangt mit dem Blut zur {Lunge|Leber} und wird ausgeatmet.' },
      { id: 'zellatmung-u28', typ: 'mehrfach', frage: 'Was haben Lungenbläschen und Darmzotten gemeinsam?', optionen: ['eine große Oberfläche', 'eine dünne Wand', 'ein dichtes Netz aus Kapillaren', 'Knorpelspangen', 'eine dicke Muskelwand', 'Flimmerhärchen'], richtig: [0, 1, 2], erkl: 'Beide sind Austauschflächen: Oberflächenvergrößerung, kurze Wege, viel Blut für den Abtransport.' },
    ],
    erklaeren: [
      {
        id: 'zellatmung-e5',
        frage: 'Schreibe die Wortgleichung und die Reaktionsgleichung mit Summenformeln der Zellatmung aus dem Kopf auf.',
        tipp: 'Erst die Wörter, dann die Formeln, zum Schluss die Zahlen davor. Am besten auf Papier, so wie in der Arbeit.',
        begriffe: [
          { name: 'Glucose', muster: ['glucose', 'glukose', 'traubenzucker'] }, { name: 'Sauerstoff', muster: ['sauerstoff'] },
          { name: 'Kohlenstoffdioxid', muster: ['kohlenstoffdioxid', 'kohlendioxid'] }, { name: 'Wasser', muster: ['wasser'] },
          { name: 'C₆H₁₂O₆', muster: ['c6h12o6'] }, { name: '6 O₂', muster: ['6 o2'] }
        ],
        punkte: [
          { text: 'Wortgleichung, linke Seite: Glucose + Sauerstoff', p: 1 },
          { text: 'Wortgleichung, rechte Seite: Kohlenstoffdioxid + Wasser (+ Energie)', p: 1 },
          { text: 'Summenformeln richtig: C₆H₁₂O₆, O₂, CO₂, H₂O', p: 1 },
          { text: 'Koeffizienten richtig: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O', p: 1 }
        ],
        muster: 'Wortgleichung: Glucose + Sauerstoff → Kohlenstoffdioxid + Wasser (+ Energie). Reaktionsgleichung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O (+ Energie).'
      },
      {
        id: 'zellatmung-e1',
        frage: 'Ein Schüler läuft 1000 Meter im Sportunterricht. Danach schlägt sein Herz schneller, und er atmet deutlich schneller als zuvor. Erkläre, warum die Atemfrequenz während des Laufens steigt.',
        tipp: 'Beginne bei den Muskeln: Was brauchen sie mehr, und was folgt daraus für die Zellatmung?',
        begriffe: [
          { name: 'Muskeln', muster: ['muskel'] }, { name: 'Energie', muster: ['energie'] },
          { name: 'Zellatmung', muster: ['zellatmung'] }, { name: 'Sauerstoff', muster: ['sauerstoff'] },
          { name: 'Kohlenstoffdioxid', muster: ['kohlenstoffdioxid', 'kohlendioxid', 'co2'] },
          { name: 'Atemfrequenz', muster: ['atemfrequenz', 'schneller atm'] }
        ],
        punkte: [
          { text: 'Die Muskeln brauchen mehr Energie, dafür läuft in den Muskelzellen mehr Zellatmung.', p: 1 },
          { text: 'Dafür wird mehr Sauerstoff gebraucht, und es entsteht mehr Kohlenstoffdioxid, das abgeatmet werden muss. Deshalb steigt die Atemfrequenz.', p: 1 }
        ],
        muster: 'Beim Laufen arbeiten die Muskeln stark und brauchen viel mehr Energie. Diese Energie gewinnen die Muskelzellen durch Zellatmung, bei der Glucose mit Sauerstoff abgebaut wird. Es läuft also mehr Zellatmung. Dafür wird mehr Sauerstoff gebraucht, und es entsteht mehr Kohlenstoffdioxid. Damit genug Sauerstoff aufgenommen und das zusätzliche Kohlenstoffdioxid abgeatmet wird, steigt die Atemfrequenz.'
      },
      {
        id: 'zellatmung-e2',
        frage: 'Erkläre, warum das Herz beim Laufen schneller schlägt.',
        tipp: 'Das Herz ist die Pumpe des Transportsystems. Was muss schneller wohin gebracht werden?',
        begriffe: [
          { name: 'Blut', muster: ['blut'] }, { name: 'pro Minute', muster: ['minute'] },
          { name: 'Sauerstoff', muster: ['sauerstoff'] }, { name: 'Glucose', muster: ['glucose', 'glukose', 'traubenzucker'] },
          { name: 'Muskeln', muster: ['muskel'] }, { name: 'Kohlenstoffdioxid', muster: ['kohlenstoffdioxid', 'kohlendioxid', 'co2'] }
        ],
        punkte: [
          { text: 'Das Herz schlägt schneller und pumpt so pro Minute mehr Blut durch den Körper.', p: 1 },
          { text: 'So gelangen mehr Sauerstoff und Glucose für die Zellatmung zu den Muskeln, und mehr Kohlenstoffdioxid wird abtransportiert.', p: 1 }
        ],
        muster: 'Die arbeitenden Muskeln brauchen für die Zellatmung mehr Sauerstoff und Glucose. Beides bringt das Blut. Deshalb schlägt das Herz schneller und pumpt pro Minute mehr Blut durch den Körper. So gelangen mehr Sauerstoff und Glucose zu den Muskeln, und das zusätzliche Kohlenstoffdioxid wird schneller zur Lunge abtransportiert.'
      },
      {
        id: 'zellatmung-e3',
        frage: 'Welcher Zusammenhang besteht zwischen Zellatmung, Blutkreislauf und Gasaustausch? Erkläre am Beispiel des Läufers.',
        tipp: 'Verfolge den Sauerstoff von der Lunge bis in die Muskelzelle und das Kohlenstoffdioxid zurück.',
        begriffe: [
          { name: 'Zellatmung', muster: ['zellatmung'] }, { name: 'Blutkreislauf', muster: ['blutkreislauf', 'kreislauf'] },
          { name: 'Gasaustausch', muster: ['gasaustausch'] }, { name: 'Lungenbläschen', muster: ['lungenblaeschen', 'alveole', 'lunge'] },
          { name: 'Sauerstoff', muster: ['sauerstoff'] }, { name: 'Kohlenstoffdioxid', muster: ['kohlenstoffdioxid', 'kohlendioxid', 'co2'] }
        ],
        punkte: [
          { text: 'Beim Gasaustausch in den Lungenbläschen gelangt Sauerstoff ins Blut und Kohlenstoffdioxid aus dem Blut in die Atemluft.', p: 1 },
          { text: 'Der Blutkreislauf bringt den Sauerstoff zu den Zellen, wo die Zellatmung ihn braucht, und das Kohlenstoffdioxid aus der Zellatmung zurück zur Lunge.', p: 1 }
        ],
        muster: 'Die Zellatmung in den Muskelzellen braucht Sauerstoff und bildet Kohlenstoffdioxid. Den Sauerstoff nimmt das Blut beim Gasaustausch in den Lungenbläschen auf. Der Blutkreislauf transportiert ihn zu den Zellen. Das Kohlenstoffdioxid aus der Zellatmung bringt das Blut zurück zur Lunge, dort wird es beim Gasaustausch abgegeben und ausgeatmet. Die drei Vorgänge hängen also zusammen: Läuft mehr Zellatmung, müssen auch Gasaustausch und Blutkreislauf mehr leisten.'
      },
      {
        id: 'zellatmung-e4',
        frage: 'Erkläre den Zusammenhang zwischen Verdauung, Atmung, Blutkreislauf und Zellatmung in einem zusammenhängenden Text.',
        tipp: 'Woher kommen die Ausgangsstoffe der Zellatmung, wie gelangen sie in die Zelle, und was passiert dort mit ihnen?',
        begriffe: [
          { name: 'Verdauung', muster: ['verdau'] }, { name: 'Glucose', muster: ['glucose', 'glukose', 'traubenzucker'] },
          { name: 'Atmung', muster: ['lunge', 'einatm'] }, { name: 'Sauerstoff', muster: ['sauerstoff'] },
          { name: 'Blutkreislauf', muster: ['blutkreislauf', 'kreislauf'] }, { name: 'Zellatmung', muster: ['zellatmung'] },
          { name: 'Mitochondrien', muster: ['mitochondri'] }, { name: 'Energie', muster: ['energie'] },
          { name: 'Kohlenstoffdioxid', muster: ['kohlenstoffdioxid', 'kohlendioxid', 'co2'] }
        ],
        punkte: [
          { text: 'Die Verdauung liefert Glucose, die im Dünndarm ins Blut gelangt. Die Atmung liefert Sauerstoff, der in den Lungenbläschen ins Blut gelangt.', p: 1 },
          { text: 'Der Blutkreislauf transportiert Glucose und Sauerstoff zu allen Körperzellen.', p: 1 },
          { text: 'In den Zellen (Mitochondrien) werden sie bei der Zellatmung zu Kohlenstoffdioxid und Wasser abgebaut, Energie wird frei. Das Kohlenstoffdioxid wird mit dem Blut zur Lunge gebracht und ausgeatmet.', p: 1 }
        ],
        muster: 'Bei der Verdauung wird die Nahrung zerlegt. Dabei entsteht unter anderem Glucose, die im Dünndarm ins Blut gelangt. Bei der Atmung gelangt Sauerstoff in die Lungenbläschen und von dort ins Blut. Der Blutkreislauf transportiert Glucose und Sauerstoff zu allen Körperzellen. In den Zellen, vor allem in den Mitochondrien, läuft die Zellatmung: Glucose wird mit Sauerstoff zu Kohlenstoffdioxid und Wasser abgebaut, dabei wird Energie frei. Das Kohlenstoffdioxid gelangt ins Blut, wird zur Lunge transportiert und ausgeatmet. Ohne Verdauung, Atmung und Blutkreislauf hätte die Zelle also keine Stoffe für die Zellatmung.'
      }
    ],
    abschluss: [
      { id: 'zellatmung-a1', typ: 'wahl', frage: 'Puls 168, Atemfrequenz 36, kurz nach einem 1000-m-Lauf, kein Pfeifen, kein Brustschmerz. Wie beurteilst du das?', optionen: ['normale Anpassung an die Belastung, die Werte sinken in der Erholung wieder', 'Herzinfarkt, er muss sofort behandelt werden', 'Asthmaanfall, die Bronchien sind verengt', 'Unterzuckerung, er hat zu wenig gegessen'], richtig: 0 },
      { id: 'zellatmung-a2', typ: 'luecke', frage: 'Was in seinen Muskeln passiert ist:', text: 'Beim Lauf brauchten seine Muskeln mehr {Energie|Wasser}. Deshalb lief in den Muskelzellen mehr {Zellatmung|Verdauung}. Dabei wurde mehr Sauerstoff {verbraucht|gebildet} und mehr Kohlenstoffdioxid {gebildet|verbraucht}. Deshalb atmet er noch {schnell|langsam}.' },
      { id: 'zellatmung-a3', typ: 'wahl', frage: 'Wo in seinen Muskelzellen läuft der größte Teil der Zellatmung ab?', optionen: ['in den Mitochondrien', 'im Zellkern', 'in der Zellmembran', 'im Blutplasma'], richtig: 0 },
      { id: 'zellatmung-a4', typ: 'wahl', frage: 'Sein Gesicht ist rot, ihm ist warm. Woher kommt die Wärme?', optionen: ['Bei der Zellatmung wird ein Teil der Energie als Wärme frei.', 'Die eingeatmete Luft ist wärmer als der Körper.', 'Kohlenstoffdioxid ist ein warmes Gas.', 'Das Herz erzeugt beim schnellen Schlagen Fieber.'], richtig: 0 },
      { id: 'zellatmung-a5', typ: 'wahl', frage: 'Er ruht sich 15 Minuten aus. Welcher Puls passt dann zu einer normalen Erholung?', optionen: ['etwa 80 Schläge pro Minute', 'etwa 168 Schläge pro Minute', 'etwa 200 Schläge pro Minute', 'etwa 20 Schläge pro Minute'], richtig: 0 }
    ],
    epikrise: '<p><strong>Diagnose:</strong> Keine Krankheit. Herzrasen und schnelle Atmung waren eine normale Anpassung des Körpers an die Belastung. Nach 15 Minuten Ruhe lag sein Puls bei 80, die Atemfrequenz bei 16. Entlassen ohne Behandlung, zurück zum Sportunterricht.</p><p><strong>Die Biologie dahinter:</strong> Beim Laufen brauchen die Muskeln mehr Energie. Die gewinnen sie durch Zellatmung in den Mitochondrien: Glucose + Sauerstoff → Kohlenstoffdioxid + Wasser (+ Energie). Damit mehr Sauerstoff ankommt und mehr Kohlenstoffdioxid abtransportiert wird, atmet er schneller, und das Herz pumpt pro Minute mehr Blut. Verdauung, Atmung und Blutkreislauf liefern zusammen alles, was die Zellatmung braucht.</p>'
  });
})();
