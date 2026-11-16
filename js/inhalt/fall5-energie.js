/* Box 5: Handballerin, 16, im Training umgekippt – Energie unserer Nahrung (Blatt Teil 2, Aufgabe 2) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'energie', box: 5, teil: 2, blatt: 'T2-2',
    titel: 'Energie unserer Nahrung',
    patient: 'Handballerin, 16', symptom: 'im Training umgekippt, seit gestern Mittag nichts gegessen',
    aufnahme: {
      text: '<p>Beim Abendtraining wird ihr nach einem Sprint schwarz vor Augen, sie sackt an der Bank zusammen. Sie ist blass, zittert und schwitzt, ist aber ansprechbar. Seit gestern Mittag hat sie nichts gegessen, am Vormittag hatte sie Schulsport.</p><p>Erste Untersuchung: Herz und Lunge sind unauffällig. Der Schnelltest aus dem Finger zeigt: Blutzucker niedrig. Ein Stück Traubenzucker hat sie schon im Mund.</p>',
      werte: { puls: 96, af: 18, spo2: 98 },
      oberaerztin: 'Box 5. Lunge frei, Herz gesund, nur der Tank ist leer. Klär, womit er sich füllt und warum er sogar nachts leerläuft.',
      leitfrage: 'Woher bekommt der Körper seine Energie, wie viel steckt in der Nahrung, und warum braucht er sie sogar im Schlaf?'
    },
    karten: [
      {
        titel: 'Die drei Hauptnährstoffe',
        text: '<p>Dein Körper braucht ständig Energie: für Herzschlag, Atmung, Denken und Bewegung. Diese Energie steckt in der Nahrung, genauer in drei <strong>Hauptnährstoffen</strong>: <strong>Kohlenhydrate</strong>, <strong>Fette</strong> und <strong>Eiweiße</strong> (Proteine).</p><p>Kohlenhydrate stecken vor allem in Brot, Nudeln, Reis, Kartoffeln, Obst und Süßem. Fette in Butter, Öl, Nüssen und Käse. Eiweiße in Fleisch, Fisch, Eiern, Milchprodukten und Hülsenfrüchten.</p><p>Bei der Verdauung werden die Nährstoffe zerlegt und ins Blut aufgenommen. Kohlenhydrate kommen dort als <strong>Glucose</strong> (Traubenzucker) an, dem wichtigsten Brennstoff der Zellen.</p>',
        merk: 'Energie liefern die drei Hauptnährstoffe: Kohlenhydrate, Fette und Eiweiße.'
      },
      {
        titel: 'Wie viel Energie steckt in einem Gramm?',
        text: '<p>Die Energie in der Nahrung misst man in <strong>Kilokalorien</strong> (kcal) oder <strong>Kilojoule</strong> (kJ). Ein Gramm liefert ungefähr:</p><p>Kohlenhydrate: ca. <strong>4 kcal</strong> (17 kJ)<br>Fette: ca. <strong>9 kcal</strong> (genauer 9,3 kcal, rund 39 kJ)<br>Eiweiße: ca. <strong>4 kcal</strong> (17 kJ)</p><p>Fett liefert pro Gramm also mehr als doppelt so viel Energie wie Kohlenhydrate oder Eiweiße.</p>',
        merk: 'Pro Gramm: Kohlenhydrate ca. 4 kcal, Fette ca. 9 kcal, Eiweiße ca. 4 kcal.',
        achtung: '<strong>Achtung, Falle</strong>Eiweiß liefert nicht mehr Energie als Kohlenhydrate. Beide liegen bei etwa 4 kcal pro Gramm. Nur Fett fällt mit etwa 9 kcal aus der Reihe.'
      },
      {
        titel: 'Energiegehalt berechnen',
        text: '<p>Für jeden Nährstoff rechnest du: <strong>Masse in Gramm · Energie pro Gramm</strong>. Danach zählst du die drei Ergebnisse zusammen.</p><p>Beispiel Müsliriegel mit 25 g Kohlenhydraten, 8 g Fett und 5 g Eiweiß:</p><p>Kohlenhydrate: 25 g · 4 kcal/g = 100 kcal<br>Fett: 8 g · 9 kcal/g = 72 kcal<br>Eiweiß: 5 g · 4 kcal/g = 20 kcal<br><strong>Zusammen: 192 kcal</strong></p><p>Manche Bücher rechnen genauer mit 4,1, 9,3 und 4,1 kcal pro Gramm. Dann kommen rund 197 kcal heraus. Beides ist richtig, wenn der Rechenweg stimmt.</p>',
        merk: 'Erst jeden Nährstoff einzeln mit seinem Energiewert pro Gramm malnehmen, dann alles addieren.',
        achtung: '<strong>Achtung, Falle</strong>Nicht alle Gramm zusammenzählen und dann mit einer einzigen Zahl malnehmen. Fett braucht seine eigene 9.'
      },
      {
        titel: 'Energie im Schlaf: der Grundumsatz',
        text: '<p>Auch wenn du schläfst, arbeitet dein Körper weiter: Das <strong>Herz</strong> schlägt, die <strong>Atmung</strong> läuft, das <strong>Gehirn</strong> ist aktiv, die <strong>Körpertemperatur</strong> bleibt bei etwa 37 °C, und Zellen werden erneuert. Die Energie, die der Körper in völliger Ruhe braucht, heißt <strong>Grundumsatz</strong>.</p><p>Jede Bewegung kostet zusätzlich Energie, Sport besonders viel. Das Gehirn bezieht seine Energie fast nur aus <strong>Glucose</strong> im Blut. Sinkt der Blutzucker stark ab, wird man zittrig und unkonzentriert, im schlimmsten Fall wird einem schwarz vor Augen.</p>',
        merk: 'Grundumsatz: Energie, die der Körper in Ruhe braucht, etwa für Herzschlag, Atmung, Gehirn, Körpertemperatur und Zellerneuerung.'
      },
      {
        titel: 'Grundumsatz und Leistungsumsatz',
        plus: true,
        text: '<p>Der <strong>Grundumsatz</strong> deckt die Grundfunktionen in völliger Ruhe. Bei einem 16-jährigen Mädchen liegt er bei etwa 1400 bis 1500 kcal am Tag.</p><p>Alles, was darüber hinausgeht, heißt <strong>Leistungsumsatz</strong>: körperliche Arbeit wie Gehen und Sport, aber auch die Verdauung. Grundumsatz und Leistungsumsatz ergeben zusammen den <strong>Gesamtumsatz</strong>. An Trainingstagen kann er bei Jugendlichen auf 2500 kcal und mehr steigen.</p>',
        merk: 'Grundumsatz + Leistungsumsatz = Gesamtumsatz.'
      },
      {
        titel: 'Was die Nährstoffe sonst noch leisten',
        plus: true,
        text: '<p><strong>Kohlenhydrate</strong> liefern schnell Energie. Traubenzucker (Glucose) muss nicht erst zerlegt werden und gelangt besonders rasch ins Blut. Stärke aus Brot oder Nudeln wird erst verdaut, wirkt dafür länger.</p><p><strong>Fette</strong> sind der Energiespeicher des Körpers. Unter der Haut schützen sie außerdem vor Kälte (Wärmeschutz) und polstern Organe ab.</p><p><strong>Eiweiße</strong> sind vor allem <strong>Baustoffe</strong>: Aus ihnen baut der Körper Muskeln, Haut, Haare und Enzyme.</p>',
        merk: 'Kohlenhydrate: schnelle Energie. Fette: Energiespeicher und Wärmeschutz. Eiweiße: Baustoff.'
      },
      {
        titel: 'Ergänzungsstoffe',
        plus: true,
        text: '<p>Neben den Hauptnährstoffen braucht der Körper <strong>Ergänzungsstoffe</strong>. Sie liefern keine oder kaum Energie, sind aber lebenswichtig.</p><p><strong>Vitamine</strong> und <strong>Mineralstoffe</strong> wie Eisen, Calcium oder Magnesium braucht der Körper in kleinen Mengen, zum Beispiel für Knochen, Blut und Nerven. <strong>Ballaststoffe</strong> aus Vollkorn, Obst und Gemüse halten die Verdauung in Gang und machen satt. <strong>Wasser</strong> ist Lösungs- und Transportmittel und kühlt beim Schwitzen.</p>',
        merk: 'Ergänzungsstoffe: Vitamine, Mineralstoffe, Ballaststoffe und Wasser. Sie liefern kaum Energie, sind aber lebenswichtig.'
      },
      {
        titel: 'kcal und kJ',
        plus: true,
        text: '<p>Auf Verpackungen steht der Energiegehalt meist zweimal: in Kilojoule (kJ) und in Kilokalorien (kcal). Kilojoule ist die offizielle Einheit.</p><p>Zum Umrechnen gilt: <strong>1 kcal ≈ 4,2 kJ</strong>. Von kcal nach kJ nimmst du mal 4,2, von kJ nach kcal teilst du durch 4,2.</p><p>Beispiel: Der Müsliriegel mit 192 kcal hat 192 · 4,2 ≈ 806 kJ.</p>',
        merk: '1 kcal ≈ 4,2 kJ.'
      }
    ],
    ueben: [
      { id: 'energie-u1', typ: 'liste', frage: 'Nenne die drei Hauptnährstoffe, die unserem Körper Energie liefern.', anzahl: 3, gruppen: [['Kohlenhydrate', 'Kohlenhydrat', 'Kohlehydrate'], ['Fette', 'Fett', 'Lipide'], ['Eiweiße', 'Eiweiß', 'Proteine', 'Protein']] },
      {
        id: 'energie-u2', typ: 'tabelle', frage: 'Ordne den Nährstoffen ihren Energiegehalt pro Gramm zu.',
        spalten: ['Nährstoff', 'Energie pro Gramm'],
        zeilen: [
          { kopf: 'Kohlenhydrate', zellen: [{ optionen: ['ca. 4 kcal', 'ca. 9 kcal', 'ca. 17 kcal'], richtig: 0 }] },
          { kopf: 'Fette', zellen: [{ optionen: ['ca. 4 kcal', 'ca. 9 kcal', 'ca. 17 kcal'], richtig: 1 }] },
          { kopf: 'Eiweiße', zellen: [{ optionen: ['ca. 4 kcal', 'ca. 9 kcal', 'ca. 17 kcal'], richtig: 0 }] }
        ],
        erkl: '17 ist kein kcal-Wert, sondern der Wert in kJ für Kohlenhydrate und Eiweiße.'
      },
      { id: 'energie-u3', typ: 'wahl', frage: 'Welcher Nährstoff liefert pro Gramm die meiste Energie?', optionen: ['Fett', 'Kohlenhydrate', 'Eiweiß', 'Ballaststoffe'], richtig: 0, erkl: 'Fett liefert etwa 9 kcal pro Gramm, Kohlenhydrate und Eiweiße nur etwa 4 kcal.' },
      { id: 'energie-u4', typ: 'behauptung', aussage: 'Eiweiß liefert pro Gramm viel mehr Energie als Kohlenhydrate.', stimmt: false, gruende: ['Kohlenhydrate und Eiweiße liefern beide etwa 4 kcal pro Gramm.', 'Eiweiß liefert etwa 9 kcal pro Gramm, Kohlenhydrate nur 4 kcal.', 'Eiweiß liefert gar keine Energie, nur Kohlenhydrate tun das.'], richtig: 0 },
      { id: 'energie-u5', typ: 'zahl', frage: 'Ein Müsliriegel enthält 25 g Kohlenhydrate, 8 g Fett und 5 g Eiweiß. Berechne seinen gesamten Energiegehalt in kcal. Schreib den Rechenweg auf Papier mit.', antwort: 192, tol: 0.5, auch: [197.4], einheit: 'kcal', erkl: '25 · 4 + 8 · 9 + 5 · 4 = 100 + 72 + 20 = 192 kcal. Mit 4,1, 9,3 und 4,1 kcal pro Gramm ergeben sich rund 197 kcal, auch das ist richtig.' },
      { id: 'energie-u6', typ: 'luecke', frage: 'Rechenweg für den Müsliriegel mit 25 g Kohlenhydraten, 8 g Fett und 5 g Eiweiß:', text: 'Kohlenhydrate: 25 g · {4|9} kcal/g = {100|225} kcal.<br>Fett: 8 g · {9|4} kcal/g = {72|32} kcal.<br>Eiweiß: 5 g · {4|9} kcal/g = {20|45} kcal.<br>Zusammen: {192|302|152} kcal.' },
      { id: 'energie-u7', typ: 'zahl', frage: 'Eine Portion Nudeln (100 g, ungekocht) enthält 70 g Kohlenhydrate, 2 g Fett und 12 g Eiweiß. Berechne den Energiegehalt in kcal.', antwort: 346, tol: 0.5, auch: [354.8], einheit: 'kcal', erkl: '70 · 4 + 2 · 9 + 12 · 4 = 280 + 18 + 48 = 346 kcal.' },
      { id: 'energie-u8', typ: 'zahl', frage: 'Eine Handvoll Nüsse (30 g) enthält 4 g Kohlenhydrate, 16 g Fett und 6 g Eiweiß. Berechne den Energiegehalt in kcal.', antwort: 184, tol: 0.5, auch: [189.8], einheit: 'kcal', erkl: '4 · 4 + 16 · 9 + 6 · 4 = 16 + 144 + 24 = 184 kcal. Der größte Teil kommt aus dem Fett.' },
      { id: 'energie-u9', typ: 'wahl', frage: 'Ein Riegel enthält 10 g Fett. Wie viel Energie liefert allein das Fett?', optionen: ['90 kcal', '40 kcal', '19 kcal', '900 kcal'], richtig: 0, erkl: '10 g · 9 kcal/g = 90 kcal.' },
      { id: 'energie-u10', typ: 'wahl', frage: 'Ein Snack enthält 20 g Kohlenhydrate und 10 g Fett. Welcher Rechenweg ist richtig?', optionen: ['20 · 4 kcal + 10 · 9 kcal = 170 kcal', '(20 + 10) · 4 kcal = 120 kcal', '(20 + 10) · 9 kcal = 270 kcal', '20 · 9 kcal + 10 · 4 kcal = 220 kcal'], richtig: 0, erkl: 'Jeder Nährstoff wird mit seinem eigenen Wert malgenommen: Kohlenhydrate mit 4, Fett mit 9.' },
      { id: 'energie-u11', typ: 'eingabe', frage: 'Wie heißt die Energiemenge, die der Körper in völliger Ruhe braucht, zum Beispiel im Schlaf?', akzeptiert: ['Grundumsatz'] },
      { id: 'energie-u12', typ: 'mehrfach', frage: 'Wofür braucht der Körper auch im Schlaf Energie?', optionen: ['Herzschlag', 'Atmung', 'Arbeit des Gehirns', 'Halten der Körpertemperatur', 'Muskelarbeit beim Handballtraining', 'Treppensteigen'], richtig: [0, 1, 2, 3], erkl: 'Herzschlag, Atmung, Gehirn und Körpertemperatur laufen immer. Das ist der Grundumsatz. Bewegung kommt nur im Wachzustand dazu.' },
      { id: 'energie-u13', typ: 'luecke', text: 'Auch im Schlaf {schlägt das Herz weiter|steht das Herz still}, und die Atmung {läuft weiter|setzt aus}. Der Körper hält seine Temperatur bei etwa {37 °C|20 °C}. Die Energie, die er dafür in Ruhe braucht, heißt {Grundumsatz|Brennwert}.' },
      { id: 'energie-u14', typ: 'behauptung', aussage: 'Wer schläft, verbraucht keine Energie.', stimmt: false, gruende: ['Auch im Schlaf arbeiten Herz, Atmung und Gehirn, und der Körper hält seine Temperatur. Diese Energie heißt Grundumsatz.', 'Im Schlaf braucht nur der Magen Energie, alle anderen Organe ruhen.', 'Im Schlaf verbraucht der Körper sogar mehr Energie als beim Sport.'], richtig: 0 },
      { id: 'energie-u15', typ: 'zuordnen', plus: true, frage: 'Ordne jedem Stoff seine wichtigste Aufgabe zu.', paare: [['Kohlenhydrate', 'liefern schnell Energie'], ['Fette', 'Energiespeicher und Wärmeschutz'], ['Eiweiße', 'Baustoff für Muskeln, Haut und Enzyme'], ['Ballaststoffe', 'halten die Verdauung in Gang']] },
      { id: 'energie-u16', typ: 'mehrfach', plus: true, frage: 'Welche Stoffe zählen zu den Ergänzungsstoffen?', optionen: ['Vitamine', 'Mineralstoffe', 'Ballaststoffe', 'Wasser', 'Fette', 'Kohlenhydrate'], richtig: [0, 1, 2, 3], erkl: 'Fette und Kohlenhydrate sind Hauptnährstoffe. Ergänzungsstoffe liefern kaum Energie, sind aber lebenswichtig.' },
      { id: 'energie-u17', typ: 'zahl', plus: true, frage: 'Ein Joghurt hat 150 kcal. Wie viele kJ sind das? Rechne mit 1 kcal ≈ 4,2 kJ.', antwort: 630, tol: 3, einheit: 'kJ', erkl: '150 · 4,2 = 630 kJ.' },
      { id: 'energie-u18', typ: 'wahl', plus: true, frage: 'Sie trainiert anderthalb Stunden Handball. Wie heißt die Energie, die sie dafür zusätzlich zum Grundumsatz braucht?', optionen: ['Leistungsumsatz', 'Grundumsatz', 'Brennwert', 'Nährwert'], richtig: 0 },
      { id: 'energie-u19', typ: 'wahl', plus: true, frage: 'Warum hilft Traubenzucker bei Unterzuckerung schneller als eine Handvoll Nüsse?', optionen: ['Traubenzucker ist Glucose. Er muss nicht erst zerlegt werden und gelangt schnell ins Blut.', 'Traubenzucker liefert pro Gramm mehr Energie als Fett.', 'Nüsse enthalten keine Energie.', 'Traubenzucker wird über die Lunge aufgenommen.'], richtig: 0, erkl: 'Nüsse liefern sogar mehr Energie, vor allem aus Fett. Sie müssen aber erst verdaut werden, das dauert.' }
    ],
    erklaeren: [
      {
        id: 'energie-e1',
        frage: 'Warum benötigt der Körper auch im Schlaf Energie?',
        tipp: 'Denk an alles, was im Körper auch nachts weiterläuft, und nenne den Fachbegriff.',
        begriffe: [
          { name: 'Grundumsatz', muster: ['grundumsatz'] }, { name: 'Herz', muster: ['herz'] },
          { name: 'Atmung', muster: ['atmung', 'atmen'] }, { name: 'Gehirn', muster: ['gehirn', 'hirn'] },
          { name: 'Körpertemperatur', muster: ['temperatur', 'waerme'] }
        ],
        punkte: [
          { text: 'Auch im Schlaf laufen Herzschlag, Atmung, Gehirn, Körpertemperatur und Zellerneuerung weiter.', p: 0.5 },
          { text: 'Diese Energie in Ruhe heißt Grundumsatz.', p: 0.5 }
        ],
        muster: 'Auch im Schlaf arbeitet der Körper weiter: Das Herz schlägt, die Atmung läuft, das Gehirn ist aktiv, die Körpertemperatur wird bei etwa 37 °C gehalten, und Zellen werden erneuert. Dafür braucht er ständig Energie. Diese Energie, die der Körper in völliger Ruhe verbraucht, heißt Grundumsatz.'
      },
      {
        id: 'energie-e2',
        frage: 'Erkläre, warum die Handballerin im Training umgekippt ist. Verwende die Begriffe Grundumsatz, Nährstoffe und Glucose.',
        tipp: 'Geh in drei Schritten vor: Wofür braucht der Körper Energie, woher kommt sie, und was fehlte bei ihr?',
        begriffe: [
          { name: 'Grundumsatz', muster: ['grundumsatz'] }, { name: 'Nährstoffe', muster: ['naehrstoff'] },
          { name: 'Glucose', muster: ['glucose', 'glukose', 'traubenzucker', 'blutzucker'] },
          { name: 'Muskeln', muster: ['muskel'] }, { name: 'Gehirn', muster: ['gehirn', 'hirn'] },
          { name: 'Energie', muster: ['energie'] }
        ],
        punkte: [
          { text: 'Der Körper braucht ständig Energie: schon in Ruhe für den Grundumsatz, beim Training zusätzlich für die Muskeln.', p: 1 },
          { text: 'Die Energie stammt aus den Nährstoffen der Nahrung. Seit gestern Mittag kam keine nach.', p: 1 },
          { text: 'Der Blutzucker sank, Gehirn und Muskeln bekamen zu wenig Glucose. Deshalb wurde ihr schwarz vor Augen.', p: 1 }
        ],
        muster: 'Der Körper braucht ständig Energie, schon in Ruhe für den Grundumsatz, also für Herzschlag, Atmung, Gehirn und Körpertemperatur. Beim Training brauchen die Muskeln zusätzlich viel Energie. Diese Energie stammt aus den Nährstoffen der Nahrung. Kohlenhydrate gelangen als Glucose ins Blut und werden zu den Zellen gebracht. Die Handballerin hat seit gestern Mittag nichts gegessen, es kam also keine Energie nach, während sie im Schulsport und im Training viel verbraucht hat. Ihr Blutzucker sank. Gehirn und Muskeln bekamen zu wenig Glucose, deshalb wurde ihr schwarz vor Augen, und sie kippte um.'
      },
      {
        id: 'energie-e3', plus: true,
        frage: 'Sie bekommt sofort Traubenzucker und danach eine richtige Mahlzeit. Erkläre, warum beides sinnvoll ist.',
        begriffe: [
          { name: 'Traubenzucker', muster: ['traubenzucker', 'glucose', 'glukose'] }, { name: 'schnell', muster: ['schnell'] },
          { name: 'Kohlenhydrate', muster: ['kohlenhydrat', 'staerke'] }, { name: 'Fett', muster: ['fett'] },
          { name: 'Eiweiß', muster: ['eiweiss', 'protein'] }, { name: 'Mahlzeit', muster: ['mahlzeit', 'essen'] }
        ],
        punkte: [
          { text: 'Traubenzucker ist Glucose. Er muss nicht erst zerlegt werden, gelangt schnell ins Blut, der Blutzucker steigt rasch.', p: 1 },
          { text: 'Die kleine Menge ist schnell verbraucht, die Wirkung hält nicht lange an.', p: 1 },
          { text: 'Eine Mahlzeit mit Stärke, Fett und Eiweiß liefert länger Energie, füllt die Speicher auf und liefert Baustoffe.', p: 1 }
        ],
        muster: 'Traubenzucker besteht aus Glucose. Er muss nicht erst zerlegt werden und gelangt sehr schnell ins Blut. Dadurch steigt der Blutzucker rasch, und Gehirn und Muskeln bekommen wieder Energie. Die kleine Menge ist aber schnell verbraucht. Deshalb braucht sie danach eine richtige Mahlzeit, zum Beispiel Vollkornbrot oder Nudeln mit Käse. Die Stärke darin wird langsamer verdaut und liefert länger Kohlenhydrate. Fett liefert viel Energie und füllt die Speicher auf, Eiweiß dient als Baustoff, zum Beispiel für die Muskeln.'
      }
    ],
    abschluss: [
      { id: 'energie-a1', typ: 'wahl', frage: 'Seit gestern Mittag hat sie nichts gegessen. Warum hat ihr Körper trotzdem die ganze Nacht Energie verbraucht?', optionen: ['Für den Grundumsatz: Herzschlag, Atmung, Gehirn und Körpertemperatur laufen immer weiter.', 'Weil die Verdauung im Schlaf die meiste Energie verbraucht.', 'Weil nur die Muskeln nachts Energie brauchen, um zu wachsen.', 'Hat er nicht, im Schlaf wird keine Energie verbraucht.'], richtig: 0 },
      { id: 'energie-a2', typ: 'wahl', frage: 'Ihr wurde schwarz vor Augen. Welches Organ reagiert besonders schnell, wenn zu wenig Glucose im Blut ist?', optionen: ['das Gehirn', 'die Lunge', 'die Haut', 'die Knochen'], richtig: 0, erkl: 'Das Gehirn bezieht seine Energie fast nur aus Glucose im Blut.' },
      { id: 'energie-a3', typ: 'wahl', frage: 'Sie bekommt Traubenzucker. Zu welchem Hauptnährstoff gehört er?', optionen: ['zu den Kohlenhydraten', 'zu den Fetten', 'zu den Eiweißen', 'zu den Vitaminen'], richtig: 0 },
      { id: 'energie-a4', typ: 'zahl', frage: 'Zum Abendessen bekommt sie zwei Käsebrote. Zusammen enthalten sie 40 g Kohlenhydrate, 10 g Fett und 15 g Eiweiß. Wie viel Energie ist das?', antwort: 310, tol: 0.5, auch: [318.5], einheit: 'kcal', erkl: '40 · 4 + 10 · 9 + 15 · 4 = 160 + 90 + 60 = 310 kcal.' }
    ],
    epikrise: '<p><strong>Diagnose:</strong> Unterzuckerung durch fehlende Nahrung bei hoher Belastung. Seit gestern Mittag kam keine Energie nach, gleichzeitig hat sie im Schulsport und im Training viel verbraucht. Die kleinen Zuckerspeicher des Körpers waren leer, Gehirn und Muskeln bekamen zu wenig Glucose, ihr wurde schwarz vor Augen. Mit Traubenzucker stieg der Blutzucker schnell wieder, danach hat sie eine richtige Mahlzeit gegessen. Entlassen mit dem Rat, an Trainingstagen regelmäßig zu essen.</p><p><strong>Die Biologie dahinter:</strong> Energie liefern die drei Hauptnährstoffe Kohlenhydrate, Fette und Eiweiße, pro Gramm etwa 4, 9 und 4 kcal. Der Körper verbraucht ständig Energie, schon in Ruhe für den Grundumsatz, beim Sport zusätzlich für die Muskeln. Kommt nichts nach, wird es zuerst für das Gehirn knapp.</p>'
  });
})();
