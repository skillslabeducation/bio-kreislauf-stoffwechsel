/* Box 3: Frau, 62, Druck auf der Brust – Herz und Blutkreislauf (Blatt Teil 1, Aufgabe 6; Teil 2, Aufgabe 1a–d) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'herz', box: 3, teil: 1, blatt: 'T1-6, T2-1a–d',
    titel: 'Herz und Blutkreislauf',
    patient: 'Frau, 62', symptom: 'Druck auf der Brust',
    aufnahme: {
      text: '<p>Seit einer Stunde spürt sie einen dumpfen Druck hinter dem Brustbein, der in den linken Arm zieht. Sie ist blass und schwitzt. Sie raucht seit vielen Jahren, ihr Blutdruck ist schon lange zu hoch.</p><p>Das EKG zeigt Veränderungen, die zu einer Durchblutungsstörung des Herzmuskels passen. Verdacht auf Herzinfarkt, das Herzkatheterlabor ist informiert.</p>',
      werte: { puls: 104, af: 20, spo2: 95 },
      oberaerztin: 'Box 3. Zweiundsechzig, Druck auf der Brust. Bevor sie ins Katheterlabor geht, gehen wir das Herz einmal von vorn durch.',
      leitfrage: 'Welchen Weg nimmt das Blut durch Herz und Körper, und warum arbeitet die linke Herzhälfte härter als die rechte?'
    },
    karten: [
      {
        titel: 'Das Herz von vorn',
        abb: 'kreislauf', abbOpts: { beschriftet: true },
        text: '<p>Das Herz ist ein faustgroßer Hohlmuskel. Eine Scheidewand teilt es in eine <strong>rechte</strong> und eine <strong>linke Herzhälfte</strong>. Jede Hälfte hat oben einen <strong>Vorhof</strong> und darunter eine <strong>Herzkammer</strong>.</p><p>Die rechte Hälfte enthält <strong>sauerstoffarmes</strong> Blut (blau), die linke <strong>sauerstoffreiches</strong> Blut (rot). Die Scheidewand sorgt dafür, dass sich beides nicht mischt.</p>',
        merk: 'Vier Räume: rechter Vorhof, rechte Herzkammer, linker Vorhof, linke Herzkammer. Rechts sauerstoffarm, links sauerstoffreich.',
        achtung: '<strong>Achtung, Falle</strong>Die Abbildung zeigt das Herz von vorn, so als stünde dir der Mensch gegenüber. Seine rechte Herzhälfte liegt deshalb im Bild links. Rechts und links beziehen sich immer auf den Körper des Menschen, nicht auf deine Sicht.'
      },
      {
        titel: 'Der Weg des Blutes',
        abb: 'kreislauf', abbOpts: { beschriftet: true },
        demo: 'blutweg',
        text: '<p>Das sauerstoffarme Blut aus dem Körper sammelt sich in der <strong>Hohlvene</strong> und fließt in den <strong>rechten Vorhof</strong>. Von dort gelangt es in die <strong>rechte Herzkammer</strong>. Sie pumpt es durch die <strong>Lungenarterie</strong> zur Lunge. In den Kapillaren der Lunge gibt das Blut Kohlenstoffdioxid ab und nimmt Sauerstoff auf.</p><p>Über die <strong>Lungenvene</strong> fließt das nun sauerstoffreiche Blut in den <strong>linken Vorhof</strong> und weiter in die <strong>linke Herzkammer</strong>. Sie pumpt es in die <strong>Aorta</strong>. Über die Arterien erreicht es die Kapillaren der Körperorgane und gibt dort Sauerstoff ab. Über Venen und Hohlvene kehrt es zum rechten Vorhof zurück.</p>',
        merk: 'Rechter Vorhof → rechte Kammer → Lungenarterie → Lunge → Lungenvene → linker Vorhof → linke Kammer → Aorta → Körperorgane → Hohlvene → rechter Vorhof.'
      },
      {
        titel: 'Zwei Kreisläufe hintereinander',
        text: '<p>Der <strong>Lungenkreislauf</strong> beginnt in der rechten Herzkammer und führt über die Lunge zum linken Vorhof. Hier nimmt das Blut Sauerstoff auf und gibt Kohlenstoffdioxid ab.</p><p>Der <strong>Körperkreislauf</strong> beginnt in der linken Herzkammer und führt über alle Organe zurück zum rechten Vorhof. Hier gibt das Blut Sauerstoff und Nährstoffe ab und nimmt Kohlenstoffdioxid auf.</p><p>Beide Kreisläufe sind hintereinander geschaltet. Bei einem vollständigen Umlauf fließt das Blut deshalb <strong>zweimal durch das Herz</strong>. Man spricht von einem <strong>doppelten Blutkreislauf</strong>.</p>',
        merk: 'Doppelter Blutkreislauf: Lungen- und Körperkreislauf sind hintereinander geschaltet, das Blut fließt pro Umlauf zweimal durch das Herz.'
      },
      {
        titel: 'Warum die linke Kammer dicker ist',
        text: '<p>Beide Herzkammern pumpen bei jedem Schlag gleich viel Blut. Die Arbeit ist trotzdem ungleich verteilt.</p><p>Die <strong>rechte Kammer</strong> pumpt das Blut nur durch die nahe Lunge. Dafür reicht ein niedriger Druck. Die <strong>linke Kammer</strong> muss das Blut durch den ganzen Körper pumpen, bis in den Kopf und in die Zehen. Dafür braucht sie einen hohen Druck, und den erzeugt eine deutlich dickere Muskulatur.</p>',
        merk: 'Die linke Kammer pumpt mit hohem Druck in den Körperkreislauf, deshalb hat sie die dickere Muskelwand.'
      },
      {
        titel: 'Herzklappen: Ventile im Herzen',
        text: '<p>Damit das Blut nur in eine Richtung fließt, sitzen im Herzen vier <strong>Herzklappen</strong>. Sie wirken wie <strong>Ventile</strong>: Sie öffnen sich in Flussrichtung und schließen sich, sobald das Blut zurückfließen will.</p><p>Die Herztöne, die man mit dem Stethoskop hört, entstehen vor allem beim Schließen der Klappen.</p>',
        merk: 'Herzklappen wirken wie Ventile und verhindern, dass das Blut zurückfließt.'
      },
      {
        titel: 'Segelklappen und Taschenklappen',
        plus: true,
        text: '<p>Zwischen Vorhof und Kammer liegen auf jeder Seite <strong>Segelklappen</strong>. Ihre dünnen Segel sind mit Sehnenfäden an der Kammerwand befestigt. Zieht sich die Kammer zusammen, schließen sie. So kann das Blut nicht in den Vorhof zurück.</p><p>Am Ausgang der Kammern, also zur Lungenarterie und zur Aorta hin, sitzen die <strong>Taschenklappen</strong>. Erschlafft die Kammer, füllen sich ihre kleinen Taschen mit Blut und schließen. So fließt das Blut nicht aus den Arterien in die Kammer zurück.</p>',
        merk: 'Segelklappen: zwischen Vorhof und Kammer. Taschenklappen: am Ausgang der Kammern.'
      },
      {
        titel: 'Arteriosklerose und Herzinfarkt',
        plus: true,
        text: '<p>Der Herzmuskel arbeitet ununterbrochen und braucht viel Sauerstoff. Er wird über eigene Gefäße versorgt, die <strong>Herzkranzgefäße</strong>. Sie zweigen gleich am Anfang der Aorta ab und liegen wie ein Kranz um das Herz.</p><p>Bei der <strong>Arteriosklerose</strong> lagern sich Fett und Kalk in der Wand der Arterien ab. Die Gefäße werden eng und starr. Bildet sich an einer Engstelle ein Blutgerinnsel, kann es ein Herzkranzgefäß verstopfen. Dann bekommt ein Teil des Herzmuskels keinen Sauerstoff mehr: ein <strong>Herzinfarkt</strong>. Typisch ist ein Druck oder Schmerz in der Brust, der in Arm, Hals oder Oberbauch ausstrahlen kann.</p>',
        merk: 'Herzinfarkt: Ein Herzkranzgefäß verstopft, ein Teil des Herzmuskels bekommt keinen Sauerstoff.'
      },
      {
        titel: 'Risikofaktoren und Vorbeugung',
        plus: true,
        text: '<p>Arteriosklerose entwickelt sich über viele Jahre. Bestimmte <strong>Risikofaktoren</strong> beschleunigen sie: <strong>Rauchen</strong>, <strong>Bewegungsmangel</strong>, <strong>Übergewicht und Fehlernährung</strong> mit viel Fett, Zucker und Salz, dauerhafter <strong>Stress</strong> und <strong>Bluthochdruck</strong>.</p><p>Vorbeugen lässt sich vor allem über den Lebensstil: nicht rauchen, regelmäßig bewegen, ausgewogen essen, Übergewicht abbauen, für Ausgleich zum Stress sorgen und den Blutdruck kontrollieren lassen. Je früher man damit anfängt, desto besser.</p>'
      }
    ],
    ueben: [
      { id: 'herz-u1', typ: 'beschriften', frage: 'Benenne die acht nummerierten Bestandteile des Herz-Kreislauf-Systems.', abb: 'kreislauf', strukturen: ['rechter-vorhof', 'rechte-kammer', 'lungenarterie', 'lungenvene', 'linker-vorhof', 'linke-kammer', 'aorta', 'hohlvene'], nummern: { 'rechter-vorhof': 1, 'rechte-kammer': 2, lungenarterie: 3, lungenvene: 4, 'linker-vorhof': 5, 'linke-kammer': 6, aorta: 7, hohlvene: 8 } },
      { id: 'herz-u2', typ: 'beschriften', frage: 'Benenne die acht nummerierten Strukturen von Herz und Blutkreislauf.', abb: 'kreislauf', strukturen: ['rechter-vorhof', 'rechte-kammer', 'linker-vorhof', 'linke-kammer', 'lungenarterie', 'lungenvene', 'aorta', 'hohlvene'], nummern: { 'rechter-vorhof': 1, 'rechte-kammer': 2, 'linker-vorhof': 3, 'linke-kammer': 4, lungenarterie: 5, lungenvene: 6, aorta: 7, hohlvene: 8 } },
      { id: 'herz-u3', typ: 'beschriften', frage: 'Neue Nummern: Benenne alle acht Strukturen.', abb: 'kreislauf', strukturen: ['rechter-vorhof', 'rechte-kammer', 'lungenarterie', 'lungenvene', 'linker-vorhof', 'linke-kammer', 'aorta', 'hohlvene'] },
      { id: 'herz-u4', typ: 'reihenfolge', frage: 'Bring den vollständigen Weg des Blutes in die richtige Reihenfolge. Start ist der rechte Vorhof.', startFest: true, schritte: ['rechter Vorhof', 'rechte Herzkammer', 'Lungenarterie', 'Kapillaren der Lunge', 'Lungenvene', 'linker Vorhof', 'linke Herzkammer', 'Aorta', 'Arterien', 'Kapillaren der Körperorgane', 'Venen', 'Hohlvene'], erkl: 'Aus der Hohlvene fließt das Blut wieder in den rechten Vorhof. Der Kreislauf ist geschlossen.' },
      { id: 'herz-u5', typ: 'luecke', text: 'Die rechte Herzkammer pumpt das Blut durch die {Lungenarterie|Lungenvene|Aorta} zur Lunge. Dort gibt es {Kohlenstoffdioxid|Sauerstoff} ab und nimmt {Sauerstoff|Kohlenstoffdioxid} auf. Über die {Lungenvene|Hohlvene|Lungenarterie} fließt es zum {linken Vorhof|rechten Vorhof}.' },
      { id: 'herz-u6', typ: 'wahl', frage: 'Welche Herzhälfte enthält sauerstoffarmes Blut?', optionen: ['die rechte Herzhälfte', 'die linke Herzhälfte', 'beide Hälften im Wechsel'], richtig: 0, erkl: 'Die rechte Hälfte nimmt das Blut aus dem Körper auf und schickt es zur Lunge. Die linke bekommt es mit Sauerstoff beladen aus der Lunge zurück.' },
      { id: 'herz-u7', typ: 'wahl', frage: 'In einer Abbildung des Herzens in der Ansicht von vorn liegt die rechte Herzhälfte …', optionen: ['links im Bild', 'rechts im Bild', 'mal links, mal rechts, je nach Lehrbuch'], richtig: 0, erkl: 'Von vorn betrachtet steht dir der Mensch gegenüber. Seine rechte Seite ist dann auf deiner linken.' },
      { id: 'herz-u8', typ: 'zuordnen', frage: 'Ordne jedem Gefäß seinen Weg zu.', paare: [['Lungenarterie', 'von der rechten Kammer zur Lunge'], ['Lungenvene', 'von der Lunge zum linken Vorhof'], ['Aorta', 'von der linken Kammer in den Körper'], ['Hohlvene', 'aus dem Körper zum rechten Vorhof']] },
      {
        id: 'herz-u9', typ: 'tabelle', frage: 'Vergleiche Lungenkreislauf und Körperkreislauf.',
        spalten: ['Merkmal', 'Lungenkreislauf', 'Körperkreislauf'],
        zeilen: [
          { kopf: 'beginnt in der', zellen: [{ optionen: ['rechten Herzkammer', 'linken Herzkammer'], richtig: 0 }, { optionen: ['rechten Herzkammer', 'linken Herzkammer'], richtig: 1 }] },
          { kopf: 'führt das Blut zu', zellen: [{ optionen: ['der Lunge', 'den Körperorganen'], richtig: 0 }, { optionen: ['der Lunge', 'den Körperorganen'], richtig: 1 }] },
          { kopf: 'endet im', zellen: [{ optionen: ['linken Vorhof', 'rechten Vorhof'], richtig: 0 }, { optionen: ['linken Vorhof', 'rechten Vorhof'], richtig: 1 }] },
          { kopf: 'Das Blut nimmt dort auf:', zellen: [{ optionen: ['Sauerstoff', 'Kohlenstoffdioxid'], richtig: 0 }, { optionen: ['Sauerstoff', 'Kohlenstoffdioxid'], richtig: 1 }] }
        ]
      },
      { id: 'herz-u10', typ: 'wahl', frage: 'Warum spricht man beim Menschen von einem <strong>doppelten</strong> Blutkreislauf?', optionen: ['Das Blut fließt bei einem Umlauf zweimal durch das Herz.', 'Das Herz schlägt zweimal pro Sekunde.', 'Jedes Organ wird von zwei Arterien versorgt.', 'Das Blut fließt in den Arterien doppelt so schnell wie in den Venen.'], richtig: 0, erkl: 'Lungen- und Körperkreislauf sind hintereinander geschaltet. Nach der Lunge kommt das Blut erst zurück ins Herz, bevor es in den Körper gepumpt wird.' },
      { id: 'herz-u11', typ: 'behauptung', aussage: 'Die rechte und die linke Herzkammer pumpen gleich viel Blut. Deshalb sind ihre Muskelwände gleich dick.', stimmt: false, gruende: ['Beide pumpen zwar gleich viel Blut, aber die linke Kammer muss es mit hohem Druck durch den ganzen Körper pumpen. Deshalb ist ihre Muskulatur dicker.', 'Die rechte Kammer ist dicker, weil sauerstoffarmes Blut schwerer zu pumpen ist.', 'Die linke Kammer ist dicker, weil sie mehr Blut pumpt als die rechte.'], richtig: 0 },
      { id: 'herz-u12', typ: 'wahl', frage: 'Welche Funktion haben die Herzklappen?', optionen: ['Sie wirken wie Ventile und verhindern, dass das Blut zurückfließt.', 'Sie erzeugen den Herzschlag.', 'Sie filtern Blutgerinnsel aus dem Blut.', 'Sie trennen sauerstoffreiches von sauerstoffarmem Blut.'], richtig: 0, erkl: 'Die Klappen lassen das Blut nur in eine Richtung durch. Sauerstoffreiches und sauerstoffarmes Blut trennt die Herzscheidewand.' },
      { id: 'herz-u13', typ: 'eingabe', frage: 'Wie heißt das große Blutgefäß, das sauerstoffreiches Blut aus der linken Herzkammer in den Körper führt?', akzeptiert: ['Aorta', 'Hauptschlagader', 'Körperschlagader'] },
      { id: 'herz-u14', typ: 'eingabe', frage: 'Welches Gefäß bringt das sauerstoffarme Blut aus dem Körper zurück zum rechten Vorhof?', akzeptiert: ['Hohlvene', 'Hohlvenen', 'obere Hohlvene', 'untere Hohlvene'] },
      { id: 'herz-u15', typ: 'luecke', text: 'Die linke Herzkammer pumpt das Blut in den {Körperkreislauf|Lungenkreislauf}. Der Weg ist {lang|kurz}, deshalb braucht sie einen {hohen|niedrigen} Druck. Ihre Muskulatur ist {dicker|dünner} als die der rechten Kammer.' },
      { id: 'herz-u16', typ: 'wahl', frage: 'Wo nimmt das Blut Sauerstoff auf?', optionen: ['in den Kapillaren der Lunge', 'im linken Vorhof', 'in der Aorta', 'in der rechten Herzkammer'], richtig: 0, erkl: 'In der Lunge umspinnen Kapillaren die Lungenbläschen. Dort findet der Gasaustausch statt.' },
      { id: 'herz-u17', typ: 'zuordnen', plus: true, frage: 'Ordne jeder Klappe ihren Ort zu.', paare: [['Segelklappen', 'zwischen Vorhof und Kammer'], ['Taschenklappen', 'am Ausgang der Kammern zu Aorta und Lungenarterie'], ['Venenklappen', 'in den Venen, vor allem in den Beinen']] },
      { id: 'herz-u18', typ: 'wahl', plus: true, frage: 'Was passiert bei einem Herzinfarkt?', optionen: ['Ein Herzkranzgefäß verstopft, ein Teil des Herzmuskels bekommt keinen Sauerstoff mehr.', 'Eine Herzklappe schließt nicht mehr richtig.', 'Die Aorta reißt ein.', 'Das Herz schlägt dauerhaft zu langsam.'], richtig: 0 },
      { id: 'herz-u19', typ: 'mehrfach', plus: true, frage: 'Welche gehören zu den Risikofaktoren für Arteriosklerose und Herzinfarkt?', optionen: ['Rauchen', 'Bewegungsmangel', 'Bluthochdruck', 'Übergewicht und Fehlernährung', 'dauerhafter Stress', 'regelmäßiger Ausdauersport', 'viel Gemüse und Vollkorn'], richtig: [0, 1, 2, 3, 4] },
      { id: 'herz-u20', typ: 'wahl', plus: true, frage: 'Was versteht man unter Arteriosklerose?', optionen: ['Ablagerungen in der Wand der Arterien machen sie eng und starr.', 'Die Venenklappen schließen nicht mehr richtig.', 'Das Blut verklumpt bei einer falschen Blutgruppe.', 'Die Herzkammern werden immer größer.'], richtig: 0 },
      { id: 'herz-u21', typ: 'eingabe', plus: true, frage: 'Wie heißen die Gefäße, die den Herzmuskel selbst mit Blut versorgen?', akzeptiert: ['Herzkranzgefäße', 'Herzkranzgefäß', 'Herzkranzarterien', 'Koronargefäße', 'Koronararterien'] },
      { id: 'herz-u22', typ: 'reihenfolge', frage: 'Ein Sauerstoffteilchen ist gerade aus dem Lungenbläschen ins Blut diffundiert. Bring seinen Weg von der Lungenkapillare bis in eine Muskelzelle im Bein in die richtige Reihenfolge.', schritte: ['Lungenkapillare', 'Lungenvene', 'linker Vorhof', 'linke Herzkammer', 'Aorta', 'Arterie im Bein', 'Kapillare im Muskel', 'Muskelzelle'], erkl: 'Das sauerstoffreiche Blut fließt durch die linke Herzhälfte in den Körperkreislauf. Erst in der Kapillare verlässt der Sauerstoff das Blut und diffundiert in die Muskelzelle.' },
      { id: 'herz-u23', typ: 'reihenfolge', frage: 'Bei der Zellatmung entsteht in der Muskelzelle Kohlenstoffdioxid. Bring den Rückweg eines Kohlenstoffdioxidteilchens bis in die Lungenbläschen in die richtige Reihenfolge.', schritte: ['Muskelzelle', 'Kapillare im Muskel', 'Vene im Bein', 'Hohlvene', 'rechter Vorhof', 'rechte Herzkammer', 'Lungenarterie', 'Lungenkapillare', 'Lungenbläschen'], erkl: 'Kohlenstoffdioxid diffundiert in die Kapillare und fließt mit dem sauerstoffarmen Blut durch die rechte Herzhälfte zur Lunge. Dort diffundiert es ins Lungenbläschen und wird ausgeatmet.' },
      {
        id: 'herz-u24', typ: 'tabelle', frage: 'Führt die Struktur sauerstoffreiches oder sauerstoffarmes Blut?',
        spalten: ['Struktur', 'Blut'],
        zeilen: [
          { kopf: 'rechter Vorhof', zellen: [{ optionen: ['sauerstoffreich', 'sauerstoffarm'], richtig: 1 }] },
          { kopf: 'rechte Herzkammer', zellen: [{ optionen: ['sauerstoffreich', 'sauerstoffarm'], richtig: 1 }] },
          { kopf: 'Lungenarterie', zellen: [{ optionen: ['sauerstoffreich', 'sauerstoffarm'], richtig: 1 }] },
          { kopf: 'Lungenvene', zellen: [{ optionen: ['sauerstoffreich', 'sauerstoffarm'], richtig: 0 }] },
          { kopf: 'linker Vorhof', zellen: [{ optionen: ['sauerstoffreich', 'sauerstoffarm'], richtig: 0 }] },
          { kopf: 'linke Herzkammer', zellen: [{ optionen: ['sauerstoffreich', 'sauerstoffarm'], richtig: 0 }] },
          { kopf: 'Aorta', zellen: [{ optionen: ['sauerstoffreich', 'sauerstoffarm'], richtig: 0 }] },
          { kopf: 'Hohlvene', zellen: [{ optionen: ['sauerstoffreich', 'sauerstoffarm'], richtig: 1 }] }
        ],
        erkl: 'Die Lungenarterie führt sauerstoffarmes, die Lungenvene sauerstoffreiches Blut. Arterie und Vene richten sich nach der Fließrichtung, nicht nach dem Sauerstoff.'
      },
      { id: 'herz-u25', typ: 'luecke', frage: 'Im Kreislaufschema ist sauerstoffarmes Blut blau und sauerstoffreiches rot gezeichnet. Wo wechselt die Farbe?', text: 'Sauerstoffreich wird das Blut in den {Kapillaren der Lunge|Lungenarterien|Herzkammern}, denn dort nimmt es Sauerstoff auf. Sauerstoffarm wird es in den {Kapillaren der Körperorgane|Venen|Herzkammern}, denn dort gibt es Sauerstoff an die Zellen ab. In Arterien, Venen und Herzkammern {bleibt der Sauerstoffgehalt gleich|wechselt das Blut die Farbe}.', erkl: 'Nur in den Kapillaren findet der Stoffaustausch statt. In der Lunge wird das Blut sauerstoffreich, in den Körperorganen sauerstoffarm.' }
    ],
    erklaeren: [
      {
        id: 'herz-e1',
        frage: 'Beschreibe den vollständigen Weg des Blutes. Beginne im rechten Vorhof.',
        tipp: 'Geh Station für Station vor: erst durch die rechte Herzhälfte zur Lunge, dann durch die linke Herzhälfte in den Körper und zurück.',
        begriffe: [
          { name: 'rechte Herzkammer', muster: ['rechte kammer'] }, { name: 'Lungenarterie', muster: ['lungenarterie'] },
          { name: 'Lungenvene', muster: ['lungenvene'] }, { name: 'linker Vorhof', muster: ['linke vorhof'] },
          { name: 'linke Herzkammer', muster: ['linke kammer'] }, { name: 'Aorta', muster: ['aorta'] },
          { name: 'Kapillaren', muster: ['kapillar'] }, { name: 'Hohlvene', muster: ['hohlvene'] }
        ],
        punkte: [
          { text: 'rechter Vorhof → rechte Herzkammer → Lungenarterie', p: 1 },
          { text: 'Lunge (Gasaustausch in den Kapillaren) → Lungenvene → linker Vorhof', p: 1 },
          { text: 'linke Herzkammer → Aorta → Arterien → Kapillaren der Körperorgane', p: 1 },
          { text: 'Venen → Hohlvene → zurück in den rechten Vorhof', p: 1 }
        ],
        muster: 'Vom rechten Vorhof fließt das sauerstoffarme Blut in die rechte Herzkammer. Diese pumpt es durch die Lungenarterie zur Lunge. In den Kapillaren der Lunge gibt das Blut Kohlenstoffdioxid ab und nimmt Sauerstoff auf. Über die Lungenvene gelangt das nun sauerstoffreiche Blut in den linken Vorhof und von dort in die linke Herzkammer. Die linke Kammer pumpt es in die Aorta. Über die Arterien erreicht es die Kapillaren der Körperorgane und gibt dort Sauerstoff ab. Das sauerstoffarme Blut fließt über die Venen und die Hohlvene zurück in den rechten Vorhof.'
      },
      {
        id: 'herz-e2',
        frage: 'Erkläre den Unterschied zwischen Lungenkreislauf und Körperkreislauf.',
        tipp: 'Vergleiche: Wo beginnt der Kreislauf, wohin führt er, was passiert dort mit dem Blut?',
        begriffe: [
          { name: 'Lungenkreislauf', muster: ['lungenkreislauf'] }, { name: 'Körperkreislauf', muster: ['koerperkreislauf'] },
          { name: 'rechte Herzkammer', muster: ['rechte kammer'] }, { name: 'linke Herzkammer', muster: ['linke kammer'] },
          { name: 'Gasaustausch', muster: ['gasaustausch', 'sauerstoff auf'] }
        ],
        punkte: [
          { text: 'Lungenkreislauf: von der rechten Herzkammer über die Lunge zum linken Vorhof. Das Blut gibt Kohlenstoffdioxid ab und nimmt Sauerstoff auf.', p: 1 },
          { text: 'Körperkreislauf: von der linken Herzkammer durch alle Organe zum rechten Vorhof. Das Blut versorgt die Organe mit Sauerstoff und Nährstoffen.', p: 1 }
        ],
        muster: 'Der Lungenkreislauf beginnt in der rechten Herzkammer. Sie pumpt sauerstoffarmes Blut über die Lungenarterie zur Lunge. Dort gibt das Blut Kohlenstoffdioxid ab und nimmt Sauerstoff auf. Über die Lungenvene fließt es zurück zum linken Vorhof. Der Körperkreislauf beginnt in der linken Herzkammer. Sie pumpt das sauerstoffreiche Blut über die Aorta zu allen Körperorganen. Dort gibt es Sauerstoff und Nährstoffe ab und nimmt Kohlenstoffdioxid auf. Über die Hohlvene fließt es zurück zum rechten Vorhof. Der Lungenkreislauf ist also kurz und dient dem Gasaustausch, der Körperkreislauf ist lang und versorgt die Organe.'
      },
      {
        id: 'herz-e3',
        frage: 'Erkläre, warum man beim Menschen von einem doppelten Blutkreislauf spricht.',
        tipp: 'Zähle, wie oft das Blut bei einem vollständigen Umlauf durch das Herz fließt.',
        begriffe: [
          { name: 'Lungenkreislauf', muster: ['lungenkreislauf'] }, { name: 'Körperkreislauf', muster: ['koerperkreislauf'] },
          { name: 'zweimal durch das Herz', muster: ['zweimal'] }, { name: 'hintereinander', muster: ['hintereinander'] }
        ],
        punkte: [
          { text: 'Es gibt zwei Kreisläufe, den Lungenkreislauf und den Körperkreislauf. Sie sind hintereinander geschaltet.', p: 1 },
          { text: 'Bei einem vollständigen Umlauf fließt das Blut zweimal durch das Herz.', p: 1 }
        ],
        muster: 'Der Blutkreislauf des Menschen besteht aus zwei Teilen, dem Lungenkreislauf und dem Körperkreislauf. Sie sind hintereinander geschaltet: Das Blut kommt aus der Lunge zurück ins Herz und wird erst dann in den Körper gepumpt. Bei einem vollständigen Umlauf fließt das Blut deshalb zweimal durch das Herz, einmal durch die rechte und einmal durch die linke Herzhälfte.'
      },
      {
        id: 'herz-e4',
        frage: 'Erkläre, warum die Muskulatur der linken Herzkammer dicker ist als die der rechten.',
        tipp: 'Vergleiche, wohin jede Kammer das Blut pumpt und welcher Druck dafür nötig ist.',
        begriffe: [
          { name: 'Körperkreislauf', muster: ['koerper'] }, { name: 'Druck', muster: ['druck'] },
          { name: 'Lunge', muster: ['lunge'] }, { name: 'Muskulatur', muster: ['muskulatur', 'muskel'] }
        ],
        punkte: [
          { text: 'Die linke Kammer pumpt das Blut in den Körperkreislauf, durch den ganzen Körper. Dafür braucht sie einen hohen Druck.', p: 1 },
          { text: 'Die rechte Kammer pumpt das Blut nur durch die nahe Lunge, dafür reicht ein niedriger Druck. Mehr Druck erfordert mehr Muskulatur.', p: 1 }
        ],
        muster: 'Die linke Herzkammer pumpt das Blut in den Körperkreislauf. Das Blut muss durch den ganzen Körper bis in die Zehen und in den Kopf gelangen. Dafür ist ein hoher Druck nötig, und diesen Druck erzeugt eine dicke Muskulatur. Die rechte Kammer pumpt das Blut nur durch die nahe Lunge. Dafür reicht ein geringer Druck, deshalb ist ihre Muskelwand dünner.'
      },
      {
        id: 'herz-e5',
        frage: 'Beschreibe den Weg eines Sauerstoffteilchens von den Lungenbläschen bis in eine Muskelzelle im Bein.',
        tipp: 'Drei Abschnitte: hinein ins Blut, durch die linke Herzhälfte, durch den Körperkreislauf bis in die Zelle. Am Anfang und am Ende steht die Diffusion.',
        begriffe: [
          { name: 'Diffusion', muster: ['diffus', 'diffund'] }, { name: 'Lungenvene', muster: ['lungenvene'] },
          { name: 'linker Vorhof', muster: ['linke vorhof'] }, { name: 'linke Herzkammer', muster: ['linke kammer'] },
          { name: 'Aorta', muster: ['aorta'] }, { name: 'Kapillaren', muster: ['kapillar'] },
          { name: 'Muskelzelle', muster: ['muskelzelle'] }
        ],
        punkte: [
          { text: 'Der Sauerstoff diffundiert aus dem Lungenbläschen ins Blut der Lungenkapillare.', p: 1 },
          { text: 'Über die Lungenvene gelangt das sauerstoffreiche Blut in den linken Vorhof und weiter in die linke Herzkammer.', p: 1 },
          { text: 'Die linke Herzkammer pumpt es in die Aorta. Über Arterien erreicht es die Kapillaren im Beinmuskel.', p: 1 },
          { text: 'Aus der Kapillare diffundiert der Sauerstoff in die Muskelzelle.', p: 1 }
        ],
        muster: 'Im Lungenbläschen ist die Sauerstoffkonzentration hoch, im Blut der Lungenkapillare niedrig. Deshalb diffundiert das Sauerstoffteilchen durch die dünne Wand ins Blut. Im Blut transportieren es die roten Blutkörperchen. Das nun sauerstoffreiche Blut fließt über die Lungenvene in den linken Vorhof und weiter in die linke Herzkammer. Die linke Kammer pumpt es mit hohem Druck in die Aorta. Über die Arterien gelangt es bis ins Bein und dort in die Kapillaren des Muskels. In der Muskelzelle ist die Sauerstoffkonzentration niedrig, weil sie Sauerstoff für die Zellatmung verbraucht. Deshalb diffundiert das Sauerstoffteilchen aus der Kapillare in die Muskelzelle.'
      }
    ],
    abschluss: [
      { id: 'herz-a1', typ: 'wahl', frage: 'Das sauerstoffarme Blut aus ihrem Körper sammelt sich in der Hohlvene. Wohin fließt es als Nächstes?', optionen: ['in den rechten Vorhof', 'in den linken Vorhof', 'in die linke Herzkammer', 'in die Lungenvene'], richtig: 0 },
      { id: 'herz-a2', typ: 'wahl', frage: 'Sie bekommt Sauerstoff über eine Nasenbrille. In der Lunge gelangt er ins Blut. Welches Gefäß bringt das sauerstoffreiche Blut von der Lunge zum Herzen?', optionen: ['die Lungenvene', 'die Lungenarterie', 'die Hohlvene', 'die Aorta'], richtig: 0 },
      { id: 'herz-a3', typ: 'wahl', frage: 'Im Herzultraschall prüft die Ärztin vor allem die Kammer, die das Blut in die Aorta pumpt. Welche ist das?', optionen: ['die linke Herzkammer', 'die rechte Herzkammer', 'der linke Vorhof', 'der rechte Vorhof'], richtig: 0, erkl: 'Die linke Kammer pumpt in den Körperkreislauf. Im Bild von vorn liegt sie rechts.' },
      { id: 'herz-a4', typ: 'reihenfolge', frage: 'Über eine Armvene bekommt sie ein Medikament. Es muss bis in die Aorta, denn dort zweigen die Gefäße ab, die den Herzmuskel versorgen. Bring seinen Weg in die richtige Reihenfolge.', schritte: ['Hohlvene', 'rechter Vorhof', 'rechte Herzkammer', 'Lungenarterie', 'Lunge', 'Lungenvene', 'linker Vorhof', 'linke Herzkammer', 'Aorta'] }
    ],
    epikrise: '<p><strong>Diagnose:</strong> Herzinfarkt. Ein Herzkranzgefäß war durch Arteriosklerose verengt und durch ein Blutgerinnsel verschlossen. Im Herzkatheterlabor wurde es mit einem kleinen Ballon geweitet und mit einer Gefäßstütze offen gehalten. Der Herzmuskel wird wieder durchblutet. Entlassen nach einigen Tagen mit Medikamenten, Rauchstopp-Programm und Herzsportgruppe.</p><p><strong>Die Biologie dahinter:</strong> Das Herz ist eine Doppelpumpe. Die rechte Hälfte schickt sauerstoffarmes Blut durch die Lunge, die linke pumpt sauerstoffreiches Blut mit hohem Druck in den Körper. Klappen sorgen dafür, dass es nur in eine Richtung fließt. Der Herzmuskel selbst hängt an den Herzkranzgefäßen. Verstopft eines, fehlt ihm der Sauerstoff.</p>'
  });
})();
