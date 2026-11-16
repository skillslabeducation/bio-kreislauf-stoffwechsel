/* Box 1: Fußballer, 15, pfeift beim Atmen – Atemwege und Atembewegung (Blatt Teil 1, Aufgabe 3) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'atemwege', box: 1, teil: 1, blatt: 'T1-3',
    titel: 'Atemwege und Atmung',
    patient: 'Fußballer, 15', symptom: 'pfeift beim Ausatmen',
    aufnahme: {
      text: '<p>Nach dem Training in der Kälte bekommt er schlecht Luft. Beim Ausatmen hört man ein Pfeifen. Er sitzt nach vorn gebeugt und stützt die Arme auf.</p><p>Erste Untersuchung: Nase, Mund und Rachen sind frei. Eng sind die Atemwege, die sich in der Lunge hinter der Luftröhre verzweigen.</p>',
      werte: { puls: 112, af: 28, spo2: 93 },
      oberaerztin: 'Box 1. Fünfzehn, Fußball, pfeift. Erst die Anatomie, dann reden wir über die Diagnose.',
      leitfrage: 'Welchen Weg nimmt die Luft, wo ist er hier zu eng, und wie atmet der Körper überhaupt ein?'
    },
    karten: [
      {
        titel: 'Der Weg der Luft',
        abb: 'atemwege', abbOpts: { beschriftet: true },
        text: '<p>Die Luft gelangt durch die <strong>Nase</strong> in die <strong>Nasenhöhle</strong> oder durch den Mund in die <strong>Mundhöhle</strong>. Beide Wege treffen sich im <strong>Rachen</strong>. Danach strömt die Luft durch den <strong>Kehlkopf</strong> in die <strong>Luftröhre</strong>.</p><p>Die Luftröhre teilt sich in zwei <strong>Bronchien</strong>, je eine für jeden <strong>Lungenflügel</strong>. In der Lunge verzweigen sich die Bronchien immer feiner in <strong>Bronchiolen</strong>. Am Ende jeder Verzweigung sitzen winzige <strong>Lungenbläschen</strong>.</p>',
        merk: 'Weg der Luft: Nase → Nasenhöhle → Rachen → Kehlkopf → Luftröhre → Bronchien → Bronchiolen → Lungenbläschen.'
      },
      {
        titel: 'Luftröhre und Bronchien',
        text: '<p>Die <strong>Luftröhre</strong> ist etwa 12 cm lang. Hufeisenförmige <strong>Knorpelspangen</strong> halten sie offen, damit sie beim Einatmen nicht zusammenfällt.</p><p>Innen ist sie mit einer Schleimhaut ausgekleidet. Staub bleibt am Schleim kleben, und winzige <strong>Flimmerhärchen</strong> schieben den Schleim nach oben zum Rachen. Dort wird er verschluckt oder abgehustet.</p><p>Die Bronchien verzweigen sich wie ein umgedrehter Baum. Man spricht deshalb vom <strong>Bronchialbaum</strong>.</p>',
        merk: 'Knorpelspangen halten die Luftröhre offen. Schleim und Flimmerhärchen reinigen die Atemwege.'
      },
      {
        titel: 'Einatmen mit dem Zwerchfell',
        abb: 'atemwege', abbOpts: { beschriftet: true, nur: ['zwerchfell', 'lungenfluegel'], hervorheben: ['zwerchfell'] },
        demo: 'atemmodell',
        text: '<p>Das <strong>Zwerchfell</strong> ist ein flacher Muskel unter der Lunge. Es trennt den Brustraum vom Bauchraum. In Ruhe ist es nach oben gewölbt, wie eine Kuppel.</p><p><strong>Einatmen:</strong> Das Zwerchfell zieht sich zusammen und flacht ab. Dadurch wird der Brustraum größer. Die Lunge liegt eng am Brustraum an und dehnt sich mit. In der Lunge sinkt der Druck, und Luft strömt von außen ein.</p><p><strong>Ausatmen:</strong> Das Zwerchfell erschlafft und wölbt sich wieder nach oben. Der Brustraum wird kleiner, die Luft strömt aus.</p>',
        merk: 'Beim Einatmen zieht sich das Zwerchfell zusammen und flacht ab. Der Brustraum wird größer, die Lunge dehnt sich mit, Luft strömt ein.',
        achtung: '<strong>Achtung, Falle</strong>Die Lunge bläst sich nicht selbst auf, sie hat keine Muskeln. Erst wird der Brustraum größer, dann strömt die Luft ein, nicht umgekehrt.'
      },
      {
        titel: 'Die Nase: Filter und Klimaanlage',
        plus: true,
        text: '<p>In der Nasenhöhle wird die Luft <strong>erwärmt</strong>, <strong>angefeuchtet</strong> und <strong>gereinigt</strong>. Härchen und Schleim fangen Staub und Krankheitserreger ab. Die gut durchblutete Schleimhaut wärmt die Luft an.</p><p>Wer durch den Mund atmet, lässt diese Vorbereitung aus. Kalte, trockene Luft reizt dann die Bronchien stärker.</p>',
        merk: 'Die Nasenhöhle erwärmt, befeuchtet und reinigt die eingeatmete Luft.'
      },
      {
        titel: 'Kehlkopf und Kehldeckel',
        plus: true,
        text: '<p>Im <strong>Kehlkopf</strong> liegen die Stimmbänder. Oben sitzt der <strong>Kehldeckel</strong>. Beim Schlucken klappt er über den Eingang der Luftröhre, damit Essen in die Speiseröhre rutscht und nicht in die Luftröhre.</p><p>Klappt das nicht schnell genug, verschluckt man sich. Ein Hustenstoß befördert das Essen dann wieder heraus.</p>'
      },
      {
        titel: 'Brust- und Bauchatmung',
        plus: true,
        text: '<p>Bei der <strong>Bauchatmung</strong> arbeitet vor allem das Zwerchfell. Weil es beim Abflachen die Bauchorgane nach unten drückt, wölbt sich der Bauch vor.</p><p>Bei der <strong>Brustatmung</strong> heben die <strong>Zwischenrippenmuskeln</strong> die Rippen an. Auch so wird der Brustraum größer. Bei Anstrengung arbeiten beide zusammen.</p>'
      },
      {
        titel: 'Asthma',
        plus: true,
        text: '<p>Bei einem <strong>Asthmaanfall</strong> verkrampfen sich die Muskeln in den Wänden der Bronchien. Die Schleimhaut schwillt an und bildet zähen Schleim. Die Bronchien werden eng.</p><p>Vor allem das Ausatmen fällt schwer, die Luft pfeift durch die Engstellen. Auslöser können Allergien, Infekte, kalte Luft oder Anstrengung sein. Ein Spray erweitert die Bronchien wieder.</p>'
      }
    ],
    ueben: [
      { id: 'atemwege-u1', typ: 'beschriften', frage: 'Benenne die nummerierten Bestandteile der Atemwege.', abb: 'atemwege', strukturen: ['nasenhoehle', 'mundhoehle', 'luftroehre', 'bronchien', 'lungenfluegel', 'zwerchfell'] },
      { id: 'atemwege-u2', typ: 'beschriften', frage: 'Jetzt alle acht: Benenne die nummerierten Teile.', abb: 'atemwege', strukturen: ['nasenhoehle', 'mundhoehle', 'rachen', 'kehlkopf', 'luftroehre', 'bronchien', 'lungenfluegel', 'zwerchfell'] },
      { id: 'atemwege-u3', typ: 'reihenfolge', frage: 'Bring den Weg der eingeatmeten Luft in die richtige Reihenfolge.', schritte: ['Nasenhöhle', 'Rachen', 'Kehlkopf', 'Luftröhre', 'Bronchien', 'Bronchiolen', 'Lungenbläschen'] },
      { id: 'atemwege-u4', typ: 'wahl', frage: 'Was macht das Zwerchfell beim <strong>Einatmen</strong>?', optionen: ['Es zieht sich zusammen und flacht ab.', 'Es erschlafft und wölbt sich nach oben.', 'Es bläst die Lunge von innen auf.', 'Es verschließt die Luftröhre.'], richtig: 0, erkl: 'Das Zwerchfell ist ein Muskel. Beim Einatmen zieht es sich zusammen, flacht ab und vergrößert so den Brustraum.' },
      { id: 'atemwege-u5', typ: 'luecke', text: 'Beim Einatmen {zieht sich das Zwerchfell zusammen|erschlafft das Zwerchfell}. Dadurch wird der Brustraum {größer|kleiner}. Die Lunge {dehnt sich mit aus|zieht sich zusammen}, und Luft strömt {ein|aus}.' },
      { id: 'atemwege-u6', typ: 'luecke', text: 'Beim Ausatmen {erschlafft|kontrahiert} das Zwerchfell und wölbt sich {nach oben|nach unten}. Der Brustraum wird {kleiner|größer}, und die Luft strömt {aus|ein}.' },
      { id: 'atemwege-u7', typ: 'wahl', frage: 'Warum kann sich die Lunge nicht selbst aufblasen?', optionen: ['Sie hat keine eigenen Muskeln.', 'Sie ist dafür zu klein.', 'Sie besteht aus Knorpel.', 'Sie ist mit Wasser gefüllt.'], richtig: 0, erkl: 'Die Lunge folgt dem Brustraum. Zwerchfell und Zwischenrippenmuskeln machen die Arbeit.' },
      { id: 'atemwege-u8', typ: 'wahl', frage: 'Warum fällt die Luftröhre beim Einatmen nicht zusammen?', optionen: ['Knorpelspangen halten sie offen.', 'Sie ist immer mit Luft gefüllt.', 'Muskeln spannen sie dauerhaft an.', 'Sie ist mit dem Zwerchfell verwachsen.'], richtig: 0 },
      { id: 'atemwege-u9', typ: 'zuordnen', frage: 'Ordne jedem Teil seine Aufgabe zu.', paare: [['Luftröhre', 'leitet die Luft zu den Bronchien'], ['Bronchien', 'verzweigen sich in den Lungenflügeln'], ['Lungenbläschen', 'Ort des Gasaustauschs'], ['Zwerchfell', 'wichtigster Atemmuskel'], ['Nasenhöhle', 'erwärmt, befeuchtet und reinigt die Luft']] },
      { id: 'atemwege-u10', typ: 'eingabe', frage: 'Wie heißt der Muskel, der den Brustraum vom Bauchraum trennt?', akzeptiert: ['Zwerchfell', 'Diaphragma'] },
      { id: 'atemwege-u11', typ: 'eingabe', frage: 'Wie heißen die feinsten Verzweigungen der Bronchien?', akzeptiert: ['Bronchiolen', 'Bronchiole'] },
      { id: 'atemwege-u12', typ: 'behauptung', aussage: 'Beim Einatmen bläst die einströmende Luft die Lunge auf. Dadurch wird der Brustraum größer.', stimmt: false, gruende: ['Die Luft dehnt zuerst die Lunge, die dann den Brustraum vergrößert.', 'Es ist umgekehrt: Erst vergrößert das Zwerchfell den Brustraum, dann dehnt sich die Lunge mit und Luft strömt ein.', 'Luft strömt nur beim Ausatmen, nicht beim Einatmen.'], richtig: 1 },
      { id: 'atemwege-u13', typ: 'wahl', frage: 'Wo findet der Gasaustausch statt?', optionen: ['in den Lungenbläschen', 'in der Luftröhre', 'in den Bronchien', 'in der Nasenhöhle'], richtig: 0, erkl: 'Nur die Lungenbläschen haben die dünne Wand und das Netz aus Blutkapillaren für den Gasaustausch.' },
      { id: 'atemwege-u14', typ: 'wahl', frage: 'Was transportieren die Flimmerhärchen in der Luftröhre?', optionen: ['Schleim mit Staub nach oben zum Rachen', 'Sauerstoff nach unten in die Lunge', 'Blut zu den Lungenbläschen', 'Nahrung in die Speiseröhre'], richtig: 0 },
      { id: 'atemwege-u15', typ: 'mehrfach', plus: true, frage: 'Was passiert in der Nasenhöhle mit der eingeatmeten Luft?', optionen: ['Sie wird erwärmt.', 'Sie wird angefeuchtet.', 'Sie wird von Staub gereinigt.', 'Ihr wird der Sauerstoff entzogen.'], richtig: [0, 1, 2] },
      { id: 'atemwege-u16', typ: 'wahl', plus: true, frage: 'Du verschluckst dich beim Essen. Welche Struktur hat nicht schnell genug geschlossen?', optionen: ['der Kehldeckel', 'das Zwerchfell', 'die Bronchien', 'die Nasenhöhle'], richtig: 0 },
      { id: 'atemwege-u17', typ: 'wahl', plus: true, frage: 'Bei der Brustatmung werden die Rippen angehoben. Durch welche Muskeln?', optionen: ['Zwischenrippenmuskeln', 'Zwerchfell', 'Bauchmuskeln', 'Herzmuskel'], richtig: 0 },
      { id: 'atemwege-u18', typ: 'wahl', plus: true, frage: 'Was passiert bei einem Asthmaanfall?', optionen: ['Die Bronchien verengen sich.', 'Die Luftröhre reißt.', 'Das Zwerchfell erschlafft dauerhaft.', 'Die Lungenbläschen platzen.'], richtig: 0 }
    ],
    erklaeren: [
      {
        id: 'atemwege-e1',
        frage: 'Beschreibe den Weg der eingeatmeten Luft von der Nase bis zu den Lungenbläschen.',
        tipp: 'Nenne die Stationen der Reihe nach und verbinde sie mit „danach“ oder „von dort“.',
        begriffe: [
          { name: 'Nasenhöhle', muster: ['nasenhoehle'] }, { name: 'Rachen', muster: ['rachen'] },
          { name: 'Kehlkopf', muster: ['kehlkopf'] }, { name: 'Luftröhre', muster: ['luftroehre'] },
          { name: 'Bronchien', muster: ['bronchie'] }, { name: 'Lungenbläschen', muster: ['lungenblaeschen', 'alveole'] }
        ],
        punkte: [
          { text: 'Nasenhöhle, Rachen, Kehlkopf, Luftröhre in der richtigen Reihenfolge', p: 1 },
          { text: 'Bronchien, Bronchiolen, Lungenbläschen in der richtigen Reihenfolge', p: 1 }
        ],
        muster: 'Die Luft strömt durch die Nase in die Nasenhöhle. Dort wird sie erwärmt, angefeuchtet und gereinigt. Über den Rachen gelangt sie in den Kehlkopf und weiter in die Luftröhre. Die Luftröhre teilt sich in die beiden Bronchien, die sich in den Lungenflügeln immer feiner in Bronchiolen verzweigen. Am Ende erreicht die Luft die Lungenbläschen.'
      },
      {
        id: 'atemwege-e2',
        frage: 'Erkläre, wie das Zwerchfell beim Einatmen dafür sorgt, dass Luft in die Lunge strömt.',
        tipp: 'Denk an die Reihenfolge: Muskel, Brustraum, Lunge, Luft.',
        begriffe: [
          { name: 'Zwerchfell', muster: ['zwerchfell'] },
          { name: 'zieht sich zusammen', muster: ['zieht sich zusammen', 'zusammenzieh', 'kontrahiert', 'flacht ab'] },
          { name: 'Brustraum', muster: ['brustraum', 'brusthoehle', 'brustkorb'] },
          { name: 'Lunge dehnt sich', muster: ['dehnt'] },
          { name: 'Luft strömt ein', muster: ['stroemt'] }
        ],
        punkte: [
          { text: 'Das Zwerchfell zieht sich zusammen und flacht ab.', p: 1 },
          { text: 'Dadurch wird der Brustraum größer.', p: 1 },
          { text: 'Die Lunge dehnt sich mit, der Druck sinkt, Luft strömt ein.', p: 1 }
        ],
        muster: 'Beim Einatmen zieht sich das Zwerchfell zusammen und flacht dabei ab. Dadurch wird der Brustraum größer. Die Lunge liegt eng am Brustraum an und dehnt sich mit, denn sie hat selbst keine Muskeln. In der Lunge sinkt der Druck, und Luft strömt von außen ein.'
      },
      {
        id: 'atemwege-e3', plus: true,
        frage: 'Erkläre, warum ein Mensch bei einem Asthmaanfall schlecht Luft bekommt und es beim Ausatmen pfeift.',
        begriffe: [
          { name: 'Bronchien', muster: ['bronchie'] }, { name: 'verengt', muster: ['eng'] },
          { name: 'Schleim', muster: ['schleim'] }, { name: 'Lungenbläschen', muster: ['lungenblaeschen'] }
        ],
        punkte: [
          { text: 'Die Muskeln der Bronchien verkrampfen, die Schleimhaut schwillt an, zäher Schleim entsteht.', p: 1 },
          { text: 'Die Bronchien werden eng, weniger Luft gelangt zu den Lungenbläschen.', p: 1 },
          { text: 'Die Luft strömt beim Ausatmen durch die Engstellen und pfeift.', p: 1 }
        ],
        muster: 'Bei einem Asthmaanfall verkrampfen sich die Muskeln in den Wänden der Bronchien, die Schleimhaut schwillt an und bildet zähen Schleim. Dadurch werden die Bronchien eng. Es gelangt weniger Luft bis zu den Lungenbläschen, und verbrauchte Luft kommt schlecht heraus. Beim Ausatmen wird die Luft durch die Engstellen gepresst, deshalb pfeift es.'
      }
    ],
    abschluss: [
      { id: 'atemwege-a1', typ: 'wahl', frage: 'Nase, Mund und Rachen sind frei. Eng sind die Atemwege, die sich in der Lunge hinter der Luftröhre verzweigen. Welche sind das?', optionen: ['die Bronchien und Bronchiolen', 'der Kehlkopf', 'die Nasenhöhle', 'das Zwerchfell'], richtig: 0 },
      { id: 'atemwege-a2', typ: 'reihenfolge', frage: 'Er inhaliert ein Spray durch den Mund. Welchen Weg nimmt der Wirkstoff bis zum Ziel?', schritte: ['Mundhöhle', 'Rachen', 'Kehlkopf', 'Luftröhre', 'Bronchien'] },
      { id: 'atemwege-a3', typ: 'wahl', frage: 'Er soll ruhig und tief in den Bauch atmen. Welcher Muskel arbeitet dabei vor allem?', optionen: ['das Zwerchfell', 'die Bauchmuskeln', 'der Herzmuskel', 'die Lunge selbst'], richtig: 0 },
      { id: 'atemwege-a4', typ: 'luecke', frage: 'Was das Spray bewirkt:', text: 'Das Spray weitet die {Bronchien|Lungenbläschen}. Beim Einatmen gelangt dann wieder mehr Luft bis in die {Lungenbläschen|Nasenhöhle}, wo der {Gasaustausch|Herzschlag} stattfindet.' }
    ],
    epikrise: '<p><strong>Diagnose:</strong> Asthmaanfall nach Belastung in kalter Luft. Die Bronchien hatten sich verengt. Deshalb kam beim Ausatmen wenig Luft heraus, und es pfiff. Das Spray hat die Bronchien wieder geweitet. Entlassen mit Notfallspray und Termin beim Lungenarzt.</p><p><strong>Die Biologie dahinter:</strong> Luft muss durch Nasen- oder Mundhöhle, Rachen, Kehlkopf, Luftröhre und Bronchien bis in die Lungenbläschen. Wird eine Station zu eng, kommt dahinter weniger Luft an. Einatmen funktioniert nur, weil das Zwerchfell den Brustraum vergrößert.</p>'
  });
})();
