/* Box 0: Schichtbeginn, „Lebt das?“ – Biologie und Kennzeichen des Lebens (Blatt Teil 1, Aufgaben 1 und 2) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'leben', box: 0, teil: 1, blatt: 'T1-1, T1-2',
    titel: 'Biologie und Kennzeichen des Lebens',
    patient: 'Schichtbeginn', symptom: 'Lebt das?',
    aufnahme: {
      text: '<p>Schichtbeginn, 22 Uhr. Das Board ist noch leer. Ein Kollege aus der Spätschicht stellt eine Petrischale, ein Glas und eine kleine Tüte auf den Tresen und fragt den neuen Praktikanten nur: „Lebt das?“</p><p>Eine Vermutung reicht ihm nicht, er will eine Begründung. Die bekommst du nur mit den Kennzeichen des Lebens.</p>',
      werte: {},
      oberaerztin: 'Box 0, noch kein Patient. Wer Leben retten will, sollte es zuerst erkennen.',
      leitfrage: 'Woran erkennt man, ob etwas lebt, und womit beschäftigt sich die Biologie?'
    },
    karten: [
      {
        titel: 'Biologie: die Lehre vom Leben',
        text: '<p>Das Wort <strong>Biologie</strong> stammt aus dem Griechischen: <em>bios</em> heißt Leben, <em>logos</em> heißt Lehre. Biologie ist also die <strong>Lehre vom Leben</strong>.</p><p>Die Biologie ist eine Naturwissenschaft. Sie erforscht alle <strong>Lebewesen</strong>, also Menschen, Tiere, Pflanzen, Pilze und Mikroorganismen: ihren Bau, ihre Lebensvorgänge, ihre Entwicklung und ihre Beziehungen untereinander und zur Umwelt.</p>',
        merk: 'Biologie ist die Lehre vom Leben (griechisch bios = Leben, logos = Lehre). Sie erforscht die Lebewesen, ihren Bau und ihre Lebensvorgänge.'
      },
      {
        titel: 'Teilgebiete der Biologie',
        text: '<p>Die Biologie ist so groß, dass sie in Teilgebiete aufgeteilt ist:</p><ul><li><strong>Botanik:</strong> Pflanzen</li><li><strong>Zoologie:</strong> Tiere</li><li><strong>Humanbiologie:</strong> der Mensch, Bau und Funktion seines Körpers</li><li><strong>Mikrobiologie:</strong> Kleinstlebewesen wie Bakterien und Hefen</li><li><strong>Genetik:</strong> Vererbung von Merkmalen</li><li><strong>Ökologie:</strong> Beziehungen der Lebewesen untereinander und zu ihrer Umwelt</li><li><strong>Zellbiologie:</strong> Bau und Funktion der Zellen</li><li><strong>Evolutionsbiologie:</strong> Entstehung und Veränderung der Arten</li><li><strong>Verhaltensbiologie:</strong> Verhalten von Tieren und Menschen</li><li><strong>Physiologie:</strong> Lebensvorgänge, zum Beispiel wie Organe arbeiten</li></ul>',
        merk: 'Botanik: Pflanzen. Zoologie: Tiere. Humanbiologie: Mensch. Genetik: Vererbung. Ökologie: Lebewesen und Umwelt.',
        achtung: '<strong>Achtung, Falle</strong>Ökologie ist nicht dasselbe wie Umweltschutz. Die Ökologie erforscht, wie Lebewesen und Umwelt zusammenhängen. Der Umweltschutz nutzt dieses Wissen.'
      },
      {
        titel: 'Die Kennzeichen des Lebens',
        text: '<ul><li><strong>Bewegung:</strong> Lebewesen bewegen sich oder Teile ihres Körpers aus eigener Kraft.</li><li><strong>Reizbarkeit:</strong> Sie nehmen Reize wie Licht, Wärme oder Berührung auf und reagieren darauf.</li><li><strong>Stoffwechsel:</strong> Sie nehmen Stoffe auf, wandeln sie um und geben andere Stoffe ab. Dabei gewinnen sie Energie und bauen körpereigene Stoffe auf.</li><li><strong>Wachstum:</strong> Sie werden größer, weil sich ihre Zellen teilen und vergrößern.</li><li><strong>Entwicklung:</strong> Sie verändern im Lauf ihres Lebens Gestalt und Fähigkeiten.</li><li><strong>Fortpflanzung:</strong> Sie erzeugen Nachkommen und geben dabei ihre Erbinformation weiter.</li><li><strong>Aufbau aus Zellen:</strong> Sie bestehen aus einer oder aus vielen Zellen.</li></ul><p>Nicht jedes Kennzeichen ist ständig zu sehen. Ein Igel im Winterschlaf fährt seine Lebensvorgänge herunter, lebt aber weiter.</p>',
        merk: 'Kennzeichen des Lebens: Bewegung, Reizbarkeit, Stoffwechsel, Wachstum, Entwicklung, Fortpflanzung, Aufbau aus Zellen. Je nach Buch heißen sechs davon „die Kennzeichen“.',
        achtung: '<strong>Achtung, Falle</strong>Ein einzelnes Kennzeichen beweist nichts. Erst wenn alle Kennzeichen zusammenkommen, spricht man von einem Lebewesen.'
      },
      {
        titel: 'Kennzeichen erklären: mit Beispiel',
        text: '<p>Eine gute Erklärung hat drei Teile: das <strong>Kennzeichen</strong>, was es <strong>bedeutet</strong>, und ein konkretes <strong>Beispiel</strong>.</p><ul><li><strong>Bewegung:</strong> Ein Fisch schwimmt mit Flossenschlägen. Eine Tulpe öffnet morgens ihre Blüte.</li><li><strong>Reizbarkeit:</strong> Bei hellem Licht wird die Pupille enger.</li><li><strong>Stoffwechsel:</strong> Der Mensch verdaut Nahrung, atmet Sauerstoff ein und Kohlenstoffdioxid aus.</li><li><strong>Wachstum:</strong> Ein Baby wird im ersten Lebensjahr etwa 25 cm größer.</li><li><strong>Entwicklung:</strong> Aus einer Kaulquappe wird ein Frosch.</li><li><strong>Fortpflanzung:</strong> Eine Katze bekommt Junge, die ihren Eltern ähneln.</li><li><strong>Aufbau aus Zellen:</strong> Unter dem Mikroskop sieht man im Zwiebelhäutchen viele einzelne Zellen.</li></ul>',
        merk: 'Kennzeichen nennen, Bedeutung erklären, konkretes Beispiel geben.'
      },
      {
        titel: 'Gegenbeispiel Feuer',
        text: '<p>Ein Feuer <strong>bewegt sich</strong>, es <strong>wächst</strong> und braucht <strong>Sauerstoff</strong>. Auf den ersten Blick wirkt das lebendig.</p><p>Doch es fehlen wichtige Kennzeichen: Feuer <strong>besteht nicht aus Zellen</strong>. Es reagiert nicht gezielt auf Reize. Ein Funke entzündet zwar ein neues Feuer, aber dabei wird <strong>keine Erbinformation</strong> weitergegeben, es ist also keine Fortpflanzung. Feuer hat auch keinen geregelten Stoffwechsel, der körpereigene Stoffe aufbaut. Es verbrennt Stoffe nur.</p>',
        merk: 'Ein Lebewesen muss alle Kennzeichen zugleich erfüllen. Feuer erfüllt nur einige davon, und auch die nur scheinbar.',
        achtung: '<strong>Achtung, Falle</strong>„Es wächst und bewegt sich“ reicht als Beweis nicht. Prüfe immer alle Kennzeichen, besonders den Aufbau aus Zellen.'
      },
      {
        titel: 'Grenzfall Virus',
        plus: true,
        text: '<p><strong>Viren</strong> sind viel kleiner als Bakterien. Sie bestehen nicht aus Zellen, sondern nur aus Erbinformation in einer Hülle aus Eiweiß. Einen eigenen <strong>Stoffwechsel</strong> haben sie nicht.</p><p>Vermehren können sie sich nur in einer <strong>Wirtszelle</strong>: Sie schleusen ihre Erbinformation ein, und die Zelle baut dann neue Viren. Außerhalb einer Zelle zeigen Viren keine Lebensvorgänge. Deshalb werden sie meist nicht zu den Lebewesen gezählt.</p><p>Weil Viren keinen eigenen Stoffwechsel haben, wirken Antibiotika nicht gegen sie. Antibiotika helfen nur gegen Bakterien.</p>',
        merk: 'Viren haben keinen eigenen Stoffwechsel und vermehren sich nur in Wirtszellen. Sie gelten meist nicht als Lebewesen.'
      }
    ],
    ueben: [
      { id: 'leben-u1', typ: 'wahl', frage: 'Was bedeutet der Begriff <strong>Biologie</strong>?', optionen: ['Lehre vom Leben', 'Lehre von den Pflanzen', 'Lehre vom menschlichen Körper', 'Lehre von den Stoffen'], richtig: 0, erkl: 'Griechisch bios = Leben, logos = Lehre. Pflanzen und der menschliche Körper sind nur Teilgebiete.' },
      { id: 'leben-u2', typ: 'luecke', text: 'Das Wort Biologie stammt aus dem {Griechischen|Lateinischen|Englischen}. Bios bedeutet {Leben|Körper|Natur}, logos bedeutet {Lehre|Zelle|Pflanze}. Die Biologie erforscht alle {Lebewesen|Stoffe|Gesteine}.' },
      {
        id: 'leben-u3', typ: 'liste', frage: 'Nenne vier Teilgebiete der Biologie.', anzahl: 4,
        gruppen: [
          ['Botanik', 'Pflanzenkunde'], ['Zoologie', 'Tierkunde'], ['Humanbiologie', 'Menschenkunde'], ['Mikrobiologie'],
          ['Genetik', 'Vererbungslehre'], ['Ökologie'], ['Zellbiologie', 'Zytologie', 'Cytologie'],
          ['Evolutionsbiologie', 'Evolutionslehre'], ['Verhaltensbiologie', 'Verhaltensforschung', 'Ethologie'],
          ['Physiologie'], ['Anatomie'], ['Neurobiologie'], ['Molekularbiologie']
        ]
      },
      { id: 'leben-u4', typ: 'zuordnen', frage: 'Ordne jedem Teilgebiet zu, womit es sich beschäftigt.', paare: [['Botanik', 'Pflanzen'], ['Zoologie', 'Tiere'], ['Humanbiologie', 'Bau und Funktion des menschlichen Körpers'], ['Mikrobiologie', 'Bakterien, Hefen und andere Kleinstlebewesen'], ['Genetik', 'Vererbung von Merkmalen'], ['Ökologie', 'Beziehungen zwischen Lebewesen und ihrer Umwelt']] },
      { id: 'leben-u5', typ: 'wahl', frage: 'Eine Forscherin untersucht, wie sich die Zahl der Füchse in einem Wald verändert, wenn es weniger Mäuse gibt. In welchem Teilgebiet arbeitet sie?', optionen: ['Ökologie', 'Genetik', 'Botanik', 'Humanbiologie'], richtig: 0, erkl: 'Es geht um die Beziehungen zwischen Lebewesen, hier zwischen Räuber und Beute. Das ist Ökologie.' },
      { id: 'leben-u6', typ: 'wahl', frage: 'Ein Labor klärt, warum ein Kind dieselbe Blutgruppe hat wie seine Mutter. Welches Teilgebiet ist zuständig?', optionen: ['Genetik', 'Ökologie', 'Zoologie', 'Mikrobiologie'], richtig: 0, erkl: 'Die Genetik ist die Vererbungslehre. Sie erklärt, wie Merkmale von den Eltern an die Kinder weitergegeben werden.' },
      {
        id: 'leben-u7', typ: 'liste', frage: 'Nenne sechs Kennzeichen von Lebewesen.', anzahl: 6,
        gruppen: [
          ['Bewegung', 'Eigenbewegung', 'bewegen'], ['Reizbarkeit', 'Reaktion auf Reize', 'Reizaufnahme', 'reizbar'],
          ['Stoffwechsel', 'Stoffumwandlung'], ['Wachstum', 'wachsen'], ['Entwicklung', 'entwickeln'],
          ['Fortpflanzung', 'Vermehrung', 'fortpflanzen', 'vermehren'],
          ['Aufbau aus Zellen', 'Zellen', 'Zellaufbau', 'besteht aus Zellen', 'aus Zellen aufgebaut']
        ],
        erkl: 'Es gibt sieben Kennzeichen. Je nach Buch heißen sechs davon „die Kennzeichen“, deshalb zählt jede Auswahl von sechs.'
      },
      { id: 'leben-u8', typ: 'zuordnen', frage: 'Ordne jedem Kennzeichen ein passendes Beispiel zu.', paare: [['Bewegung', 'Ein Fisch schwimmt mit Flossenschlägen durchs Wasser.'], ['Reizbarkeit', 'Bei hellem Licht wird die Pupille enger.'], ['Stoffwechsel', 'Eine Kuh frisst Gras, verdaut es und scheidet Reste aus.'], ['Wachstum', 'Ein Kind wird jedes Jahr einige Zentimeter größer.'], ['Entwicklung', 'Aus einer Raupe wird ein Schmetterling.'], ['Fortpflanzung', 'Eine Katze bringt vier Junge zur Welt.'], ['Aufbau aus Zellen', 'Unter dem Mikroskop sieht man im Zwiebelhäutchen viele kleine Kammern.']] },
      { id: 'leben-u9', typ: 'eingabe', frage: 'Lebewesen nehmen Reize aus der Umwelt auf und reagieren darauf. Wie heißt dieses Kennzeichen?', akzeptiert: ['Reizbarkeit', 'Reaktion auf Reize', 'reizbar'] },
      { id: 'leben-u10', typ: 'eingabe', frage: 'Lebewesen erzeugen Nachkommen und geben dabei ihre Erbinformation weiter. Wie heißt dieses Kennzeichen?', akzeptiert: ['Fortpflanzung', 'Vermehrung'] },
      { id: 'leben-u11', typ: 'luecke', text: 'Beim Stoffwechsel nehmen Lebewesen Stoffe {auf|nur ab}, {wandeln sie um|lagern sie unverändert ein} und geben andere Stoffe {ab|nie ab}. Dabei gewinnen sie {Energie|Reize}.' },
      { id: 'leben-u12', typ: 'wahl', frage: 'Was unterscheidet <strong>Wachstum</strong> von <strong>Entwicklung</strong>?', optionen: ['Wachstum heißt größer werden. Entwicklung heißt, Gestalt und Fähigkeiten im Lauf des Lebens zu verändern.', 'Beides bedeutet dasselbe: größer werden.', 'Wachstum gibt es nur bei Pflanzen, Entwicklung nur bei Tieren.', 'Entwicklung heißt, Nachkommen zu bekommen.'], richtig: 0 },
      { id: 'leben-u13', typ: 'wahl', frage: 'Woraus bestehen alle Lebewesen?', optionen: ['aus einer oder vielen Zellen', 'aus Organen', 'aus Muskeln und Knochen', 'aus Blut und Wasser'], richtig: 0, erkl: 'Ein Bakterium besteht aus einer einzigen Zelle, der Mensch aus Billionen. Organe haben nur Vielzeller.' },
      { id: 'leben-u14', typ: 'mehrfach', frage: 'Welche Kennzeichen des Lebens zeigt ein Feuer <strong>scheinbar</strong>?', optionen: ['Bewegung', 'Wachstum', 'Es braucht Sauerstoff, das wirkt wie Stoffwechsel.', 'Aufbau aus Zellen', 'Fortpflanzung mit Weitergabe von Erbinformation', 'gezielte Reaktion auf Reize'], richtig: [0, 1, 2] },
      { id: 'leben-u15', typ: 'behauptung', aussage: 'Ein Feuer bewegt sich, wächst und braucht Sauerstoff. Also ist es ein Lebewesen.', stimmt: false, gruende: ['Feuer ist zu heiß, als dass darin etwas leben könnte.', 'Ein Lebewesen muss alle Kennzeichen zugleich zeigen. Feuer besteht nicht aus Zellen und pflanzt sich nicht mit Vererbung fort.', 'Feuer braucht keinen Sauerstoff, deshalb hat es keinen Stoffwechsel.'], richtig: 1 },
      { id: 'leben-u16', typ: 'behauptung', aussage: 'Pflanzen bewegen sich nicht. Deshalb erfüllen sie nicht alle Kennzeichen des Lebens.', stimmt: false, gruende: ['Pflanzen bewegen Teile ihres Körpers, zum Beispiel richten sie Blätter zum Licht aus oder öffnen und schließen ihre Blüten.', 'Pflanzen sind keine Lebewesen, deshalb gelten die Kennzeichen für sie nicht.', 'Bewegung gehört nicht zu den Kennzeichen des Lebens.'], richtig: 0 },
      { id: 'leben-u17', typ: 'wahl', plus: true, frage: 'Warum werden Viren meist <strong>nicht</strong> zu den Lebewesen gezählt?', optionen: ['Sie haben keinen eigenen Stoffwechsel und vermehren sich nur in Wirtszellen.', 'Sie sind zu klein, um sie mit bloßem Auge zu sehen.', 'Sie machen Menschen krank.', 'Sie enthalten keine Erbinformation.'], richtig: 0, erkl: 'Auch Bakterien sind winzig und können krank machen, und sie sind trotzdem Lebewesen. Entscheidend ist, dass Viren ohne Wirtszelle keine Lebensvorgänge zeigen.' },
      { id: 'leben-u18', typ: 'mehrfach', plus: true, frage: 'Was trifft auf Viren zu?', optionen: ['Sie bestehen aus Erbinformation in einer Hülle aus Eiweiß.', 'Sie vermehren sich nur in lebenden Wirtszellen.', 'Sie bestehen aus Zellen.', 'Sie haben einen eigenen Stoffwechsel.', 'Antibiotika wirken gut gegen sie.'], richtig: [0, 1] },
      { id: 'leben-u19', typ: 'wahl', plus: true, frage: 'Ein Patient mit Grippe möchte ein Antibiotikum. Warum hilft es nicht gegen das Grippevirus?', optionen: ['Antibiotika wirken gegen Bakterien. Viren haben keinen eigenen Stoffwechsel, den ein Antibiotikum stören könnte.', 'Grippeviren sind zu groß für Antibiotika.', 'Antibiotika wirken nur bei Kindern.', 'Antibiotika wirken nur im Darm.'], richtig: 0 },
      { id: 'leben-u20', typ: 'behauptung', plus: true, aussage: 'Viren vermehren sich. Also sind sie eindeutig Lebewesen.', stimmt: false, gruende: ['Viren vermehren sich nicht selbst, sondern lassen eine Wirtszelle neue Viren bauen. Außerdem bestehen sie nicht aus Zellen und haben keinen eigenen Stoffwechsel.', 'Viren vermehren sich überhaupt nicht, es sind immer gleich viele.', 'Nur Tiere vermehren sich, Viren und Pflanzen nicht.'], richtig: 0 }
    ],
    erklaeren: [
      {
        id: 'leben-e1',
        frage: 'Erkläre den Begriff Biologie.',
        tipp: 'Woher kommt das Wort, und was untersucht die Biologie?',
        begriffe: [
          { name: 'Lehre', muster: ['lehre', 'wissenschaft'] },
          { name: 'Leben', muster: ['leben'] },
          { name: 'Lebewesen', muster: ['lebewesen'] }
        ],
        punkte: [
          { text: 'Biologie ist die Lehre (Wissenschaft) vom Leben, von griechisch bios = Leben und logos = Lehre.', p: 1 },
          { text: 'Sie erforscht die Lebewesen, zum Beispiel ihren Bau, ihre Lebensvorgänge und ihre Beziehungen zur Umwelt.', p: 1 }
        ],
        muster: 'Biologie ist die Lehre vom Leben. Das Wort kommt aus dem Griechischen: bios heißt Leben, logos heißt Lehre. Die Biologie ist eine Naturwissenschaft. Sie erforscht alle Lebewesen, also Menschen, Tiere, Pflanzen, Pilze und Mikroorganismen: ihren Bau, ihre Lebensvorgänge, ihre Entwicklung und ihre Beziehungen untereinander und zu ihrer Umwelt.'
      },
      {
        id: 'leben-e2',
        frage: 'Nenne vier Teilgebiete der Biologie und beschreibe kurz, womit sie sich beschäftigen.',
        tipp: 'Denk an die großen Gruppen von Lebewesen und an Themen wie Vererbung oder Umwelt. Jedes richtige Teilgebiet zählt.',
        begriffe: [
          { name: 'Botanik', muster: ['botanik'] }, { name: 'Zoologie', muster: ['zoologie'] },
          { name: 'Humanbiologie', muster: ['humanbiologie'] }, { name: 'Genetik', muster: ['genetik', 'vererbung'] }
        ],
        punkte: [
          { text: 'Zwei Teilgebiete mit passender Beschreibung, z. B. Botanik: Pflanzen, Zoologie: Tiere', p: 1 },
          { text: 'Zwei weitere Teilgebiete mit passender Beschreibung, z. B. Humanbiologie: Mensch, Genetik: Vererbung', p: 1 }
        ],
        muster: 'Die Botanik ist die Pflanzenkunde. Sie untersucht Bau, Lebensweise und Vielfalt der Pflanzen. Die Zoologie ist die Tierkunde und beschäftigt sich mit den Tieren. Die Humanbiologie erforscht den Menschen, also den Bau und die Funktion seines Körpers, zum Beispiel Atmung, Kreislauf und Verdauung. Die Genetik ist die Vererbungslehre. Sie untersucht, wie Merkmale wie die Blutgruppe von den Eltern an die Kinder weitergegeben werden.'
      },
      {
        id: 'leben-e3',
        frage: 'Erkläre drei Kennzeichen von Lebewesen anhand jeweils eines Beispiels.',
        tipp: 'Wähle drei beliebige Kennzeichen. Für jedes: Was bedeutet es, und woran sieht man es bei einem bestimmten Lebewesen?',
        begriffe: [
          { name: 'Reizbarkeit', muster: ['reiz'] },
          { name: 'Stoffwechsel', muster: ['stoffwechsel'] },
          { name: 'Wachstum', muster: ['wachs'] },
          { name: 'Beispiel', muster: ['beispiel'] }
        ],
        punkte: [
          { text: 'Erstes Kennzeichen richtig erklärt, mit passendem Beispiel (z. B. Reizbarkeit: Bei hellem Licht wird die Pupille enger.)', p: 1 },
          { text: 'Zweites Kennzeichen richtig erklärt, mit passendem Beispiel (z. B. Stoffwechsel: Der Mensch verdaut Nahrung und gewinnt daraus Energie.)', p: 1 },
          { text: 'Drittes Kennzeichen richtig erklärt, mit passendem Beispiel (z. B. Wachstum: Ein Baby wird größer, weil sich seine Zellen teilen.)', p: 1 }
        ],
        muster: 'Reizbarkeit: Lebewesen nehmen Reize aus ihrer Umwelt auf und reagieren darauf. Zum Beispiel wird die Pupille bei hellem Licht enger, damit weniger Licht ins Auge fällt. Stoffwechsel: Lebewesen nehmen Stoffe auf, wandeln sie um und geben andere Stoffe ab. Dabei gewinnen sie Energie. Zum Beispiel verdaut der Mensch seine Nahrung, nimmt Sauerstoff auf und atmet Kohlenstoffdioxid aus. Wachstum: Lebewesen werden größer, weil sich ihre Zellen teilen und vergrößern. Zum Beispiel wächst ein Baby im ersten Lebensjahr um etwa 25 Zentimeter.'
      },
      {
        id: 'leben-e4',
        frage: 'Ein Feuer bewegt sich, wächst und benötigt Sauerstoff. Trotzdem ist es kein Lebewesen. Begründe diese Aussage.',
        tipp: 'Wie viele Kennzeichen muss ein Lebewesen erfüllen? Welche fehlen dem Feuer?',
        begriffe: [
          { name: 'alle Kennzeichen', muster: ['alle kennzeichen'] },
          { name: 'Zellen', muster: ['zelle'] },
          { name: 'Fortpflanzung', muster: ['fortpflanz', 'pflanzt fort', 'vermehr'] },
          { name: 'Reize', muster: ['reiz'] }
        ],
        punkte: [
          { text: 'Ein Lebewesen muss alle Kennzeichen des Lebens zugleich erfüllen. Einzelne Kennzeichen reichen nicht.', p: 1 },
          { text: 'Feuer erfüllt mehrere Kennzeichen nicht, z. B. besteht es nicht aus Zellen, reagiert nicht gezielt auf Reize und pflanzt sich nicht mit Vererbung fort.', p: 1 }
        ],
        muster: 'Ein Lebewesen muss alle Kennzeichen des Lebens zugleich erfüllen. Dass ein Feuer sich bewegt, wächst und Sauerstoff braucht, reicht deshalb nicht. Das Feuer besteht nicht aus Zellen. Es reagiert nicht gezielt auf Reize, und es pflanzt sich nicht mit Vererbung fort: Ein Funke entzündet zwar ein neues Feuer, gibt aber keine Erbinformation weiter. Außerdem hat Feuer keinen geregelten Stoffwechsel, der körpereigene Stoffe aufbaut. Es verbrennt Stoffe nur.'
      }
    ],
    abschluss: [
      { id: 'leben-a1', typ: 'behauptung', frage: 'Im Glas liegt Salzlösung. Über Nacht ist darin ein Kristall gewachsen. Der Kollege sagt:', aussage: 'Der Kristall wächst. Also lebt er.', stimmt: false, gruende: ['Wachstum allein reicht nicht. Der Kristall lagert nur Salzteilchen von außen an. Er besteht nicht aus Zellen und hat keinen Stoffwechsel.', 'Er lebt nicht, weil er sich nicht bewegt. Bewegung ist das einzige sichere Kennzeichen.', 'Er lebt nur, solange er in der Salzlösung liegt.'], richtig: 0 },
      { id: 'leben-a2', typ: 'behauptung', frage: 'Ein Saugroboter rollt über den Flur. Er weicht Hindernissen aus und fährt zur Ladestation, wenn der Akku leer ist. Der Kollege sagt:', aussage: 'Der Roboter bewegt sich, reagiert auf seine Umgebung und nimmt Energie auf. Also ist er ein Lebewesen.', stimmt: false, gruende: ['Er besteht nicht aus Zellen, wächst nicht, entwickelt sich nicht und pflanzt sich nicht fort.', 'Er lebt nicht, weil er Strom statt Nahrung als Energiequelle nutzt. Sonst wäre er ein Lebewesen.', 'Er ist ein Lebewesen, denn drei Kennzeichen reichen aus.'], richtig: 0 },
      { id: 'leben-a3', typ: 'behauptung', frage: 'In der Tüte ist ein Samenkorn. Es liegt seit einem Jahr trocken im Regal. Der Kollege sagt:', aussage: 'Das Samenkorn bewegt sich nicht und wächst nicht. Es ist also nicht lebendig.', stimmt: false, gruende: ['Es besteht aus lebenden Zellen und hat einen stark verlangsamten Stoffwechsel. Bekommt es Wasser, keimt es, wächst und entwickelt sich zur Pflanze.', 'Es lebt, weil es Sauerstoff braucht. Das reicht als Beweis.', 'Samenkörner sind nie lebendig, erst die fertige Pflanze lebt.'], richtig: 0 },
      { id: 'leben-a4', typ: 'behauptung', frage: 'In der Petrischale ist Hefe mit etwas Zucker. Es bilden sich Gasbläschen, und unter dem Mikroskop sieht man nach einigen Stunden viel mehr Hefezellen als vorher. Der Kollege sagt:', aussage: 'Hefe ist ein Lebewesen.', stimmt: true, gruende: ['Hefe besteht aus Zellen, hat einen Stoffwechsel, denn sie baut Zucker ab und bildet dabei Kohlenstoffdioxid, und sie vermehrt sich.', 'Hefe bildet Bläschen. Das allein beweist schon, dass sie lebt.', 'Hefe ist kein Lebewesen, sondern ein Backtriebmittel wie Backpulver.'], richtig: 0 },
      { id: 'leben-a5', typ: 'wahl', frage: 'Der Kollege nickt. Nach welcher Regel hast du entschieden?', optionen: ['Ein Lebewesen muss alle Kennzeichen des Lebens erfüllen, einzelne reichen nicht.', 'Was sich bewegt, lebt.', 'Was wächst, lebt.', 'Was Sauerstoff braucht, lebt.'], richtig: 0 }
    ],
    epikrise: '<p><strong>Ergebnis:</strong> Hefe und Samenkorn leben, Kristall und Roboter nicht. Der Kollege ist zufrieden, die Schicht kann beginnen.</p><p><strong>Die Biologie dahinter:</strong> Biologie ist die Lehre vom Leben. Ob etwas lebt, entscheidet kein einzelnes Merkmal, sondern alle Kennzeichen zusammen: Bewegung, Reizbarkeit, Stoffwechsel, Wachstum, Entwicklung, Fortpflanzung und Aufbau aus Zellen. Feuer, Kristall und Roboter zeigen nur einzelne davon.</p>'
  });
})();
