/* Box 7: Mädchen, 14, Bauchschmerzen und Blähungen nach Kakao – Enzyme (Blatt Teil 2, Aufgabe 7) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'enzyme', box: 7, teil: 2, blatt: 'T2-7',
    titel: 'Enzyme und Verdauung',
    patient: 'Mädchen, 14', symptom: 'Bauchschmerzen und Blähungen nach Kakao',
    aufnahme: {
      text: '<p>Etwa eine Stunde nach dem Frühstück bekommt sie krampfartige Bauchschmerzen, der Bauch ist gebläht, dazu leichter Durchfall. Getrunken hat sie zwei große Becher Kakao mit Milch. Sie sagt, das passiere öfter, und zwar immer nach Milchprodukten.</p><p>Kein Fieber, kein Erbrechen. Puls, Atmung und Sauerstoff sind unauffällig. Das Problem liegt im Darm.</p>',
      werte: { puls: 88, af: 16, spo2: 99 },
      oberaerztin: 'Box 7. Kakao, Bauchschmerzen, Monitor ruhig. Irgendwo fehlt ein Enzym.',
      leitfrage: 'Was machen Enzyme bei der Verdauung, und warum verträgt ihr Darm den Milchzucker nicht?'
    },
    karten: [
      {
        titel: 'Enzyme sind Biokatalysatoren',
        text: '<p><strong>Enzyme</strong> sind <strong>Eiweiße</strong>. Sie beschleunigen chemische Reaktionen im Körper, die ohne sie viel zu langsam ablaufen würden. Deshalb heißen sie <strong>Biokatalysatoren</strong>.</p><p>Bei der Verdauung spalten Enzyme die großen Nährstoffteilchen in kleine Bausteine, die ins Blut gelangen können. Ein Enzym wird bei der Reaktion <strong>nicht verbraucht</strong>. Es kann dieselbe Reaktion viele Male hintereinander beschleunigen.</p>',
        merk: 'Enzyme sind Biokatalysatoren aus Eiweiß. Sie beschleunigen Reaktionen im Körper, etwa die Spaltung der Nährstoffe, und werden dabei nicht verbraucht.',
        achtung: '<strong>Achtung, Falle</strong>Enzym und Substrat nicht verwechseln. Das Substrat ist der Stoff, der umgesetzt wird. Das Enzym ist das Werkzeug, das ihn umsetzt, und bleibt dabei unverändert.'
      },
      {
        titel: 'Das Schlüssel-Schloss-Prinzip',
        abb: 'enzym', abbOpts: { beschriftet: true },
        demo: 'enzymlabor',
        text: '<p>Jedes Enzym hat eine Einbuchtung mit einer ganz bestimmten Form, das <strong>aktive Zentrum</strong>. Der Stoff, den das Enzym umsetzt, heißt <strong>Substrat</strong>.</p><p><strong>Phase 1:</strong> Das Substrat passt genau in das aktive Zentrum, wie ein Schlüssel in sein Schloss.</p><p><strong>Phase 2:</strong> Enzym und Substrat bilden kurz einen <strong>Enzym-Substrat-Komplex</strong>. Dabei wird das Substrat gespalten.</p><p><strong>Phase 3:</strong> Die <strong>Produkte</strong> lösen sich vom Enzym. Das Enzym ist unverändert und kann das nächste Substrat aufnehmen.</p>',
        merk: 'Substrat passt ins aktive Zentrum → Enzym-Substrat-Komplex → Substrat wird gespalten → Produkte werden frei, das Enzym bleibt unverändert.'
      },
      {
        titel: 'Jedes Enzym hat sein Substrat',
        text: '<p>Nur ein Substrat mit der passenden Form passt ins aktive Zentrum. Jedes Enzym setzt deshalb nur einen bestimmten Stoff um. Man sagt: Enzyme sind <strong>substratspezifisch</strong>.</p><p>Vier Verdauungsenzyme musst du kennen:</p><ul><li><strong>Amylase</strong> spaltet <strong>Stärke</strong>.</li><li><strong>Protease</strong> spaltet <strong>Eiweiße</strong>.</li><li><strong>Lipase</strong> spaltet <strong>Fette</strong>.</li><li><strong>Lactase</strong> spaltet <strong>Lactose</strong> (Milchzucker).</li></ul><p>Der Name verrät das Substrat: Amyl- steht für Stärke, Prote- für Eiweiß (Protein), Lip- für Fett, Lact- für Milch. Die Endung <strong>-ase</strong> zeigt an, dass ein Enzym gemeint ist.</p>',
        merk: 'Amylase → Stärke, Protease → Eiweiße, Lipase → Fette, Lactase → Lactose (Milchzucker).',
        achtung: '<strong>Achtung, Falle</strong>Ein Enzym springt nicht für ein anderes ein. Die Amylase kann Milchzucker nicht spalten, obwohl Stärke und Milchzucker beide Kohlenhydrate sind. Der Milchzucker passt nicht in ihr aktives Zentrum.'
      },
      {
        titel: 'Lactase spaltet Milchzucker',
        text: '<p>Milch enthält <strong>Milchzucker</strong> (Lactose). Ein Milchzuckerteilchen besteht aus zwei verbundenen Zuckerbausteinen und ist zu groß, um ins Blut zu gelangen. Die <strong>Lactase</strong> in der Wand des Dünndarms spaltet es:</p><p><strong>Milchzucker + Wasser → Traubenzucker + Schleimzucker</strong></p><p>Mit Fachnamen: Lactose + Wasser → Glucose + Galactose. Das Wasser auf der linken Seite darfst du weglassen. Die beiden kleinen Zucker werden im Dünndarm ins Blut aufgenommen.</p><p>Bildet der Körper zu wenig Lactase, gelangt der Milchzucker <strong>ungespalten in den Dickdarm</strong>. Dort vergären ihn Bakterien. Dabei entstehen Gase, die Blähungen und Bauchschmerzen verursachen. Das ist eine <strong>Laktoseintoleranz</strong>.</p>',
        merk: 'Milchzucker (Lactose) → Traubenzucker (Glucose) + Schleimzucker (Galactose). Das Enzym dafür ist die Lactase.'
      },
      {
        titel: 'Hitze: Denaturierung',
        abb: 'enzym', abbOpts: { denaturiert: true, beschriftet: true, nur: ['substrat', 'aktives-zentrum', 'enzym'], hervorheben: ['aktives-zentrum'] },
        text: '<p>Enzyme bestehen aus Eiweiß, und Eiweiß verändert bei großer Hitze dauerhaft seine Form. Das heißt <strong>Denaturierung</strong>. Beim Kochen eines Eis siehst du das: Das Eiklar wird fest und weiß und nie wieder flüssig.</p><p>Bei einem denaturierten Enzym ist das <strong>aktive Zentrum verformt</strong>. Das Substrat passt nicht mehr hinein, das Enzym ist wirkungslos. Die Denaturierung ist <strong>nicht umkehrbar</strong>.</p><p>Menschliche Enzyme arbeiten am besten bei etwa 37 °C. Fieber über etwa 42 °C ist lebensgefährlich, weil dann körpereigene Eiweiße wie die Enzyme denaturieren.</p>',
        merk: 'Hohe Temperatur denaturiert Enzyme: Das aktive Zentrum verformt sich, das Substrat passt nicht mehr. Das ist nicht umkehrbar.',
        achtung: '<strong>Achtung, Falle</strong>Kälte macht Enzyme nur langsamer. Wird es wieder warm, arbeiten sie weiter. Hitze dagegen zerstört ihre Form dauerhaft.'
      },
      {
        titel: 'pH-Optimum',
        plus: true,
        text: '<p>Enzyme reagieren nicht nur auf die Temperatur, sondern auch auf den <strong>pH-Wert</strong>, also darauf, wie sauer es ist. Jedes Enzym hat ein <strong>pH-Optimum</strong>, bei dem es am besten arbeitet.</p><p><strong>Pepsin</strong>, eine Protease im Magen, arbeitet im stark Sauren bei etwa pH 2. Die <strong>Amylase</strong> aus dem Speichel arbeitet am besten um pH 7, also im Neutralen. Im sauren Magen hört die Speichel-Amylase deshalb auf zu arbeiten.</p>',
        merk: 'Jedes Enzym hat ein pH-Optimum: Pepsin im Magen um pH 2, Speichel-Amylase um pH 7.'
      },
      {
        titel: 'Der Weg der Nahrung',
        plus: true,
        text: '<p><strong>Mund:</strong> Die Zähne zerkleinern die Nahrung. Die Amylase im Speichel beginnt, Stärke zu spalten.</p><p><strong>Speiseröhre:</strong> Muskelbewegungen schieben den Bissen in den Magen.</p><p><strong>Magen:</strong> Salzsäure tötet Krankheitserreger ab. Das Pepsin beginnt, Eiweiße zu spalten.</p><p><strong>Dünndarm:</strong> Enzyme aus der Bauchspeicheldrüse spalten Stärke, Eiweiße und Fette weiter. Die <strong>Galle</strong> aus der Leber emulgiert das Fett, sie zerteilt es in feine Tröpfchen. Die Darmzotten nehmen die Bausteine auf, von dort gelangen sie ins Blut.</p><p><strong>Dickdarm:</strong> Er entzieht dem unverdaulichen Rest Wasser.</p>',
        merk: 'Mund → Speiseröhre → Magen → Dünndarm → Dickdarm. Im Dünndarm wird die Nahrung fertig gespalten und ins Blut aufgenommen.',
        achtung: '<strong>Achtung, Falle</strong>Die Galle ist kein Enzym. Sie spaltet nichts, sondern zerteilt das Fett nur in feine Tröpfchen. So hat die Lipase mehr Angriffsfläche.'
      },
      {
        titel: 'Darmzotten: große Oberfläche',
        plus: true,
        text: '<p>Die Innenwand des Dünndarms liegt in Falten. Auf den Falten sitzen Millionen fingerförmige <strong>Darmzotten</strong>, und deren Zellen tragen noch winzige Ausstülpungen. So wird die Oberfläche um ein Vielfaches größer.</p><p>Jede Darmzotte ist von einem dichten Netz aus Blutkapillaren durchzogen. Je größer die Oberfläche, desto mehr Bausteine können pro Minute aufgenommen werden. Das ist dasselbe Prinzip wie bei den Lungenbläschen: <strong>Oberflächenvergrößerung</strong>.</p>',
        merk: 'Darmzotten vergrößern die Oberfläche des Dünndarms. So werden die Bausteine der Nahrung schnell aufgenommen.'
      }
    ],
    ueben: [
      { id: 'enzyme-u1', typ: 'beschriften', frage: 'Benenne die nummerierten Teile der Abbildung zum Schlüssel-Schloss-Prinzip.', abb: 'enzym', strukturen: ['substrat', 'aktives-zentrum', 'enzym', 'komplex', 'produkte'] },
      { id: 'enzyme-u2', typ: 'wahl', frage: 'Was ist ein Enzym?', optionen: ['ein Eiweiß, das als Biokatalysator Reaktionen im Körper beschleunigt', 'ein Nährstoff, aus dem der Körper Energie gewinnt', 'ein Zucker, der bei der Verdauung entsteht', 'ein Stoff, der bei jeder Reaktion verbraucht wird'], richtig: 0, erkl: 'Enzyme sind Biokatalysatoren aus Eiweiß. Sie beschleunigen Reaktionen und bleiben dabei unverändert.' },
      { id: 'enzyme-u3', typ: 'mehrfach', frage: 'Welche Aussagen über Enzyme stimmen?', optionen: ['Sie bestehen aus Eiweiß.', 'Sie beschleunigen Reaktionen im Körper.', 'Sie werden bei der Reaktion nicht verbraucht.', 'Ein Enzym kann jeden Nährstoff spalten.', 'Sie liefern dem Körper Energie.'], richtig: [0, 1, 2], erkl: 'Enzyme sind substratspezifisch, also spaltet jedes nur seinen Stoff. Energie liefern die Nährstoffe, nicht die Enzyme.' },
      { id: 'enzyme-u4', typ: 'eingabe', frage: 'Wie heißt der Stoff, den ein Enzym umsetzt?', akzeptiert: ['Substrat', 'Substrate'] },
      { id: 'enzyme-u5', typ: 'eingabe', frage: 'Wie heißt der Bereich des Enzyms, in den das Substrat genau hineinpasst?', akzeptiert: ['aktives Zentrum', 'aktive Zentrum', 'aktiven Zentrum'] },
      { id: 'enzyme-u6', typ: 'reihenfolge', frage: 'Bring die Schritte des Schlüssel-Schloss-Prinzips in die richtige Reihenfolge.', schritte: ['Das Substrat passt in das aktive Zentrum.', 'Enzym und Substrat bilden einen Enzym-Substrat-Komplex.', 'Das Substrat wird gespalten.', 'Die Produkte lösen sich vom Enzym.', 'Das Enzym nimmt unverändert das nächste Substrat auf.'] },
      { id: 'enzyme-u7', typ: 'luecke', text: 'Das {Substrat|Produkt} passt genau in das {aktive Zentrum|Substrat} des Enzyms, wie ein Schlüssel in ein Schloss. Kurz entsteht ein {Enzym-Substrat-Komplex|aktives Zentrum}. Das Substrat wird gespalten, und die {Produkte|Enzyme} werden frei. Das Enzym ist danach {unverändert|aufgebraucht}.' },
      { id: 'enzyme-u8', typ: 'wahl', frage: 'Enzyme sind <strong>substratspezifisch</strong>. Was bedeutet das?', optionen: ['Jedes Enzym setzt nur das Substrat um, das in sein aktives Zentrum passt.', 'Jedes Enzym arbeitet nur bei einer einzigen Temperatur.', 'Jedes Enzym kann nur ein einziges Mal ein Substrat umsetzen.', 'Jedes Enzym kommt nur in einem einzigen Organ vor.'], richtig: 0 },
      { id: 'enzyme-u9', typ: 'zuordnen', frage: 'Ordne Amylase, Protease, Lipase und Lactase jeweils ihr Substrat zu.', paare: [['Amylase', 'Stärke'], ['Protease', 'Eiweiße'], ['Lipase', 'Fette'], ['Lactase', 'Lactose (Milchzucker)']] },
      { id: 'enzyme-u10', typ: 'wahl', frage: 'Wie heißt das Enzym, das Milchzucker spaltet?', optionen: ['Lactase', 'Lactose', 'Amylase', 'Lipase'], richtig: 0, erkl: 'Lactose ist der Milchzucker selbst, also das Substrat. Die Endung -ase zeigt das Enzym an: Lactase.' },
      { id: 'enzyme-u11', typ: 'luecke', frage: 'Formuliere die Wortgleichung für die Spaltung von Milchzucker durch Lactase.', text: '{Milchzucker|Traubenzucker|Stärke} + Wasser → {Traubenzucker|Milchzucker|Fruchtzucker} + {Schleimzucker|Malzzucker|Fruchtzucker}' },
      { id: 'enzyme-u12', typ: 'liste', frage: 'Welche zwei Zucker entstehen, wenn Lactase Milchzucker spaltet? Deutsche Namen oder Fachnamen.', anzahl: 2, gruppen: [['Traubenzucker', 'Glucose', 'Glukose'], ['Schleimzucker', 'Galactose', 'Galaktose']] },
      { id: 'enzyme-u13', typ: 'behauptung', aussage: 'Ein Enzym wird bei der Reaktion verbraucht. Für jedes Stärketeilchen braucht der Körper deshalb ein neues Amylaseteilchen.', stimmt: false, gruende: ['Das Enzym geht unverändert aus der Reaktion hervor und kann viele Substratteilchen nacheinander spalten.', 'Das Enzym wird zwar verbraucht, aber Stärke wird gar nicht von der Amylase gespalten.', 'Enzyme bestehen aus Fett und nehmen deshalb an keiner Reaktion teil.'], richtig: 0 },
      { id: 'enzyme-u14', typ: 'wahl', frage: 'Warum verlieren viele menschliche Enzyme bei sehr hohen Temperaturen ihre Funktion?', optionen: ['Das Eiweiß wird denaturiert. Das aktive Zentrum verformt sich, und das Substrat passt nicht mehr.', 'Das Substrat wird in der Hitze größer und passt deshalb nicht mehr ins aktive Zentrum.', 'Die Enzyme arbeiten in der Hitze so schnell, dass sie sich aufbrauchen.', 'In der Hitze fehlt das Wasser, das die Enzyme zum Arbeiten brauchen.'], richtig: 0, erkl: 'Enzyme sind Eiweiße. Hitze verformt sie dauerhaft, das ist die Denaturierung.' },
      { id: 'enzyme-u15', typ: 'eingabe', frage: 'Wie heißt die dauerhafte Formveränderung eines Eiweißes durch große Hitze?', akzeptiert: ['Denaturierung', 'Denaturieren', 'denaturiert', 'Denaturation'] },
      { id: 'enzyme-u16', typ: 'behauptung', aussage: 'Sinkt hohes Fieber wieder, nehmen die denaturierten Enzyme ihre alte Form wieder an und arbeiten weiter.', stimmt: false, gruende: ['Die Denaturierung ist nicht umkehrbar. Die Zellen müssen neue Enzyme bilden.', 'Denaturierte Enzyme arbeiten nach dem Abkühlen sogar schneller als vorher.', 'Fieber verändert nur das Substrat, nie das Enzym.'], richtig: 0 },
      { id: 'enzyme-u17', typ: 'wahl', frage: 'Warum ist Fieber über etwa 42 °C lebensgefährlich?', optionen: ['Körpereigene Eiweiße wie die Enzyme denaturieren, wichtige Reaktionen laufen nicht mehr ab.', 'Bei 42 °C kann das Blut keinen Sauerstoff mehr aufnehmen.', 'Die Enzyme werden bei 42 °C nur etwas langsamer, das schwächt den Körper.', 'Das Wasser im Körper verdampft bei 42 °C.'], richtig: 0 },
      { id: 'enzyme-u18', typ: 'wahl', plus: true, frage: 'Pepsin, eine Protease im Magen, arbeitet am besten bei pH 2. Die Amylase aus dem Speichel arbeitet am besten um pH 7. Was passiert mit der Speichel-Amylase im Magen?', optionen: ['Sie hört auf zu arbeiten, weil es dort viel zu sauer ist.', 'Sie arbeitet im Magen besonders schnell.', 'Sie spaltet im Magen die Eiweiße.', 'Sie wird im Magen zu Pepsin umgebaut.'], richtig: 0, erkl: 'Jedes Enzym hat ein pH-Optimum. Der Magen ist für die Speichel-Amylase viel zu sauer.' },
      { id: 'enzyme-u19', typ: 'reihenfolge', plus: true, frage: 'Bring die Stationen der Nahrung in die richtige Reihenfolge.', schritte: ['Mund: Speichel mit Amylase', 'Speiseröhre', 'Magen: Salzsäure und Pepsin', 'Dünndarm: Enzyme, Galle, Darmzotten', 'Dickdarm: Wasser wird entzogen'] },
      { id: 'enzyme-u20', typ: 'wahl', plus: true, frage: 'Was macht die Galle im Dünndarm?', optionen: ['Sie zerteilt Fett in feine Tröpfchen, damit die Lipase besser angreifen kann.', 'Sie spaltet Eiweiße in ihre Bausteine.', 'Sie macht den Speisebrei stark sauer.', 'Sie entzieht dem Speisebrei Wasser.'], richtig: 0, erkl: 'Die Galle emulgiert das Fett. Spalten muss es danach die Lipase.' },
      { id: 'enzyme-u21', typ: 'wahl', plus: true, frage: 'Wozu hat der Dünndarm Millionen Darmzotten?', optionen: ['Sie vergrößern die Oberfläche, damit viele Bausteine schnell aufgenommen werden.', 'Sie bilden die Galle für die Fettverdauung.', 'Sie zerkleinern die Nahrung wie Zähne.', 'Sie halten Krankheitserreger mit Salzsäure ab.'], richtig: 0, erkl: 'Oberflächenvergrößerung wie bei den Lungenbläschen: Je größer die Fläche, desto mehr wird pro Minute aufgenommen.' }
    ],
    erklaeren: [
      {
        id: 'enzyme-e1',
        frage: 'Erkläre, was ein Enzym ist und welche Funktion es im menschlichen Körper hat.',
        tipp: 'Zwei Teile: Was für ein Stoff ist ein Enzym? Was tut es im Körper, zum Beispiel bei der Verdauung?',
        begriffe: [
          { name: 'Eiweiß', muster: ['eiweiss', 'protein'] },
          { name: 'Biokatalysator', muster: ['katalysator'] },
          { name: 'beschleunigt Reaktionen', muster: ['beschleunig'] },
          { name: 'nicht verbraucht', muster: ['nicht verbraucht', 'unveraendert'] },
          { name: 'Verdauung', muster: ['verdau', 'spalt'] }
        ],
        punkte: [
          { text: 'Ein Enzym ist ein Eiweiß, das als Biokatalysator wirkt.', p: 1 },
          { text: 'Es beschleunigt Reaktionen im Körper, zum Beispiel die Spaltung der Nährstoffe bei der Verdauung, und wird dabei nicht verbraucht.', p: 1 }
        ],
        muster: 'Ein Enzym ist ein Eiweiß, das als Biokatalysator wirkt. Es beschleunigt chemische Reaktionen im Körper, die sonst viel zu langsam ablaufen würden. Bei der Verdauung spalten Enzyme zum Beispiel die Nährstoffe in kleine Bausteine, die ins Blut aufgenommen werden können. Das Enzym wird dabei nicht verbraucht und kann viele Male hintereinander arbeiten. Jedes Enzym ist substratspezifisch, es setzt also nur ein bestimmtes Substrat um.'
      },
      {
        id: 'enzyme-e2',
        abb: 'enzym',
        frage: 'Beschreibe anhand der Abbildung (drei Phasen) das Schlüssel-Schloss-Prinzip. Verwende die Begriffe Enzym, Substrat, aktives Zentrum und Produkte.',
        tipp: 'Geh die drei Phasen der Reihe nach durch und benutze alle vier vorgegebenen Begriffe.',
        begriffe: [
          { name: 'Enzym', muster: ['enzym'] },
          { name: 'Substrat', muster: ['substrat'] },
          { name: 'aktives Zentrum', muster: ['zentrum'] },
          { name: 'Enzym-Substrat-Komplex', muster: ['komplex'] },
          { name: 'Produkte', muster: ['produkt'] }
        ],
        punkte: [
          { text: 'Das Substrat passt genau in das aktive Zentrum des Enzyms, wie ein Schlüssel ins Schloss. Es bildet sich ein Enzym-Substrat-Komplex.', p: 1 },
          { text: 'Das Substrat wird gespalten, die Produkte werden frei, das Enzym ist unverändert.', p: 1 }
        ],
        muster: 'Phase 1: Das Substrat passt mit seiner Form genau in das aktive Zentrum des Enzyms, so wie ein Schlüssel nur in ein bestimmtes Schloss passt. Phase 2: Das Substrat bindet im aktiven Zentrum, es entsteht ein Enzym-Substrat-Komplex. Dabei wird das Substrat gespalten. Phase 3: Die Produkte lösen sich vom Enzym. Das Enzym ist unverändert und kann das nächste Substrat aufnehmen.'
      },
      {
        id: 'enzyme-e3',
        frage: 'Warum verlieren viele menschliche Enzyme bei sehr hohen Temperaturen ihre Funktion?',
        tipp: 'Woraus bestehen Enzyme, und was passiert mit diesem Stoff bei großer Hitze?',
        begriffe: [
          { name: 'Eiweiß', muster: ['eiweiss', 'protein'] },
          { name: 'Denaturierung', muster: ['denatur'] },
          { name: 'aktives Zentrum', muster: ['zentrum'] },
          { name: 'Substrat passt nicht', muster: ['passt'] }
        ],
        punkte: [
          { text: 'Enzyme sind Eiweiße. Bei großer Hitze werden sie denaturiert, nicht umkehrbar.', p: 0.5 },
          { text: 'Das aktive Zentrum verformt sich, das Substrat passt nicht mehr hinein.', p: 0.5 }
        ],
        muster: 'Enzyme bestehen aus Eiweiß. Bei sehr hohen Temperaturen wird das Eiweiß denaturiert, es verändert dauerhaft seine Form. Dadurch verformt sich auch das aktive Zentrum, und das Substrat passt nicht mehr hinein. Das Enzym kann seine Reaktion nicht mehr beschleunigen. Die Denaturierung ist nicht umkehrbar. Im Körper wird das ab etwa 42 °C gefährlich.'
      },
      {
        id: 'enzyme-e4', plus: true,
        frage: 'Erkläre, warum die Patientin nach Kakao mit Milch Bauchschmerzen und Blähungen bekommt und warum laktosefreie Milch ihr hilft.',
        tipp: 'Verfolge den Milchzucker: Dünndarm, Dickdarm, Bakterien. Dann: Was ist in laktosefreier Milch anders?',
        begriffe: [
          { name: 'Lactase', muster: ['lactase', 'laktase'] },
          { name: 'Milchzucker', muster: ['milchzucker', 'lactose', 'laktose'] },
          { name: 'Dickdarm', muster: ['dickdarm'] },
          { name: 'Bakterien', muster: ['bakterie'] },
          { name: 'gespalten', muster: ['gespalten', 'spalt'] }
        ],
        punkte: [
          { text: 'Ihr Körper bildet zu wenig Lactase, der Milchzucker wird im Dünndarm nicht gespalten.', p: 1 },
          { text: 'Der Milchzucker gelangt in den Dickdarm. Bakterien vergären ihn, die Gase verursachen Blähungen und Bauchschmerzen.', p: 1 },
          { text: 'In laktosefreier Milch ist der Milchzucker schon in Traubenzucker und Schleimzucker gespalten. Die werden im Dünndarm aufgenommen.', p: 1 }
        ],
        muster: 'Ihr Körper bildet zu wenig Lactase. Deshalb wird der Milchzucker aus dem Kakao im Dünndarm nicht gespalten und kann nicht ins Blut aufgenommen werden. Er gelangt ungespalten in den Dickdarm. Dort vergären Bakterien den Milchzucker, dabei entstehen Gase. Sie verursachen Blähungen und Bauchschmerzen. In laktosefreier Milch ist der Milchzucker schon in Traubenzucker und Schleimzucker gespalten. Diese kleinen Zucker werden im Dünndarm aufgenommen, im Dickdarm kommt kein Milchzucker mehr an.'
      }
    ],
    abschluss: [
      { id: 'enzyme-a1', typ: 'wahl', frage: 'Die Beschwerden kommen immer nach Milchprodukten. Welches Enzym bildet ihr Dünndarm vermutlich zu wenig?', optionen: ['Lactase', 'Amylase', 'Lipase', 'Protease'], richtig: 0 },
      { id: 'enzyme-a2', typ: 'luecke', frage: 'Was in ihrem Darm passiert:', text: 'Ohne genug Lactase gelangt der Milchzucker {ungespalten|als Traubenzucker} in den {Dickdarm|Magen}. Dort {vergären ihn Bakterien|spaltet ihn das Pepsin}. Dabei entstehen {Gase|Fette}, die Blähungen und Bauchschmerzen verursachen.' },
      { id: 'enzyme-a3', typ: 'wahl', frage: 'Amylase aus Speichel und Bauchspeicheldrüse hat sie genug. Warum kann die Amylase den Milchzucker trotzdem nicht spalten?', optionen: ['Enzyme sind substratspezifisch: Milchzucker passt nicht in das aktive Zentrum der Amylase.', 'Die Amylase ist durch die Stärke aus dem Frühstück schon verbraucht.', 'Die Amylase wird bei Körpertemperatur denaturiert.', 'Milchzucker ist ein Fett und kann nur von der Lipase gespalten werden.'], richtig: 0 },
      { id: 'enzyme-a4', typ: 'wahl', frage: 'Warum verträgt sie laktosefreie Milch?', optionen: ['Der Milchzucker ist darin schon in Traubenzucker und Schleimzucker gespalten, die im Dünndarm aufgenommen werden.', 'Laktosefreie Milch enthält Bakterien, die die Gase im Darm abbauen.', 'In laktosefreier Milch wurde der Milchzucker in Stärke umgewandelt.', 'Laktosefreie Milch enthält zusätzlich Amylase, die den Milchzucker spaltet.'], richtig: 0 },
      { id: 'enzyme-a5', typ: 'wahl', frage: 'Für unterwegs bekommt sie Lactase-Tabletten. Sie überlegt, eine Tablette in den kochend heißen Kakao zu rühren. Was spricht dagegen?', optionen: ['Die Lactase ist ein Eiweiß und wird in der Hitze denaturiert. Dann spaltet sie keinen Milchzucker mehr.', 'In heißem Kakao wird der Milchzucker zu Stärke, die die Lactase nicht spalten kann.', 'Heißer Kakao enthält keinen Milchzucker, die Tablette wäre überflüssig.', 'Die Lactase wird in der Hitze verbraucht, bevor sie den Milchzucker erreicht.'], richtig: 0 }
    ],
    epikrise: '<p><strong>Diagnose:</strong> Laktoseintoleranz. Ihr Dünndarm bildet zu wenig Lactase. Der Milchzucker aus dem Kakao blieb ungespalten und gelangte in den Dickdarm. Dort haben Bakterien ihn vergoren, die Gase verursachten Blähungen und Bauchschmerzen. Entlassen mit dem Rat zu laktosefreier Milch, Lactase-Tabletten für unterwegs und einem Termin für einen Atemtest beim Kinderarzt.</p><p><strong>Die Biologie dahinter:</strong> Enzyme sind Biokatalysatoren aus Eiweiß und substratspezifisch. Nur die Lactase passt zum Milchzucker und spaltet ihn in Traubenzucker und Schleimzucker. Fehlt sie, springt kein anderes Enzym ein.</p>'
  });
})();
