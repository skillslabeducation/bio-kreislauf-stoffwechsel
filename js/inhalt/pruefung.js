/* Facharztprüfung: Aufbau und Punkte wie das Übungsblatt (Teil 1: 45 Min., 50 P.; Teil 2: 60 Min., 60 P.).
   Jede Prüfung wird aus einem Seed erzeugt: Nummerierungen, Zahlen und Fälle wechseln. Ohne DOM. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function waehle(rnd, arr) { return arr[Math.floor(rnd() * arr.length)]; }
  function nummern(rnd, ids) { var o = {}; W.shuffle(ids, rnd).forEach(function (id, i) { o[id] = i + 1; }); return o; }
  function B(name, muster) { return { name: name, muster: muster }; }
  function P(text, p) { return { text: text, p: p }; }

  var KREISLAUF = ['rechter-vorhof', 'rechte-kammer', 'lungenarterie', 'lungenvene', 'linker-vorhof', 'linke-kammer', 'aorta', 'hohlvene'];
  var OPT_HOCH = ['hoch (sauerstoffreich)', 'niedrig (sauerstoffarm)'];

  /* ---------- Teil 1: Grundlagen, Atmung und Kreislauf ---------- */
  var TEIL1 = [
    { nr: 1, titel: 'Biologie – Lehre des Lebens', fall: 'leben', teile: [
      { b: 'a', p: 2, erkl: {
        frage: 'Erkläre den Begriff Biologie.',
        begriffe: [B('Leben', ['leben']), B('Lebewesen', ['lebewesen']), B('Umwelt', ['umwelt'])],
        punkte: [P('Biologie ist die Wissenschaft (Lehre) vom Leben, von griechisch bios = Leben und logos = Lehre.', 1),
          P('Sie untersucht die Lebewesen: ihren Bau, ihre Funktionen, ihre Entwicklung und ihre Beziehungen zur Umwelt.', 1)],
        muster: 'Biologie ist die Wissenschaft vom Leben. Der Name kommt aus dem Griechischen: bios heißt Leben, logos heißt Lehre. Die Biologie untersucht alle Lebewesen, also Pflanzen, Tiere, Pilze, Mikroorganismen und den Menschen. Sie fragt, wie Lebewesen gebaut sind, wie sie funktionieren, wie sie sich entwickeln und wie sie mit ihrer Umwelt zusammenhängen.' } },
      { b: 'b', p: 2, erkl: {
        frage: 'Nenne vier Teilgebiete der Biologie und beschreibe kurz, womit sie sich beschäftigen.',
        begriffe: [B('Botanik', ['botanik']), B('Zoologie', ['zoologie']), B('Genetik', ['genetik']), B('Ökologie', ['oekologie'])],
        punkte: [P('Erstes Teilgebiet mit passender Beschreibung (z. B. Botanik: Pflanzen)', 0.5), P('Zweites Teilgebiet mit passender Beschreibung (z. B. Zoologie: Tiere)', 0.5),
          P('Drittes Teilgebiet mit passender Beschreibung (z. B. Genetik: Vererbung)', 0.5), P('Viertes Teilgebiet mit passender Beschreibung (z. B. Ökologie: Beziehungen der Lebewesen zu ihrer Umwelt)', 0.5)],
        muster: 'Die Botanik beschäftigt sich mit den Pflanzen. Die Zoologie untersucht die Tiere. Die Genetik erforscht die Vererbung. Die Ökologie untersucht die Beziehungen der Lebewesen untereinander und zu ihrer Umwelt. Auch richtig sind zum Beispiel Humanbiologie (Mensch), Mikrobiologie (Mikroorganismen) oder Zellbiologie (Zellen).' } }
    ] },
    { nr: 2, titel: 'Kennzeichen der Lebewesen', fall: 'leben', teile: [
      { b: 'a', p: 3, item: function () { return {
        typ: 'liste', anzahl: 6, frage: 'Nenne sechs Kennzeichen von Lebewesen (je 0,5 P.).',
        gruppen: [['Bewegung', 'Eigenbewegung', 'bewegen'], ['Reizbarkeit', 'Reaktion auf Reize', 'Reizbeantwortung', 'reagieren'], ['Stoffwechsel', 'Energieumwandlung', 'Stoff- und Energiewechsel'],
          ['Wachstum', 'wachsen'], ['Entwicklung', 'entwickeln'], ['Fortpflanzung', 'Vermehrung', 'fortpflanzen'], ['Aufbau aus Zellen', 'Zellen', 'Zelle', 'zellulärer Aufbau']] }; } },
      { b: 'b', p: 3, erkl: {
        frage: 'Erkläre drei Kennzeichen von Lebewesen anhand jeweils eines Beispiels.',
        begriffe: [B('Stoffwechsel', ['stoffwechsel']), B('Reizbarkeit', ['reiz']), B('Wachstum', ['wachstum', 'waechst'])],
        punkte: [P('Erstes Kennzeichen richtig erklärt, mit passendem Beispiel (z. B. Stoffwechsel: Ein Mensch nimmt Nahrung und Sauerstoff auf und gibt Kohlenstoffdioxid ab).', 1),
          P('Zweites Kennzeichen richtig erklärt, mit passendem Beispiel (z. B. Reizbarkeit: Bei hellem Licht wird die Pupille kleiner).', 1),
          P('Drittes Kennzeichen richtig erklärt, mit passendem Beispiel (z. B. Wachstum: Aus einem Bohnenkeimling wird eine große Pflanze).', 1)],
        muster: 'Stoffwechsel: Lebewesen nehmen Stoffe auf, wandeln sie um und geben andere Stoffe ab. Ein Mensch nimmt Nahrung und Sauerstoff auf und atmet Kohlenstoffdioxid aus. Reizbarkeit: Lebewesen nehmen Reize aus der Umwelt wahr und reagieren darauf. Bei hellem Licht wird die Pupille kleiner. Wachstum: Lebewesen werden größer, weil ihre Zellen sich teilen und wachsen. Aus einem kleinen Bohnenkeimling wird eine große Pflanze.' } },
      { b: 'c', p: 2, erkl: {
        frage: 'Ein Feuer bewegt sich, wächst und benötigt Sauerstoff. Trotzdem ist es kein Lebewesen. Begründe diese Aussage.',
        begriffe: [B('alle Kennzeichen', ['alle']), B('Zellen', ['zelle']), B('Fortpflanzung', ['pflanzt sich', 'fortpflanz'])],
        punkte: [P('Ein Lebewesen muss alle Kennzeichen des Lebens gleichzeitig erfüllen, nicht nur einige.', 1),
          P('Feuer erfüllt mehrere Kennzeichen nicht: Es besteht nicht aus Zellen, reagiert nicht gezielt auf Reize, pflanzt sich nicht mit Weitergabe von Erbinformation fort und hat keinen geregelten Stoffwechsel.', 1)],
        muster: 'Ein Lebewesen muss alle Kennzeichen des Lebens gleichzeitig zeigen. Das Feuer zeigt nur einige davon. Es besteht nicht aus Zellen, es reagiert nicht gezielt auf Reize, und es pflanzt sich nicht fort, indem es Erbinformation weitergibt. Es hat auch keinen geregelten Stoffwechsel, der körpereigene Stoffe aufbaut. Deshalb ist Feuer kein Lebewesen.' } }
    ] },
    { nr: 3, titel: 'Aufbau der Atemwege', fall: 'atemwege', teile: [
      { b: 'a', p: 3, item: function (rnd) {
        var s = ['nasenhoehle', 'mundhoehle', 'luftroehre', 'bronchien', 'lungenfluegel', 'zwerchfell'];
        return { typ: 'beschriften', frage: 'Benenne die sechs nummerierten Bestandteile.', abb: 'atemwege', strukturen: s, nummern: nummern(rnd, s) }; } },
      { b: 'b', p: 2, erkl: {
        frage: 'Beschreibe den Weg der eingeatmeten Luft von der Nase bis zu den Lungenbläschen.',
        begriffe: [B('Nasenhöhle', ['nasenhoehle']), B('Rachen', ['rachen']), B('Kehlkopf', ['kehlkopf']), B('Luftröhre', ['luftroehre']), B('Bronchien', ['bronchie']), B('Lungenbläschen', ['lungenblaeschen', 'alveole'])],
        punkte: [P('Nasenhöhle → Rachen → Kehlkopf → Luftröhre in der richtigen Reihenfolge', 1), P('Bronchien → Bronchiolen → Lungenbläschen in der richtigen Reihenfolge', 1)],
        muster: 'Die Luft strömt durch die Nase in die Nasenhöhle, wo sie erwärmt, angefeuchtet und gereinigt wird. Über den Rachen gelangt sie in den Kehlkopf und weiter in die Luftröhre. Die Luftröhre teilt sich in die beiden Bronchien, die sich in den Lungenflügeln immer feiner in Bronchiolen verzweigen. Am Ende erreicht die Luft die Lungenbläschen.' } },
      { b: 'c', p: 1, item: function (rnd) { return waehle(rnd, [
        { typ: 'wahl', frage: 'Welche Funktion hat das Zwerchfell bei der Einatmung?', optionen: ['Es zieht sich zusammen, flacht ab und vergrößert so den Brustraum.', 'Es erschlafft und drückt die Luft aus der Lunge.', 'Es verschließt beim Einatmen die Speiseröhre.', 'Es pumpt Blut in die Lunge.'], richtig: 0 },
        { typ: 'wahl', frage: 'Was passiert bei der Einatmung?', optionen: ['Das Zwerchfell zieht sich zusammen, der Brustraum wird größer, Luft strömt ein.', 'Die Lunge bläst sich selbst auf und drückt das Zwerchfell nach unten.', 'Das Zwerchfell wölbt sich nach oben, der Brustraum wird kleiner.', 'Das Zwerchfell erschlafft, dadurch wird Luft angesaugt.'], richtig: 0 }
      ]); } }
    ] },
    { nr: 4, titel: 'Gasaustausch in der Lunge', fall: 'gasaustausch', teile: [
      { b: 'a', p: 1, item: function () { return { typ: 'eingabe', frage: 'Wie lautet der Fachbegriff für Lungenbläschen?', akzeptiert: ['Alveolen', 'Alveole', 'Alveoli', 'Alveolus'] }; } },
      { b: 'b', p: 2, item: function () { return {
        typ: 'tabelle', frage: 'Welche Gase werden durch die Pfeile A und B dargestellt?', abb: 'alveole', abbOpts: { pfeile: 'ab' },
        spalten: ['Pfeil', 'Gas'],
        zeilen: [{ kopf: 'A', zellen: [{ optionen: ['Sauerstoff', 'Kohlenstoffdioxid', 'Stickstoff', 'Wasserdampf'], richtig: 0 }] },
          { kopf: 'B', zellen: [{ optionen: ['Sauerstoff', 'Kohlenstoffdioxid', 'Stickstoff', 'Wasserdampf'], richtig: 1 }] }] }; } },
      { b: 'c', p: 3, erkl: {
        frage: 'Erkläre den Gasaustausch unter Verwendung des Begriffs Diffusion.',
        begriffe: [B('Diffusion', ['diffus']), B('Konzentration', ['konzentration']), B('Sauerstoff', ['sauerstoff']), B('Kohlenstoffdioxid', ['kohlenstoffdioxid', 'kohlendioxid', 'co2']), B('Kapillare', ['kapillar'])],
        punkte: [P('Diffusion: Teilchen bewegen sich selbstständig vom Ort hoher zum Ort niedriger Konzentration.', 1),
          P('Sauerstoff diffundiert aus dem Lungenbläschen (hohe O₂-Konzentration) durch die dünne Wand ins Blut der Kapillare (niedrige O₂-Konzentration).', 1),
          P('Kohlenstoffdioxid diffundiert umgekehrt aus dem Blut (hohe CO₂-Konzentration) ins Lungenbläschen und wird ausgeatmet.', 1)],
        muster: 'Der Gasaustausch beruht auf Diffusion: Teilchen bewegen sich von selbst vom Ort hoher Konzentration zum Ort niedriger Konzentration. In der eingeatmeten Luft im Lungenbläschen ist die Sauerstoffkonzentration hoch, im ankommenden Blut der Kapillare niedrig. Deshalb diffundiert Sauerstoff durch die dünne Wand ins Blut. Im Blut ist die Kohlenstoffdioxidkonzentration hoch, im Lungenbläschen niedrig. Deshalb diffundiert Kohlenstoffdioxid aus dem Blut ins Lungenbläschen und wird ausgeatmet.' } },
      { b: 'd', p: 2, erkl: {
        frage: 'Nenne zwei Eigenschaften der Lungenbläschen, die einen effektiven Gasaustausch ermöglichen.',
        begriffe: [B('Oberfläche', ['oberflaeche']), B('dünne Wand', ['duenn']), B('Kapillaren', ['kapillar'])],
        punkte: [P('Eine richtige Eigenschaft, z. B. sehr große Oberfläche (rund 300 Millionen Lungenbläschen, etwa 100 m²)', 1),
          P('Eine zweite richtige Eigenschaft, z. B. sehr dünne Wand (eine Zellschicht), dichtes Kapillarnetz, feuchte Oberfläche', 1)],
        muster: 'Die Lungenbläschen haben zusammen eine sehr große Oberfläche von etwa 100 m². Ihre Wand ist sehr dünn, sie besteht nur aus einer Zellschicht. Außerdem sind sie von einem dichten Netz aus Kapillaren umgeben.' } }
    ] },
    { nr: 5, titel: 'Arterien und Venen', fall: 'gefaesse', teile: [
      { b: 'a', p: 6, item: function () { return {
        typ: 'tabelle', frage: 'Vervollständige die Tabelle.', spalten: ['Merkmal', 'Arterien', 'Venen'],
        zeilen: [
          { kopf: 'Fließrichtung', zellen: [{ optionen: ['vom Herzen weg', 'zum Herzen hin'], richtig: 0 }, { optionen: ['vom Herzen weg', 'zum Herzen hin'], richtig: 1 }] },
          { kopf: 'Dicke der Gefäßwand', zellen: [{ optionen: ['dick, muskulös, elastisch', 'dünn'], richtig: 0 }, { optionen: ['dick, muskulös, elastisch', 'dünn'], richtig: 1 }] },
          { kopf: 'Blutdruck', zellen: [{ optionen: ['hoch', 'niedrig'], richtig: 0 }, { optionen: ['hoch', 'niedrig'], richtig: 1 }] },
          { kopf: 'Venenklappen', zellen: [{ optionen: ['keine', 'vorhanden'], richtig: 0 }, { optionen: ['keine', 'vorhanden'], richtig: 1 }] },
          { kopf: 'Sauerstoffgehalt im Körperkreislauf', zellen: [{ optionen: OPT_HOCH, richtig: 0 }, { optionen: OPT_HOCH, richtig: 1 }] },
          { kopf: 'Sauerstoffgehalt im Lungenkreislauf', zellen: [{ optionen: OPT_HOCH, richtig: 1 }, { optionen: OPT_HOCH, richtig: 0 }] }] }; } },
      { b: 'b', p: 2, erkl: {
        frage: 'Ein Schüler behauptet: „Arterien transportieren immer sauerstoffreiches Blut und Venen immer sauerstoffarmes Blut.“ Erkläre, warum das falsch ist.',
        begriffe: [B('Fließrichtung', ['richtung', 'vom herzen weg']), B('Lungenarterie', ['lungenarterie']), B('Lungenvene', ['lungenvene'])],
        punkte: [P('Arterien und Venen sind nach der Fließrichtung benannt: Arterien führen vom Herzen weg, Venen zum Herzen hin, unabhängig vom Sauerstoffgehalt.', 1),
          P('Gegenbeispiel Lungenkreislauf: Die Lungenarterie führt sauerstoffarmes Blut zur Lunge, die Lungenvene sauerstoffreiches Blut zum Herzen.', 1)],
        muster: 'Ob ein Gefäß Arterie oder Vene heißt, hängt von der Fließrichtung ab, nicht vom Sauerstoff. Arterien führen das Blut vom Herzen weg, Venen zum Herzen hin. Im Lungenkreislauf ist es deshalb umgekehrt: Die Lungenarterie bringt sauerstoffarmes Blut vom Herzen zur Lunge, und die Lungenvene bringt sauerstoffreiches Blut von der Lunge zum Herzen.' } }
    ] },
    { nr: 6, titel: 'Der Blutkreislauf', fall: 'herz', teile: [
      { b: 'a', p: 4, item: function (rnd) { return { typ: 'beschriften', frage: 'Benenne die acht nummerierten Bestandteile des Herz-Kreislauf-Systems.', abb: 'kreislauf', strukturen: KREISLAUF.slice(), nummern: nummern(rnd, KREISLAUF) }; } },
      { b: 'b', p: 4, erkl: {
        frage: 'Beschreibe den vollständigen Weg des Blutes. Beginne im rechten Vorhof.',
        begriffe: [B('rechte Kammer', ['rechte kammer']), B('Lungenarterie', ['lungenarterie']), B('Lungenvene', ['lungenvene']), B('linke Kammer', ['linke kammer']), B('Aorta', ['aorta']), B('Hohlvene', ['hohlvene'])],
        punkte: [P('Rechter Vorhof → rechte Herzkammer → Lungenarterie zur Lunge', 1), P('In der Lunge Gasaustausch (O₂ auf, CO₂ ab), dann Lungenvene → linker Vorhof', 1),
          P('Linker Vorhof → linke Herzkammer → Aorta → Arterien → Kapillaren der Körperorgane (O₂ ab, CO₂ auf)', 1), P('Venen → Hohlvene → zurück in den rechten Vorhof', 1)],
        muster: 'Vom rechten Vorhof fließt das sauerstoffarme Blut in die rechte Herzkammer. Diese pumpt es durch die Lungenarterie zur Lunge. In den Kapillaren der Lunge gibt das Blut Kohlenstoffdioxid ab und nimmt Sauerstoff auf. Das sauerstoffreiche Blut fließt durch die Lungenvene in den linken Vorhof und weiter in die linke Herzkammer. Die linke Kammer pumpt es in die Aorta und über die Arterien in die Kapillaren der Körperorgane. Dort gibt es Sauerstoff ab und nimmt Kohlenstoffdioxid auf. Über die Venen und die Hohlvene fließt das sauerstoffarme Blut zurück in den rechten Vorhof.' } },
      { b: 'c', p: 2, erkl: {
        frage: 'Erkläre den Unterschied zwischen Lungenkreislauf und Körperkreislauf.',
        begriffe: [B('Lunge', ['lunge']), B('Körper', ['koerper']), B('Sauerstoff', ['sauerstoff'])],
        punkte: [P('Lungenkreislauf: von der rechten Herzhälfte durch die Lunge zum linken Vorhof. Das Blut gibt CO₂ ab und nimmt Sauerstoff auf.', 1),
          P('Körperkreislauf: von der linken Herzhälfte durch die Körperorgane zum rechten Vorhof. Das Blut versorgt die Organe mit Sauerstoff und Nährstoffen und nimmt CO₂ auf.', 1)],
        muster: 'Der Lungenkreislauf beginnt in der rechten Herzkammer. Das Blut fließt durch die Lunge und zurück zum linken Vorhof. Dabei gibt es Kohlenstoffdioxid ab und nimmt Sauerstoff auf. Der Körperkreislauf beginnt in der linken Herzkammer. Das Blut fließt durch alle Körperorgane und zurück zum rechten Vorhof. Dabei versorgt es die Organe mit Sauerstoff und Nährstoffen und nimmt Kohlenstoffdioxid auf.' } }
    ] },
    { nr: 7, titel: 'Transferaufgabe: Sport und Atmung', fall: 'zellatmung',
      text: 'Ein Schüler läuft 1000 Meter im Sportunterricht. Danach schlägt sein Herz schneller, und er atmet deutlich schneller als zuvor.', teile: [
      { b: 'a', p: 2, erkl: {
        frage: 'Erkläre, warum die Atemfrequenz während des Laufens steigt.',
        begriffe: [B('Energie', ['energie']), B('Zellatmung', ['zellatmung']), B('Sauerstoff', ['sauerstoff']), B('Kohlenstoffdioxid', ['kohlenstoffdioxid', 'kohlendioxid', 'co2'])],
        punkte: [P('Die Muskeln brauchen mehr Energie. Dafür läuft mehr Zellatmung, und die verbraucht Sauerstoff.', 1),
          P('Es entsteht mehr Kohlenstoffdioxid, das abgeatmet werden muss. Schnelleres Atmen bringt mehr O₂ in die Lunge und mehr CO₂ hinaus.', 1)],
        muster: 'Beim Laufen arbeiten die Muskeln stärker und brauchen mehr Energie. Die Energie gewinnen die Muskelzellen durch Zellatmung, dafür brauchen sie Sauerstoff. Gleichzeitig entsteht mehr Kohlenstoffdioxid, das aus dem Körper heraus muss. Durch schnelleres Atmen kommt mehr Sauerstoff in die Lunge, und mehr Kohlenstoffdioxid wird abgeatmet.' } },
      { b: 'b', p: 2, erkl: {
        frage: 'Erkläre, warum das Herz schneller schlägt.',
        begriffe: [B('Blut', ['blut']), B('Sauerstoff', ['sauerstoff']), B('Muskeln', ['muskel'])],
        punkte: [P('Das Herz schlägt schneller, damit pro Minute mehr Blut durch den Körper gepumpt wird.', 1),
          P('So kommen mehr Sauerstoff und Glucose zu den Muskeln, und mehr Kohlenstoffdioxid wird zur Lunge abtransportiert.', 1)],
        muster: 'Das Blut transportiert den Sauerstoff und die Glucose zu den Muskeln. Weil die Muskeln beim Laufen mehr davon brauchen, muss pro Minute mehr Blut durch den Körper fließen. Deshalb schlägt das Herz schneller. Gleichzeitig wird so mehr Kohlenstoffdioxid von den Muskeln zur Lunge gebracht.' } },
      { b: 'c', p: 2, erkl: {
        frage: 'Welcher Zusammenhang besteht zwischen Zellatmung, Blutkreislauf und Gasaustausch?',
        begriffe: [B('Gasaustausch', ['gasaustausch']), B('Blutkreislauf', ['kreislauf']), B('Zellatmung', ['zellatmung'])],
        punkte: [P('Beim Gasaustausch in der Lunge gelangt Sauerstoff ins Blut und Kohlenstoffdioxid aus dem Blut in die Lunge.', 1),
          P('Der Blutkreislauf bringt den Sauerstoff zu den Zellen, wo die Zellatmung ihn nutzt, und transportiert das entstandene CO₂ zurück zur Lunge.', 1)],
        muster: 'Beim Gasaustausch in der Lunge gelangt Sauerstoff aus den Lungenbläschen ins Blut, und Kohlenstoffdioxid gelangt aus dem Blut in die Lungenbläschen. Der Blutkreislauf transportiert den Sauerstoff zu allen Körperzellen. Dort wird er für die Zellatmung gebraucht, die Energie liefert. Das dabei entstehende Kohlenstoffdioxid bringt der Blutkreislauf zurück zur Lunge, wo es beim Gasaustausch abgegeben wird.' } }
    ] }
  ];

  /* ---------- Teil 2: Kreislauf, Ernährung und Stoffwechsel ---------- */
  var RIEGEL = { kh: [15, 20, 25, 30, 35, 40], fett: [4, 5, 6, 8, 10, 12], eiweiss: [3, 4, 5, 6, 8, 10] };
  var PAARE = [['A0', 'B0'], ['AA', 'B0'], ['A0', 'A0'], ['AB', '00'], ['A0', '00'], ['B0', 'AB'], ['B0', 'B0'], ['A0', 'AB']];
  var TRANSFUSION = [['A', 'B'], ['B', 'A'], ['0', 'A'], ['A', 'AB'], ['0', 'B']];

  var TEIL2 = [
    { nr: 1, titel: 'Herz und Blutkreislauf', fall: 'herz', teile: [
      { b: 'a', p: 4, item: function (rnd) { return { typ: 'beschriften', frage: 'Benenne die acht nummerierten Strukturen.', abb: 'kreislauf', strukturen: KREISLAUF.slice(), nummern: nummern(rnd, KREISLAUF) }; } },
      { b: 'b', p: 2, erkl: {
        frage: 'Erkläre, warum man beim Menschen von einem doppelten Blutkreislauf spricht.',
        begriffe: [B('Lungenkreislauf', ['lungenkreislauf']), B('Körperkreislauf', ['koerperkreislauf']), B('zweimal', ['zweimal', 'zwei mal'])],
        punkte: [P('Es gibt zwei hintereinander geschaltete Kreisläufe: den Lungenkreislauf und den Körperkreislauf.', 1),
          P('Bei einem vollständigen Umlauf fließt das Blut zweimal durch das Herz.', 1)],
        muster: 'Der Blutkreislauf des Menschen besteht aus zwei Kreisläufen, die hintereinander geschaltet sind: dem Lungenkreislauf und dem Körperkreislauf. Die rechte Herzhälfte pumpt das Blut durch die Lunge, die linke durch den Körper. Bei einem vollständigen Umlauf fließt das Blut deshalb zweimal durch das Herz.' } },
      { b: 'c', p: 2, erkl: {
        frage: 'Warum ist die Muskulatur der linken Herzkammer dicker als die der rechten?',
        begriffe: [B('Körperkreislauf', ['koerper']), B('Druck', ['druck']), B('Lunge', ['lunge'])],
        punkte: [P('Die linke Kammer pumpt das Blut in den Körperkreislauf, also durch den ganzen Körper: langer Weg, großer Widerstand.', 1),
          P('Dafür braucht sie hohen Druck und viel Muskelkraft. Die rechte Kammer pumpt nur durch die nahe Lunge, mit niedrigem Druck.', 1)],
        muster: 'Die linke Herzkammer pumpt das Blut in den Körperkreislauf, also bis in die Zehen und in den Kopf. Dafür muss sie einen hohen Druck aufbauen und braucht viel Muskelkraft. Die rechte Kammer pumpt das Blut nur durch die nahe Lunge. Dort reicht ein niedriger Druck, und zu hoher Druck würde die feinen Kapillaren der Lunge schädigen.' } },
      { b: 'd', p: 1, item: function () { return { typ: 'wahl', frage: 'Welche Funktion haben die Herzklappen?', optionen: ['Sie wirken wie Ventile und verhindern, dass das Blut zurückfließt.', 'Sie pumpen das Blut aus dem Herzen.', 'Sie reinigen das Blut von Schadstoffen.', 'Sie messen den Sauerstoffgehalt des Blutes.'], richtig: 0 }; } },
      { b: 'e', p: 1, item: function () { return { typ: 'wahl', frage: 'Welche Aufgabe haben die Kapillaren?', optionen: ['In ihnen findet der Stoffaustausch zwischen Blut und Gewebe statt.', 'Sie transportieren das Blut mit hohem Druck vom Herzen weg.', 'Sie verhindern mit Klappen den Rückfluss des Blutes.', 'Sie bilden neue rote Blutkörperchen.'], richtig: 0 }; } }
    ] },
    { nr: 2, titel: 'Energie unserer Nahrung', fall: 'energie', teile: [
      { b: 'a', p: 3, item: function () { return { typ: 'liste', anzahl: 3, frage: 'Nenne die drei Hauptnährstoffe, die unserem Körper Energie liefern.', gruppen: [['Kohlenhydrate', 'Kohlenhydrat'], ['Fette', 'Fett', 'Lipide'], ['Eiweiße', 'Eiweiß', 'Proteine', 'Protein']] }; } },
      { b: 'b', p: 2, item: function () {
        var o = ['ca. 4 kcal', 'ca. 9 kcal', 'ca. 1 kcal', 'ca. 17 kcal'];
        return { typ: 'tabelle', frage: 'Ordne den Nährstoffen ihren Energiegehalt (kcal pro Gramm) zu.', spalten: ['Nährstoff', 'Energiegehalt pro Gramm'],
          zeilen: [{ kopf: 'Kohlenhydrate', zellen: [{ optionen: o, richtig: 0 }] }, { kopf: 'Fette', zellen: [{ optionen: o, richtig: 1 }] }, { kopf: 'Eiweiße', zellen: [{ optionen: o, richtig: 0 }] }] }; } },
      { b: 'c', p: 1, item: function (rnd) {
        var kh = waehle(rnd, RIEGEL.kh), fett = waehle(rnd, RIEGEL.fett), ei = waehle(rnd, RIEGEL.eiweiss);
        var genau = Math.round(W.bio.kcal(kh, fett, ei, { kh: 4.1, fett: 9.3, eiweiss: 4.1 }) * 10) / 10;
        return { typ: 'zahl', einheit: 'kcal', tol: 0.5, antwort: W.bio.kcal(kh, fett, ei), auch: [genau],
          frage: 'Ein Müsliriegel enthält ' + kh + ' g Kohlenhydrate, ' + fett + ' g Fett und ' + ei + ' g Eiweiß. Berechne seinen gesamten Energiegehalt in kcal (Ergebnis, 1 P.).' }; } },
      { b: 'c2', p: 1, zusatz: 'Rechenweg', erkl: {
        frage: 'Zeige deinen Rechenweg zum Müsliriegel aus c) (auf Papier oder hier).',
        begriffe: [B('kcal', ['kcal']), B('addiert', ['addiert', 'summe'])],
        punkte: [P('Je Nährstoff Masse in Gramm mal Energiegehalt gerechnet (× 4, × 9, × 4 kcal)', 0.5), P('Die drei Teilergebnisse addiert und die Einheit kcal angegeben', 0.5)],
        muster: 'Kohlenhydrate: Masse in g mal 4 kcal. Fett: Masse in g mal 9 kcal. Eiweiß: Masse in g mal 4 kcal. Die drei Teilergebnisse werden addiert. Beispiel 25 g, 8 g, 5 g: 100 kcal + 72 kcal + 20 kcal = 192 kcal.' } },
      { b: 'd', p: 1, item: function () { return { typ: 'wahl', frage: 'Warum benötigt der Körper auch im Schlaf Energie?', optionen: ['Für lebenswichtige Vorgänge wie Herzschlag, Atmung, Gehirntätigkeit und das Halten der Körpertemperatur (Grundumsatz).', 'Weil die Verdauung nur nachts arbeitet.', 'Weil im Schlaf die Muskeln besonders viel arbeiten.', 'Er benötigt im Schlaf keine Energie.'], richtig: 0 }; } }
    ] },
    { nr: 3, titel: 'Blutgruppen', fall: 'blutgruppen', teile: [
      { b: 'a', p: 4, item: function () {
        var ag = ['A', 'B', 'A und B', 'keine'], ak = ['Anti-A', 'Anti-B', 'Anti-A und Anti-B', 'keine'];
        return { typ: 'tabelle', frage: 'Vervollständige die Tabelle zum AB0-Blutgruppensystem.', spalten: ['Blutgruppe', 'Antigene auf roten Blutkörperchen', 'Antikörper im Blutplasma'],
          zeilen: [{ kopf: 'A', zellen: [{ optionen: ag, richtig: 0 }, { optionen: ak, richtig: 1 }] }, { kopf: 'B', zellen: [{ optionen: ag, richtig: 1 }, { optionen: ak, richtig: 0 }] },
            { kopf: 'AB', zellen: [{ optionen: ag, richtig: 2 }, { optionen: ak, richtig: 3 }] }, { kopf: '0', zellen: [{ optionen: ag, richtig: 3 }, { optionen: ak, richtig: 2 }] }] }; } },
      { b: 'b', p: 2, erkl: {
        frage: 'Erkläre den Unterschied zwischen Antigenen und Antikörpern.',
        begriffe: [B('Oberfläche', ['oberflaeche']), B('rote Blutkörperchen', ['blutkoerperchen']), B('Blutplasma', ['plasma'])],
        punkte: [P('Antigene sind Merkmale auf der Oberfläche der roten Blutkörperchen, zum Beispiel A oder B.', 1),
          P('Antikörper sind Abwehrstoffe im Blutplasma. Sie binden an passende fremde Antigene und lösen eine Verklumpung aus.', 1)],
        muster: 'Antigene sind Merkmale, die auf der Oberfläche der roten Blutkörperchen sitzen, zum Beispiel das Antigen A oder B. Antikörper dagegen schwimmen frei im Blutplasma. Sie sind Abwehrstoffe und binden an fremde Antigene, die zu ihnen passen. Dabei verklumpen die roten Blutkörperchen.' } },
      { b: 'c', p: 2, erkl: {
        frage: 'Was versteht man unter dem Rhesusfaktor?',
        begriffe: [B('Antigen', ['antigen']), B('Rhesus-positiv/negativ', ['rhesus']), B('Antikörper', ['antikoerper'])],
        punkte: [P('Der Rhesusfaktor ist ein weiteres Antigen (D) auf den roten Blutkörperchen. Wer es hat, ist Rhesus-positiv (Rh+), wer nicht, Rhesus-negativ (Rh−).', 1),
          P('Antikörper gegen den Rhesusfaktor (Anti-D) bildet ein Rh−-Mensch erst, nachdem er Kontakt mit Rh+-Blut hatte.', 1)],
        muster: 'Der Rhesusfaktor ist ein weiteres Antigen auf der Oberfläche der roten Blutkörperchen, unabhängig vom AB0-System. Menschen mit diesem Antigen sind Rhesus-positiv (Rh+), Menschen ohne es sind Rhesus-negativ (Rh−). Anders als bei A und B hat ein Rh−-Mensch nicht von Anfang an Antikörper gegen den Rhesusfaktor. Er bildet sie erst, wenn Rh+-Blut in seinen Körper gelangt ist.' } }
    ] },
    { nr: 4, titel: 'Vererbung von Blutgruppen', fall: 'vererbung',
      text: 'Die Blutgruppen werden durch die drei Allele A, B und 0 bestimmt. A und B sind gegenüber 0 dominant und untereinander kodominant.', teile: [
      { b: 'a', p: 2, item: function () {
        var o = ['AA oder A0', 'BB oder B0', 'AB', '00', 'A0 oder 00', 'AA oder AB'];
        return { typ: 'tabelle', frage: 'Ergänze die möglichen Genotypen.', spalten: ['Blutgruppe (Phänotyp)', 'Mögliche Genotypen'],
          zeilen: [{ kopf: 'A', zellen: [{ optionen: o, richtig: 0 }] }, { kopf: 'B', zellen: [{ optionen: o, richtig: 1 }] }, { kopf: 'AB', zellen: [{ optionen: o, richtig: 2 }] }, { kopf: '0', zellen: [{ optionen: o, richtig: 3 }] }] }; } },
      { b: 'bc', p: 4, item: function (rnd) {
        var p = waehle(rnd, PAARE);
        return { typ: 'kreuzung', mutter: p[0], vater: p[1], mitWahrscheinlichkeit: true,
          frage: 'b) Mutter: Genotyp ' + p[0] + '. Vater: Genotyp ' + p[1] + '. Vervollständige das Kreuzungsschema. c) Mit welcher Wahrscheinlichkeit haben die Kinder jeweils die Blutgruppen A, B, AB und 0?' }; } },
      { b: 'd', p: 2, erkl: {
        frage: 'Können zwei Eltern mit Blutgruppe AB ein Kind mit Blutgruppe 0 bekommen? Begründe.',
        begriffe: [B('Genotyp', ['genotyp']), B('Allel', ['allel']), B('00', ['00'])],
        punkte: [P('Nein. Beide Eltern haben den Genotyp AB und besitzen kein 0-Allel.', 1),
          P('Ein Kind mit Blutgruppe 0 braucht den Genotyp 00, also von jedem Elternteil ein 0-Allel. Möglich sind nur AA, AB und BB, also die Blutgruppen A, AB und B.', 1)],
        muster: 'Nein. Eltern mit Blutgruppe AB haben beide den Genotyp AB, sie besitzen also kein 0-Allel. Jedes Kind bekommt von jedem Elternteil ein Allel, also A oder B. Möglich sind deshalb nur die Genotypen AA, AB und BB. Für die Blutgruppe 0 bräuchte das Kind den Genotyp 00.' } }
    ] },
    { nr: 5, titel: 'Bluttransfusion', fall: 'blutgruppen', teile: [
      { b: 'a', p: 4, item: function () {
        var g = ['0', 'A', 'B', 'AB'];
        return { typ: 'matrix', frage: 'Markiere mit einem Kreuz, welche Blutgruppen bei einer Transfusion roter Blutkörperchen verträglich sind. Der Rhesusfaktor wird nicht berücksichtigt.',
          zeilenKopf: 'Spender', spaltenKopf: 'Empfänger', zeilen: g, spalten: g, richtig: g.map(function (s) { return g.map(function (e) { return W.bio.vertraeglich(s, e); }); }) }; } },
      { b: 'b', p: 1, item: function () { return { typ: 'wahl', frage: 'Warum gilt Blutgruppe 0 im AB0-System als Universalspender für rote Blutkörperchen?', optionen: ['Ihre roten Blutkörperchen tragen keine Antigene A und B und werden deshalb von keinen Antikörpern verklumpt.', 'Ihr Blutplasma enthält keine Antikörper.', 'Blutgruppe 0 ist die häufigste Blutgruppe.', 'Ihre roten Blutkörperchen tragen beide Antigene A und B.'], richtig: 0 }; } },
      { b: 'c', p: 1, item: function () { return { typ: 'wahl', frage: 'Warum gilt Blutgruppe AB im AB0-System als Universalempfänger?', optionen: ['Ihr Blutplasma enthält weder Anti-A noch Anti-B und verklumpt deshalb keine fremden roten Blutkörperchen.', 'Ihre roten Blutkörperchen tragen keine Antigene.', 'Ihr Blutplasma enthält Anti-A und Anti-B.', 'Blut der Gruppe AB bildet besonders viele rote Blutkörperchen.'], richtig: 0 }; } },
      { b: 'd', p: 2, erkl: function (rnd) {
        var t = waehle(rnd, TRANSFUSION);
        var pat = t[0], spender = t[1];
        var fremd = W.bio.antigene(spender).filter(function (a) { return W.bio.antigene(pat).indexOf(a) < 0; })[0];
        return {
          frage: 'Ein Patient mit Blutgruppe ' + pat + ' erhält rote Blutkörperchen der Blutgruppe ' + spender + '. Beschreibe die Folgen. Verwende den Begriff Agglutination.',
          begriffe: [B('Antikörper', ['antikoerper']), B('Antigen', ['antigen']), B('Agglutination', ['agglutination'])],
          punkte: [P('Im Blutplasma des Patienten (Blutgruppe ' + pat + ') sind Antikörper Anti-' + fremd + '. Sie binden an das Antigen ' + fremd + ' auf den fremden roten Blutkörperchen.', 1),
            P('Die roten Blutkörperchen verklumpen (Agglutination), verstopfen kleine Blutgefäße und zerfallen. Das ist lebensgefährlich.', 1)],
          muster: 'Der Patient hat Blutgruppe ' + pat + '. In seinem Blutplasma befinden sich Antikörper Anti-' + fremd + '. Die gespendeten roten Blutkörperchen der Blutgruppe ' + spender + ' tragen auf ihrer Oberfläche das Antigen ' + fremd + '. Die Antikörper binden daran, und die roten Blutkörperchen verklumpen. Diese Verklumpung heißt Agglutination. Die Klumpen verstopfen kleine Blutgefäße, die Blutkörperchen zerfallen. Für den Patienten ist das lebensgefährlich.'
        }; } }
    ] },
    { nr: 6, titel: 'Atmung, Zellatmung und Verdauung', fall: 'zellatmung', teile: [
      { b: 'a', p: 2, item: function () { return { typ: 'beschriften', frage: 'Benenne die Stoffe A, B, C und D (A = 1, B = 2, C = 3, D = 4).', abb: 'zellatmung', strukturen: ['stoff-a', 'stoff-b', 'stoff-c', 'stoff-d'], nummern: { 'stoff-a': 1, 'stoff-b': 2, 'stoff-c': 3, 'stoff-d': 4 } }; } },
      { b: 'b', p: 1, item: function () { return { typ: 'eingabe', frage: 'In welchem Zellorganell findet der größte Teil der aeroben Zellatmung statt?', akzeptiert: ['Mitochondrien', 'Mitochondrium', 'Mitochondrion'] }; } },
      { b: 'c', p: 2, erkl: {
        frage: 'Formuliere die Wortgleichung der Zellatmung.',
        begriffe: [B('Glucose', ['glucose', 'glukose', 'traubenzucker']), B('Sauerstoff', ['sauerstoff']), B('Kohlenstoffdioxid', ['kohlenstoffdioxid', 'kohlendioxid']), B('Wasser', ['wasser'])],
        punkte: [P('Ausgangsstoffe: Glucose + Sauerstoff', 1), P('Produkte: Kohlenstoffdioxid + Wasser (+ Energie)', 1)],
        muster: 'Glucose + Sauerstoff → Kohlenstoffdioxid + Wasser (+ Energie)' } },
      { b: 'd', p: 2, erkl: {
        frage: 'Stelle die vollständige chemische Reaktionsgleichung der Zellatmung mit Summenformeln auf.',
        begriffe: [B('C₆H₁₂O₆', ['c6h12o6']), B('6 O₂', ['6 o2']), B('6 CO₂', ['6 co2']), B('6 H₂O', ['6 h2o'])],
        punkte: [P('Alle Summenformeln richtig: C₆H₁₂O₆, O₂, CO₂, H₂O', 1), P('Alle Koeffizienten richtig: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O', 1)],
        muster: 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O (+ Energie)' } },
      { b: 'e', p: 3, erkl: {
        frage: 'Erkläre den Zusammenhang zwischen Verdauung, Atmung, Blutkreislauf und Zellatmung in einem zusammenhängenden Text.',
        begriffe: [B('Verdauung', ['verdau']), B('Glucose', ['glucose', 'glukose', 'traubenzucker']), B('Sauerstoff', ['sauerstoff']), B('Blut', ['blut']), B('Mitochondrien', ['mitochondri']), B('Energie', ['energie'])],
        punkte: [P('Verdauung: Die Nahrung wird in Bausteine wie Glucose zerlegt, die ins Blut aufgenommen werden.', 1),
          P('Atmung: In der Lunge gelangt Sauerstoff ins Blut. Der Blutkreislauf transportiert Glucose und Sauerstoff zu allen Körperzellen.', 1),
          P('Zellatmung: In den Mitochondrien wird Glucose mit Sauerstoff zu Kohlenstoffdioxid und Wasser umgesetzt, dabei wird Energie frei. Das CO₂ gelangt mit dem Blut zur Lunge und wird ausgeatmet.', 1)],
        muster: 'Bei der Verdauung wird die Nahrung in kleine Bausteine zerlegt. Aus Kohlenhydraten entsteht zum Beispiel Glucose, die im Dünndarm ins Blut aufgenommen wird. Bei der Atmung gelangt in der Lunge Sauerstoff ins Blut. Der Blutkreislauf transportiert Glucose und Sauerstoff zu allen Körperzellen. In den Mitochondrien der Zellen läuft die Zellatmung: Glucose reagiert mit Sauerstoff zu Kohlenstoffdioxid und Wasser, dabei wird Energie frei. Das Kohlenstoffdioxid wird mit dem Blut zur Lunge gebracht und ausgeatmet.' } }
    ] },
    { nr: 7, titel: 'Enzyme und Reaktionsgleichungen', fall: 'enzyme', teile: [
      { b: 'a', p: 2, erkl: {
        frage: 'Erkläre, was ein Enzym ist und welche Funktion es im menschlichen Körper hat.',
        begriffe: [B('Biokatalysator', ['katalysator']), B('Eiweiß', ['eiweiss', 'protein']), B('beschleunigen', ['beschleunig'])],
        punkte: [P('Enzyme sind Biokatalysatoren aus Eiweiß (Proteinen).', 1),
          P('Sie beschleunigen chemische Reaktionen im Körper, zum Beispiel die Spaltung der Nährstoffe bei der Verdauung, und werden dabei nicht verbraucht.', 1)],
        muster: 'Ein Enzym ist ein Biokatalysator aus Eiweiß. Enzyme beschleunigen chemische Reaktionen im Körper, zum Beispiel die Spaltung der Nährstoffe bei der Verdauung. Ohne Enzyme würden diese Reaktionen bei Körpertemperatur viel zu langsam ablaufen. Die Enzyme selbst werden dabei nicht verbraucht und können immer wieder arbeiten.' } },
      { b: 'b', p: 2, erkl: {
        frage: 'Beschreibe anhand der Abbildung das Schlüssel-Schloss-Prinzip. Verwende die Begriffe Enzym, Substrat, aktives Zentrum und Produkte.',
        abb: 'enzym',
        begriffe: [B('Enzym', ['enzym']), B('Substrat', ['substrat']), B('aktives Zentrum', ['aktive zentrum']), B('Produkte', ['produkt'])],
        punkte: [P('Das Substrat passt wie ein Schlüssel ins Schloss genau in das aktive Zentrum des Enzyms. Es bildet sich ein Enzym-Substrat-Komplex.', 1),
          P('Das Substrat wird gespalten, die Produkte werden frei, und das Enzym bleibt unverändert und kann erneut arbeiten.', 1)],
        muster: 'Phase 1: Das Substrat passt mit seiner Form genau in das aktive Zentrum des Enzyms, so wie ein Schlüssel in ein Schloss. Phase 2: Das Substrat bindet im aktiven Zentrum, es entsteht ein Enzym-Substrat-Komplex, und das Substrat wird gespalten. Phase 3: Die Produkte lösen sich vom Enzym. Das Enzym ist unverändert und kann das nächste Substrat umsetzen.' } },
      { b: 'c', p: 2, item: function () { return { typ: 'zuordnen', frage: 'Ordne Amylase, Protease, Lipase und Lactase jeweils ihr Substrat zu.', paare: [['Amylase', 'Stärke'], ['Protease', 'Eiweiße'], ['Lipase', 'Fette'], ['Lactase', 'Milchzucker (Lactose)']] }; } },
      { b: 'd', p: 1, erkl: {
        frage: 'Formuliere die Wortgleichung für die Spaltung von Milchzucker durch Lactase.',
        begriffe: [B('Milchzucker', ['milchzucker', 'lactose', 'laktose']), B('Traubenzucker', ['traubenzucker', 'glucose', 'glukose']), B('Schleimzucker', ['schleimzucker', 'galactose', 'galaktose'])],
        punkte: [P('Links Milchzucker (Lactose), Wasser darf dabeistehen', 0.5), P('Rechts Traubenzucker (Glucose) + Schleimzucker (Galactose)', 0.5)],
        muster: 'Milchzucker (Lactose) + Wasser → Traubenzucker (Glucose) + Schleimzucker (Galactose). Die Lactase steht über dem Pfeil, sie wird nicht verbraucht.' } },
      { b: 'e', p: 1, item: function () { return { typ: 'wahl', frage: 'Warum verlieren viele menschliche Enzyme bei sehr hohen Temperaturen ihre Funktion?', optionen: ['Enzyme sind Eiweiße. Bei hoher Temperatur wird ihre Struktur zerstört (Denaturierung), das aktive Zentrum verformt sich, und das Substrat passt nicht mehr.', 'Bei Hitze werden Enzyme schneller verbraucht.', 'Hohe Temperaturen machen das Substrat zu groß.', 'Enzyme schmelzen bei Hitze und werden zu Fett.'], richtig: 0 }; } }
    ] }
  ];

  /* ---------- Teil 3: Schwerpunkt nach der Stoffliste der Lehrerin (45 Min., 50 P.) ---------- */
  function nimm(teil, nr, b) {
    var a = teil.filter(function (x) { return x.nr === nr; })[0];
    return a.teile.filter(function (t) { return t.b === b; })[0];
  }
  var O2_STATIONEN = [['rechter Vorhof', 1], ['rechte Herzkammer', 1], ['Lungenarterie', 1], ['Lungenvene', 0], ['linker Vorhof', 0], ['linke Herzkammer', 0], ['Aorta', 0], ['Hohlvene', 1]];
  var TIERE = [['Karpfen', 1], ['Heuschrecke', 3], ['Regenwurm', 2], ['Amsel', 0], ['Kaulquappe', 1], ['Honigbiene', 3], ['Maus', 0], ['Hai', 1], ['Eidechse', 0], ['Marienkäfer', 3]];
  var ORGANE = ['Lunge', 'Kiemen', 'Haut', 'Tracheen'];

  var TEIL3 = [
    { nr: 1, titel: 'Gasaustausch (Textaufgabe)', fall: 'gasaustausch', teile: [
      { b: 'a', p: 1, item: nimm(TEIL1, 4, 'a').item },
      { b: 'b', p: 2, item: nimm(TEIL1, 4, 'b').item },
      { b: 'c', p: 6, erkl: {
        frage: 'Textaufgabe: Beschreibe in einem zusammenhängenden Text, wie in der Lunge Sauerstoff ins Blut und Kohlenstoffdioxid aus dem Blut gelangt. Verwende die Fachbegriffe Lungenbläschen, Kapillare, Diffusion und Konzentrationsgefälle.',
        begriffe: [B('Lungenbläschen', ['lungenblaeschen', 'alveole']), B('Kapillare', ['kapillar']), B('Diffusion', ['diffus', 'diffund']), B('Konzentrationsgefälle', ['konzentration'])],
        punkte: [P('Ort: Lungenbläschen, umgeben von einem dichten Netz aus Kapillaren', 1), P('Diffusion erklärt: Teilchen bewegen sich von selbst vom Ort hoher zum Ort niedriger Konzentration', 1),
          P('Sauerstoff: im Lungenbläschen viel, im Blut wenig, deshalb diffundiert er ins Blut', 1), P('Kohlenstoffdioxid: im Blut viel, im Lungenbläschen wenig, deshalb diffundiert es ins Lungenbläschen und wird ausgeatmet', 1),
          P('Bau: sehr dünne Wand (eine Zellschicht) und sehr große Oberfläche', 1), P('Das Konzentrationsgefälle bleibt durch Atmung und ständigen Blutfluss erhalten', 1)],
        muster: 'Der Gasaustausch findet in den Lungenbläschen statt. Jedes Lungenbläschen ist von einem dichten Netz aus Kapillaren umgeben. Der Austausch beruht auf Diffusion: Teilchen bewegen sich von selbst vom Ort hoher zum Ort niedriger Konzentration. In der eingeatmeten Luft im Lungenbläschen ist viel Sauerstoff, im ankommenden Blut wenig. Wegen dieses Konzentrationsgefälles diffundiert Sauerstoff durch die dünne Wand ins Blut. Beim Kohlenstoffdioxid ist es umgekehrt: Im Blut ist viel davon, im Lungenbläschen wenig. Deshalb diffundiert es ins Lungenbläschen und wird ausgeatmet. Das klappt so gut, weil die Wand nur aus einer Zellschicht besteht und alle Lungenbläschen zusammen eine riesige Oberfläche haben. Durch das Atmen und den ständigen Blutfluss bleibt das Konzentrationsgefälle erhalten.' } },
      { b: 'd', p: 3, erkl: function (rnd) { return waehle(rnd, [{
        frage: 'Bei einem langjährigen Raucher sind viele Lungenbläschen zerstört und zu größeren Blasen verschmolzen. Erkläre, warum er schon beim Treppensteigen außer Atem kommt.',
        begriffe: [B('Oberfläche', ['oberflaeche']), B('Sauerstoff', ['sauerstoff']), B('Diffusion', ['diffus', 'diffund'])],
        punkte: [P('Die Oberfläche für den Gasaustausch ist kleiner geworden.', 1), P('Pro Atemzug diffundiert deshalb weniger Sauerstoff ins Blut.', 1), P('Bei Belastung brauchen die Muskeln mehr Sauerstoff, als ankommt: Er atmet schneller und bekommt Luftnot.', 1)],
        muster: 'Wenn Lungenbläschen zerstört und zu großen Blasen verschmolzen sind, ist die Oberfläche für den Gasaustausch viel kleiner. Pro Atemzug diffundiert deshalb weniger Sauerstoff ins Blut. Beim Treppensteigen brauchen die Muskeln mehr Sauerstoff für die Zellatmung, als ankommt. Er atmet schneller und kommt trotzdem außer Atem.'
      }, {
        frage: 'In 5000 m Höhe enthält jeder Atemzug deutlich weniger Sauerstoff als am Meer. Erkläre, warum Bergsteiger dort schnell außer Atem kommen.',
        begriffe: [B('Konzentration', ['konzentration']), B('Diffusion', ['diffus', 'diffund']), B('Sauerstoff', ['sauerstoff'])],
        punkte: [P('In den Lungenbläschen ist weniger Sauerstoff.', 1), P('Das Konzentrationsgefälle zum Blut ist kleiner, deshalb diffundiert weniger Sauerstoff ins Blut.', 1), P('Die Muskeln bekommen zu wenig Sauerstoff: Atmung und Herzschlag werden schneller.', 1)],
        muster: 'In großer Höhe kommt mit jedem Atemzug weniger Sauerstoff in die Lungenbläschen. Das Konzentrationsgefälle zwischen Lungenbläschen und Blut ist kleiner, deshalb diffundiert weniger Sauerstoff ins Blut. Die Muskeln bekommen zu wenig Sauerstoff. Der Körper reagiert mit schnellerer Atmung und schnellerem Herzschlag.'
      }]); } }
    ] },
    { nr: 2, titel: 'Weg des Blutes', fall: 'herz', teile: [
      { b: 'a', p: 4, item: nimm(TEIL1, 6, 'a').item },
      { b: 'b', p: 4, erkl: function (rnd) { return waehle(rnd, [nimm(TEIL1, 6, 'b').erkl, {
        frage: 'Beschreibe den Weg eines Sauerstoffteilchens von den Lungenbläschen bis in eine Muskelzelle im Bein.',
        begriffe: [B('Lungenvene', ['lungenvene']), B('linke Kammer', ['linke kammer']), B('Aorta', ['aorta']), B('Kapillare', ['kapillar'])],
        punkte: [P('Aus dem Lungenbläschen per Diffusion in eine Lungenkapillare, dann über die Lungenvene zum Herzen', 1), P('Linker Vorhof → linke Herzkammer', 1),
          P('Aorta → Arterien → Kapillaren im Muskel', 1), P('Aus der Kapillare per Diffusion in die Muskelzelle, wo er bei der Zellatmung gebraucht wird', 1)],
        muster: 'Das Sauerstoffteilchen diffundiert aus dem Lungenbläschen in eine Kapillare der Lunge. Mit dem Blut gelangt es über die Lungenvene in den linken Vorhof und weiter in die linke Herzkammer. Die linke Kammer pumpt das Blut in die Aorta. Über die Arterien kommt es bis in die Kapillaren im Beinmuskel. Dort diffundiert der Sauerstoff aus der Kapillare in die Muskelzelle und wird bei der Zellatmung gebraucht.'
      }]); } },
      { b: 'c', p: 2, item: function (rnd) {
        var z = W.shuffle(O2_STATIONEN, rnd).slice(0, 4);
        return { typ: 'tabelle', frage: 'Führt die Struktur sauerstoffreiches oder sauerstoffarmes Blut?', spalten: ['Struktur', 'Blut'],
          zeilen: z.map(function (s) { return { kopf: s[0], zellen: [{ optionen: ['sauerstoffreich', 'sauerstoffarm'], richtig: s[1] }] }; }) }; } }
    ] },
    { nr: 3, titel: 'Vererbung der Blutgruppen', fall: 'vererbung',
      text: 'Die Blutgruppen werden durch die drei Allele A, B und 0 bestimmt. A und B sind gegenüber 0 dominant und untereinander kodominant.', teile: [
      { b: 'a', p: 2, item: nimm(TEIL2, 4, 'a').item },
      { b: 'bc', p: 4, item: nimm(TEIL2, 4, 'bc').item },
      { b: 'd', p: 2, erkl: function (rnd) { return waehle(rnd, [nimm(TEIL2, 4, 'd').erkl, {
        frage: 'Ein Kind hat Blutgruppe 0, die Mutter Blutgruppe A, der Vater Blutgruppe B. Gib die Genotypen der Eltern an und begründe.',
        begriffe: [B('Genotyp', ['genotyp']), B('Allel', ['allel']), B('00', ['00'])],
        punkte: [P('Das Kind hat den Genotyp 00 und hat von jedem Elternteil ein 0-Allel bekommen.', 1), P('Also hat die Mutter den Genotyp A0 und der Vater den Genotyp B0.', 1)],
        muster: 'Blutgruppe 0 hat immer den Genotyp 00. Das Kind hat also von der Mutter und vom Vater je ein 0-Allel bekommen. Die Mutter hat Blutgruppe A und trägt ein 0-Allel, also hat sie den Genotyp A0. Der Vater hat Blutgruppe B und trägt ebenfalls ein 0-Allel, also hat er den Genotyp B0.'
      }]); } },
      { b: 'e', p: 2, item: function () { return { typ: 'wahl', frage: 'Die Mutter hat Blutgruppe 0, der Vater Blutgruppe AB. Welche Blutgruppen können ihre Kinder haben?', optionen: ['nur A oder B', 'A, B oder AB', 'A, B, AB oder 0', 'nur AB'], richtig: 0, erkl: '00 × AB ergibt A0 oder B0, also Blutgruppe A oder B, je 50 %.' }; } }
    ] },
    { nr: 4, titel: 'Zusammenhang Atmung – Zellatmung – Verdauung', fall: 'zellatmung', teile: [
      { b: 'a', p: 2, item: nimm(TEIL2, 6, 'a').item },
      { b: 'b', p: 1, item: nimm(TEIL2, 6, 'b').item },
      { b: 'c', p: 2, erkl: nimm(TEIL2, 6, 'c').erkl },
      { b: 'd', p: 3, erkl: nimm(TEIL2, 6, 'e').erkl },
      { b: 'e', p: 1, item: function () { return { typ: 'wahl', frage: 'Wo gelangt die Glucose aus der Nahrung ins Blut?', optionen: ['im Dünndarm über die Darmzotten', 'im Magen', 'in der Lunge', 'in der Mundhöhle'], richtig: 0 }; } },
      { b: 'f', p: 1, item: function () { return { typ: 'wahl', frage: 'Welcher Stoff entsteht bei der Zellatmung und wird über die Lunge abgegeben?', optionen: ['Kohlenstoffdioxid', 'Sauerstoff', 'Glucose', 'Stickstoff'], richtig: 0 }; } }
    ] },
    { nr: 5, titel: 'Formen äußerer Atmung', fall: 'atmungsformen', teile: [
      { b: 'a', p: 2, item: function (rnd) {
        var s = ['kiemenatmung', 'tracheenatmung', 'hautatmung', 'lungenatmung'];
        return { typ: 'beschriften', frage: 'Ordne jedem Tier seine Form der äußeren Atmung zu.', abb: 'atmungsformen', strukturen: s, nummern: nummern(rnd, s) }; } },
      { b: 'b', p: 2, item: function (rnd) {
        var z = W.shuffle(TIERE, rnd).slice(0, 4);
        return { typ: 'tabelle', frage: 'Über welches Organ atmet das Tier?', spalten: ['Tier', 'Atmungsorgan'],
          zeilen: z.map(function (t) { return { kopf: t[0], zellen: [{ optionen: ORGANE, richtig: t[1] }] }; }) }; } },
      { b: 'c', p: 2, erkl: {
        frage: 'Ein Fisch erstickt an Land, obwohl Luft viel mehr Sauerstoff enthält als Wasser. Erkläre.',
        begriffe: [B('Kiemenblättchen', ['kiemenblaettchen', 'kiemen']), B('Oberfläche', ['oberflaeche']), B('Diffusion', ['diffund', 'diffus'])],
        punkte: [P('An der Luft fallen die dünnen Kiemenblättchen zusammen und verkleben, das Wasser trägt sie nicht mehr.', 1), P('Die Austauschfläche wird viel kleiner, die Kiemen trocknen aus, und es diffundiert zu wenig Sauerstoff ins Blut.', 1)],
        muster: 'Die Kiemen bestehen aus vielen dünnen Kiemenblättchen, die im Wasser frei schweben und so eine große Oberfläche bilden. An der Luft fallen die Kiemenblättchen zusammen und verkleben. Die Austauschfläche wird viel kleiner, und die Kiemen trocknen aus. Obwohl die Luft viel Sauerstoff enthält, diffundiert deshalb zu wenig Sauerstoff ins Blut, und der Fisch erstickt.' } },
      { b: 'd', p: 2, erkl: {
        frage: 'Erkläre den Unterschied zwischen äußerer und innerer Atmung.',
        begriffe: [B('Gasaustausch', ['gase', 'gasaustausch']), B('Zellatmung', ['zellatmung']), B('Mitochondrien', ['mitochondri'])],
        punkte: [P('Äußere Atmung: Gasaustausch zwischen Lebewesen und Umgebung (Sauerstoff aufnehmen, Kohlenstoffdioxid abgeben), z. B. über Lunge, Kiemen, Haut oder Tracheen.', 1),
          P('Innere Atmung (Zellatmung): In den Mitochondrien wird Glucose mit Sauerstoff zu Kohlenstoffdioxid und Wasser umgesetzt, dabei wird Energie frei.', 1)],
        muster: 'Bei der äußeren Atmung tauscht ein Lebewesen Gase mit seiner Umgebung aus: Es nimmt Sauerstoff auf und gibt Kohlenstoffdioxid ab, zum Beispiel über die Lunge, die Kiemen, die Haut oder die Tracheen. Die innere Atmung ist die Zellatmung. In den Mitochondrien der Zellen wird Glucose mit Sauerstoff zu Kohlenstoffdioxid und Wasser umgesetzt, dabei wird Energie frei.' } }
    ] }
  ];

  var TEILE = { 1: TEIL1, 2: TEIL2, 3: TEIL3 };
  var DAUER = { 1: 45, 2: 60, 3: 45 };
  var TITEL = { 1: 'Teil 1 · Grundlagen, Atmung und Kreislauf', 2: 'Teil 2 · Kreislauf, Ernährung und Stoffwechsel', 3: 'Schwerpunkt · Stoffliste der Lehrerin' };

  /** Prüfung erzeugen: gleicher Seed, gleiche Prüfung. */
  function erzeugen(teil, seed) {
    var rnd = mulberry32(seed >>> 0);
    return TEILE[teil].map(function (a) {
      return {
        nr: a.nr, titel: a.titel, fall: a.fall, text: a.text || null,
        teile: a.teile.map(function (t) {
          var key = 'p' + teil + '-' + a.nr + t.b;
          var out = { key: key, buchst: t.b, punkte: t.p, zusatz: t.zusatz || null };
          if (t.item) out.item = Object.assign(t.item(rnd), { id: key });
          else out.erkl = Object.assign({}, typeof t.erkl === 'function' ? t.erkl(rnd) : t.erkl, { id: key });
          return out;
        })
      };
    });
  }

  function teilFinden(id) {
    var m = /^p([123])-(\d)([a-f]+\d?)$/.exec(id || '');
    if (!m) return null;
    var a = erzeugen(+m[1], Math.floor(Math.random() * 1e9));
    var gef = null;
    a.forEach(function (x) { x.teile.forEach(function (t) { if (t.key === id) gef = t; }); });
    return gef;
  }
  function itemNachId(id) { var t = teilFinden(id); return t && t.item ? t.item : null; }
  function erklNachId(id) { var t = teilFinden(id); return t && t.erkl ? t.erkl : null; }

  /** Auswertung: Aufgaben prüft die App (auf halbe Punkte abgerundet), Erklärungen nach angehakten Punkten. */
  function auswerten(aufgaben, antworten, bewertung) {
    var gesamt = 0, max = 0, falsch = [], erklProzent = {};
    var liste = aufgaben.map(function (a) {
      var teile = a.teile.map(function (t) {
        var erreicht;
        if (t.item) {
          var sc = W.aufgaben.score(t.item, antworten[t.key]);
          erreicht = W.logic.punkteRunden(sc, t.punkte);
          if (sc < 1 - 1e-9) falsch.push(t.key);
        } else {
          var haken = bewertung[t.key] || [];
          erreicht = Math.min(t.punkte, haken.reduce(function (s, i) { return s + (t.erkl.punkte[i] ? t.erkl.punkte[i].p : 0); }, 0));
          erklProzent[t.key] = t.punkte ? erreicht / t.punkte : 0;
        }
        return { key: t.key, buchst: t.buchst, erreicht: erreicht, max: t.punkte };
      });
      var e = teile.reduce(function (s, t) { return s + t.erreicht; }, 0);
      var m = teile.reduce(function (s, t) { return s + t.max; }, 0);
      gesamt += e; max += m;
      return { nr: a.nr, titel: a.titel, fall: a.fall, punkte: e, max: m, teile: teile };
    });
    return { aufgaben: liste, punkte: gesamt, max: max, falsch: falsch, erklProzent: erklProzent };
  }

  W.pruefung = { erzeugen: erzeugen, auswerten: auswerten, itemNachId: itemNachId, erklNachId: erklNachId, DAUER: DAUER, TITEL: TITEL };
})();
