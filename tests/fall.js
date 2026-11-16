/* Prüft einzelne Fall-Dateien: node tests/fall.js js/inhalt/fall1-atemwege.js [weitere …]
   Lädt nur den Kern und die genannten Dateien und führt die Inhaltsprüfungen dafür aus. */
const KERN = ['js/util.js', 'js/text.js', 'js/bio.js', 'js/logic.js', 'js/state.js', 'js/abb.js', 'js/aufgaben.js'];
process.env.NUR_FAELLE = '1';
global.__dateien = KERN.concat(process.argv.slice(2).map((f) => f.split('\\').join('/')));
require('./inhalt.test.js');
