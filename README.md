# Nachtschicht – Lern- und Übungsseite Biologie (Klasse 9)

Interaktive Lernseite zur Vorbereitung auf eine Bioarbeit in Klasse 9, optimiert für Handy und Tablet.

**Online:** https://skillslabeducation.github.io/bio-kreislauf-stoffwechsel/

## Die Idee

Nachtschicht in der Notaufnahme. Zehn Patienten warten, jeder steht für ein Thema der Arbeit. Du nimmst den Fall auf, verstehst die Biologie dahinter, übst, erklärst und entlässt den Patienten. Am Ende wartet die Facharztprüfung im Format des Übungsblatts.

## Inhalt

| Box | Fall | Thema |
|-----|------|-------|
| 0 | Schichtbeginn: „Lebt das?“ | Biologie, Kennzeichen des Lebens |
| 1 | Fußballer, pfeift beim Atmen | Atemwege, Zwerchfell, Atembewegung |
| 2 | Raucher mit Luftnot | Lungenbläschen, Gasaustausch, Diffusion |
| 3 | Druck auf der Brust | Herz, Weg des Blutes, doppelter Kreislauf |
| 4 | Schwere Beine | Arterien, Venen, Kapillaren, Venenklappen |
| 5 | Umgekippt im Training | Nährstoffe, Energiegehalt, Grundumsatz |
| 6 | Nach dem 1000-m-Lauf | Zellatmung, Sport und Atmung |
| 7 | Bauchschmerzen nach Kakao | Enzyme, Schlüssel-Schloss-Prinzip, Lactase |
| 8 | Unfall, braucht Blut | Blutgruppen, Antigene, Antikörper, Transfusion |
| 9 | Babys vertauscht? | Vererbung der Blutgruppen, Kreuzungsschema |

Jeder Fall hat fünf Bereiche: **Aufnahme**, **Verstehen** (Karten mit Abbildungen), **Üben** (13 Aufgabentypen von Auswahl bis Kreuzungsschema), **Erklären** (mit Fachbegriff-Radar und Erwartungshorizont zum Selbstbewerten) und **Abschluss** (Transferfragen zum Patienten).

Dazu kommen:
- **Wiedervorlage:** Falsch gelöste Aufgaben kommen zurück, bis sie zweimal hintereinander sitzen.
- **Facharztprüfung:** Teil 1 (45 Min., 50 P.) und Teil 2 (60 Min., 60 P.) mit wechselnden Varianten, Timer und Auswertung. Eine laufende Prüfung übersteht das Neuladen.
- **Plan** bis zum Termin der Arbeit.

Inhalte über das Übungsblatt hinaus sind als **Plus** markiert und kommen in der Prüfung nicht vor.

## Technik

- Reines HTML, CSS und JavaScript, ohne Build-Schritt und ohne externe Dienste
- Alle Abbildungen sind selbst gezeichnetes SVG
- Fortschritt nur lokal im Browser (localStorage), kein Konto, kein Tracking
- Schriften: IBM Plex Sans und IBM Plex Mono (SIL Open Font License), lokal in `fonts/`
- Auf dem iPhone oder iPad in Safari „Teilen → Zum Home-Bildschirm“ wählen, dann startet die Seite wie eine App

## Tests

```
node tests/text.test.js       # Eingaben, Tippfehler, Fachbegriff-Radar
node tests/bio.test.js        # Blutgruppen, Kreuzung, Transfusion, Energie
node tests/logic.test.js      # Fortschritt, Wiedervorlage, Rang, Plan, Speicher
node tests/aufgaben.test.js   # alle Aufgabentypen
node tests/inhalt.test.js     # alle Fälle: vollständig, jede Aufgabe mit ihrer Lösung lösbar
node tests/pruefung.test.js   # Prüfung: 50/60 Punkte, Varianten, Auswertung
```
