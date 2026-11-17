/* Box 10: Nachtfortbildung um 3 Uhr – Formen äußerer Atmung (Stoffliste der Lehrerin, Punkt 5) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'atmungsformen', box: 10, teil: 1, blatt: 'L5',
    titel: 'Formen äußerer Atmung',
    patient: 'Fortbildung, 3:00 Uhr', symptom: 'Wie atmen Fisch, Heuschrecke, Regenwurm und Mensch?',
    aufnahme: {
      text: '<p>Drei Uhr nachts. Alle Boxen sind versorgt, das Board ist ruhig. Dr. Brandt nutzt die Pause für eine kurze Fortbildung im Aufenthaltsraum, Thema „Vergleichende Atmung“. Auf dem Bildschirm vier Tiere: ein Fisch, eine Heuschrecke, ein Regenwurm und ein Mensch.</p><p>Alle vier haben dasselbe Problem: Sauerstoff muss aus der Umgebung in den Körper, Kohlenstoffdioxid muss hinaus. Jedes Tier löst es anders. Wer die anderen Lösungen kennt, versteht auch die eigene Lunge besser.</p>',
      werte: {},
      oberaerztin: 'Ruhige Nacht, also Fortbildung. Vier Tiere, vier Lösungen für dasselbe Problem.',
      leitfrage: 'Wie holen Fisch, Heuschrecke, Regenwurm und Mensch Sauerstoff aus ihrer Umgebung, und welches Prinzip steckt hinter allen Formen?'
    },
    karten: [
      {
        titel: 'Äußere und innere Atmung',
        text: '<p>Im Alltag meint „Atmung“ das Ein- und Ausatmen. Die Biologie unterscheidet zwei Vorgänge:</p><p><strong>Äußere Atmung:</strong> der Gasaustausch zwischen dem Lebewesen und seiner Umgebung. Sauerstoff wird aus Luft oder Wasser aufgenommen, Kohlenstoffdioxid wird abgegeben. Zuständig sind je nach Tier Lunge, Kiemen, Haut oder Tracheen.</p><p><strong>Innere Atmung:</strong> die <strong>Zellatmung</strong> in den <strong>Mitochondrien</strong> jeder Körperzelle. Dort wird Glucose mit Sauerstoff zu Kohlenstoffdioxid und Wasser abgebaut, dabei wird Energie frei.</p><p>Beide hängen zusammen: Die äußere Atmung liefert den Sauerstoff, den die Zellatmung verbraucht, und entfernt das Kohlenstoffdioxid, das dabei entsteht.</p>',
        merk: 'Äußere Atmung: Gasaustausch zwischen Lebewesen und Umgebung, Sauerstoff hinein, Kohlenstoffdioxid hinaus. Innere Atmung: Zellatmung in den Mitochondrien.',
        achtung: '<strong>Achtung, Falle</strong>Kiemen, Haut, Tracheen und Lunge sind Formen der äußeren Atmung. Die innere Atmung, die Zellatmung in den Mitochondrien, läuft beim Fisch, beim Regenwurm und beim Menschen im Prinzip gleich ab.'
      },
      {
        titel: 'Vier Tiere, vier Atmungsformen',
        abb: 'atmungsformen', abbOpts: { beschriftet: true },
        text: '<p>Je nach Lebensraum und Körperbau gibt es vier Formen der äußeren Atmung:</p><ul><li><strong>Kiemenatmung:</strong> Fische, Kaulquappen, viele Krebse und Muscheln. Medium: Wasser.</li><li><strong>Tracheenatmung:</strong> Insekten wie Heuschrecke, Biene oder Käfer. Medium: Luft.</li><li><strong>Hautatmung:</strong> der Regenwurm ausschließlich, Amphibien wie Frösche zusätzlich zur Lunge.</li><li><strong>Lungenatmung:</strong> Säugetiere (auch der Mensch), Vögel, Reptilien und erwachsene Amphibien. Medium: Luft.</li></ul>',
        merk: 'Fisch: Kiemen. Insekt: Tracheen. Regenwurm: Haut. Säugetier und Mensch: Lunge.',
        achtung: '<strong>Achtung, Falle</strong>Wale und Delfine leben im Wasser, sind aber Säugetiere. Sie atmen mit der Lunge Luft und müssen dafür auftauchen.'
      },
      {
        titel: 'Kiemenatmung',
        abb: 'atmungsformen', abbOpts: { beschriftet: true, nur: ['kiemenatmung'], hervorheben: ['kiemenatmung'] },
        text: '<p>Beim Fisch liegen die Kiemen auf beiden Seiten des Kopfes unter dem <strong>Kiemendeckel</strong>.</p><p><strong>Weg des Wassers:</strong> Der Fisch nimmt Wasser durch das Maul in die Mundhöhle auf. Dann schließt er das Maul und drückt das Wasser über die Kiemen. Unter dem Kiemendeckel strömt es wieder hinaus. Das Wasser fließt also nur in einer Richtung durch.</p><p><strong>Bau:</strong> Jede Kieme besteht aus einem <strong>Kiemenbogen</strong>, der viele dünne <strong>Kiemenblättchen</strong> trägt. Sie sind stark durchblutet, deshalb sehen Kiemen rot aus. Zusammen ergeben sie eine große Oberfläche. Der im Wasser gelöste Sauerstoff diffundiert durch die dünne Wand ins Blut, Kohlenstoffdioxid ins Wasser.</p><p><strong>An Land</strong> fehlt das Wasser, das die feinen Kiemenblättchen trägt. Sie fallen zusammen und verkleben, die Oberfläche wird klein, und sie trocknen aus. Obwohl Luft mehr Sauerstoff enthält als Wasser, gelangt kaum noch Sauerstoff ins Blut. Der Fisch erstickt.</p>',
        merk: 'Kiemenatmung: Wasser strömt durch das Maul hinein, an den stark durchbluteten Kiemenblättchen vorbei und unter dem Kiemendeckel hinaus. Gelöster Sauerstoff diffundiert ins Blut.',
        achtung: '<strong>Achtung, Falle</strong>Fische atmen kein Wasser ein und wieder aus. Sie nutzen den Sauerstoff, der im Wasser gelöst ist, nicht den Sauerstoff im Wassermolekül H<sub>2</sub>O.'
      },
      {
        titel: 'Tracheenatmung',
        abb: 'atmungsformen', abbOpts: { beschriftet: true, nur: ['tracheenatmung'], hervorheben: ['tracheenatmung'] },
        text: '<p>Insekten haben keine Lunge. Seitlich am Körper, die meisten am Hinterleib, liegen kleine Atemlöcher, die <strong>Stigmen</strong>. Von dort führen luftgefüllte Röhren, die <strong>Tracheen</strong>, in den Körper. Sie verzweigen sich immer feiner und reichen bis an die einzelnen Zellen.</p><p>Der Sauerstoff gelangt so direkt dorthin, wo er gebraucht wird, Kohlenstoffdioxid auf demselben Weg hinaus. Das Blut der Insekten transportiert dabei kaum Sauerstoff. Größere Insekten wie Heuschrecken helfen nach: Sie ziehen den Hinterleib rhythmisch zusammen und pumpen so Luft durch die Tracheen.</p>',
        merk: 'Tracheenatmung: Luft gelangt durch Atemlöcher (Stigmen) in verzweigte Röhren (Tracheen) und direkt bis an die Zellen. Das Blut transportiert kaum Sauerstoff.',
        achtung: '<strong>Achtung, Falle</strong>Insekten haben weder Lunge noch Kiemen. Beim Menschen heißt zwar die Luftröhre in der Fachsprache auch Trachea, die Tracheen der Insekten sind aber ein ganzes Röhrensystem im Körper.'
      },
      {
        titel: 'Hautatmung',
        abb: 'atmungsformen', abbOpts: { beschriftet: true, nur: ['hautatmung'], hervorheben: ['hautatmung'] },
        text: '<p>Der <strong>Regenwurm</strong> hat weder Lunge noch Kiemen. Er atmet ausschließlich über die Haut. Das klappt, weil seine Haut <strong>dünn</strong> und <strong>feucht</strong> ist und direkt darunter ein dichtes Netz aus <strong>Kapillaren</strong> liegt. Sauerstoff löst sich im Schleimfilm auf der Haut und diffundiert ins Blut, Kohlenstoffdioxid geht den umgekehrten Weg.</p><p>Bei Starkregen füllen sich die Gänge und Hohlräume im Boden mit Wasser. Im wassergesättigten Boden bekommen die Würmer zu wenig Sauerstoff und kommen an die Oberfläche.</p><p><strong>Amphibien</strong> wie Frösche atmen zusätzlich zur Lunge über die Haut. Manche Frösche überwintern am Grund eines Teiches. In der Winterstarre braucht ihr kalter Körper kaum Energie, und der wenige Sauerstoff gelangt fast nur über die Haut aus dem Wasser ins Blut.</p>',
        merk: 'Hautatmung braucht eine dünne, feuchte Haut mit vielen Kapillaren darunter. Der Regenwurm atmet nur über die Haut, Amphibien zusätzlich zur Lunge.',
        achtung: '<strong>Achtung, Falle</strong>Trocknet die Haut aus, stoppt die Hautatmung. Ein Regenwurm in der prallen Sonne erstickt. Frösche sind wechselwarm, deshalb spricht man bei ihnen genau genommen von Winterstarre, nicht von Winterschlaf.'
      },
      {
        titel: 'Lungenatmung: Brust- und Bauchatmung',
        abb: 'atmungsformen', abbOpts: { beschriftet: true, nur: ['lungenatmung'], hervorheben: ['lungenatmung'] },
        demo: 'atemmodell',
        text: '<p><strong>Lungenatmung</strong> findet man bei Säugetieren, Vögeln, Reptilien und erwachsenen Amphibien. Die Lunge liegt geschützt im Körper und hat eine große innere Oberfläche, beim Menschen durch rund 300 Millionen Lungenbläschen. Die Luft wird ein- und wieder ausgeatmet, sie nimmt also hinein und hinaus denselben Weg.</p><p>Zum Einatmen muss der Brustraum größer werden. Dafür gibt es beim Menschen zwei Wege:</p><ul><li><strong>Brustatmung:</strong> Die <strong>Zwischenrippenmuskeln</strong> ziehen sich zusammen und heben die Rippen an. Der Brustkorb weitet sich.</li><li><strong>Bauchatmung:</strong> Das <strong>Zwerchfell</strong> zieht sich zusammen und flacht ab. Es drückt die Bauchorgane nach unten, der Bauch wölbt sich vor.</li></ul><p>In beiden Fällen wird der Brustraum größer, die Lunge dehnt sich mit, und Luft strömt ein. Beim Ausatmen erschlaffen die Muskeln, der Brustraum wird kleiner, die Luft strömt aus. In Ruhe überwiegt die Bauchatmung, bei Anstrengung arbeiten beide zusammen.</p>',
        merk: 'Brustatmung: Zwischenrippenmuskeln heben die Rippen an. Bauchatmung: Das Zwerchfell zieht sich zusammen und flacht ab. Beides vergrößert den Brustraum, Luft strömt ein.',
        achtung: '<strong>Achtung, Falle</strong>Auch bei der Bauchatmung gelangt keine Luft in den Bauch. Der Bauch wölbt sich nur vor, weil das Zwerchfell die Bauchorgane nach unten schiebt.'
      },
      {
        titel: 'Das gemeinsame Prinzip',
        text: '<p>Ob Kieme, Haut, Trachee oder Lunge: Jede Atmungsfläche folgt denselben Regeln.</p><ul><li><strong>Große Oberfläche:</strong> Kiemenblättchen, Lungenbläschen, fein verzweigte Tracheen, beim Regenwurm die ganze Körperoberfläche.</li><li><strong>Dünne, feuchte Austauschfläche:</strong> Die Gase lösen sich im Feuchtigkeitsfilm und haben nur einen kurzen Weg.</li><li><strong>Diffusion entlang eines Konzentrationsgefälles:</strong> Sauerstoff wandert vom Ort hoher Konzentration (Wasser oder Luft) zum Ort niedriger Konzentration (Blut oder Zelle), Kohlenstoffdioxid umgekehrt.</li><li><strong>Meist gute Durchblutung:</strong> Ein dichtes Kapillarnetz nimmt den Sauerstoff mit und hält das Gefälle aufrecht. Ausnahme Tracheen: Hier geht die Luft direkt an die Zellen.</li></ul>',
        merk: 'Gemeinsames Prinzip aller Atmungsformen: große Oberfläche, dünne und feuchte Austauschfläche, Diffusion entlang eines Konzentrationsgefälles, meist gute Durchblutung.',
        achtung: '<strong>Achtung, Falle</strong>Feucht muss jede Atmungsfläche sein, auch die Lunge. Trocknet sie aus, stockt der Gasaustausch. Darum erstickt ein Fisch an Land und ein Regenwurm in der prallen Sonne.'
      },
      {
        titel: 'Wasser, Gegenstrom, Luftsäcke',
        plus: true,
        text: '<p><strong>Wasser ist sauerstoffarm.</strong> Ein Liter Wasser enthält je nach Temperatur etwa 30-mal weniger Sauerstoff als ein Liter Luft. Ein Fisch muss deshalb ständig große Mengen Wasser an seinen Kiemen vorbeiführen.</p><p><strong>Gegenstromprinzip.</strong> In den Kiemenblättchen fließt das Blut in die entgegengesetzte Richtung wie das Wasser. So trifft das Blut auf der ganzen Strecke auf Wasser, das noch etwas mehr Sauerstoff enthält als es selbst. Das Konzentrationsgefälle bleibt überall erhalten, und das Blut nimmt mehr Sauerstoff auf als bei gleicher Fließrichtung.</p><p><strong>Grenze für Insekten.</strong> In den Tracheen gelangt der Sauerstoff zum großen Teil durch Diffusion an die Zellen. Über lange Strecken ist Diffusion zu langsam. Das ist ein wichtiger Grund, warum Insekten klein bleiben. Vor rund 300 Millionen Jahren, als die Luft vermutlich mehr Sauerstoff enthielt, gab es Libellen mit rund 70 cm Flügelspannweite.</p><p><strong>Vögel</strong> haben neben der Lunge Luftsäcke. Sie sorgen dafür, dass die Lunge beim Ein- und beim Ausatmen von frischer Luft durchströmt wird. Das deckt den hohen Sauerstoffbedarf beim Fliegen.</p>',
        merk: 'Wasser enthält viel weniger Sauerstoff als Luft. Im Gegenstrom nimmt das Blut in den Kiemen besonders viel Sauerstoff auf.'
      }
    ],
    ueben: [
      { id: 'atmungsformen-u1', typ: 'beschriften', frage: 'Ordne jedem Tier seine Atmungsform zu.', abb: 'atmungsformen', strukturen: ['kiemenatmung', 'tracheenatmung', 'hautatmung', 'lungenatmung'] },
      { id: 'atmungsformen-u2', typ: 'wahl', frage: 'Was versteht man unter <strong>äußerer Atmung</strong>?', optionen: ['den Gasaustausch zwischen Lebewesen und Umgebung: Sauerstoff wird aufgenommen, Kohlenstoffdioxid abgegeben', 'den Abbau von Glucose mit Sauerstoff in den Mitochondrien', 'den Transport von Sauerstoff im Blut zu den Körperzellen', 'die Aufnahme von Nährstoffen aus dem Darm ins Blut'], richtig: 0, erkl: 'Der Abbau von Glucose in den Mitochondrien ist die innere Atmung, also die Zellatmung.' },
      { id: 'atmungsformen-u3', typ: 'luecke', text: 'Bei der {äußeren|inneren} Atmung nimmt ein Lebewesen Sauerstoff aus seiner Umgebung auf und gibt Kohlenstoffdioxid ab. Die {innere|äußere} Atmung ist die Zellatmung. Sie läuft in den {Mitochondrien|Lungenbläschen|Kiemen} ab. Dabei wird Glucose mit Sauerstoff abgebaut, und es wird {Energie|Sauerstoff} frei.' },
      { id: 'atmungsformen-u4', typ: 'zuordnen', frage: 'Ordne jeder Tiergruppe ihre Atmungsform zu.', paare: [['Fische', 'Kiemenatmung'], ['Insekten', 'Tracheenatmung'], ['Regenwürmer', 'Hautatmung'], ['Säugetiere, Vögel und Reptilien', 'Lungenatmung']] },
      {
        id: 'atmungsformen-u5', typ: 'tabelle', frage: 'Ergänze für jedes Tier das Atmungsorgan und das Medium, aus dem es den Sauerstoff holt.',
        spalten: ['Tier', 'Atmungsorgan', 'Medium'],
        zeilen: [
          { kopf: 'Forelle', zellen: [{ optionen: ['Kiemen', 'Tracheen', 'Haut', 'Lunge'], richtig: 0 }, { optionen: ['Wasser', 'Luft'], richtig: 0 }] },
          { kopf: 'Heuschrecke', zellen: [{ optionen: ['Kiemen', 'Tracheen', 'Haut', 'Lunge'], richtig: 1 }, { optionen: ['Wasser', 'Luft'], richtig: 1 }] },
          { kopf: 'Regenwurm', zellen: [{ optionen: ['Kiemen', 'Tracheen', 'Haut', 'Lunge'], richtig: 2 }, { optionen: ['Wasser', 'Luft'], richtig: 1 }] },
          { kopf: 'Mensch', zellen: [{ optionen: ['Kiemen', 'Tracheen', 'Haut', 'Lunge'], richtig: 3 }, { optionen: ['Wasser', 'Luft'], richtig: 1 }] },
          { kopf: 'Kaulquappe', zellen: [{ optionen: ['Kiemen', 'Tracheen', 'Haut', 'Lunge'], richtig: 0 }, { optionen: ['Wasser', 'Luft'], richtig: 0 }] },
          { kopf: 'Delfin', zellen: [{ optionen: ['Kiemen', 'Tracheen', 'Haut', 'Lunge'], richtig: 3 }, { optionen: ['Wasser', 'Luft'], richtig: 1 }] }
        ],
        erkl: 'Der Delfin lebt im Wasser, ist aber ein Säugetier. Er atmet mit der Lunge Luft und muss dafür auftauchen.'
      },
      { id: 'atmungsformen-u6', typ: 'reihenfolge', frage: 'Bring den Weg des Wassers beim Fisch in die richtige Reihenfolge.', schritte: ['durch das Maul hinein', 'in die Mundhöhle', 'an den Kiemenblättchen vorbei', 'unter dem Kiemendeckel hinaus'] },
      { id: 'atmungsformen-u7', typ: 'luecke', frage: 'Bau der Kiemen:', text: 'Jede Kieme besteht aus einem {Kiemenbogen|Kiemendeckel|Flossenstrahl}, der viele {dünne|dicke} Kiemenblättchen trägt. Die Kiemenblättchen sind stark {durchblutet|verhornt} und bilden zusammen eine {große|kleine} Oberfläche. Der im Wasser gelöste Sauerstoff gelangt durch {Diffusion|Verdauung} ins Blut.' },
      { id: 'atmungsformen-u8', typ: 'behauptung', aussage: 'Fische atmen Wasser ein.', stimmt: false, gruende: ['Das Wasser strömt nur in einer Richtung an den Kiemen vorbei. Der Fisch nutzt den im Wasser gelösten Sauerstoff, nicht das Wasser selbst.', 'Fische atmen Wasser in eine Lunge ein und wieder aus, genau wie wir Luft.', 'Fische spalten das Wasser (H<sub>2</sub>O) und nutzen den Sauerstoff daraus.'], richtig: 0 },
      { id: 'atmungsformen-u9', typ: 'wahl', frage: 'Ein Angler legt einen Fisch ins Gras. Luft enthält viel mehr Sauerstoff als Wasser. Warum erstickt der Fisch trotzdem?', optionen: ['Die Kiemenblättchen fallen zusammen, verkleben und trocknen aus. Die Austauschfläche wird zu klein.', 'Der Fisch hat keine Lunge, und nur eine Lunge kann Sauerstoff aufnehmen.', 'Luft enthält zu viel Kohlenstoffdioxid für die Kiemen.', 'An Land hört das Herz des Fisches auf zu schlagen, weil es kalt wird.'], richtig: 0, erkl: 'Die Kiemenblättchen brauchen das Wasser als Stütze. Ohne Wasser bleibt von der großen, feuchten Oberfläche wenig übrig.' },
      { id: 'atmungsformen-u10', typ: 'luecke', frage: 'Hautatmung beim Regenwurm:', text: 'Der Regenwurm atmet {nur über die Haut|mit einer kleinen Lunge|mit Kiemen}. Damit das klappt, ist seine Haut {dünn|dick} und {feucht|trocken}. Direkt unter der Haut liegt ein dichtes Netz aus {Kapillaren|Knorpelspangen}. Sauerstoff {diffundiert|wird gepumpt} durch die Haut ins Blut.' },
      { id: 'atmungsformen-u11', typ: 'wahl', frage: 'Nach einem Starkregen liegen viele Regenwürmer auf dem Gehweg. Was ist die gängige Erklärung?', optionen: ['Im wassergesättigten Boden bekommen sie über die Haut zu wenig Sauerstoff.', 'Der Regen spült ihnen den Schleim von der Haut, deshalb suchen sie Schutz.', 'Sie brauchen Sonnenlicht für die Hautatmung.', 'Sie wollen das Regenwasser trinken.'], richtig: 0 },
      { id: 'atmungsformen-u12', typ: 'luecke', frage: 'Ein Frosch überwintert in Winterstarre am Grund eines Teiches.', text: 'Er nimmt den Sauerstoff fast nur über die {Haut|Lunge|Kiemen} auf. Das reicht, weil sein kalter Körper {kaum Energie|besonders viel Energie} braucht und deshalb {wenig|viel} Sauerstoff verbraucht. Seine Haut muss dafür {dünn und gut durchblutet|dick und trocken} sein.' },
      { id: 'atmungsformen-u13', typ: 'behauptung', aussage: 'Insekten atmen mit kleinen Lungen im Hinterleib.', stimmt: false, gruende: ['Insekten haben keine Lunge. Die Luft gelangt durch Atemlöcher (Stigmen) in verzweigte Röhren, die Tracheen, und direkt bis an die Zellen.', 'Insekten atmen mit Kiemen, die unter dem Panzer liegen.', 'Insekten brauchen keinen Sauerstoff, weil sie so klein sind.'], richtig: 0 },
      { id: 'atmungsformen-u14', typ: 'luecke', text: 'Bei Insekten gelangt die Luft durch kleine Atemlöcher, die {Stigmen|Kiemen|Lungenbläschen}, in den Körper. Von dort führen luftgefüllte Röhren, die {Tracheen|Bronchien|Kapillaren}, bis direkt an die {Zellen|Lunge}. Das Blut transportiert dabei {kaum|sehr viel} Sauerstoff.' },
      { id: 'atmungsformen-u15', typ: 'eingabe', frage: 'Wie heißen die Atemlöcher der Insekten in der Fachsprache?', akzeptiert: ['Stigmen', 'Stigma', 'Stigmata'], nicht: ['Tracheen', 'Trachee'] },
      { id: 'atmungsformen-u16', typ: 'mehrfach', frage: 'Was haben alle Atmungsflächen gemeinsam, ob Kieme, Lunge, Haut oder Trachee?', optionen: ['eine große Oberfläche', 'eine dünne, feuchte Austauschfläche', 'Gasaustausch durch Diffusion entlang eines Konzentrationsgefälles', 'Das Blut transportiert immer den Sauerstoff von der Atmungsfläche zu den Zellen.', 'eine dicke, trockene Schutzschicht', 'Die Gase werden aktiv durch die Wand gepumpt.'], richtig: [0, 1, 2], erkl: 'Bei der Tracheenatmung bringt die Luft den Sauerstoff direkt an die Zellen. Das Blut transportiert dort kaum Sauerstoff.' },
      {
        id: 'atmungsformen-u17', typ: 'liste', frage: 'Nenne drei Merkmale, die an einer Atmungsfläche einen guten Gasaustausch ermöglichen.', anzahl: 3,
        gruppen: [
          ['große Oberfläche', 'sehr große Oberfläche', 'große Fläche', 'große Austauschfläche', 'Oberflächenvergrößerung', 'Oberfläche'],
          ['dünne Wand', 'dünne Haut', 'dünn', 'dünne Austauschfläche', 'eine Zellschicht', 'kurzer Weg'],
          ['feucht', 'feuchte Oberfläche', 'feuchte Haut', 'feuchte Austauschfläche', 'Feuchtigkeit'],
          ['gute Durchblutung', 'Durchblutung', 'durchblutet', 'gut durchblutet', 'stark durchblutet', 'viele Kapillaren', 'Kapillarnetz', 'dichtes Kapillarnetz'],
          ['Konzentrationsgefälle', 'Konzentrationsunterschied', 'Diffusion']
        ]
      },
      { id: 'atmungsformen-u18', typ: 'luecke', text: 'Bei der Brustatmung heben die {Zwischenrippenmuskeln|Bauchmuskeln} die Rippen an. Bei der Bauchatmung {zieht sich das Zwerchfell zusammen|erschlafft das Zwerchfell} und flacht ab. In beiden Fällen wird der Brustraum {größer|kleiner}, die Lunge dehnt sich mit, und Luft strömt {ein|aus}.' },
      { id: 'atmungsformen-u19', typ: 'behauptung', aussage: 'Bei der Bauchatmung strömt die Luft in den Bauch.', stimmt: false, gruende: ['Die Luft gelangt auch hier nur in die Lunge. Der Bauch wölbt sich vor, weil das abgeflachte Zwerchfell die Bauchorgane nach unten drückt.', 'Die Luft strömt zuerst in den Magen und von dort in die Lunge.', 'Bei der Bauchatmung wird gar keine Luft bewegt, nur die Bauchmuskeln arbeiten.'], richtig: 0 },
      { id: 'atmungsformen-u20', typ: 'wahl', plus: true, frage: 'Warum muss ein Fisch ständig große Mengen Wasser an seinen Kiemen vorbeiführen?', optionen: ['Wasser enthält etwa 30-mal weniger Sauerstoff als die gleiche Menge Luft.', 'Wasser enthält mehr Sauerstoff als Luft, der Fisch muss den Überschuss loswerden.', 'Die Kiemen müssen ständig gekühlt werden.', 'Nur fließendes Wasser kann der Fisch einatmen.'], richtig: 0 },
      { id: 'atmungsformen-u21', typ: 'luecke', plus: true, frage: 'Gegenstromprinzip in den Kiemen:', text: 'In den Kiemenblättchen fließen Blut und Wasser {in entgegengesetzte Richtungen|in dieselbe Richtung}. Dadurch trifft das Blut auf der ganzen Strecke auf Wasser, das {etwas mehr|weniger} Sauerstoff enthält als es selbst. Es besteht überall ein {Konzentrationsgefälle|Gleichgewicht}, und das Blut nimmt {mehr|weniger} Sauerstoff auf als bei gleicher Fließrichtung.' },
      { id: 'atmungsformen-u22', typ: 'wahl', plus: true, frage: 'Warum gibt es heute keine Insekten von der Größe einer Katze?', optionen: ['In langen Tracheen würde der Sauerstoff nicht schnell genug bis an die Zellen im Körperinneren gelangen.', 'Ihre Lungen wären für einen so großen Körper zu klein.', 'Ihr Blut würde zu viel Sauerstoff transportieren.', 'Große Insekten hätten zu viele Stigmen.'], richtig: 0, erkl: 'Diffusion ist nur über kurze Strecken schnell genug. Das begrenzt die Körpergröße der Insekten.' }
    ],
    erklaeren: [
      {
        id: 'atmungsformen-e1',
        frage: 'Erkläre den Unterschied zwischen äußerer und innerer Atmung und wie beide zusammenhängen.',
        tipp: 'Erst die äußere Atmung: wo und was passiert. Dann die innere. Zum Schluss die Verbindung.',
        begriffe: [
          { name: 'äußere Atmung', muster: ['aeusser'] },
          { name: 'Gasaustausch', muster: ['gasaustausch', 'austausch'] },
          { name: 'Umgebung', muster: ['umgebung', 'umwelt'] },
          { name: 'Zellatmung', muster: ['zellatmung', 'innere atmung'] },
          { name: 'Mitochondrien', muster: ['mitochondri'] },
          { name: 'Sauerstoff', muster: ['sauerstoff', 'o2'] },
          { name: 'Kohlenstoffdioxid', muster: ['kohlenstoffdioxid', 'kohlendioxid', 'co2'] }
        ],
        punkte: [
          { text: 'Äußere Atmung: Gasaustausch zwischen Lebewesen und Umgebung. Sauerstoff wird aufgenommen, Kohlenstoffdioxid abgegeben (über Lunge, Kiemen, Haut oder Tracheen).', p: 1 },
          { text: 'Innere Atmung: Zellatmung in den Mitochondrien. Glucose wird mit Sauerstoff zu Kohlenstoffdioxid und Wasser abgebaut, Energie wird frei.', p: 1 },
          { text: 'Zusammenhang: Die äußere Atmung liefert den Sauerstoff für die Zellatmung und entfernt das dabei entstehende Kohlenstoffdioxid.', p: 1 }
        ],
        muster: 'Die äußere Atmung ist der Gasaustausch zwischen einem Lebewesen und seiner Umgebung. Dabei wird Sauerstoff aus der Luft oder dem Wasser aufgenommen und Kohlenstoffdioxid abgegeben. Beim Menschen geschieht das in der Lunge, beim Fisch in den Kiemen. Die innere Atmung ist die Zellatmung. Sie findet in den Mitochondrien jeder Körperzelle statt. Dort wird Glucose mit Sauerstoff zu Kohlenstoffdioxid und Wasser abgebaut, und Energie wird frei. Beide hängen zusammen: Die äußere Atmung liefert den Sauerstoff, den die Zellatmung verbraucht, und entfernt das Kohlenstoffdioxid, das dabei entsteht.'
      },
      {
        id: 'atmungsformen-e2',
        frage: 'Luft enthält viel mehr Sauerstoff als Wasser. Erkläre, warum ein Fisch an Land trotzdem erstickt.',
        tipp: 'Was passiert ohne Wasser mit den Kiemenblättchen? Was bedeutet das für die Oberfläche und für die Diffusion?',
        begriffe: [
          { name: 'Kiemenblättchen', muster: ['kiemenblaettchen', 'kiemen'] },
          { name: 'fallen zusammen, verkleben', muster: ['verkleb', 'fallen zusammen', 'zusammenfall'] },
          { name: 'Oberfläche', muster: ['oberflaeche', 'flaeche'] },
          { name: 'trocknen aus', muster: ['trockn', 'trocken'] },
          { name: 'Diffusion', muster: ['diffus', 'diffund'] },
          { name: 'Sauerstoff', muster: ['sauerstoff', 'o2'] }
        ],
        punkte: [
          { text: 'An Land fehlt das Wasser, das die dünnen Kiemenblättchen trägt. Sie fallen zusammen und verkleben.', p: 1 },
          { text: 'Dadurch wird die Oberfläche für den Gasaustausch sehr klein.', p: 1 },
          { text: 'Die Kiemenblättchen trocknen aus. Ohne feuchte Oberfläche kann kaum Sauerstoff ins Blut diffundieren, der hohe Sauerstoffgehalt der Luft nützt nichts.', p: 1 }
        ],
        muster: 'Die Kiemen bestehen aus vielen dünnen, stark durchbluteten Kiemenblättchen. Im Wasser werden sie vom Wasser getragen und liegen auseinander, so entsteht eine große Oberfläche. An Land fehlt dieses Wasser. Die Kiemenblättchen fallen zusammen und verkleben, dadurch wird die Oberfläche für den Gasaustausch sehr klein. Außerdem trocknen sie an der Luft aus. Ohne feuchte Oberfläche kann kaum noch Sauerstoff ins Blut diffundieren. Deshalb erstickt der Fisch, obwohl die Luft viel mehr Sauerstoff enthält als Wasser.'
      },
      {
        id: 'atmungsformen-e3',
        frage: 'Vergleiche zwei Formen der äußeren Atmung, zum Beispiel Kiemenatmung und Lungenatmung. Nenne anschließend das gemeinsame Prinzip aller Atmungsformen.',
        tipp: 'Für jede Form: Organ, Medium und Weg von Wasser oder Luft. Danach: Was haben alle Atmungsflächen gemeinsam?',
        begriffe: [
          { name: 'große Oberfläche', muster: ['oberflaeche', 'flaeche'] },
          { name: 'dünn', muster: ['duenn'] },
          { name: 'feucht', muster: ['feucht'] },
          { name: 'Diffusion', muster: ['diffus', 'diffund'] },
          { name: 'Konzentrationsgefälle', muster: ['konzentration', 'gefaelle'] },
          { name: 'Durchblutung', muster: ['durchblut', 'kapillar'] }
        ],
        punkte: [
          { text: 'Erste Form beschrieben, z. B. Kiemenatmung: Wasser strömt durch das Maul hinein, an den stark durchbluteten Kiemenblättchen vorbei und unter dem Kiemendeckel hinaus. Gelöster Sauerstoff diffundiert ins Blut.', p: 1 },
          { text: 'Zweite Form beschrieben, z. B. Lungenatmung: Luft wird in die Lunge ein- und wieder ausgeatmet. In den Lungenbläschen diffundiert Sauerstoff ins Blut.', p: 1 },
          { text: 'Mindestens ein Unterschied, z. B. Wasser oder Luft als Medium, Strom in einer Richtung oder Ein- und Ausatmen auf demselben Weg.', p: 1 },
          { text: 'Gemeinsames Prinzip: große Oberfläche, dünne und feuchte Austauschfläche, Diffusion entlang eines Konzentrationsgefälles, meist gute Durchblutung.', p: 1 }
        ],
        muster: 'Bei der Kiemenatmung nimmt der Fisch Wasser durch das Maul auf. Das Wasser strömt an den Kiemenblättchen vorbei und unter dem Kiemendeckel wieder hinaus, also nur in einer Richtung. Der im Wasser gelöste Sauerstoff diffundiert durch die dünne Wand der stark durchbluteten Kiemenblättchen ins Blut. Bei der Lungenatmung wird dagegen Luft eingeatmet und auf demselben Weg wieder ausgeatmet. Der Gasaustausch findet innen im Körper in den Lungenbläschen statt. Unterschiedlich sind also das Medium, Wasser oder Luft, und der Weg, den es nimmt. Gemeinsam ist beiden das Prinzip aller Atmungsformen: Die Oberfläche ist sehr groß, die Austauschfläche ist dünn und feucht und gut durchblutet. Sauerstoff gelangt durch Diffusion entlang eines Konzentrationsgefälles ins Blut, Kohlenstoffdioxid in die umgekehrte Richtung.'
      },
      {
        id: 'atmungsformen-e4',
        frage: 'Beschreibe die Brustatmung und die Bauchatmung beim Menschen und erkläre, was beide bewirken.',
        tipp: 'Welcher Muskel arbeitet jeweils, was bewegt sich, und was passiert dann mit Brustraum, Lunge und Luft?',
        begriffe: [
          { name: 'Zwischenrippenmuskeln', muster: ['zwischenrippen'] },
          { name: 'Rippen', muster: ['rippe'] },
          { name: 'Zwerchfell', muster: ['zwerchfell'] },
          { name: 'zieht sich zusammen', muster: ['zieht sich zusammen', 'zusammenzieh', 'kontrahiert', 'flacht ab'] },
          { name: 'Brustraum', muster: ['brustraum', 'brusthoehle', 'brustkorb'] },
          { name: 'Luft strömt ein', muster: ['stroemt'] }
        ],
        punkte: [
          { text: 'Brustatmung: Die Zwischenrippenmuskeln ziehen sich zusammen und heben die Rippen an, der Brustkorb weitet sich.', p: 1 },
          { text: 'Bauchatmung: Das Zwerchfell zieht sich zusammen und flacht ab. Es drückt die Bauchorgane nach unten, der Bauch wölbt sich vor.', p: 1 },
          { text: 'Beide vergrößern den Brustraum. Die Lunge dehnt sich mit, und Luft strömt ein.', p: 1 }
        ],
        muster: 'Bei der Brustatmung ziehen sich die Zwischenrippenmuskeln zusammen und heben die Rippen an. Dadurch weitet sich der Brustkorb. Bei der Bauchatmung zieht sich das Zwerchfell zusammen und flacht ab. Dabei drückt es die Bauchorgane nach unten, deshalb wölbt sich der Bauch vor. Beide Bewegungen vergrößern den Brustraum. Die Lunge liegt eng am Brustraum an und dehnt sich mit, und Luft strömt von außen in die Lunge ein. Beim Ausatmen erschlaffen die Muskeln, der Brustraum wird kleiner, und die Luft strömt wieder aus.'
      }
    ],
    abschluss: [
      { id: 'atmungsformen-a1', typ: 'wahl', frage: 'Aus einer Kaulquappe wird ein Frosch. Wie ändert sich dabei die äußere Atmung?', optionen: ['Aus der Kiemenatmung im Wasser wird Lungenatmung, ergänzt durch Hautatmung.', 'Aus der Lungenatmung wird Kiemenatmung, ergänzt durch Tracheenatmung.', 'Die Kaulquappe atmet nur über die Haut, der Frosch nur über Kiemen.', 'Nichts ändert sich, beide atmen mit Tracheen.'], richtig: 0 },
      { id: 'atmungsformen-a2', typ: 'wahl', frage: 'Blattläuse sind Insekten. Ein Gärtner besprüht sie mit einem Ölspray, das ihren Körper mit einem dünnen Film überzieht. Warum sterben die Tiere?', optionen: ['Das Öl verschließt die Atemlöcher (Stigmen). Es gelangt keine Luft mehr in die Tracheen.', 'Das Öl verklebt ihre Kiemen.', 'Das Öl dringt in ihre Lunge ein.', 'Das Öl entzieht ihrem Blut den Sauerstoff.'], richtig: 0 },
      { id: 'atmungsformen-a3', typ: 'wahl', frage: 'Warum könnte ein Mensch nicht allein über seine Haut atmen wie ein Regenwurm?', optionen: ['Seine Haut ist zu dick und zu trocken, und ihre Fläche ist für seinen Sauerstoffbedarf viel zu klein.', 'Die Haut des Menschen hat keine Blutgefäße.', 'Über die Haut kann nur Kohlenstoffdioxid hinaus, aber kein Sauerstoff hinein.', 'Der Mensch braucht weniger Sauerstoff als ein Regenwurm.'], richtig: 0, erkl: 'Eine Atmungsfläche muss groß, dünn, feucht und gut durchblutet sein. Die Lunge erfüllt das mit rund 100 m², die Haut nicht.' },
      { id: 'atmungsformen-a4', typ: 'luecke', frage: 'Eine Sängerin soll tief „in den Bauch“ atmen.', text: 'Dabei arbeitet vor allem {das Zwerchfell|die Lunge|der Herzmuskel}. Es {zieht sich zusammen und flacht ab|wölbt sich nach oben}. Der Brustraum wird {größer|kleiner}, und die Luft strömt in {die Lunge|den Bauch}.' }
    ],
    epikrise: '<p><strong>Fazit der Fortbildung:</strong> Vier Tiere, ein Problem: Sauerstoff muss von außen hinein, Kohlenstoffdioxid hinaus. Der Fisch löst es mit Kiemen im Wasser, die Heuschrecke mit Tracheen, die die Luft direkt an die Zellen bringen, der Regenwurm mit seiner feuchten Haut und der Mensch mit der Lunge, die er über Brust- und Bauchatmung füllt. Um 3:20 Uhr meldet sich der Rettungsdienst. Fortbildung beendet.</p><p><strong>Die Biologie dahinter:</strong> Äußere Atmung ist der Gasaustausch mit der Umgebung, innere Atmung die Zellatmung in den Mitochondrien. Alle Atmungsformen folgen demselben Prinzip: große Oberfläche, dünne und feuchte Austauschfläche, Diffusion entlang eines Konzentrationsgefälles und meist ein dichtes Kapillarnetz. Fehlt eine dieser Bedingungen, wie beim Fisch an Land, stockt der Gasaustausch.</p>'
  });
})();
