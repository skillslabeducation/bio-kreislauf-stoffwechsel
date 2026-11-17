/* Box 2: Raucher, 58, Luftnot beim Treppensteigen – Gasaustausch in der Lunge (Blatt Teil 1, Aufgabe 4) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'gasaustausch', box: 2, teil: 1, blatt: 'T1-4',
    titel: 'Gasaustausch in der Lunge',
    patient: 'Raucher, 58', symptom: 'Luftnot beim Treppensteigen',
    aufnahme: {
      text: '<p>Seit Monaten wird ihm die Luft knapp. Heute musste er im zweiten Stock stehen bleiben und kam nicht mehr weiter. Er raucht seit 40 Jahren eine Schachtel am Tag und hustet morgens zähen Schleim ab.</p><p>Die Atemwege sind nur leicht verengt. Trotzdem gelangt zu wenig Sauerstoff ins Blut, vor allem bei Belastung. Das Problem liegt dort, wo die Luft auf das Blut trifft.</p>',
      werte: { puls: 98, af: 24, spo2: 91 },
      oberaerztin: 'Box 2. Vierzig Jahre geraucht, jetzt reicht die Luft nicht mehr für zwei Stockwerke. Die Antwort liegt in den Lungenbläschen.',
      leitfrage: 'Wie gelangt Sauerstoff aus der Luft ins Blut, und warum klappt das bei ihm nicht mehr richtig?'
    },
    karten: [
      {
        titel: 'Lungenbläschen und Kapillaren',
        abb: 'alveole', abbOpts: { beschriftet: true, pfeile: 'ab' },
        text: '<p>Die Bronchiolen enden in winzigen, traubenartig angeordneten <strong>Lungenbläschen</strong>. Ihr Fachbegriff lautet <strong>Alveolen</strong> (Einzahl: Alveole). Jedes Lungenbläschen ist von einem dichten Netz feinster Blutgefäße umsponnen, den <strong>Kapillaren</strong>.</p><p>Das Blut kommt sauerstoffarm vom Herzen (blau) und fließt an der Wand des Lungenbläschens vorbei. <strong>Pfeil A:</strong> Sauerstoff (O<sub>2</sub>) wandert vom Lungenbläschen ins Blut. <strong>Pfeil B:</strong> Kohlenstoffdioxid (CO<sub>2</sub>) wandert vom Blut ins Lungenbläschen und wird ausgeatmet. Sauerstoffreich (rot) fließt das Blut zurück zum Herzen.</p>',
        merk: 'Lungenbläschen heißen in der Fachsprache Alveolen. Sauerstoff wandert vom Lungenbläschen ins Blut, Kohlenstoffdioxid vom Blut ins Lungenbläschen.',
        achtung: '<strong>Achtung, Falle</strong>Nicht die Luft strömt ins Blut, sondern nur einzelne Gasteilchen wandern durch die Wand. Sauerstoff geht hinein, Kohlenstoffdioxid kommt heraus. Verwechsle die Richtungen nicht.'
      },
      {
        titel: 'Diffusion',
        abb: 'alveole', abbOpts: { pfeile: 'gase' },
        demo: 'diffusion',
        text: '<p>Teilchen sind ständig in ungeordneter Bewegung. Dadurch verteilen sie sich von selbst: vom Ort <strong>hoher Konzentration</strong> zum Ort <strong>niedriger Konzentration</strong>, bis die Konzentration überall gleich ist. Das nennt man <strong>Diffusion</strong>. Ein Tropfen Tinte in Wasser färbt so nach einiger Zeit das ganze Glas.</p><p>In der Lunge: In der eingeatmeten Luft im Lungenbläschen ist viel O<sub>2</sub>, im ankommenden Blut wenig. Also diffundiert O<sub>2</sub> ins Blut. Im Blut ist viel CO<sub>2</sub>, im Lungenbläschen wenig. Also diffundiert CO<sub>2</sub> ins Lungenbläschen. Der Körper muss dafür keine Energie aufwenden.</p>',
        merk: 'Diffusion: Teilchen bewegen sich selbstständig vom Ort hoher zum Ort niedriger Konzentration, bis die Konzentration ausgeglichen ist.',
        achtung: '<strong>Achtung, Falle</strong>Diffusion braucht ein Konzentrationsgefälle. Ist die Konzentration auf beiden Seiten gleich, wandern zwar weiter Teilchen hin und her, aber insgesamt ändert sich nichts mehr.'
      },
      {
        titel: 'Das Gefälle bleibt erhalten',
        text: '<p>Würde das Blut in der Kapillare stehen bleiben, wären die Konzentrationen bald ausgeglichen, und der Gasaustausch käme zum Stillstand. Zwei Dinge verhindern das:</p><p><strong>Durchblutung:</strong> Das Blut fließt ständig weiter und nimmt den Sauerstoff mit. Neues, sauerstoffarmes Blut kommt nach.</p><p><strong>Atmung:</strong> Mit jedem Atemzug kommt frische Luft mit viel Sauerstoff in die Lungenbläschen, und Luft mit viel Kohlenstoffdioxid wird ausgeatmet.</p>',
        merk: 'Durchblutung und Atmung halten das Konzentrationsgefälle aufrecht. Nur so läuft die Diffusion ständig weiter.'
      },
      {
        titel: 'Gebaut für den Austausch',
        text: '<p>Die Lungenbläschen sind genau für ihre Aufgabe gebaut. Das ist das Prinzip <strong>Struktur und Funktion</strong>:</p><ul><li><strong>Sehr große Oberfläche:</strong> Rund 300 Millionen Lungenbläschen haben zusammen etwa 100 m², ungefähr ein Quadrat von 10 mal 10 Metern. Viele kleine Bläschen haben viel mehr Oberfläche als ein einziger großer Sack. Das nennt man <strong>Oberflächenvergrößerung</strong>.</li><li><strong>Sehr dünne Wand:</strong> nur eine Zellschicht. Der Weg für die Gase ist kurz.</li><li><strong>Dichtes Kapillarnetz:</strong> Überall an der Wand fließt Blut vorbei.</li><li><strong>Feuchte Oberfläche:</strong> Die Gase lösen sich im dünnen Flüssigkeitsfilm und gelangen so leichter durch die Wand.</li></ul>',
        merk: 'Große Oberfläche, dünne Wand, dichtes Kapillarnetz, feuchte Oberfläche: So wird der Gasaustausch effektiv.',
        achtung: '<strong>Achtung, Falle</strong>Oberflächenvergrößerung heißt nicht, dass die Lunge größer wird. Sie passt weiter in den Brustkorb, aber ihre innere Fläche ist durch die vielen Bläschen riesig.'
      },
      {
        titel: 'Einatemluft und Ausatemluft',
        plus: true,
        text: '<p>Beim Gasaustausch verändert sich die Luft in der Lunge:</p><ul><li><strong>Sauerstoff:</strong> eingeatmet ca. 21 %, ausgeatmet ca. 16–17 %</li><li><strong>Kohlenstoffdioxid:</strong> eingeatmet ca. 0,04 %, ausgeatmet ca. 4 %</li><li><strong>Stickstoff:</strong> bleibt mit ca. 78 % fast gleich, der Körper nutzt ihn nicht.</li></ul><p>Ausgeatmete Luft enthält also noch viel Sauerstoff. Deshalb funktioniert die Atemspende bei der Ersten Hilfe.</p>',
        merk: 'Ausatemluft enthält weniger Sauerstoff (ca. 16–17 % statt 21 %) und rund hundertmal so viel Kohlenstoffdioxid (ca. 4 % statt 0,04 %).'
      },
      {
        titel: 'Rauchen und die Lunge',
        plus: true,
        text: '<p>Der <strong>Teer</strong> im Zigarettenrauch verklebt die <strong>Flimmerhärchen</strong> in den Atemwegen. Schleim und Schadstoffe werden nicht mehr abtransportiert, sondern müssen abgehustet werden. Das ist der typische Raucherhusten.</p><p>Über Jahre werden außerdem die Wände zwischen den Lungenbläschen zerstört. Aus vielen kleinen Bläschen werden wenige große, schlaffe Blasen. Die Oberfläche für den Gasaustausch wird viel kleiner. Diese Krankheit heißt <strong>Lungenemphysem</strong>. Zerstörte Lungenbläschen wachsen nicht nach.</p>',
        merk: 'Rauchen zerstört Lungenbläschen. Die Austauschfläche wird kleiner, und es gelangt weniger Sauerstoff ins Blut.'
      }
    ],
    ueben: [
      { id: 'gasaustausch-u1', typ: 'eingabe', frage: 'Wie lautet der Fachbegriff für Lungenbläschen?', abb: 'alveole', abbOpts: { pfeile: 'ab' }, akzeptiert: ['Alveolen', 'Alveole', 'Alveoli', 'Alveolus'] },
      { id: 'gasaustausch-u2', typ: 'luecke', frage: 'Welche Gase werden durch die Pfeile A und B dargestellt?', abb: 'alveole', abbOpts: { pfeile: 'ab' }, text: 'Pfeil A zeigt {Sauerstoff|Kohlenstoffdioxid|Stickstoff}. Er wandert vom {Lungenbläschen ins Blut|Blut ins Lungenbläschen}. Pfeil B zeigt {Kohlenstoffdioxid|Sauerstoff|Stickstoff}. Er wandert vom {Blut ins Lungenbläschen|Lungenbläschen ins Blut}.' },
      { id: 'gasaustausch-u3', typ: 'eingabe', frage: 'Pfeil B: Welches Gas wandert aus dem Blut ins Lungenbläschen? Schreib den Namen aus.', abb: 'alveole', abbOpts: { pfeile: 'ab' }, akzeptiert: ['Kohlenstoffdioxid', 'Kohlendioxid', 'CO2'] },
      { id: 'gasaustausch-u4', typ: 'beschriften', frage: 'Benenne die nummerierten Teile.', abb: 'alveole', strukturen: ['lungenblaeschen', 'kapillare', 'bronchiole'] },
      { id: 'gasaustausch-u5', typ: 'wahl', frage: 'Was versteht man unter <strong>Diffusion</strong>?', optionen: ['Teilchen bewegen sich selbstständig vom Ort hoher zum Ort niedriger Konzentration, bis die Konzentration ausgeglichen ist.', 'Teilchen bewegen sich selbstständig vom Ort niedriger zum Ort hoher Konzentration.', 'Das Herz pumpt die Teilchen durch die Wand der Lungenbläschen.', 'Luft strömt durch die Bronchien in die Lungenbläschen.'], richtig: 0, erkl: 'Diffusion läuft von selbst und ohne Pumpe, immer vom Ort hoher zum Ort niedriger Konzentration.' },
      { id: 'gasaustausch-u6', typ: 'luecke', text: 'Im Lungenbläschen ist die Sauerstoffkonzentration {hoch|niedrig}, im ankommenden Blut ist sie {niedrig|hoch}. Deshalb diffundiert Sauerstoff {ins Blut|ins Lungenbläschen}. Bei Kohlenstoffdioxid ist es umgekehrt: Im Blut ist die Konzentration {hoch|niedrig}, also diffundiert es {ins Lungenbläschen|ins Blut}.' },
      { id: 'gasaustausch-u7', typ: 'wahl', frage: 'Das Blut, das zum Lungenbläschen fließt, ist in der Abbildung blau gezeichnet. Was bedeutet das?', abb: 'alveole', abbOpts: { pfeile: 'ab' }, optionen: ['Es ist sauerstoffarm.', 'Es ist sauerstoffreich.', 'Es enthält überhaupt keinen Sauerstoff.', 'Es enthält keine roten Blutkörperchen.'], richtig: 0, erkl: 'Blau steht für sauerstoffarm, nicht für sauerstofffrei. Ein Rest Sauerstoff ist immer im Blut.' },
      { id: 'gasaustausch-u8', typ: 'mehrfach', frage: 'Welche Eigenschaften der Lungenbläschen ermöglichen einen effektiven Gasaustausch?', optionen: ['sehr große Oberfläche', 'sehr dünne Wand aus einer Zellschicht', 'dichtes Netz aus Kapillaren', 'feuchte Oberfläche', 'dicke, muskulöse Wand', 'Knorpelspangen, die sie offen halten'], richtig: [0, 1, 2, 3], erkl: 'Eine dicke, muskulöse Wand haben Arterien. Knorpelspangen gibt es in der Luftröhre.' },
      {
        id: 'gasaustausch-u9', typ: 'liste', frage: 'Nenne zwei Eigenschaften der Lungenbläschen, die einen effektiven Gasaustausch ermöglichen.', anzahl: 2,
        gruppen: [
          ['große Oberfläche', 'sehr große Oberfläche', 'riesige Oberfläche', 'große Austauschfläche', 'Oberflächenvergrößerung', 'viele Lungenbläschen'],
          ['dünne Wand', 'sehr dünne Wand', 'dünne Wände', 'eine Zellschicht', 'einschichtige Wand'],
          ['dichtes Kapillarnetz', 'Kapillarnetz', 'viele Kapillaren', 'gute Durchblutung'],
          ['feuchte Oberfläche', 'feuchte Wand', 'feucht']
        ]
      },
      { id: 'gasaustausch-u10', typ: 'wahl', frage: 'Wie viele Lungenbläschen hat ein Mensch etwa?', optionen: ['rund 300 Millionen', 'rund 300', 'rund 30 000', 'rund 300 Milliarden'], richtig: 0 },
      { id: 'gasaustausch-u11', typ: 'wahl', frage: 'Wie groß ist die Oberfläche aller Lungenbläschen zusammen etwa?', optionen: ['rund 100 m²', 'rund 1 m²', 'rund 10 cm²', 'rund 10 000 m²'], richtig: 0, erkl: 'Etwa 100 m², ungefähr ein Quadrat von 10 mal 10 Metern.' },
      { id: 'gasaustausch-u12', typ: 'wahl', frage: 'Warum besteht die Lunge aus Millionen winziger Bläschen und nicht aus einem einzigen großen Luftsack?', optionen: ['Viele kleine Bläschen haben zusammen eine viel größere Oberfläche für den Gasaustausch.', 'Kleine Bläschen machen die Lunge leichter.', 'In kleinen Bläschen bleibt die Luft wärmer.', 'Ein großer Sack würde beim Einatmen platzen.'], richtig: 0, erkl: 'Das ist Oberflächenvergrößerung: Struktur und Funktion passen zusammen.' },
      { id: 'gasaustausch-u13', typ: 'wahl', frage: 'Warum ist die Wand der Lungenbläschen so dünn?', optionen: ['Damit der Weg für die Gasteilchen kurz ist und die Diffusion schnell geht.', 'Damit die Luft direkt ins Blut strömen kann.', 'Damit die Lunge möglichst leicht ist.', 'Damit die Lungenbläschen beim Ausatmen zusammenfallen.'], richtig: 0 },
      { id: 'gasaustausch-u14', typ: 'luecke', text: 'Durch das Einatmen kommt ständig frische Luft mit {viel|wenig} Sauerstoff in die Lungenbläschen. Das Blut fließt weiter, und neues {sauerstoffarmes|sauerstoffreiches} Blut kommt nach. So bleibt das {Konzentrationsgefälle|Gleichgewicht} erhalten, und die Diffusion läuft weiter.' },
      { id: 'gasaustausch-u15', typ: 'behauptung', aussage: 'In der Lunge wird der Sauerstoff aktiv ins Blut gepumpt.', stimmt: false, gruende: ['Sauerstoff gelangt durch Diffusion ins Blut. Die Teilchen wandern von selbst vom Ort hoher zum Ort niedriger Konzentration.', 'Der Sauerstoff wird nicht gepumpt, sondern vom Zwerchfell durch die Wand ins Blut gedrückt.', 'Sauerstoff gelangt gar nicht ins Blut, er bleibt in den Lungenbläschen.'], richtig: 0 },
      { id: 'gasaustausch-u16', typ: 'behauptung', aussage: 'Auch wenn das Blut in der Kapillare stehen bliebe, ginge der Gasaustausch unverändert weiter.', stimmt: false, gruende: ['Ohne Blutfluss gleichen sich die Konzentrationen aus. Ohne Konzentrationsgefälle findet insgesamt keine Diffusion mehr statt.', 'Der Gasaustausch hängt nur von der Atmung ab, das Blut spielt keine Rolle.', 'Stehendes Blut nimmt mehr Sauerstoff auf als fließendes.'], richtig: 0 },
      {
        id: 'gasaustausch-u17', typ: 'tabelle', plus: true, frage: 'Ergänze die Zusammensetzung von Einatemluft und Ausatemluft.',
        spalten: ['Gas', 'Einatemluft', 'Ausatemluft'],
        zeilen: [
          { kopf: 'Sauerstoff (O<sub>2</sub>)', zellen: [{ optionen: ['ca. 21 %', 'ca. 16–17 %', 'ca. 4 %', 'ca. 0,04 %'], richtig: 0 }, { optionen: ['ca. 21 %', 'ca. 16–17 %', 'ca. 4 %', 'ca. 0,04 %'], richtig: 1 }] },
          { kopf: 'Kohlenstoffdioxid (CO<sub>2</sub>)', zellen: [{ optionen: ['ca. 21 %', 'ca. 16–17 %', 'ca. 4 %', 'ca. 0,04 %'], richtig: 3 }, { optionen: ['ca. 21 %', 'ca. 16–17 %', 'ca. 4 %', 'ca. 0,04 %'], richtig: 2 }] },
          { kopf: 'Stickstoff', zellen: [{ fix: 'ca. 78 %' }, { fix: 'ca. 78 %' }] }
        ]
      },
      { id: 'gasaustausch-u18', typ: 'wahl', plus: true, frage: 'Bei der Atemspende bläst ein Helfer seine Ausatemluft in die Lunge eines anderen Menschen. Warum hilft das?', optionen: ['Ausatemluft enthält noch etwa 16–17 % Sauerstoff.', 'Ausatemluft enthält mehr Sauerstoff als Einatemluft.', 'Der Verletzte braucht vor allem Kohlenstoffdioxid.', 'Ausatemluft enthält kein Kohlenstoffdioxid mehr.'], richtig: 0 },
      { id: 'gasaustausch-u19', typ: 'wahl', plus: true, frage: 'Was bewirkt der Teer im Zigarettenrauch in den Atemwegen?', optionen: ['Er verklebt die Flimmerhärchen, sodass Schleim und Schadstoffe nicht mehr abtransportiert werden.', 'Er erweitert die Bronchien.', 'Er vergrößert die Oberfläche der Lungenbläschen.', 'Er transportiert zusätzlichen Sauerstoff ins Blut.'], richtig: 0 },
      { id: 'gasaustausch-u20', typ: 'luecke', plus: true, frage: 'Lungenemphysem, vereinfacht:', text: 'Beim Lungenemphysem gehen die Wände zwischen den Lungenbläschen {zugrunde|wachsen nach}. Aus vielen kleinen Bläschen werden {wenige große Blasen|noch mehr kleine Bläschen}. Die Oberfläche für den Gasaustausch wird {kleiner|größer}, und es gelangt {weniger|mehr} Sauerstoff ins Blut.' },
      {
        id: 'gasaustausch-u21', typ: 'reihenfolge',
        frage: 'Satzpuzzle: Bring die Sätze eines guten Textes zum Gasaustausch in die logische Reihenfolge. Gerüst: Ort → Prinzip → Sauerstoff → Kohlenstoffdioxid → warum es so gut klappt.',
        schritte: [
          'Der Gasaustausch findet in den Lungenbläschen statt, die von einem dichten Netz aus Kapillaren umgeben sind.',
          'Er beruht auf Diffusion: Teilchen bewegen sich selbstständig vom Ort hoher zum Ort niedriger Konzentration.',
          'Für den Sauerstoff heißt das: Im Lungenbläschen ist seine Konzentration hoch, im ankommenden Blut niedrig.',
          'Deshalb diffundiert Sauerstoff durch die dünne Wand ins Blut der Kapillare.',
          'Beim Kohlenstoffdioxid ist es umgekehrt: Es diffundiert aus dem Blut, wo seine Konzentration hoch ist, ins Lungenbläschen und wird ausgeatmet.',
          'Dass der Austausch so gut klappt, liegt am Bau: Die Wand ist sehr dünn, und alle Lungenbläschen zusammen haben eine riesige Oberfläche von rund 100 m².',
          'Neben dem Bau ist entscheidend, dass das Konzentrationsgefälle erhalten bleibt. Dafür sorgen Atmung und Durchblutung.'
        ],
        erkl: 'Ein guter Text geht vom Ort über das Prinzip zu den beiden Gasen und endet mit der Begründung, warum der Austausch so effektiv ist.'
      },
      { id: 'gasaustausch-u22', typ: 'luecke', frage: 'Setze die Fachbegriffe in den Text ein.', text: 'Der Gasaustausch findet in den {Lungenbläschen|Bronchien|Herzkammern} statt. Sie sind von einem dichten Netz aus {Kapillaren|Knorpelspangen|Venenklappen} umgeben. Der Austausch beruht auf {Diffusion|Pumpen|Muskelkraft}: Teilchen bewegen sich selbstständig vom Ort {hoher|niedriger} zum Ort {niedriger|hoher} Konzentration. Solange ein {Konzentrationsgefälle|Konzentrationsausgleich} besteht, diffundiert Sauerstoff ins {Blut|Lungenbläschen} und Kohlenstoffdioxid ins {Lungenbläschen|Blut}.' },
      { id: 'gasaustausch-u23', typ: 'wahl', frage: 'Ein Mitschüler hat in seinem Text zum Gasaustausch diese vier Sätze geschrieben. Welcher Satz ist fachlich falsch?', optionen: ['Die eingeatmete Luft strömt durch die Wand der Lungenbläschen ins Blut.', 'Die Lungenbläschen sind von einem dichten Netz aus Kapillaren umgeben.', 'Sauerstoff diffundiert vom Ort hoher Konzentration im Lungenbläschen zum Ort niedriger Konzentration im Blut.', 'Kohlenstoffdioxid diffundiert aus dem Blut ins Lungenbläschen und wird ausgeatmet.'], richtig: 0, erkl: 'Nicht die Luft strömt ins Blut. Nur einzelne Gasteilchen diffundieren durch die dünne Wand: Sauerstoff hinein, Kohlenstoffdioxid heraus.' }
    ],
    erklaeren: [
      {
        id: 'gasaustausch-e1',
        frage: 'Erkläre den Gasaustausch in der Lunge unter Verwendung des Begriffs Diffusion.',
        tipp: 'Erst Diffusion erklären, dann Gas für Gas: Wo ist die Konzentration hoch, wo niedrig, und wohin wandern die Teilchen?',
        begriffe: [
          { name: 'Diffusion', muster: ['diffus', 'diffund'] },
          { name: 'Konzentration', muster: ['konzentration'] },
          { name: 'Sauerstoff', muster: ['sauerstoff', 'o2'] },
          { name: 'Kohlenstoffdioxid', muster: ['kohlenstoffdioxid', 'kohlendioxid', 'co2'] },
          { name: 'Lungenbläschen', muster: ['lungenblaeschen', 'alveole'] },
          { name: 'Blut', muster: ['blut', 'kapillar'] }
        ],
        punkte: [
          { text: 'Diffusion: Teilchen bewegen sich selbstständig vom Ort hoher zum Ort niedriger Konzentration.', p: 1 },
          { text: 'Sauerstoff diffundiert aus dem Lungenbläschen (hohe Konzentration) ins Blut der Kapillare (niedrige Konzentration).', p: 1 },
          { text: 'Kohlenstoffdioxid diffundiert aus dem Blut (hohe Konzentration) ins Lungenbläschen (niedrige Konzentration) und wird ausgeatmet.', p: 1 }
        ],
        muster: 'Der Gasaustausch beruht auf Diffusion. Dabei bewegen sich Teilchen selbstständig vom Ort hoher zum Ort niedriger Konzentration, bis die Konzentration ausgeglichen ist. In der eingeatmeten Luft im Lungenbläschen ist viel Sauerstoff, im ankommenden Blut der Kapillare nur wenig. Deshalb diffundiert Sauerstoff durch die dünne Wand ins Blut. Beim Kohlenstoffdioxid ist es umgekehrt: Im Blut ist seine Konzentration hoch, im Lungenbläschen niedrig. Es diffundiert also ins Lungenbläschen und wird ausgeatmet.'
      },
      {
        id: 'gasaustausch-e2',
        frage: 'Nenne zwei Eigenschaften der Lungenbläschen, die einen effektiven Gasaustausch ermöglichen.',
        tipp: 'Denk an Fläche, Wand und Blutgefäße.',
        begriffe: [
          { name: 'Oberfläche', muster: ['oberflaeche', 'flaeche'] },
          { name: 'dünne Wand', muster: ['duenn'] },
          { name: 'Kapillarnetz', muster: ['kapillar'] }
        ],
        punkte: [
          { text: 'Erste Eigenschaft, z. B. sehr große Oberfläche (rund 300 Millionen Lungenbläschen, etwa 100 m²)', p: 1 },
          { text: 'Zweite Eigenschaft, z. B. sehr dünne Wand aus einer Zellschicht, dichtes Kapillarnetz oder feuchte Oberfläche', p: 1 }
        ],
        muster: 'Die Lungenbläschen haben zusammen eine sehr große Oberfläche: Rund 300 Millionen Lungenbläschen ergeben etwa 100 m². Außerdem ist ihre Wand sehr dünn, sie besteht nur aus einer Zellschicht. Dadurch ist der Weg für die Gase kurz. Weitere Eigenschaften sind das dichte Kapillarnetz und die feuchte Oberfläche.'
      },
      {
        id: 'gasaustausch-e3',
        frage: 'Die Lunge besteht aus rund 300 Millionen winzigen Lungenbläschen statt aus einem einzigen großen Luftsack. Erkläre den Vorteil dieses Baus mit dem Prinzip Struktur und Funktion.',
        tipp: 'Was haben viele kleine Bläschen, das ein großer Sack nicht hat? Und was nützt das der Diffusion?',
        begriffe: [
          { name: 'Oberfläche', muster: ['oberflaeche'] },
          { name: 'Oberflächenvergrößerung', muster: ['vergroesser'] },
          { name: 'Diffusion', muster: ['diffus', 'diffund'] },
          { name: 'Struktur und Funktion', muster: ['struktur funktion'] }
        ],
        punkte: [
          { text: 'Viele kleine Bläschen haben zusammen eine viel größere Oberfläche als ein großer Sack (Oberflächenvergrößerung, etwa 100 m²).', p: 1 },
          { text: 'Je größer die Fläche, desto mehr Sauerstoff und Kohlenstoffdioxid können gleichzeitig diffundieren. Der Bau (Struktur) passt zur Aufgabe (Funktion).', p: 1 }
        ],
        muster: 'Viele kleine Lungenbläschen haben zusammen eine viel größere Oberfläche als ein einziger großer Sack mit demselben Volumen. Durch diese Oberflächenvergrößerung entstehen etwa 100 m² Austauschfläche. Je größer die Fläche ist, desto mehr Sauerstoff kann gleichzeitig ins Blut und desto mehr Kohlenstoffdioxid aus dem Blut diffundieren. Hier passt die Struktur zur Funktion: Der Bau der Lunge ermöglicht einen schnellen Gasaustausch.'
      },
      {
        id: 'gasaustausch-e4', plus: true,
        frage: 'Erkläre, warum ein langjähriger Raucher mit zerstörten Lungenbläschen besonders bei Belastung Luftnot bekommt.',
        begriffe: [
          { name: 'Lungenbläschen', muster: ['lungenblaeschen', 'alveole'] },
          { name: 'Oberfläche', muster: ['oberflaeche', 'flaeche'] },
          { name: 'Diffusion', muster: ['diffus', 'diffund'] },
          { name: 'Sauerstoff', muster: ['sauerstoff'] },
          { name: 'Belastung', muster: ['belastung', 'anstrengung'] }
        ],
        punkte: [
          { text: 'Rauchen zerstört die Wände zwischen den Lungenbläschen. Aus vielen kleinen werden wenige große Blasen (Lungenemphysem).', p: 1 },
          { text: 'Die Oberfläche für den Gasaustausch wird kleiner, pro Minute kann weniger Sauerstoff ins Blut diffundieren.', p: 1 },
          { text: 'Bei Belastung brauchen die Muskeln mehr Sauerstoff. Die kleine Fläche reicht dafür nicht aus, es kommt zu Luftnot.', p: 1 }
        ],
        muster: 'Durch das jahrelange Rauchen sind viele Wände zwischen den Lungenbläschen zerstört. Aus vielen kleinen Lungenbläschen sind wenige große Blasen geworden, das nennt man Lungenemphysem. Dadurch ist die Oberfläche für den Gasaustausch viel kleiner. Pro Minute kann weniger Sauerstoff aus den Lungenbläschen ins Blut diffundieren. In Ruhe reicht das knapp. Bei Belastung, etwa beim Treppensteigen, brauchen die Muskeln viel mehr Sauerstoff. Die verkleinerte Fläche schafft das nicht, der Sauerstoffgehalt im Blut sinkt, und es kommt zu Luftnot.'
      },
      {
        id: 'gasaustausch-e5',
        frage: 'Textaufgabe: Beschreibe in einem zusammenhängenden Text, wie in der Lunge Sauerstoff ins Blut und Kohlenstoffdioxid aus dem Blut gelangt. Verwende die Fachbegriffe Lungenbläschen, Kapillare, Diffusion und Konzentrationsgefälle.',
        tipp: 'Schreibgerüst: Ort → Prinzip → Sauerstoff → Kohlenstoffdioxid → warum es so gut klappt. Jeder Teil bekommt mindestens einen eigenen Satz, verbunden mit „deshalb“, „dadurch“ oder „umgekehrt“.',
        begriffe: [
          { name: 'Lungenbläschen', muster: ['lungenblaeschen', 'alveole'] },
          { name: 'Kapillare', muster: ['kapillar'] },
          { name: 'Diffusion', muster: ['diffus', 'diffund'] },
          { name: 'Konzentrationsgefälle', muster: ['gefaelle', 'konzentrationsunterschied'] },
          { name: 'Sauerstoff', muster: ['sauerstoff', 'o2'] },
          { name: 'Kohlenstoffdioxid', muster: ['kohlenstoffdioxid', 'kohlendioxid', 'co2'] },
          { name: 'dünne Wand', muster: ['duenn'] },
          { name: 'Oberfläche', muster: ['oberflaeche'] },
          { name: 'Durchblutung', muster: ['durchblut', 'blut fliesst'] }
        ],
        punkte: [
          { text: 'Ort: Der Gasaustausch findet in den Lungenbläschen statt, die von einem dichten Netz aus Kapillaren umgeben sind.', p: 1 },
          { text: 'Diffusion: Teilchen bewegen sich selbstständig vom Ort hoher zum Ort niedriger Konzentration, bis die Konzentration ausgeglichen ist.', p: 1 },
          { text: 'Sauerstoff: Im Lungenbläschen ist seine Konzentration hoch, im ankommenden Blut niedrig. Deshalb diffundiert er ins Blut der Kapillare.', p: 1 },
          { text: 'Kohlenstoffdioxid: Im Blut ist seine Konzentration hoch, im Lungenbläschen niedrig. Deshalb diffundiert es ins Lungenbläschen und wird ausgeatmet.', p: 1 },
          { text: 'Bau: sehr dünne Wand aus einer Zellschicht (kurzer Weg) bzw. sehr große Oberfläche (rund 100 m²)', p: 1 },
          { text: 'Das Konzentrationsgefälle bleibt erhalten: Durch die Atmung kommt ständig frische Luft nach, durch die Durchblutung fließt das Blut weiter und neues sauerstoffarmes Blut kommt nach.', p: 1 }
        ],
        muster: 'Der Gasaustausch findet in den Lungenbläschen statt. Jedes Lungenbläschen ist von einem dichten Netz feiner Blutgefäße umgeben, den Kapillaren. Der Austausch beruht auf Diffusion: Teilchen bewegen sich selbstständig vom Ort hoher zum Ort niedriger Konzentration, bis die Konzentration ausgeglichen ist. In der eingeatmeten Luft im Lungenbläschen ist die Sauerstoffkonzentration hoch, im sauerstoffarmen Blut, das in der Kapillare ankommt, ist sie niedrig. Wegen dieses Konzentrationsgefälles diffundiert Sauerstoff durch die Wand ins Blut. Beim Kohlenstoffdioxid ist es umgekehrt: Im Blut ist seine Konzentration hoch, im Lungenbläschen niedrig. Deshalb diffundiert es ins Lungenbläschen und wird ausgeatmet. Dass der Austausch so gut klappt, liegt am Bau: Die Wand der Lungenbläschen ist sehr dünn, sie besteht nur aus einer Zellschicht. Der Weg für die Gase ist also kurz. Außerdem haben rund 300 Millionen Lungenbläschen zusammen eine Oberfläche von etwa 100 m². Wichtig ist auch, dass das Konzentrationsgefälle erhalten bleibt: Durch die Atmung kommt ständig frische, sauerstoffreiche Luft in die Lungenbläschen, und durch die Durchblutung fließt das Blut weiter, sodass immer neues sauerstoffarmes Blut nachkommt.'
      }
    ],
    abschluss: [
      { id: 'gasaustausch-a1', typ: 'wahl', frage: 'Die Ärztin skizziert ihm ein Lungenbläschen mit Kapillare. Was zeigen die Pfeile A und B?', abb: 'alveole', abbOpts: { pfeile: 'ab' }, optionen: ['A: Sauerstoff ins Blut, B: Kohlenstoffdioxid ins Lungenbläschen', 'A: Kohlenstoffdioxid ins Blut, B: Sauerstoff ins Lungenbläschen', 'A und B: Sauerstoff ins Blut', 'A: Stickstoff ins Blut, B: Sauerstoff ins Lungenbläschen'], richtig: 0 },
      { id: 'gasaustausch-a2', typ: 'wahl', frage: 'Bei ihm sind viele Lungenbläschen zerstört. Was hat sich dadurch vor allem verändert?', optionen: ['Die Oberfläche für den Gasaustausch ist kleiner geworden.', 'Die Oberfläche für den Gasaustausch ist größer geworden.', 'Die Luftröhre ist kürzer geworden.', 'Das Blut enthält mehr Sauerstoff als vorher.'], richtig: 0, erkl: 'Weniger Fläche bedeutet: Pro Minute diffundiert weniger Sauerstoff ins Blut.' },
      { id: 'gasaustausch-a3', typ: 'luecke', frage: 'Er bekommt Sauerstoff über eine Nasenbrille. Dadurch steigt die Sauerstoffkonzentration in seinen Lungenbläschen.', text: 'Das Konzentrationsgefälle zum Blut wird {größer|kleiner}. Deshalb diffundiert pro Minute {mehr|weniger} Sauerstoff ins Blut, obwohl die Austauschfläche {gleich klein bleibt|wieder wächst}.' },
      { id: 'gasaustausch-a4', typ: 'behauptung', frage: 'Er keucht und sagt:', aussage: 'Wenn ich einfach schneller atme, ist das Problem gelöst.', stimmt: false, gruende: ['Schnelleres Atmen bringt zwar mehr frische Luft, aber die Austauschfläche bleibt klein. Durch die zerstörten Lungenbläschen kann trotzdem zu wenig Sauerstoff diffundieren.', 'Schnelleres Atmen senkt den Sauerstoffgehalt in den Lungenbläschen.', 'Beim Atmen wird gar kein Sauerstoff aufgenommen, nur Kohlenstoffdioxid abgegeben.'], richtig: 0 },
      { id: 'gasaustausch-a5', typ: 'reihenfolge', frage: 'Welchen Weg nimmt ein Sauerstoffteilchen aus der Nasenbrille bis ins Blut?', schritte: ['Nasenhöhle', 'Rachen', 'Kehlkopf', 'Luftröhre', 'Bronchien', 'Bronchiolen', 'Lungenbläschen', 'Blut in der Kapillare'] }
    ],
    epikrise: '<p><strong>Diagnose:</strong> Lungenemphysem nach 40 Jahren Rauchen. Viele Lungenbläschen sind zerstört, die Austauschfläche ist deutlich kleiner. In Ruhe reicht sie knapp, bei Belastung gelangt zu wenig Sauerstoff ins Blut. Mit Sauerstoff über die Nasenbrille stieg die Sättigung wieder. Entlassen mit Termin beim Lungenarzt und einem Platz im Rauchstopp-Programm. Die zerstörten Lungenbläschen wachsen nicht nach, aber ohne Rauch schreitet der Schaden langsamer voran.</p><p><strong>Die Biologie dahinter:</strong> Der Gasaustausch läuft durch Diffusion: Sauerstoff wandert vom Ort hoher Konzentration im Lungenbläschen zum Ort niedriger Konzentration im Blut, Kohlenstoffdioxid umgekehrt. Damit genug ankommt, braucht die Lunge eine riesige Oberfläche, eine hauchdünne Wand und ein dichtes Kapillarnetz. Fehlt Fläche, fehlt Sauerstoff.</p>'
  });
})();
