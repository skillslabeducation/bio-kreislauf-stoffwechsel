/* Triage: 60 Sekunden „stimmt“ oder „stimmt nicht“. Fehler gehen als Aufgabe t-<n> in die Wiedervorlage. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  function A(fall, stimmt, s, erkl) { return { fall: fall, stimmt: stimmt, s: s, erkl: erkl }; }

  var POOL = [
    A('leben', true, 'Ein Lebewesen muss alle Kennzeichen des Lebens zugleich zeigen.', 'Einzelne Kennzeichen reichen nicht. Auch ein Feuer wächst.'),
    A('leben', false, 'Ein Feuer ist ein Lebewesen, weil es wächst und Sauerstoff braucht.', 'Feuer besteht nicht aus Zellen und pflanzt sich nicht mit Erbinformation fort.'),
    A('leben', true, 'Die Botanik ist die Lehre von den Pflanzen.', 'Botanik = Pflanzenkunde, Zoologie = Tierkunde.'),
    A('leben', false, 'Die Zoologie beschäftigt sich mit Pflanzen.', 'Zoologie ist die Tierkunde. Pflanzen untersucht die Botanik.'),
    A('leben', true, 'Alle Lebewesen bestehen aus Zellen.', 'Der Aufbau aus Zellen ist ein Kennzeichen des Lebens.'),
    A('leben', false, 'Reizbarkeit bedeutet, dass ein Lebewesen schnell gereizt reagiert.', 'Reizbarkeit heißt: Reize wahrnehmen und darauf reagieren, zum Beispiel die Pupille bei Licht.'),
    A('atemwege', true, 'Beim Einatmen zieht sich das Zwerchfell zusammen und flacht ab.', 'Dadurch wird der Brustraum größer, und Luft strömt ein.'),
    A('atemwege', false, 'Beim Einatmen bläst die einströmende Luft die Lunge auf.', 'Umgekehrt: Erst wird der Brustraum größer, dann dehnt sich die Lunge mit, und Luft strömt ein.'),
    A('atemwege', true, 'Die Luftröhre wird durch Knorpelspangen offen gehalten.', 'So fällt sie beim Einatmen nicht zusammen.'),
    A('atemwege', false, 'Der Gasaustausch findet in den Bronchien statt.', 'Er findet in den Lungenbläschen statt.'),
    A('atemwege', true, 'Die Nasenhöhle erwärmt, befeuchtet und reinigt die eingeatmete Luft.', 'Schleimhaut, Härchen und gute Durchblutung machen das möglich.'),
    A('atemwege', false, 'Die Lunge hat eigene Muskeln, mit denen sie sich ausdehnt.', 'Die Lunge hat keine Muskeln. Zwerchfell und Zwischenrippenmuskeln vergrößern den Brustraum.'),
    A('atemwege', false, 'Die Luft strömt vom Kehlkopf direkt in die Bronchien.', 'Dazwischen liegt die Luftröhre.'),
    A('gasaustausch', true, 'Der Fachbegriff für Lungenbläschen lautet Alveolen.', 'Alveolen = Lungenbläschen.'),
    A('gasaustausch', true, 'Bei der Diffusion bewegen sich Teilchen vom Ort hoher zum Ort niedriger Konzentration.', 'Das geschieht von selbst, bis die Konzentration ausgeglichen ist.'),
    A('gasaustausch', false, 'In der Lunge diffundiert Sauerstoff aus dem Blut in die Lungenbläschen.', 'Umgekehrt: Sauerstoff geht aus den Lungenbläschen ins Blut, Kohlenstoffdioxid aus dem Blut in die Lungenbläschen.'),
    A('gasaustausch', true, 'Die Wand der Lungenbläschen besteht nur aus einer Zellschicht.', 'Je dünner die Wand, desto kürzer der Weg für die Gase.'),
    A('gasaustausch', false, 'Ausgeatmete Luft enthält keinen Sauerstoff mehr.', 'Sie enthält noch etwa 16 bis 17 % Sauerstoff.'),
    A('gasaustausch', true, 'Viele kleine Lungenbläschen ergeben zusammen eine sehr große Oberfläche.', 'Rund 100 m², das Prinzip der Oberflächenvergrößerung.'),
    A('gasaustausch', false, 'Für die Diffusion muss der Körper Energie aufwenden.', 'Diffusion läuft von selbst ab, ohne Energieaufwand.'),
    A('herz', true, 'Die linke Herzkammer pumpt das Blut in die Aorta.', 'Von dort geht es in den Körperkreislauf.'),
    A('herz', false, 'Die rechte Herzkammer pumpt das Blut in den Körperkreislauf.', 'Sie pumpt es durch die Lungenarterie zur Lunge.'),
    A('herz', true, 'Das Blut aus der Hohlvene fließt in den rechten Vorhof.', 'Die Hohlvene bringt sauerstoffarmes Blut aus dem Körper zum Herzen.'),
    A('herz', true, 'Bei einem vollständigen Umlauf fließt das Blut zweimal durch das Herz.', 'Deshalb spricht man vom doppelten Blutkreislauf.'),
    A('herz', false, 'Die Wand der rechten Herzkammer ist dicker als die der linken.', 'Die linke ist dicker, weil sie mit hohem Druck in den ganzen Körper pumpt.'),
    A('herz', true, 'Herzklappen verhindern, dass das Blut zurückfließt.', 'Sie wirken wie Ventile.'),
    A('herz', false, 'Die Lungenvene bringt sauerstoffarmes Blut zum Herzen.', 'Sie bringt sauerstoffreiches Blut von der Lunge zum linken Vorhof.'),
    A('gefaesse', true, 'Arterien führen das Blut vom Herzen weg.', 'Der Name hängt an der Fließrichtung.'),
    A('gefaesse', false, 'Venen haben eine dickere und muskulösere Wand als Arterien.', 'Arterien haben die dickere Wand, weil in ihnen ein höherer Druck herrscht.'),
    A('gefaesse', true, 'Die Lungenarterie führt sauerstoffarmes Blut.', 'Sie bringt das Blut vom Herzen zur Lunge, wo es Sauerstoff aufnimmt.'),
    A('gefaesse', false, 'Arterien führen immer sauerstoffreiches Blut.', 'Die Lungenarterie führt sauerstoffarmes Blut.'),
    A('gefaesse', true, 'In den Kapillaren findet der Stoffaustausch zwischen Blut und Gewebe statt.', 'Ihre Wand ist sehr dünn.'),
    A('gefaesse', true, 'Venenklappen verhindern, dass das Blut in den Beinvenen zurücksackt.', 'Zusammen mit der Muskelpumpe bringen sie das Blut zum Herzen.'),
    A('gefaesse', false, 'Den Puls fühlt man an einer Vene.', 'Man fühlt ihn an einer Arterie, zum Beispiel am Handgelenk: Es ist die Druckwelle jedes Herzschlags.'),
    A('energie', true, 'Fett liefert pro Gramm mehr als doppelt so viel Energie wie Kohlenhydrate.', 'Etwa 9 kcal gegenüber etwa 4 kcal.'),
    A('energie', false, 'Ein Gramm Eiweiß liefert etwa 9 kcal.', 'Eiweiß liefert etwa 4 kcal. Die 9 kcal hat Fett.'),
    A('energie', true, 'Auch im Schlaf verbraucht der Körper Energie.', 'Für Herzschlag, Atmung, Gehirn und Körpertemperatur: den Grundumsatz.'),
    A('energie', false, 'Vitamine gehören zu den Hauptnährstoffen und liefern viel Energie.', 'Vitamine sind Ergänzungsstoffe und liefern keine Energie.'),
    A('energie', true, 'Kohlenhydrate, Fette und Eiweiße sind die drei Hauptnährstoffe.', 'Alle drei liefern Energie.'),
    A('energie', false, '25 g Kohlenhydrate liefern etwa 225 kcal.', '25 × 4 kcal = 100 kcal. 225 kcal wären es bei Fett.'),
    A('zellatmung', true, 'Die Zellatmung findet zum größten Teil in den Mitochondrien statt.', 'Mitochondrien sind die Kraftwerke der Zelle.'),
    A('zellatmung', false, 'Bei der Zellatmung entsteht Sauerstoff.', 'Sauerstoff wird verbraucht. Es entstehen Kohlenstoffdioxid und Wasser.'),
    A('zellatmung', true, 'Glucose + Sauerstoff → Kohlenstoffdioxid + Wasser (+ Energie) ist die Wortgleichung der Zellatmung.', 'Genau so.'),
    A('zellatmung', false, 'In der Reaktionsgleichung der Zellatmung steht vor O₂ eine 2.', 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O.'),
    A('zellatmung', true, 'Beim Sport steigt die Atemfrequenz, weil die Muskeln mehr Sauerstoff brauchen und mehr CO₂ entsteht.', 'Mehr Zellatmung heißt mehr Gasaustausch.'),
    A('zellatmung', false, 'Die Zellatmung findet nur in der Lunge statt.', 'Sie findet in allen Körperzellen statt. In der Lunge findet der Gasaustausch statt.'),
    A('zellatmung', true, 'Das Blut transportiert Glucose und Sauerstoff zu den Körperzellen.', 'Beides braucht die Zellatmung.'),
    A('enzyme', true, 'Enzyme sind Biokatalysatoren aus Eiweiß.', 'Sie beschleunigen Reaktionen im Körper.'),
    A('enzyme', false, 'Enzyme werden bei der Reaktion verbraucht.', 'Sie bleiben unverändert und arbeiten immer wieder.'),
    A('enzyme', true, 'Amylase spaltet Stärke.', 'Schon im Mund, mit dem Speichel.'),
    A('enzyme', false, 'Lipase spaltet Eiweiße.', 'Lipase spaltet Fette. Eiweiße spalten Proteasen.'),
    A('enzyme', true, 'Lactase spaltet Milchzucker in Traubenzucker und Schleimzucker.', 'Lactose → Glucose + Galactose.'),
    A('enzyme', false, 'Ein Enzym passt zu jedem beliebigen Substrat.', 'Enzyme sind substratspezifisch: Schlüssel-Schloss-Prinzip.'),
    A('enzyme', false, 'Ein durch Hitze denaturiertes Enzym funktioniert nach dem Abkühlen wieder.', 'Die Denaturierung ist nicht umkehrbar.'),
    A('enzyme', true, 'Im aktiven Zentrum bindet das Substrat an das Enzym.', 'Dabei entsteht der Enzym-Substrat-Komplex.'),
    A('blutgruppen', true, 'Menschen mit Blutgruppe A haben Anti-B-Antikörper im Blutplasma.', 'Gegen das Antigen, das sie selbst nicht haben.'),
    A('blutgruppen', false, 'Menschen mit Blutgruppe 0 haben keine Antikörper im Blutplasma.', 'Sie haben Anti-A und Anti-B. Keine Antikörper hat Blutgruppe AB.'),
    A('blutgruppen', true, 'Rote Blutkörperchen der Blutgruppe 0 tragen weder Antigen A noch Antigen B.', 'Deshalb gilt 0 als Universalspender für rote Blutkörperchen.'),
    A('blutgruppen', false, 'Ein Patient mit Blutgruppe A darf rote Blutkörperchen der Blutgruppe B bekommen.', 'Seine Anti-B-Antikörper würden sie verklumpen (Agglutination).'),
    A('blutgruppen', true, 'Agglutination bedeutet Verklumpung der roten Blutkörperchen.', 'Antikörper binden an passende fremde Antigene.'),
    A('blutgruppen', false, 'Antikörper sitzen auf der Oberfläche der roten Blutkörperchen.', 'Dort sitzen die Antigene. Antikörper schwimmen im Blutplasma.'),
    A('blutgruppen', true, 'Blutgruppe AB gilt im AB0-System als Universalempfänger.', 'Ihr Plasma enthält weder Anti-A noch Anti-B.'),
    A('vererbung', true, 'Die Allele A und B sind gegenüber 0 dominant.', 'A0 ergibt Blutgruppe A, B0 ergibt Blutgruppe B.'),
    A('vererbung', false, 'Zwei Eltern mit Blutgruppe AB können ein Kind mit Blutgruppe 0 bekommen.', 'Keiner von beiden hat ein 0-Allel.'),
    A('vererbung', true, 'Eltern mit den Genotypen A0 und B0 können Kinder aller vier Blutgruppen bekommen.', 'AB, A0, B0 und 00, je 25 %.'),
    A('vererbung', false, 'Der Genotyp ist das äußere Erscheinungsbild, zum Beispiel Blutgruppe A.', 'Das ist der Phänotyp. Der Genotyp ist die Kombination der Allele, zum Beispiel A0.'),
    A('vererbung', false, 'Ein Mensch mit Blutgruppe A hat immer den Genotyp AA.', 'Möglich sind AA oder A0.'),
    A('vererbung', true, 'A und B sind untereinander kodominant: Beim Genotyp AB zeigen sich beide.', 'Daraus ergibt sich Blutgruppe AB.')
  ];

  function itemNachId(id) {
    var m = /^t-(\d+)$/.exec(id || '');
    var a = m ? POOL[+m[1]] : null;
    if (!a) return null;
    return { id: id, typ: 'wahl', fest: true, frage: 'Stimmt das? „' + a.s + '“', optionen: ['Stimmt', 'Stimmt nicht'], richtig: a.stimmt ? 0 : 1, erkl: a.erkl };
  }

  W.triage = { pool: POOL, itemNachId: itemNachId, DAUER: 60 };
})();
