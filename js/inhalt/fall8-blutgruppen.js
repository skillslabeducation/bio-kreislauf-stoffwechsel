/* Box 8: Motorradfahrer, 34, Unfall – Blutgruppen und Bluttransfusion (Blatt Teil 2, Aufgaben 3 und 5) */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  W.faelle = W.faelle || [];

  W.faelle.push({
    id: 'blutgruppen', box: 8, teil: 2, blatt: 'T2-3, T2-5',
    titel: 'Blutgruppen und Transfusion',
    patient: 'Motorradfahrer, 34, Unfall', symptom: 'hat viel Blut verloren, Blutgruppe A',
    aufnahme: {
      text: '<p>Er ist mit dem Motorrad gestürzt und hat viel Blut verloren. Er ist wach, aber blass, die Haut ist kühl, der Puls schnell. Die Blutung ist gestillt, jetzt braucht er Blut.</p><p>Im Notfallausweis steht Blutgruppe A, Rhesus-positiv. Im Blutdepot liegen Konserven aller Blutgruppen.</p>',
      werte: { puls: 124, af: 24, spo2: 94 },
      oberaerztin: 'Box 8. Motorradunfall, braucht Blut. Und zwar das richtige.',
      leitfrage: 'Welche Konserven verträgt er, warum nicht jede, und wie prüft man das vor der Transfusion?'
    },
    karten: [
      {
        titel: 'Blutgruppen im AB0-System',
        text: '<p>Auf der Oberfläche der roten Blutkörperchen sitzen bestimmte Merkmale, die <strong>Antigene</strong>. Im AB0-System gibt es zwei davon: Antigen A und Antigen B. Welche ein Mensch trägt, bestimmt seine <strong>Blutgruppe</strong>.</p><p>Im <strong>Blutplasma</strong> befinden sich <strong>Antikörper</strong>, und zwar genau gegen die Antigene, die der Mensch selbst nicht hat.</p><div class="tab-wrap"><table class="tab"><thead><tr><th>Blutgruppe</th><th>Antigene auf roten Blutkörperchen</th><th>Antikörper im Blutplasma</th></tr></thead><tbody><tr><th scope="row">A</th><td>A</td><td>Anti-B</td></tr><tr><th scope="row">B</th><td>B</td><td>Anti-A</td></tr><tr><th scope="row">AB</th><td>A und B</td><td>keine</td></tr><tr><th scope="row">0</th><td>keine</td><td>Anti-A und Anti-B</td></tr></tbody></table></div>',
        merk: 'Im AB0-System hat jeder Mensch Antikörper gegen die Antigene A bzw. B, die ihm selbst fehlen. Anti-D gegen den Rhesusfaktor bildet ein Rh−-Mensch dagegen erst nach Kontakt mit Rh+-Blut.',
        achtung: '<strong>Achtung, Falle</strong>Blutgruppe 0 hat keine Antigene, aber beide Antikörper. Bei AB ist es genau umgekehrt: beide Antigene, keine Antikörper.'
      },
      {
        titel: 'Antigen, Antikörper, Agglutination',
        text: '<p><strong>Antikörper</strong> sind Abwehrstoffe. Jeder Antikörper passt nur zu einem bestimmten <strong>Antigen</strong>, ähnlich wie ein Schlüssel ins Schloss. Anti-A bindet nur an Antigen A, Anti-B nur an Antigen B.</p><p>Ein Antikörper hat mehrere Bindestellen. Er kann deshalb zwei rote Blutkörperchen zugleich festhalten. So entstehen Brücken zwischen vielen Blutkörperchen, und sie <strong>verklumpen</strong>. Der Fachbegriff dafür ist <strong>Agglutination</strong>.</p><p>Verklumpte Blutkörperchen verstopfen die feinen <strong>Kapillaren</strong>. Die Organe dahinter werden nicht mehr versorgt. Deshalb ist eine falsche Transfusion lebensgefährlich.</p>',
        merk: 'Agglutination: Antikörper binden an passende Antigene fremder roter Blutkörperchen, die Blutkörperchen verklumpen.'
      },
      {
        titel: 'Wer darf wem Blut geben?',
        text: '<p>Bei einer Transfusion bekommt der Patient meist nur <strong>rote Blutkörperchen</strong> aus einer Konserve. Entscheidend ist deshalb eine Frage: Tragen die Blutkörperchen des Spenders ein Antigen, gegen das der Empfänger Antikörper im Plasma hat? Dann verklumpen sie.</p><p>Spender 0 → alle Empfänger. Spender A → A und AB. Spender B → B und AB. Spender AB → nur AB.</p><p><strong>0</strong> gilt als <strong>Universalspender</strong>: Seine roten Blutkörperchen tragen weder Antigen A noch Antigen B, die Antikörper des Empfängers finden nichts zum Binden. <strong>AB</strong> gilt als <strong>Universalempfänger</strong>: In seinem Plasma sind weder Anti-A noch Anti-B.</p>',
        merk: 'Die Antigene auf den Spender-Blutkörperchen dürfen nicht auf passende Antikörper im Plasma des Empfängers treffen.',
        achtung: '<strong>Achtung, Falle</strong>Es zählen die Antikörper des Empfängers. Die Antikörper aus dem Spenderblut spielen bei einer Konserve roter Blutkörperchen kaum eine Rolle, denn sie enthält fast kein Plasma.'
      },
      {
        titel: 'Der Rhesusfaktor',
        text: '<p>Neben A und B gibt es auf den roten Blutkörperchen ein weiteres Antigen, das <strong>Antigen D</strong>. Man nennt es <strong>Rhesusfaktor</strong>, weil es mit dem Blut von Rhesusaffen entdeckt wurde. Wer es hat, ist <strong>Rhesus-positiv (Rh+)</strong>, wer es nicht hat, ist <strong>Rhesus-negativ (Rh−)</strong>. In Deutschland sind etwa 85 von 100 Menschen Rh+.</p><p>Anders als bei A und B hat ein Rh−-Mensch nicht von Anfang an Antikörper dagegen. <strong>Anti-D</strong> bildet er erst, wenn Rh+-Blut in seinen Körper gelangt ist, etwa durch eine Transfusion. Bei einem erneuten Kontakt greifen diese Antikörper die Rh+-Blutkörperchen an.</p><p>Eine vollständige Blutgruppe hat deshalb zwei Teile, zum Beispiel A Rh+ oder 0 Rh−.</p>',
        merk: 'Rhesusfaktor: Antigen D auf den roten Blutkörperchen. Rh+ hat es, Rh− nicht. Anti-D entsteht erst nach Kontakt mit Rh+-Blut.'
      },
      {
        titel: 'Woraus Blut besteht',
        plus: true,
        text: '<p>Ein Erwachsener hat etwa 5 bis 6 Liter Blut. Etwas mehr als die Hälfte davon ist <strong>Blutplasma</strong>, eine gelbliche Flüssigkeit. Sie besteht vor allem aus Wasser mit gelösten Stoffen: Glucose und andere Nährstoffe, Salze, Hormone, Antikörper und ein Teil des Kohlenstoffdioxids.</p><p>Der Rest sind Blutzellen:</p><p><strong>Rote Blutkörperchen</strong> (Erythrozyten) transportieren Sauerstoff mit dem roten Blutfarbstoff Hämoglobin.<br><strong>Weiße Blutkörperchen</strong> (Leukozyten) wehren Krankheitserreger ab.<br><strong>Blutplättchen</strong> (Thrombozyten) sorgen für die Blutgerinnung.</p>',
        merk: 'Blut = Blutplasma + rote Blutkörperchen + weiße Blutkörperchen + Blutplättchen.'
      },
      {
        titel: 'Der Bedside-Test',
        plus: true,
        demo: 'bedside',
        text: '<p>Vor jeder Transfusion wird am Bett des Patienten noch einmal die Blutgruppe geprüft, der <strong>Bedside-Test</strong>. Auf einer Testkarte gibt es ein Feld mit Testserum <strong>Anti-A</strong> und eines mit <strong>Anti-B</strong>. In jedes Feld kommt ein Tropfen Blut.</p><p>Verklumpt das Blut im Feld Anti-A, tragen die roten Blutkörperchen Antigen A. Verklumpt es im Feld Anti-B, tragen sie Antigen B.</p><div class="tab-wrap"><table class="tab"><thead><tr><th>Anti-A</th><th>Anti-B</th><th>Blutgruppe</th></tr></thead><tbody><tr><td>verklumpt</td><td>keine Verklumpung</td><td>A</td></tr><tr><td>keine Verklumpung</td><td>verklumpt</td><td>B</td></tr><tr><td>verklumpt</td><td>verklumpt</td><td>AB</td></tr><tr><td>keine Verklumpung</td><td>keine Verklumpung</td><td>0</td></tr></tbody></table></div><p>Manche Karten haben ein drittes Feld mit Anti-D für den Rhesusfaktor.</p>',
        merk: 'Verklumpung mit Anti-A heißt: Antigen A ist vorhanden.',
        achtung: '<strong>Achtung, Falle</strong>Die Antikörper stammen aus dem Testserum, nicht aus dem Blut des Patienten. Verklumpt es bei Anti-A, hat der Patient Antigen A, nicht Anti-A.'
      },
      {
        titel: 'Transfusion in der Klinik',
        plus: true,
        text: '<p>„Universalspender“ und „Universalempfänger“ gelten nur für <strong>rote Blutkörperchen</strong>. Bei Blutplasma ist es umgekehrt: Plasma der Blutgruppe 0 enthält Anti-A und Anti-B, Plasma der Blutgruppe AB enthält keine Antikörper.</p><p>In der Klinik wird möglichst <strong>blutgruppengleich</strong> transfundiert, also A an A. Vorher läuft immer der Bedside-Test. Nur im Notfall, wenn keine Zeit für die Bestimmung bleibt, bekommt ein Patient Konserven der Blutgruppe <strong>0 Rh−</strong>. Sie tragen weder A noch B noch D.</p>',
        merk: 'Wenn möglich blutgruppengleich. Im Notfall ohne bekannte Blutgruppe: 0 Rh−.'
      },
      {
        titel: 'Rhesusfaktor in der Schwangerschaft',
        plus: true,
        text: '<p>Eine <strong>Rh−-Mutter</strong> ist mit einem <strong>Rh+-Kind</strong> schwanger. Vor allem bei der Geburt gelangt etwas Blut des Kindes in ihren Kreislauf. Ihr Körper bildet daraufhin <strong>Anti-D</strong>. Dem ersten Kind schadet das meist nicht mehr, denn die Antikörper entstehen erst nach der Geburt.</p><p>Ist das <strong>zweite Kind</strong> wieder Rh+, gelangen die Anti-D der Mutter über die Plazenta zum Kind und zerstören seine roten Blutkörperchen. Das Kind kann schwer erkranken.</p><p>Vorbeugung: Die Mutter bekommt in der Schwangerschaft und direkt nach der Geburt Anti-D gespritzt, die <strong>Anti-D-Prophylaxe</strong>. Diese Antikörper beseitigen die Rh+-Blutkörperchen des Kindes in ihrem Blut, bevor ihr Körper selbst Anti-D bildet.</p>',
        merk: 'Gefahr besteht bei Rh−-Mutter und Rh+-Kind, vor allem für das zweite Rh+-Kind. Die Anti-D-Prophylaxe beugt vor.'
      }
    ],
    ueben: [
      {
        id: 'blutgruppen-u1', typ: 'tabelle', frage: 'Vervollständige die Tabelle zum AB0-Blutgruppensystem.',
        spalten: ['Blutgruppe', 'Antigene auf roten Blutkörperchen', 'Antikörper im Blutplasma'],
        zeilen: [
          { kopf: 'A', zellen: [{ optionen: ['A', 'B', 'A und B', 'keine'], richtig: 0 }, { optionen: ['Anti-A', 'Anti-B', 'Anti-A und Anti-B', 'keine'], richtig: 1 }] },
          { kopf: 'B', zellen: [{ optionen: ['A', 'B', 'A und B', 'keine'], richtig: 1 }, { optionen: ['Anti-A', 'Anti-B', 'Anti-A und Anti-B', 'keine'], richtig: 0 }] },
          { kopf: 'AB', zellen: [{ optionen: ['A', 'B', 'A und B', 'keine'], richtig: 2 }, { optionen: ['Anti-A', 'Anti-B', 'Anti-A und Anti-B', 'keine'], richtig: 3 }] },
          { kopf: '0', zellen: [{ optionen: ['A', 'B', 'A und B', 'keine'], richtig: 3 }, { optionen: ['Anti-A', 'Anti-B', 'Anti-A und Anti-B', 'keine'], richtig: 2 }] }
        ],
        erkl: 'Im Plasma sind genau die Antikörper, die zu den fehlenden Antigenen passen.'
      },
      { id: 'blutgruppen-u2', typ: 'zuordnen', frage: 'Ordne jedem Begriff die passende Beschreibung zu.', paare: [['Antigen', 'Merkmal auf der Oberfläche der roten Blutkörperchen'], ['Antikörper', 'Abwehrstoff im Blutplasma, bindet an ein passendes Antigen'], ['Agglutination', 'Verklumpung roter Blutkörperchen'], ['Rhesusfaktor', 'Antigen D auf den roten Blutkörperchen']] },
      { id: 'blutgruppen-u3', typ: 'wahl', frage: 'Wo befinden sich die Antikörper Anti-A und Anti-B?', optionen: ['im Blutplasma', 'auf der Oberfläche der roten Blutkörperchen', 'im Inneren der roten Blutkörperchen', 'in den Lungenbläschen'], richtig: 0, erkl: 'Antikörper sind im Plasma gelöst. Auf den roten Blutkörperchen sitzen die Antigene.' },
      { id: 'blutgruppen-u4', typ: 'wahl', frage: 'Im Plasma eines Menschen findet man Anti-A, aber kein Anti-B. Welche Blutgruppe hat er?', optionen: ['B', 'A', 'AB', '0'], richtig: 0, erkl: 'Anti-A hat nur, wem Antigen A fehlt. Kein Anti-B heißt: Antigen B ist vorhanden. Das ist Blutgruppe B.' },
      { id: 'blutgruppen-u5', typ: 'behauptung', aussage: 'Blutgruppe 0 hat keine Antigene. Also hat sie auch keine Antikörper.', stimmt: false, gruende: ['Stimmt, denn ohne Antigene bildet der Körper keine Antikörper.', 'Stimmt nicht: Blutgruppe 0 hat im Plasma Anti-A und Anti-B, gerade weil ihr beide Antigene fehlen.', 'Stimmt nicht: Blutgruppe 0 hat das Antigen 0 und dagegen Anti-0.'], richtig: 1 },
      {
        id: 'blutgruppen-u6', typ: 'matrix', frage: 'Markiere mit einem Kreuz, welche Blutgruppen bei einer Transfusion roter Blutkörperchen verträglich sind. Der Rhesusfaktor wird nicht berücksichtigt.',
        zeilenKopf: 'Spender', spaltenKopf: 'Empfänger', zeilen: ['0', 'A', 'B', 'AB'], spalten: ['0', 'A', 'B', 'AB'],
        richtig: [[true, true, true, true], [false, true, false, true], [false, false, true, true], [false, false, false, true]],
        erkl: 'Verträglich ist es, wenn die Spender-Blutkörperchen kein Antigen tragen, gegen das der Empfänger Antikörper hat. 0 passt zu allen, AB nimmt alle.'
      },
      { id: 'blutgruppen-u7', typ: 'mehrfach', frage: 'Ein Patient hat Blutgruppe B. Welche Konserven roter Blutkörperchen verträgt er? Der Rhesusfaktor wird nicht berücksichtigt.', optionen: ['0', 'A', 'B', 'AB'], richtig: [0, 2], erkl: 'Er hat Anti-A im Plasma. Verträglich sind nur Blutkörperchen ohne Antigen A: B und 0.' },
      { id: 'blutgruppen-u8', typ: 'wahl', frage: 'Warum gilt Blutgruppe 0 im AB0-System als Universalspender für rote Blutkörperchen?', optionen: ['Ihre roten Blutkörperchen tragen weder Antigen A noch Antigen B, die Antikörper des Empfängers binden nicht.', 'Ihr Plasma enthält keine Antikörper.', 'Ihre roten Blutkörperchen tragen beide Antigene.', 'Blutgruppe 0 kommt am häufigsten vor.'], richtig: 0 },
      { id: 'blutgruppen-u9', typ: 'wahl', frage: 'Warum gilt Blutgruppe AB im AB0-System als Universalempfänger?', optionen: ['In ihrem Plasma sind weder Anti-A noch Anti-B.', 'Ihre roten Blutkörperchen tragen keine Antigene.', 'Ihr Plasma enthält Anti-A und Anti-B.', 'Sie kann fremde Antigene sofort abbauen.'], richtig: 0, erkl: 'Ohne Anti-A und Anti-B im Plasma wird keine Konserve roter Blutkörperchen verklumpt.' },
      { id: 'blutgruppen-u10', typ: 'luecke', frage: 'Ein Patient mit Blutgruppe A erhält rote Blutkörperchen der Blutgruppe B.', text: 'Im Plasma des Patienten befinden sich {Anti-B|Anti-A}. Diese Antikörper binden an das {Antigen B|Antigen A} der gespendeten Blutkörperchen. Die Blutkörperchen {verklumpen|vermehren sich}, das nennt man {Agglutination|Diffusion}. Die Klumpen {verstopfen feine Blutgefäße|weiten die Blutgefäße}.' },
      { id: 'blutgruppen-u11', typ: 'eingabe', frage: 'Wie heißt der Fachbegriff für das Verklumpen roter Blutkörperchen?', akzeptiert: ['Agglutination', 'Agglutinierung'] },
      { id: 'blutgruppen-u12', typ: 'wahl', frage: 'Warum ist eine Agglutination nach einer falschen Transfusion lebensgefährlich?', optionen: ['Die Klumpen verstopfen feine Blutgefäße, Organe werden nicht mehr versorgt.', 'Das Blut wird zu dünn und gerinnt nicht mehr.', 'Die Antikörper greifen die Lunge an.', 'Das Herz pumpt schneller und ermüdet.'], richtig: 0 },
      { id: 'blutgruppen-u13', typ: 'behauptung', aussage: 'Blutgruppe AB kann allen anderen rote Blutkörperchen spenden, weil sie beide Antigene besitzt.', stimmt: false, gruende: ['Stimmt, denn wer beide Antigene hat, passt zu jedem.', 'Stimmt nicht: Gerade weil die Blutkörperchen A und B tragen, werden sie bei A, B und 0 von Anti-A oder Anti-B verklumpt. AB spendet nur an AB.', 'Stimmt nicht: AB darf überhaupt nicht spenden.'], richtig: 1 },
      { id: 'blutgruppen-u14', typ: 'wahl', frage: 'Was versteht man unter dem Rhesusfaktor?', optionen: ['ein weiteres Antigen (D) auf der Oberfläche der roten Blutkörperchen', 'einen Antikörper im Blutplasma', 'eine fünfte Blutgruppe neben A, B, AB und 0', 'einen Stoff für die Blutgerinnung'], richtig: 0 },
      { id: 'blutgruppen-u15', typ: 'luecke', text: 'Wessen rote Blutkörperchen das Antigen D tragen, der ist {Rhesus-positiv (Rh+)|Rhesus-negativ (Rh−)}. Antikörper gegen D bildet nur ein {Rh−|Rh+}-Mensch, und zwar erst {nach Kontakt mit Rh+-Blut|von Geburt an}.' },
      { id: 'blutgruppen-u16', typ: 'wahl', frage: 'Ein Rh−-Patient bekommt zum ersten Mal versehentlich Rh+-Blut. Was ist die Folge?', optionen: ['Zunächst meist keine Reaktion, aber sein Körper bildet danach Anti-D. Eine weitere Rh+-Transfusion wäre gefährlich.', 'Sofortige Verklumpung, weil er von Geburt an Anti-D hat.', 'Nichts, auch später nicht, weil D kein Antigen ist.', 'Er wird dadurch selbst Rh+.'], richtig: 0 },
      { id: 'blutgruppen-u17', typ: 'zuordnen', plus: true, frage: 'Ordne jedem Bestandteil des Blutes seine Aufgabe zu.', paare: [['rote Blutkörperchen', 'transportieren Sauerstoff'], ['weiße Blutkörperchen', 'wehren Krankheitserreger ab'], ['Blutplättchen', 'sorgen für die Blutgerinnung'], ['Blutplasma', 'Flüssigkeit, transportiert gelöste Stoffe']] },
      {
        id: 'blutgruppen-u18', typ: 'tabelle', plus: true, frage: 'Bedside-Test bei vier Patienten. Bestimme jeweils die Blutgruppe.',
        spalten: ['Probe', 'Anti-A', 'Anti-B', 'Blutgruppe'],
        zeilen: [
          { kopf: 'Patient 1', zellen: [{ fix: 'keine Verklumpung' }, { fix: 'verklumpt' }, { optionen: ['A', 'B', 'AB', '0'], richtig: 1 }] },
          { kopf: 'Patient 2', zellen: [{ fix: 'verklumpt' }, { fix: 'verklumpt' }, { optionen: ['A', 'B', 'AB', '0'], richtig: 2 }] },
          { kopf: 'Patient 3', zellen: [{ fix: 'keine Verklumpung' }, { fix: 'keine Verklumpung' }, { optionen: ['A', 'B', 'AB', '0'], richtig: 3 }] },
          { kopf: 'Patient 4', zellen: [{ fix: 'verklumpt' }, { fix: 'keine Verklumpung' }, { optionen: ['A', 'B', 'AB', '0'], richtig: 0 }] }
        ],
        erkl: 'Verklumpung mit Anti-A heißt Antigen A, Verklumpung mit Anti-B heißt Antigen B. Keine Verklumpung heißt Blutgruppe 0.'
      },
      { id: 'blutgruppen-u19', typ: 'wahl', plus: true, frage: 'Ein Patient blutet stark. Seine Blutgruppe ist unbekannt, für einen Test bleibt keine Zeit. Welche Konserven bekommt er?', optionen: ['0 Rh−', 'AB Rh+', 'A Rh+', 'AB Rh−'], richtig: 0, erkl: '0 Rh− trägt weder A noch B noch D. Sobald die Blutgruppe bekannt ist, wird blutgruppengleich weiter transfundiert.' },
      { id: 'blutgruppen-u20', typ: 'behauptung', plus: true, aussage: 'Blutgruppe 0 ist Universalspender. Also kann man auch Blutplasma der Blutgruppe 0 jedem Patienten geben.', stimmt: false, gruende: ['Stimmt, „universal“ gilt für alle Bestandteile des Blutes.', 'Stimmt nicht: „Universal“ gilt nur für rote Blutkörperchen. Plasma der Blutgruppe 0 enthält Anti-A und Anti-B.', 'Stimmt nicht: Blutplasma darf man grundsätzlich nicht übertragen.'], richtig: 1 },
      { id: 'blutgruppen-u21', typ: 'luecke', plus: true, frage: 'Rhesusunverträglichkeit in der Schwangerschaft', text: 'Gefährlich wird es, wenn eine {Rh−|Rh+}-Mutter ein {Rh+|Rh−}-Kind bekommt. Bei der Geburt gelangt Blut des Kindes in ihren Kreislauf, und sie bildet {Anti-D|Anti-A}. Gefährdet ist dann {ein zweites Rh+-Kind|ein zweites Rh−-Kind}. Vorbeugend bekommt die Mutter eine {Anti-D-Prophylaxe|Bluttransfusion}.' }
    ],
    erklaeren: [
      {
        id: 'blutgruppen-e1',
        frage: 'Erkläre den Unterschied zwischen Antigenen und Antikörpern.',
        tipp: 'Sag für beide, was sie sind und wo sie sitzen. Dann, was sie miteinander tun.',
        begriffe: [
          { name: 'Antigen', muster: ['antigen'] }, { name: 'Antikörper', muster: ['antikoerper'] },
          { name: 'rote Blutkörperchen', muster: ['blutkoerperchen'] }, { name: 'Blutplasma', muster: ['plasma'] },
          { name: 'binden', muster: ['bind'] }
        ],
        punkte: [
          { text: 'Antigene sind Merkmale auf der Oberfläche der roten Blutkörperchen. Sie legen die Blutgruppe fest.', p: 1 },
          { text: 'Antikörper sind Abwehrstoffe im Blutplasma, die an passende (fremde) Antigene binden.', p: 1 }
        ],
        muster: 'Antigene sind bestimmte Merkmale auf der Oberfläche der roten Blutkörperchen. Sie legen die Blutgruppe fest, zum Beispiel trägt Blutgruppe A das Antigen A. Antikörper sind dagegen Abwehrstoffe, die gelöst im Blutplasma vorkommen. Sie binden an passende Antigene, die nicht zum eigenen Körper gehören. Ein Mensch mit Blutgruppe A hat zum Beispiel Anti-B im Plasma, das an Antigen B bindet.'
      },
      {
        id: 'blutgruppen-e2',
        frage: 'Was versteht man unter dem Rhesusfaktor?',
        tipp: 'Was ist er, wo sitzt er, und was bedeuten Rh+ und Rh−?',
        begriffe: [
          { name: 'Antigen D', muster: ['antigen'] }, { name: 'rote Blutkörperchen', muster: ['blutkoerperchen'] },
          { name: 'Rhesus-positiv', muster: ['positiv'] }, { name: 'Rhesus-negativ', muster: ['negativ'] },
          { name: 'Anti-D erst nach Kontakt', muster: ['kontakt'] }
        ],
        punkte: [
          { text: 'Der Rhesusfaktor ist ein weiteres Antigen (D) auf der Oberfläche der roten Blutkörperchen.', p: 1 },
          { text: 'Wer es hat, ist Rhesus-positiv (Rh+), wer es nicht hat, Rhesus-negativ (Rh−). Anti-D bildet ein Rh−-Mensch erst nach Kontakt mit Rh+-Blut.', p: 1 }
        ],
        muster: 'Der Rhesusfaktor ist ein weiteres Antigen auf der Oberfläche der roten Blutkörperchen, das Antigen D. Menschen, die es besitzen, sind Rhesus-positiv (Rh+), Menschen ohne dieses Antigen sind Rhesus-negativ (Rh−). Anders als bei A und B hat ein Rh−-Mensch nicht von Anfang an Antikörper dagegen. Anti-D bildet er erst nach Kontakt mit Rh+-Blut, zum Beispiel nach einer Transfusion.'
      },
      {
        id: 'blutgruppen-e3',
        frage: 'Erkläre, warum Blutgruppe 0 im AB0-System als Universalspender für rote Blutkörperchen gilt und Blutgruppe AB als Universalempfänger.',
        tipp: 'Bei 0 geht es um die Antigene des Spenders, bei AB um die Antikörper des Empfängers.',
        begriffe: [
          { name: 'Antigene', muster: ['antigen'] }, { name: 'Antikörper', muster: ['antikoerper'] },
          { name: 'Blutplasma', muster: ['plasma'] }, { name: 'Verklumpung', muster: ['verklump', 'agglutin'] }
        ],
        punkte: [
          { text: 'Universalspender 0: Die roten Blutkörperchen tragen weder Antigen A noch Antigen B. Die Antikörper des Empfängers finden nichts zum Binden, nichts verklumpt.', p: 1 },
          { text: 'Universalempfänger AB: Im Plasma sind weder Anti-A noch Anti-B. Rote Blutkörperchen aller Blutgruppen werden deshalb nicht verklumpt.', p: 1 }
        ],
        muster: 'Die roten Blutkörperchen der Blutgruppe 0 tragen weder Antigen A noch Antigen B. Die Antikörper im Plasma des Empfängers finden deshalb nichts, an das sie binden können, und es kommt zu keiner Verklumpung. Darum gilt 0 als Universalspender. Menschen mit Blutgruppe AB haben im Blutplasma weder Anti-A noch Anti-B. Sie können deshalb rote Blutkörperchen jeder Blutgruppe erhalten, ohne dass diese verklumpen. Darum gilt AB als Universalempfänger.'
      },
      {
        id: 'blutgruppen-e4',
        frage: 'Ein Patient mit Blutgruppe A erhält rote Blutkörperchen der Blutgruppe B. Beschreibe die Folgen. Verwende den Begriff Agglutination.',
        tipp: 'Welche Antikörper hat der Patient, welche Antigene bringen die Spender-Blutkörperchen mit?',
        begriffe: [
          { name: 'Anti-B', muster: ['anti b'] }, { name: 'Antigen B', muster: ['antigen b'] },
          { name: 'Agglutination', muster: ['agglutin'] }, { name: 'Kapillaren', muster: ['kapillar', 'blutgefaess'] },
          { name: 'Lebensgefahr', muster: ['lebensgef', 'lebensbedroh'] }
        ],
        punkte: [
          { text: 'Die Anti-B-Antikörper im Plasma des Patienten binden an die Antigene B der gespendeten roten Blutkörperchen.', p: 1 },
          { text: 'Die Blutkörperchen verklumpen (Agglutination), die Klumpen verstopfen feine Blutgefäße. Es besteht Lebensgefahr.', p: 1 }
        ],
        muster: 'Der Patient hat Blutgruppe A und damit Anti-B im Blutplasma. Die gespendeten roten Blutkörperchen tragen das Antigen B. Die Anti-B-Antikörper binden an diese Antigene B und verbinden viele Blutkörperchen miteinander. Die roten Blutkörperchen verklumpen, das nennt man Agglutination. Die Klumpen verstopfen feine Blutgefäße wie die Kapillaren, sodass Organe nicht mehr versorgt werden. Es besteht Lebensgefahr.'
      }
    ],
    abschluss: [
      { id: 'blutgruppen-a1', typ: 'mehrfach', frage: 'Er hat Blutgruppe A. Welche Konserven roter Blutkörperchen darf er bekommen? Der Rhesusfaktor wird hier nicht berücksichtigt.', optionen: ['A', '0', 'B', 'AB'], richtig: [0, 1], erkl: 'Er hat Anti-B im Plasma. A und 0 tragen kein Antigen B.' },
      { id: 'blutgruppen-a2', typ: 'wahl', frage: 'Was würde passieren, wenn er versehentlich eine Konserve der Blutgruppe B bekäme?', optionen: ['Sein Anti-B bindet an das Antigen B der fremden Blutkörperchen, sie verklumpen (Agglutination).', 'Nichts, denn rote Blutkörperchen tragen keine Antigene.', 'Seine Antigene A binden an die Antigene B und lösen sie auf.', 'Er bildet erst nach Wochen Antikörper, deshalb passiert nichts.'], richtig: 0 },
      { id: 'blutgruppen-a3', typ: 'wahl', frage: 'Vor der Transfusion wird sein Blut am Bett mit Testserum gemischt, das Anti-A bzw. Anti-B enthält. Bei Anti-A verklumpt es, bei Anti-B nicht. Was bedeutet das?', optionen: ['Seine roten Blutkörperchen tragen Antigen A, aber nicht B: Blutgruppe A.', 'Er hat Anti-A im Plasma: Blutgruppe B.', 'Seine roten Blutkörperchen tragen Antigen B: Blutgruppe B.', 'Seine roten Blutkörperchen tragen keine Antigene: Blutgruppe 0.'], richtig: 0, erkl: 'Das Testserum liefert die Antikörper. Verklumpt es mit Anti-A, ist Antigen A da.' },
      { id: 'blutgruppen-a4', typ: 'wahl', frage: 'Zur Kontrolle wird auch die bereitgelegte Konserve getestet. Sie verklumpt mit Anti-A, aber nicht mit Anti-B. Welche Blutgruppe hat sie, und passt sie zu ihm?', optionen: ['Blutgruppe A, sie passt.', 'Blutgruppe A, sie passt nicht.', 'Blutgruppe B, sie passt.', 'Blutgruppe AB, sie passt nicht.'], richtig: 0, erkl: 'Verklumpung mit Anti-A heißt: Antigen A ist da, Antigen B nicht. Also Blutgruppe A, genau wie er. Sein Anti-B findet nichts zum Binden.' }
    ],
    epikrise: '<p><strong>Diagnose:</strong> Hoher Blutverlust nach einem Motorradunfall. Nach dem Bedside-Test hat er vier Konserven roter Blutkörperchen der Blutgruppe A bekommen, also blutgruppengleich. Puls und Blutdruck haben sich normalisiert. Verlegung auf die Unfallchirurgie.</p><p><strong>Die Biologie dahinter:</strong> Seine roten Blutkörperchen tragen Antigen A, im Plasma hat er Anti-B. Konserven der Blutgruppen A und 0 verträgt er, weil sie kein Antigen B tragen. Bei Blutgruppe B hätte sein Anti-B die fremden Blutkörperchen gebunden. Sie wären verklumpt (Agglutination) und hätten feine Blutgefäße verstopft.</p>'
  });
})();
