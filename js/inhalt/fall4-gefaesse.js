/* Box 4: Verkäuferin, 45, schwere Beine nach langem Stehen – Arterien, Venen, Kapillaren (Blatt Teil 1, Aufgabe 5; Teil 2, Aufgabe 1e) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'gefaesse', box: 4, teil: 1, blatt: 'T1-5, T2-1e',
    titel: 'Arterien, Venen und Kapillaren',
    patient: 'Verkäuferin, 45', symptom: 'schwere, geschwollene Beine nach langem Stehen',
    aufnahme: {
      text: '<p>Sie steht seit Jahren den ganzen Tag hinter der Kasse. Abends sind ihre Beine schwer, die Knöchel geschwollen. An den Unterschenkeln schlängeln sich bläuliche Venen unter der Haut. Sie hat Sorge, dass es ein Blutgerinnsel sein könnte.</p><p>Hochlegen der Beine bringt Erleichterung. Puls, Atmung und Sauerstoffsättigung sind unauffällig.</p>',
      werte: { puls: 78, af: 14, spo2: 98 },
      oberaerztin: 'Box 4. Kein Notfall, aber eine gute Frage: Wie kommt das Blut aus den Füßen wieder nach oben?',
      leitfrage: 'Worin unterscheiden sich Arterien, Venen und Kapillaren, und was hilft dem Blut in den Beinen gegen die Schwerkraft zurück zum Herzen?'
    },
    karten: [
      {
        titel: 'Drei Sorten Blutgefäße',
        abb: 'gefaesse', abbOpts: { beschriftet: true },
        text: '<p><strong>Arterien</strong> führen das Blut vom Herzen weg. Das Herz presst das Blut mit hohem Druck hinein. Deshalb haben Arterien eine <strong>dicke, muskulöse und elastische Wand</strong>.</p><p><strong>Venen</strong> führen das Blut zum Herzen hin. Der Blutdruck ist hier niedrig, ihre Wand ist <strong>dünn</strong>. Viele Venen, vor allem in den Beinen, haben <strong>Venenklappen</strong>.</p><p><strong>Kapillaren</strong> sind die feinsten Blutgefäße. Sie verbinden Arterien und Venen und bilden in jedem Organ ein dichtes Netz.</p>',
        merk: 'Arterien: vom Herzen weg, dicke Wand, hoher Druck. Venen: zum Herzen hin, dünne Wand, niedriger Druck, Venenklappen.'
      },
      {
        titel: 'Arterie heißt nicht sauerstoffreich',
        text: '<p>Im <strong>Körperkreislauf</strong> führen die Arterien sauerstoffreiches Blut zu den Organen, die Venen bringen sauerstoffarmes Blut zurück. Daher kommt die verbreitete Gleichung „Arterie gleich sauerstoffreich“.</p><p>Im <strong>Lungenkreislauf</strong> ist es umgekehrt. Die <strong>Lungenarterie</strong> führt sauerstoffarmes Blut von der rechten Herzkammer zur Lunge. Die <strong>Lungenvene</strong> bringt sauerstoffreiches Blut von der Lunge zum linken Vorhof.</p>',
        merk: 'Arterie und Vene richten sich nach der Fließrichtung, nicht nach dem Sauerstoff.',
        achtung: '<strong>Achtung, Falle</strong>„Arterien führen immer sauerstoffreiches Blut“ ist falsch. Entscheidend ist nur, ob das Blut vom Herzen weg fließt (Arterie) oder zum Herzen hin (Vene).'
      },
      {
        titel: 'Kapillaren: Ort des Stoffaustauschs',
        text: '<p>Kapillaren sind so eng, dass die roten Blutkörperchen nur einzeln hindurchpassen. Ihre Wand besteht aus einer einzigen, sehr dünnen Zellschicht.</p><p>Hier findet der <strong>Stoffaustausch zwischen Blut und Gewebe</strong> statt: Sauerstoff und Nährstoffe gelangen aus dem Blut in die Zellen, Kohlenstoffdioxid und andere Abfallstoffe gelangen aus den Zellen ins Blut. Durch die mehrschichtigen Wände von Arterien und Venen ist das nicht möglich.</p>',
        merk: 'Kapillaren: dünne Wand aus einer Zellschicht, Stoffaustausch zwischen Blut und Gewebe.'
      },
      {
        titel: 'Der Puls',
        text: '<p>Bei jedem Herzschlag pumpt die linke Kammer Blut in die Aorta. Die elastischen Arterienwände dehnen sich kurz und ziehen sich wieder zusammen. Diese <strong>Druckwelle</strong> läuft durch alle Arterien und ist als <strong>Puls</strong> zu fühlen, zum Beispiel am Handgelenk oder am Hals.</p><p>Der <strong>Ruhepuls</strong> liegt bei Jugendlichen etwa bei <strong>60 bis 100 Schlägen pro Minute</strong>, bei Erwachsenen ähnlich. Die Patientin hat 78, das ist unauffällig. Zum Messen zählst du die Schläge 15 Sekunden lang und nimmst sie mal 4. In den Venen ist der Druck so niedrig, dass man dort keinen Puls fühlt.</p>',
        merk: 'Der Puls ist die Druckwelle in den Arterien, die jeder Herzschlag auslöst.'
      },
      {
        titel: 'Venenklappen und Muskelpumpe',
        abb: 'gefaesse', abbOpts: { beschriftet: true, nur: ['venenklappe'], hervorheben: ['venenklappe'] },
        demo: 'venenklappe',
        text: '<p>Aus den Füßen muss das Blut weit über einen Meter nach oben zum Herzen, gegen die Schwerkraft. Der Druck aus dem Herzen reicht in den Venen dafür nicht aus.</p><p>Hier hilft die <strong>Muskelpumpe</strong>: Die tiefen Beinvenen liegen zwischen den Muskeln. Ziehen sich die Beinmuskeln beim Gehen zusammen, drücken sie die Venen zusammen und pressen das Blut weiter. Die <strong>Venenklappen</strong> wirken wie Ventile. Sie lassen das Blut nur in Richtung Herz durch und schließen sich, sobald es zurückfließen will.</p>',
        merk: 'Muskelpumpe und Venenklappen bringen das Blut aus den Beinen zurück zum Herzen. Die Klappen verhindern den Rückfluss.',
        achtung: '<strong>Achtung, Falle</strong>Venenklappen pumpen nicht selbst. Sie sind nur Ventile. Die Arbeit machen die Muskeln.'
      },
      {
        titel: 'Krampfadern',
        plus: true,
        text: '<p>Wer viel steht oder sitzt, nutzt die Muskelpumpe kaum. Das Blut drückt dann lange auf die Wände und Klappen der Beinvenen. Mit der Zeit können sich die Venen weiten, eine Veranlagung spielt dabei mit. Die Venenklappen <strong>schließen dann nicht mehr richtig</strong>.</p><p>Das Blut fließt teilweise zurück und <strong>staut sich in den Beinvenen</strong>. Die Venen werden noch weiter und schlängeln sich bläulich unter der Haut: <strong>Krampfadern</strong>. Bewegung, Hochlegen der Beine und Kompressionsstrümpfe entlasten die Venen.</p>',
        merk: 'Krampfadern: Die Venenklappen schließen nicht mehr richtig, das Blut staut sich in den Beinvenen.'
      },
      {
        titel: 'Was im Blut schwimmt',
        plus: true,
        text: '<p>Ein Erwachsener hat etwa fünf bis sechs Liter Blut. Etwas mehr als die Hälfte ist <strong>Blutplasma</strong>, eine gelbliche Flüssigkeit. Es transportiert Nährstoffe, CO<sub>2</sub>, Wärme und Hormone.</p><p>Im Plasma schwimmen die festen Bestandteile: <strong>Rote Blutkörperchen</strong> transportieren den Sauerstoff. <strong>Weiße Blutkörperchen</strong> wehren Krankheitserreger ab. <strong>Blutplättchen</strong> sorgen bei einer Verletzung für die Blutgerinnung.</p>'
      }
    ],
    ueben: [
      {
        id: 'gefaesse-u1', typ: 'tabelle', frage: 'Vervollständige die Tabelle zu Arterien und Venen.',
        spalten: ['Merkmal', 'Arterien', 'Venen'],
        zeilen: [
          { kopf: 'Fließrichtung zum Herzen', zellen: [{ optionen: ['vom Herzen weg', 'zum Herzen hin'], richtig: 0 }, { optionen: ['vom Herzen weg', 'zum Herzen hin'], richtig: 1 }] },
          { kopf: 'Dicke der Gefäßwand', zellen: [{ optionen: ['dick, muskulös, elastisch', 'dünn'], richtig: 0 }, { optionen: ['dick, muskulös, elastisch', 'dünn'], richtig: 1 }] },
          { kopf: 'Blutdruck', zellen: [{ optionen: ['hoch', 'niedrig'], richtig: 0 }, { optionen: ['hoch', 'niedrig'], richtig: 1 }] },
          { kopf: 'Venenklappen', zellen: [{ optionen: ['keine', 'vorhanden'], richtig: 0 }, { optionen: ['keine', 'vorhanden'], richtig: 1 }] },
          { kopf: 'Sauerstoffgehalt im Körperkreislauf', zellen: [{ optionen: ['hoch', 'niedrig'], richtig: 0 }, { optionen: ['hoch', 'niedrig'], richtig: 1 }] },
          { kopf: 'Sauerstoffgehalt im Lungenkreislauf', zellen: [{ optionen: ['hoch', 'niedrig'], richtig: 1 }, { optionen: ['hoch', 'niedrig'], richtig: 0 }] }
        ],
        erkl: 'Im Lungenkreislauf ist es umgekehrt: Die Lungenarterie führt sauerstoffarmes Blut zur Lunge, die Lungenvene sauerstoffreiches Blut zum Herzen.'
      },
      { id: 'gefaesse-u2', typ: 'behauptung', aussage: 'Arterien transportieren immer sauerstoffreiches Blut und Venen immer sauerstoffarmes Blut.', stimmt: false, gruende: ['Arterien und Venen sind nach der Fließrichtung benannt, nicht nach dem Sauerstoff. Die Lungenarterie führt sauerstoffarmes, die Lungenvene sauerstoffreiches Blut.', 'Arterien und Venen enthalten immer gleich viel Sauerstoff, nur die Farbe des Blutes ist anders.', 'Es ist genau umgekehrt: Arterien führen immer sauerstoffarmes und Venen immer sauerstoffreiches Blut.'], richtig: 0 },
      { id: 'gefaesse-u3', typ: 'wahl', frage: 'Wonach wird ein Blutgefäß als Arterie oder als Vene bezeichnet?', optionen: ['an der Fließrichtung: vom Herzen weg oder zum Herzen hin', 'am Sauerstoffgehalt des Blutes', 'an der Farbe des Blutes', 'an der Größe des Gefäßes'], richtig: 0, erkl: 'Arterie und Vene richten sich nach der Fließrichtung, nicht nach dem Sauerstoff.' },
      { id: 'gefaesse-u4', typ: 'zuordnen', frage: 'Ordne jedem Gefäß das passende Blut und die Fließrichtung zu.', paare: [['Aorta', 'sauerstoffreich, vom Herzen weg'], ['Hohlvene', 'sauerstoffarm, zum Herzen hin'], ['Lungenarterie', 'sauerstoffarm, vom Herzen weg'], ['Lungenvene', 'sauerstoffreich, zum Herzen hin']] },
      { id: 'gefaesse-u5', typ: 'wahl', frage: 'Welche Aufgabe haben die Kapillaren?', optionen: ['In ihnen findet der Stoffaustausch zwischen Blut und Gewebe statt.', 'Sie pumpen das Blut zurück zum Herzen.', 'Sie verhindern, dass das Blut zurückfließt.', 'Sie leiten das Blut mit hohem Druck vom Herzen weg.'], richtig: 0, erkl: 'Nur die dünne Wand der Kapillaren lässt Sauerstoff, Nährstoffe und Kohlenstoffdioxid durch.' },
      { id: 'gefaesse-u6', typ: 'luecke', text: 'Kapillaren haben eine sehr {dünne|dicke} Wand aus {einer einzigen Zellschicht|vielen Muskelschichten}. Durch sie gelangen Sauerstoff und Nährstoffe aus dem Blut ins {Gewebe|Herz}. Kohlenstoffdioxid gelangt aus dem Gewebe ins {Blut|Herz}.' },
      { id: 'gefaesse-u7', typ: 'eingabe', frage: 'Wie heißen die feinsten Blutgefäße, in denen der Stoffaustausch stattfindet?', akzeptiert: ['Kapillaren', 'Kapillare', 'Blutkapillaren', 'Haargefäße', 'Haargefäß'] },
      { id: 'gefaesse-u8', typ: 'beschriften', frage: 'Benenne die nummerierten Gefäße und die Klappe in der Vene.', abb: 'gefaesse', strukturen: ['arterie', 'vene', 'kapillare', 'venenklappe'] },
      { id: 'gefaesse-u9', typ: 'wahl', frage: 'Warum haben Arterien eine dicke, muskulöse und elastische Wand?', optionen: ['Sie müssen dem hohen Druck standhalten, mit dem das Herz das Blut hineinpumpt.', 'Damit kein Sauerstoff aus dem Blut entweicht.', 'Weil in ihnen der Stoffaustausch stattfindet.', 'Weil sie das Blut aus den Beinen nach oben pumpen müssen.'], richtig: 0 },
      { id: 'gefaesse-u10', typ: 'wahl', frage: 'Was spürst du, wenn du den Puls am Handgelenk fühlst?', optionen: ['die Druckwelle, die bei jedem Herzschlag durch die Arterien läuft', 'das Blut, das in den Venen zum Herzen zurückfließt', 'das Öffnen und Schließen der Venenklappen', 'den Gasaustausch in den Kapillaren'], richtig: 0 },
      { id: 'gefaesse-u11', typ: 'zahl', frage: 'Du zählst deinen Puls 15 Sekunden lang und kommst auf 19 Schläge. Wie hoch ist dein Puls pro Minute?', antwort: 76, tol: 0, einheit: 'Schläge pro Minute', erkl: '19 · 4 = 76. Das liegt im normalen Bereich von etwa 60 bis 100.' },
      { id: 'gefaesse-u12', typ: 'wahl', frage: 'Welcher Ruhepuls ist bei Jugendlichen normal?', optionen: ['etwa 60 bis 100 Schläge pro Minute', 'etwa 20 bis 40 Schläge pro Minute', 'etwa 120 bis 160 Schläge pro Minute', 'etwa 180 bis 220 Schläge pro Minute'], richtig: 0 },
      { id: 'gefaesse-u13', typ: 'wahl', frage: 'Welche Aufgabe haben die Venenklappen?', optionen: ['Sie verhindern, dass das Blut in den Venen zurückfließt.', 'Sie pumpen das Blut aktiv zum Herzen.', 'Sie regeln den Sauerstoffgehalt des Blutes.', 'Sie erzeugen den Puls.'], richtig: 0, erkl: 'Venenklappen sind Ventile. Pumpen müssen die Muskeln.' },
      { id: 'gefaesse-u14', typ: 'luecke', text: 'Beim Gehen ziehen sich die {Beinmuskeln|Venenklappen} zusammen und drücken auf die Venen. Das Blut wird {in Richtung Herz|in Richtung Füße} gepresst, denn die Venenklappen lassen es nur in {eine Richtung|beide Richtungen} durch. Dieses Zusammenspiel heißt {Muskelpumpe|Kapillarnetz}.' },
      { id: 'gefaesse-u15', typ: 'reihenfolge', frage: 'So arbeitet die Muskelpumpe im Bein. Bring die Schritte in die richtige Reihenfolge.', schritte: ['Die Wadenmuskeln ziehen sich zusammen.', 'Die Muskeln drücken die Vene zusammen.', 'Das Blut wird nach oben gepresst, die Klappe darüber öffnet sich.', 'Die Muskeln erschlaffen, die Klappe schließt sich und verhindert den Rückfluss.'] },
      { id: 'gefaesse-u16', typ: 'wahl', frage: 'Warum fühlt man an den Venen keinen Puls?', optionen: ['Nach den Kapillaren ist der Blutdruck so niedrig, dass keine Druckwelle mehr ankommt.', 'In den Venen fließt in Ruhe kein Blut.', 'Venen liegen immer zu tief unter der Haut.', 'Die Venenklappen fangen jeden Herzschlag ab.'], richtig: 0 },
      { id: 'gefaesse-u17', typ: 'behauptung', aussage: 'Die Lungenvene führt sauerstoffarmes Blut, denn sie ist eine Vene.', stimmt: false, gruende: ['Sie heißt Vene, weil sie zum Herzen hin führt. Sie bringt sauerstoffreiches Blut von der Lunge zum linken Vorhof.', 'Sie führt sauerstoffreiches Blut, weil Venen immer sauerstoffreich sind.', 'Sie führt sauerstoffarmes Blut zur Lunge, damit es dort Sauerstoff aufnimmt.'], richtig: 0 },
      { id: 'gefaesse-u18', typ: 'wahl', plus: true, frage: 'Wie entstehen Krampfadern?', optionen: ['Die Venenklappen schließen nicht mehr richtig, das Blut staut sich in den Beinvenen.', 'Die Arterien in den Beinen verkalken.', 'Die Kapillaren platzen beim Laufen.', 'Das Herz pumpt zu viel Blut in die Beine.'], richtig: 0 },
      { id: 'gefaesse-u19', typ: 'mehrfach', plus: true, frage: 'Was hilft gegen schwere Beine und beginnende Krampfadern?', optionen: ['regelmäßig gehen und die Wadenmuskeln bewegen', 'die Beine hochlegen', 'Kompressionsstrümpfe tragen', 'stundenlang still stehen', 'lange mit übergeschlagenen Beinen sitzen'], richtig: [0, 1, 2] },
      { id: 'gefaesse-u20', typ: 'zuordnen', plus: true, frage: 'Ordne jedem Blutbestandteil seine Aufgabe zu.', paare: [['rote Blutkörperchen', 'transportieren Sauerstoff'], ['weiße Blutkörperchen', 'wehren Krankheitserreger ab'], ['Blutplättchen', 'sorgen für die Blutgerinnung'], ['Blutplasma', 'transportiert Nährstoffe, CO₂, Wärme und Hormone']] },
      { id: 'gefaesse-u21', typ: 'eingabe', plus: true, frage: 'Wie heißt der flüssige Teil des Blutes, in dem die Blutzellen schwimmen?', akzeptiert: ['Blutplasma', 'Plasma'] }
    ],
    erklaeren: [
      {
        id: 'gefaesse-e1',
        frage: 'Ein Schüler behauptet: „Arterien transportieren immer sauerstoffreiches Blut und Venen immer sauerstoffarmes Blut.“ Erkläre, warum das falsch ist.',
        tipp: 'Nenne zuerst, wonach Arterien und Venen benannt sind. Dann ein Gegenbeispiel aus dem Lungenkreislauf.',
        begriffe: [
          { name: 'Fließrichtung', muster: ['richtung', 'herzen weg', 'zum herzen'] }, { name: 'Lungenkreislauf', muster: ['lungenkreislauf'] },
          { name: 'Lungenarterie', muster: ['lungenarterie'] }, { name: 'Lungenvene', muster: ['lungenvene'] },
          { name: 'sauerstoffarm', muster: ['sauerstoffarm'] }
        ],
        punkte: [
          { text: 'Arterien und Venen werden nach der Fließrichtung benannt: Arterien führen vom Herzen weg, Venen zum Herzen hin.', p: 1 },
          { text: 'Gegenbeispiel Lungenkreislauf: Die Lungenarterie führt sauerstoffarmes Blut, die Lungenvene sauerstoffreiches Blut.', p: 1 }
        ],
        muster: 'Die Aussage ist falsch, weil Arterien und Venen nicht nach dem Sauerstoffgehalt benannt werden, sondern nach der Fließrichtung. Arterien führen das Blut vom Herzen weg, Venen führen es zum Herzen hin. Im Körperkreislauf stimmt die Aussage zwar, im Lungenkreislauf aber nicht: Die Lungenarterie bringt sauerstoffarmes Blut von der rechten Herzkammer zur Lunge, die Lungenvene bringt sauerstoffreiches Blut von der Lunge zum linken Vorhof.'
      },
      {
        id: 'gefaesse-e2',
        frage: 'Erkläre, wie das Blut aus den Beinen gegen die Schwerkraft zurück zum Herzen gelangt.',
        tipp: 'Drei Bausteine: der Druck in den Venen, die Muskeln, die Klappen.',
        begriffe: [
          { name: 'Venen', muster: ['vene'] }, { name: 'niedriger Druck', muster: ['druck'] },
          { name: 'Muskelpumpe', muster: ['muskelpumpe'] }, { name: 'Venenklappen', muster: ['venenklappe', 'klappe'] },
          { name: 'Rückfluss', muster: ['rueckfluss', 'zurueck'] }
        ],
        punkte: [
          { text: 'In den Venen ist der Blutdruck niedrig, das Herz allein drückt das Blut kaum nach oben.', p: 1 },
          { text: 'Bei Bewegung ziehen sich die Beinmuskeln zusammen und drücken die Venen zusammen (Muskelpumpe).', p: 1 },
          { text: 'Die Venenklappen lassen das Blut nur zum Herzen hin durch und verhindern den Rückfluss.', p: 1 }
        ],
        muster: 'In den Beinvenen ist der Blutdruck niedrig, das Herz allein kann das Blut kaum nach oben drücken. Wenn wir gehen, ziehen sich die Beinmuskeln zusammen und drücken die Venen zusammen. Dadurch wird das Blut weitergepresst. Das nennt man Muskelpumpe. Die Venenklappen wirken wie Ventile: Sie lassen das Blut nur in Richtung Herz durch und schließen sich, sobald es zurückfließen will. So verhindern sie den Rückfluss in die Füße.'
      },
      {
        id: 'gefaesse-e3', plus: true,
        frage: 'Erkläre, wie Krampfadern entstehen und warum Bewegung vorbeugt.',
        begriffe: [
          { name: 'Venenklappen', muster: ['venenklappe', 'klappe'] }, { name: 'Blutstau', muster: ['stau'] },
          { name: 'Muskelpumpe', muster: ['muskelpumpe'] }, { name: 'Bewegung', muster: ['beweg'] }
        ],
        punkte: [
          { text: 'Die Venenklappen in den Beinvenen schließen nicht mehr richtig.', p: 1 },
          { text: 'Das Blut fließt zurück und staut sich, die Venen weiten sich und werden geschlängelt sichtbar.', p: 1 },
          { text: 'Bewegung lässt die Muskelpumpe arbeiten und entlastet die Venen, langes Stehen ohne Bewegung belastet sie.', p: 1 }
        ],
        muster: 'Krampfadern entstehen, wenn die Venenklappen in den Beinvenen nicht mehr richtig schließen. Dann fließt ein Teil des Blutes zurück und staut sich in den Venen. Die Venenwände werden dadurch gedehnt, die Venen weiten sich und schlängeln sich sichtbar unter der Haut. Bei Bewegung arbeitet die Muskelpumpe der Beine und drückt das Blut zum Herzen. Langes Stehen ohne Bewegung schaltet die Muskelpumpe ab, deshalb staut sich dort mehr Blut.'
      }
    ],
    abschluss: [
      { id: 'gefaesse-a1', typ: 'wahl', frage: 'Bei ihr staut sich das Blut in den Beinen. In welchen Gefäßen?', optionen: ['in den Beinvenen', 'in den Beinarterien', 'in der Aorta', 'in den Kapillaren der Lunge'], richtig: 0, erkl: 'Venen bringen das Blut zum Herzen zurück. In den Beinen muss es gegen die Schwerkraft nach oben, und der Druck ist niedrig.' },
      { id: 'gefaesse-a2', typ: 'wahl', frage: 'Warum hilft es ihr, in den Pausen ein paar Minuten zu gehen, statt still zu stehen?', optionen: ['Die Wadenmuskeln drücken die Venen zusammen und pressen das Blut zum Herzen.', 'Beim Gehen schlägt das Herz langsamer.', 'Beim Gehen öffnen sich die Venenklappen in beide Richtungen.', 'Beim Gehen fließt das Blut in den Arterien zurück.'], richtig: 0 },
      { id: 'gefaesse-a3', typ: 'wahl', frage: 'Die Ärztin tastet den Puls am Fußrücken, um die Durchblutung zu prüfen. In welchem Gefäßtyp fühlt sie ihn?', optionen: ['in einer Arterie', 'in einer Vene', 'in einer Kapillare'], richtig: 0 },
      { id: 'gefaesse-a4', typ: 'luecke', frage: 'Was in ihren Beinen passiert:', text: 'Gesunde Venenklappen lassen das Blut nur {zum Herzen hin|zu den Füßen hin} durch. Schließen sie nicht mehr richtig, fließt das Blut {zurück|schneller} und staut sich. Weil das Blut steht, tritt Flüssigkeit durch die dünne Wand der {Kapillaren|Arterien} ins Gewebe aus, und die Knöchel schwellen an.' }
    ],
    epikrise: '<p><strong>Diagnose:</strong> Venenschwäche mit beginnenden Krampfadern. Ein Blutgerinnsel wurde im Ultraschall ausgeschlossen. In einigen Beinvenen schließen die Venenklappen nicht mehr richtig. Beim langen Stehen staut sich das Blut, Flüssigkeit tritt ins Gewebe aus, die Beine werden schwer und schwellen an. Entlassen mit Kompressionsstrümpfen und dem Rat, in den Pausen zu gehen, die Füße zu bewegen und die Beine abends hochzulegen.</p><p><strong>Die Biologie dahinter:</strong> Arterien bringen das Blut mit hohem Druck vom Herzen weg, in den Kapillaren findet der Stoffaustausch statt, Venen bringen das Blut mit niedrigem Druck zurück zum Herzen. In den Beinen schafft das nur die Muskelpumpe zusammen mit den Venenklappen. Wer stillsteht, schaltet die Pumpe ab.</p>'
  });
})();
