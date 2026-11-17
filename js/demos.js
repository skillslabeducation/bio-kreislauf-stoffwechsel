/* Interaktive Stücke auf den Verstehen-Karten: Bedside-Test, Blutweg, Atemmodell, Diffusion, Venenklappe, Enzym-Labor.
   Fachlogik kommt aus W.bio (testbar). Jede Demo räumt sich selbst auf, sobald sie nicht mehr im Dokument ist. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var h = function () { return W.h.apply(null, arguments); };
  var s = function () { return W.s.apply(null, arguments); };

  function rahmen(host, titel, hinweis) {
    var box = h('div', { class: 'demo-box' }, h('p', { class: 'demo-box__titel mono' }, 'LABOR · ' + titel), hinweis ? h('p', { class: 'hinweis-klein' }, hinweis) : null);
    host.appendChild(box);
    return box;
  }
  function lebt(el) { return document.body.contains(el); }

  /* ---------- Bedside-Test ---------- */
  var PATIENTEN = [
    { name: 'Patient 1', bg: 'A+' }, { name: 'Patient 2', bg: '0-' }, { name: 'Patient 3', bg: 'B+' },
    { name: 'Patient 4', bg: 'AB+' }, { name: 'Patient 5', bg: '0+' }, { name: 'Patient 6', bg: 'A-' }
  ];
  var KONSERVEN = ['0', 'A', 'B', 'AB'];

  function napf(serum, beschriftung) {
    var svg = s('svg', { viewBox: '0 0 90 90', class: 'napf', role: 'img', 'aria-label': beschriftung });
    svg.appendChild(s('circle', { cx: 45, cy: 45, r: 38, class: 'napf__rand' }));
    var inhalt = s('g');
    svg.appendChild(inhalt);
    return { el: h('div', { class: 'napf-wrap' }, svg, h('span', { class: 'mono napf__name' }, beschriftung)), inhalt: inhalt, serum: serum };
  }
  function fuellen(n, klumpt) {
    n.inhalt.innerHTML = '';
    if (!klumpt) {
      n.inhalt.appendChild(s('circle', { cx: 45, cy: 45, r: 32, fill: '#c0392b', opacity: '.9' }));
      return;
    }
    n.inhalt.appendChild(s('circle', { cx: 45, cy: 45, r: 32, fill: '#3a1015' }));
    [[32, 34], [52, 30], [40, 52], [58, 54], [28, 56], [47, 40], [60, 40], [36, 42]].forEach(function (p, i) {
      for (var k = 0; k < 4; k++) n.inhalt.appendChild(s('circle', { cx: p[0] + (k % 2) * 4 - 2, cy: p[1] + (k > 1 ? 3 : -2), r: 3.4 + (i % 3) * 0.6, fill: '#d64541' }));
    });
  }

  function bedside(host) {
    var box = rahmen(host, 'BEDSIDE-TEST', 'Vor jeder Transfusion wird am Bett noch einmal die Blutgruppe geprüft: Je ein Tropfen Blut kommt auf Testserum mit Anti-A und Anti-B.');
    var idx = 0;
    var flaeche = h('div');
    box.appendChild(flaeche);
    function zeige() {
      var p = PATIENTEN[idx];
      var bg = p.bg.replace(/[+-]$/, '');
      var naepfe = [napf('anti-a', 'Anti-A'), napf('anti-b', 'Anti-B'), napf('anti-d', 'Anti-D')];
      var getropft = false;
      var ergebnis = h('div', { 'aria-live': 'polite' });
      var tropfen = h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () {
        naepfe.forEach(function (n) { fuellen(n, W.bio.agglutiniert(p.bg, n.serum)); });
        getropft = true;
        tropfen.disabled = true;
        auswahl.hidden = false;
      } }, 'Blut auftropfen');
      var auswahl = h('div', { hidden: true },
        h('p', null, 'Welche Blutgruppe hat ' + p.name + '? Verklumpung heißt: Das passende Antigen ist da.'),
        h('div', { class: 'demo-knoepfe' }, W.bio.GRUPPEN.map(function (g) {
          return h('button', { type: 'button', class: 'opt opt--kurz', onclick: function () {
            if (!getropft) return;
            ergebnis.innerHTML = '';
            if (g === bg) {
              ergebnis.appendChild(h('p', { class: 'ok-text' }, 'Richtig: Blutgruppe ' + bg + (/\+$/.test(p.bg) ? ', Rhesus-positiv (Anti-D verklumpt).' : ', Rhesus-negativ (Anti-D bleibt glatt). In der Klinik bekäme dieser Patient zusätzlich Rh−-Blut.')));
              konserve(ergebnis, p, bg);
            } else {
              ergebnis.appendChild(h('p', { class: 'falsch-text' }, 'Nicht ganz. Schau, welche Seren verklumpen: Anti-A verklumpt bei Antigen A, Anti-B bei Antigen B.'));
            }
          } }, g);
        })));
      flaeche.innerHTML = '';
      flaeche.appendChild(h('div', null,
        h('div', { class: 'demo-kopfzeile' }, h('strong', null, p.name), h('button', { type: 'button', class: 'btn btn--klein', onclick: function () { idx = (idx + 1) % PATIENTEN.length; zeige(); } }, 'Nächster Patient')),
        h('div', { class: 'naepfe' }, naepfe.map(function (n) { return n.el; })),
        h('p', { class: 'hinweis-klein' }, 'Anti-D prüft den Rhesusfaktor (Plus).'),
        h('div', { class: 'aktionen' }, tropfen), auswahl, ergebnis));
    }
    function konserve(ziel, p, bg) {
      var k = KONSERVEN[Math.floor(Math.random() * KONSERVEN.length)];
      var antwort = h('div', { 'aria-live': 'polite' });
      ziel.appendChild(h('div', { class: 'demo-frage' },
        h('p', null, 'Im Kühlschrank liegt eine Konserve mit roten Blutkörperchen der Blutgruppe ', h('strong', null, k), '. Passt sie (nur AB0)?'),
        h('div', { class: 'demo-knoepfe' }, [['passt', true], ['passt nicht', false]].map(function (o) {
          return h('button', { type: 'button', class: 'opt opt--kurz', onclick: function () {
            var soll = W.bio.vertraeglich(k, bg);
            antwort.innerHTML = '';
            var fremd = W.bio.antigene(k).filter(function (a) { return W.bio.antigene(bg).indexOf(a) < 0; });
            antwort.appendChild(h('p', { class: o[1] === soll ? 'ok-text' : 'falsch-text' }, (o[1] === soll ? 'Richtig. ' : 'Nein. ') +
              (soll ? 'Die Konserve trägt kein Antigen, gegen das der Patient Antikörper hat.' : (fremd.length > 1 ? 'Die Konserve trägt die Antigene ' + fremd.join(' und ') + '. Die Anti-' + fremd.join('- und Anti-') : 'Die Konserve trägt das Antigen ' + fremd[0] + '. Die Anti-' + fremd[0]) + '-Antikörper des Patienten würden sie verklumpen (Agglutination).')));
          } }, o[0]);
        })), antwort));
    }
    zeige();
  }

  /* ---------- Blutweg ---------- */
  var WEG = ['rechter-vorhof', 'rechte-kammer', 'lungenarterie', 'lunge', 'lungenvene', 'linker-vorhof', 'linke-kammer', 'aorta', 'koerper', 'hohlvene', 'rechter-vorhof'];
  var NAMEN = { lunge: 'Lunge', koerper: 'Körperorgane' };

  function blutweg(host) {
    var box = rahmen(host, 'BLUTWEG', 'Das Blutkörperchen startet im rechten Vorhof. Tippe die nächste Station an, bis es wieder im rechten Vorhof ist.');
    var L = W.abb.liste.kreislauf.strukturen;
    var pos = function (id) { return id === 'lunge' ? { x: 180, y: 36 } : id === 'koerper' ? { x: 180, y: 388 } : { x: L[id].x, y: L[id].y }; };
    var name = function (id) { return NAMEN[id] || L[id].label; };
    var svg = W.abb.zeichne('kreislauf', { beschriftet: true });
    var schritt = 0, fehlversuche = 0;
    var meldung = h('p', { class: 'demo-meldung', 'aria-live': 'polite' }, 'Start: rechter Vorhof. Wohin fließt das Blut als Nächstes?');
    var start = pos(WEG[0]);
    var zelle = s('g', { class: 'blutzelle', transform: 'translate(' + start.x + ' ' + start.y + ')' }, s('circle', { r: 9, class: 'blutzelle--arm' }));
    var jetzt = { x: start.x, y: start.y };
    function bewegen(ziel) {
      var von = { x: jetzt.x, y: jetzt.y };
      jetzt = { x: ziel.x, y: ziel.y };
      if (W.reducedMotion()) { zelle.setAttribute('transform', 'translate(' + ziel.x + ' ' + ziel.y + ')'); return; }
      var t0 = null;
      function bild(ts) {
        if (t0 === null) t0 = ts;
        var k = Math.min(1, (ts - t0) / 600), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        zelle.setAttribute('transform', 'translate(' + (von.x + (ziel.x - von.x) * e).toFixed(1) + ' ' + (von.y + (ziel.y - von.y) * e).toFixed(1) + ')');
        if (k < 1) requestAnimationFrame(bild);
      }
      requestAnimationFrame(bild);
    }
    Object.keys(L).concat(['lunge', 'koerper']).forEach(function (id) {
      var p = pos(id);
      var ziel = s('circle', { cx: p.x, cy: p.y, r: 24, class: 'hotspot', tabindex: '0', role: 'button', 'aria-label': name(id) });
      var tippen = function () { klick(id); };
      ziel.addEventListener('click', tippen);
      ziel.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tippen(); } });
      svg.appendChild(ziel);
    });
    svg.appendChild(zelle);
    function klick(id) {
      if (schritt >= WEG.length - 1) return;
      var soll = WEG[schritt + 1];
      if (id !== soll) {
        fehlversuche++;
        meldung.className = 'demo-meldung falsch-text';
        meldung.textContent = 'Nicht ganz. Das ist nicht die nächste Station nach: ' + name(WEG[schritt]) + '.' + (fehlversuche >= 2 ? ' Tipp: ' + name(soll) + '.' : '');
        return;
      }
      fehlversuche = 0;
      schritt++;
      bewegen(pos(id));
      if (id === 'lunge') zelle.firstChild.setAttribute('class', 'blutzelle--reich');
      if (id === 'koerper') zelle.firstChild.setAttribute('class', 'blutzelle--arm');
      meldung.className = 'demo-meldung';
      var info = {
        'lunge': 'In der Lunge: CO₂ ab, O₂ auf. Das Blut ist jetzt sauerstoffreich.',
        'koerper': 'In den Kapillaren der Körperorgane: O₂ ab, CO₂ auf. Das Blut ist jetzt sauerstoffarm.'
      }[id] || 'Station: ' + name(id) + '. Weiter.';
      if (schritt === WEG.length - 1) {
        meldung.className = 'demo-meldung ok-text';
        meldung.textContent = 'Kreislauf geschlossen. Das Blut war zweimal im Herzen: einmal rechts, einmal links. Das ist der doppelte Kreislauf.';
        box.appendChild(h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn', onclick: function () { box.remove(); blutweg(host); } }, 'Nochmal')));
      } else meldung.textContent = info;
    }
    box.appendChild(h('figure', { class: 'abb' }, svg));
    box.appendChild(meldung);
  }

  /* ---------- Atemmodell (Glockenmodell) ---------- */
  function atemmodell(host) {
    var box = rahmen(host, 'GLOCKENMODELL', 'Zieh am Regler: Er bewegt das Zwerchfell. Entspannt ist es nach oben gewölbt, angespannt zieht es sich zusammen und wird flach.');
    var svg = s('svg', { viewBox: '0 0 300 260', class: 'abb-svg', role: 'img', 'aria-label': 'Glockenmodell der Atmung' });
    svg.appendChild(s('path', { d: 'M110 40 L190 40 L250 200 L50 200 Z', class: 'glocke' }));
    svg.appendChild(s('rect', { x: 144, y: 8, width: 12, height: 70, rx: 3, class: 'abb-luftroehre' }));
    svg.appendChild(s('path', { d: 'M150 78 L120 104 M150 78 L180 104', class: 'abb-bronchus' }));
    var lunge1 = s('ellipse', { cx: 112, cy: 128, rx: 24, ry: 30, class: 'abb-lunge' });
    var lunge2 = s('ellipse', { cx: 188, cy: 128, rx: 24, ry: 30, class: 'abb-lunge' });
    var zwerchfell = s('path', { class: 'abb-zwerchfell' });
    var pfeil = s('text', { x: 150, y: 24, 'text-anchor': 'middle', class: 'abb-text' });
    svg.appendChild(lunge1); svg.appendChild(lunge2); svg.appendChild(zwerchfell); svg.appendChild(pfeil);
    svg.appendChild(s('text', { x: 262, y: 120, class: 'abb-klein', 'text-anchor': 'end' }, 'Brustraum'));
    svg.appendChild(s('text', { x: 164, y: 40, class: 'abb-klein' }, 'Luftröhre'));
    svg.appendChild(s('text', { x: 112, y: 132, class: 'abb-klein', 'text-anchor': 'middle' }, 'Lunge'));
    svg.appendChild(s('text', { x: 150, y: 252, class: 'abb-klein', 'text-anchor': 'middle' }, 'Zwerchfell'));
    var regler = h('input', { type: 'range', min: '0', max: '100', value: '0', class: 'regler', 'aria-label': 'Zwerchfell' });
    var text = h('p', { class: 'demo-meldung', 'aria-live': 'polite' });
    var alt = 0;
    function zeichnen(v, richtung) {
      var t = v / 100;
      var mitte = 150 + t * 50;  // Kuppel: nach oben gewölbt (entspannt) → flach (zusammengezogen), nie nach unten
      zwerchfell.setAttribute('d', 'M50 200 Q150 ' + mitte.toFixed(1) + ' 250 200');
      var rx = 22 + t * 14, ry = 28 + t * 16;
      [lunge1, lunge2].forEach(function (l) { l.setAttribute('rx', rx.toFixed(1)); l.setAttribute('ry', ry.toFixed(1)); l.setAttribute('cy', (126 + t * 10).toFixed(1)); });
      pfeil.textContent = richtung > 0 ? '↓ Luft strömt ein' : richtung < 0 ? '↑ Luft strömt aus' : '';
      text.textContent = richtung > 0 ? 'Einatmen: Das Zwerchfell zieht sich zusammen und flacht ab. Der Brustraum wird größer, die Lunge dehnt sich mit, Luft strömt ein.'
        : richtung < 0 ? 'Ausatmen: Das Zwerchfell erschlafft und wölbt sich nach oben. Der Brustraum wird kleiner, Luft strömt aus.'
          : 'Bewege den Regler.';
    }
    regler.addEventListener('input', function () { var v = +regler.value; zeichnen(v, v > alt ? 1 : v < alt ? -1 : 0); alt = v; });
    zeichnen(0, 0);
    box.appendChild(h('figure', { class: 'abb' }, svg));
    box.appendChild(h('label', { class: 'regler-zeile' }, h('span', { class: 'hinweis-klein' }, 'entspannt'), regler, h('span', { class: 'hinweis-klein' }, 'angespannt')));
    box.appendChild(text);
  }

  /* ---------- Diffusion ---------- */
  function diffusion(host) {
    var box = rahmen(host, 'DIFFUSION', 'Oben das Lungenbläschen, unten das Blut in der Kapillare. Dazwischen liegt eine sehr dünne Wand aus einer Zellschicht. O₂ und CO₂ diffundieren durch sie hindurch (im Modell gestrichelt). Die Teilchen bewegen sich zufällig.');
    var B = 300, H = 200, WAND = 100;
    var svg = s('svg', { viewBox: '0 0 ' + B + ' ' + H, class: 'abb-svg diff-svg', role: 'img', 'aria-label': 'Diffusion von Sauerstoff und Kohlenstoffdioxid' });
    svg.appendChild(s('rect', { x: 0, y: 0, width: B, height: WAND, class: 'diff-luft' }));
    svg.appendChild(s('rect', { x: 0, y: WAND, width: B, height: H - WAND, class: 'diff-blut' }));
    for (var x = 0; x < B; x += 30) svg.appendChild(s('line', { x1: x + 8, y1: WAND, x2: x + 22, y2: WAND, class: 'diff-wand' }));
    svg.appendChild(s('text', { x: 6, y: 14, class: 'abb-klein' }, 'Lungenbläschen'));
    svg.appendChild(s('text', { x: 6, y: H - 6, class: 'abb-klein' }, 'Blut in der Kapillare'));
    svg.appendChild(s('circle', { cx: 214, cy: 10, r: 4, class: 'diff-o2' }));
    svg.appendChild(s('text', { x: 222, y: 14, class: 'abb-klein' }, 'O₂'));
    svg.appendChild(s('circle', { cx: 252, cy: 10, r: 4, class: 'diff-co2' }));
    svg.appendChild(s('text', { x: 260, y: 14, class: 'abb-klein' }, 'CO₂'));
    var teile = [];
    function neu(art, oben) {
      var t = { art: art, x: Math.random() * B, y: oben ? 8 + Math.random() * (WAND - 16) : WAND + 8 + Math.random() * (H - WAND - 16) };
      t.el = s('circle', { r: 4, class: art === 'o2' ? 'diff-o2' : 'diff-co2' });
      svg.appendChild(t.el);
      teile.push(t);
    }
    var i;
    for (i = 0; i < 18; i++) neu('o2', true);
    for (i = 0; i < 2; i++) neu('o2', false);
    for (i = 0; i < 16; i++) neu('co2', false);
    for (i = 0; i < 2; i++) neu('co2', true);
    var fluss = true;
    var zaehler = h('p', { class: 'mono demo-meldung', 'aria-live': 'off' });
    var schalter = h('button', { type: 'button', class: 'btn btn--klein', onclick: function () {
      fluss = !fluss; schalter.textContent = fluss ? 'Blutfluss anhalten' : 'Blutfluss starten';
      erklaerung.textContent = fluss ? 'Das Blut fließt: Neues sauerstoffarmes Blut kommt nach. Das Gefälle bleibt, der Austausch läuft weiter.'
        : 'Kein Blutfluss und keine frische Luft: Die Konzentrationen gleichen sich aus. Dann wandern gleich viele Teilchen hin wie her, insgesamt gelangt kein zusätzlicher Sauerstoff mehr ins Blut.';
    } }, 'Blutfluss anhalten');
    var erklaerung = h('p', { class: 'hinweis-klein' }, 'Das Blut fließt: Neues sauerstoffarmes Blut kommt nach. Das Gefälle bleibt, der Austausch läuft weiter.');
    box.appendChild(h('figure', { class: 'abb' }, svg));
    box.appendChild(h('div', { class: 'demo-kopfzeile' }, zaehler, schalter));
    box.appendChild(erklaerung);
    var takt = 0;
    function schritt() {
      if (!lebt(svg)) return;
      takt++;
      teile.forEach(function (t) {
        var sp = W.reducedMotion() ? 1.2 : 3;
        var nx = t.x + (Math.random() - 0.5) * sp * 2, ny = t.y + (Math.random() - 0.5) * sp * 2;
        var luecke = (nx % 30) > 8 && (nx % 30) < 22;
        if ((t.y < WAND) !== (ny < WAND) && !luecke) ny = t.y;
        t.x = Math.max(4, Math.min(B - 4, nx));
        t.y = Math.max(4, Math.min(H - 4, ny));
        if (fluss && t.y > WAND) t.x += 0.6;
      });
      if (fluss) {
        teile.forEach(function (t) {
          if (t.y > WAND && t.x >= B - 5) {
            // Blut fließt weiter: Teilchen verlässt rechts, neues Blut (O₂-arm, CO₂-reich) kommt links an
            t.x = 5; t.art = Math.random() < 0.85 ? 'co2' : 'o2'; t.el.setAttribute('class', t.art === 'o2' ? 'diff-o2' : 'diff-co2');
          }
        });
        if (takt % 40 === 0) {
          // Atmung: verbrauchte Luft wird ersetzt
          var co2Oben = teile.filter(function (t) { return t.art === 'co2' && t.y < WAND; });
          if (co2Oben.length) { var t = co2Oben[0]; t.art = 'o2'; t.el.setAttribute('class', 'diff-o2'); }
        }
      }
      teile.forEach(function (t) { t.el.setAttribute('cx', t.x.toFixed(1)); t.el.setAttribute('cy', t.y.toFixed(1)); });
      if (takt % 10 === 0) {
        var o2u = teile.filter(function (t) { return t.art === 'o2' && t.y > WAND; }).length;
        var o2o = teile.filter(function (t) { return t.art === 'o2' && t.y < WAND; }).length;
        var c2u = teile.filter(function (t) { return t.art === 'co2' && t.y > WAND; }).length;
        var c2o = teile.filter(function (t) { return t.art === 'co2' && t.y < WAND; }).length;
        zaehler.textContent = 'O₂ oben ' + o2o + ' · unten ' + o2u + '   CO₂ oben ' + c2o + ' · unten ' + c2u;
      }
      requestAnimationFrame(schritt);
    }
    requestAnimationFrame(schritt);
  }

  /* ---------- Venenklappe ---------- */
  function venenklappe(host) {
    var box = rahmen(host, 'MUSKELPUMPE', 'Spann den Wadenmuskel an: Er drückt die Vene zusammen. Die Klappen lassen das Blut nur Richtung Herz durch.');
    var svg = s('svg', { viewBox: '0 0 240 260', class: 'abb-svg', role: 'img', 'aria-label': 'Vene mit Venenklappen und Muskeln' });
    var muskelL = s('ellipse', { cx: 70, cy: 150, rx: 26, ry: 60, class: 'muskel' });
    var muskelR = s('ellipse', { cx: 170, cy: 150, rx: 26, ry: 60, class: 'muskel' });
    var vene = s('rect', { x: 102, y: 20, width: 36, height: 230, rx: 6, class: 'abb-vene-laengs' });
    var klappeO = s('path', { class: 'abb-klappe' });
    var klappeU = s('path', { class: 'abb-klappe' });
    var blut = s('g');
    [muskelL, muskelR, vene, blut, klappeO, klappeU].forEach(function (e) { svg.appendChild(e); });
    svg.appendChild(s('text', { x: 120, y: 14, 'text-anchor': 'middle', class: 'abb-klein' }, '↑ zum Herzen'));
    /* Drei Abschnitte der Vene: unter der unteren Klappe (aus dem Bein), zwischen den Klappen (im Muskel), über der oberen Klappe (Richtung Herz). */
    var portionen = 0, defekt = false, gedrueckt = false;
    var unten = 3, mitte = 3, oben = 0;
    function klappe(el, y, offen) {
      el.setAttribute('d', offen ? 'M104 ' + (y + 24) + ' L112 ' + (y - 2) + ' M136 ' + (y + 24) + ' L128 ' + (y - 2)
        : 'M104 ' + (y + 24) + ' L120 ' + y + ' M136 ' + (y + 24) + ' L120 ' + y);
    }
    function punkte(n, y0, dy) { for (var k = 0; k < n; k++) blut.appendChild(s('circle', { cx: 120, cy: y0 + k * dy, r: 5, class: 'blutzelle--arm' })); }
    function zeichnen() {
      var quetsch = gedrueckt ? 10 : 0;
      muskelL.setAttribute('rx', 26 + quetsch); muskelR.setAttribute('rx', 26 + quetsch);
      muskelL.setAttribute('cx', 70 + quetsch * 0.6); muskelR.setAttribute('cx', 170 - quetsch * 0.6);
      klappe(klappeO, 70, gedrueckt || defekt);
      klappe(klappeU, 170, !gedrueckt);
      blut.innerHTML = '';
      punkte(oben, 28, 14);
      punkte(mitte, 106, 16);
      punkte(unten, 206, 13);
    }
    var anzeige = h('p', { class: 'mono demo-meldung', 'aria-live': 'polite' }, 'Blut zum Herzen: 0');
    var info = h('p', { class: 'hinweis-klein' });
    function druecken() {
      gedrueckt = true;
      portionen += oben;
      oben = mitte;
      mitte = 0;
      info.textContent = 'Der Muskel drückt die Vene zusammen. Die untere Klappe schließt sich, die obere öffnet sich: Das Blut kann nur nach oben zum Herzen ausweichen.';
      anzeige.textContent = 'Blut zum Herzen: ' + portionen;
      zeichnen();
    }
    function loslassen() {
      gedrueckt = false;
      if (defekt) {
        mitte = Math.min(4, mitte + oben);
        oben = 0;
        info.textContent = 'Die obere Klappe schließt nicht: Das Blut sackt zurück und staut sich in den Beinvenen. Die Venen weiten sich, es entstehen Krampfadern (Plus).';
      } else {
        mitte = Math.min(4, mitte + unten);
        unten = 3;
        info.textContent = 'Der Muskel entspannt sich. Die obere Klappe schließt sich, das Blut darüber kann nicht zurück. Die untere öffnet sich, Blut aus dem Bein strömt nach.';
      }
      anzeige.textContent = 'Blut zum Herzen: ' + portionen;
      zeichnen();
    }
    var knopf = h('button', { type: 'button', class: 'btn btn--haupt' }, 'Muskel anspannen (halten)');
    knopf.addEventListener('pointerdown', function (e) { e.preventDefault(); druecken(); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) { knopf.addEventListener(ev, function () { if (gedrueckt) loslassen(); }); });
    knopf.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && !gedrueckt) { e.preventDefault(); druecken(); } });
    knopf.addEventListener('keyup', function (e) { if ((e.key === 'Enter' || e.key === ' ') && gedrueckt) loslassen(); });
    var defektSchalter = h('label', { class: 'schalter' }, h('input', { type: 'checkbox', onchange: function (e) { defekt = e.target.checked; zeichnen(); } }), h('span', null, 'Obere Klappe defekt (Plus: Krampfader)'));
    zeichnen();
    box.appendChild(h('figure', { class: 'abb' }, svg));
    box.appendChild(h('div', { class: 'demo-kopfzeile' }, anzeige, knopf));
    box.appendChild(info);
    box.appendChild(defektSchalter);
  }

  /* ---------- Enzym-Labor ---------- */
  function aktivitaet(temp, denaturiert) {
    if (denaturiert) return 0;
    if (temp <= 37) return 0.1 + 0.9 * Math.pow(temp / 37, 1.6);
    return Math.max(0, 1 - (temp - 37) / 5);
  }

  function enzymlabor(host) {
    var box = rahmen(host, 'ENZYM-LABOR', 'Amylase aus dem Speichel spaltet Stärke. Ändere die Temperatur und das Substrat.');
    var temp = 37, denaturiert = false, substrat = 'staerke';
    var figur = h('figure', { class: 'abb' });
    var kurve = s('svg', { viewBox: '0 0 300 120', class: 'abb-svg', role: 'img', 'aria-label': 'Enzymaktivität über der Temperatur' });
    var punkt = s('circle', { r: 6, class: 'kurve-punkt' });
    var d = '';
    for (var t = 0; t <= 60; t++) d += (t ? 'L' : 'M') + (20 + t * 4.4).toFixed(1) + ' ' + (100 - 80 * aktivitaet(t, false)).toFixed(1) + ' ';
    kurve.appendChild(s('line', { x1: 20, y1: 100, x2: 286, y2: 100, class: 'abb-achse' }));
    kurve.appendChild(s('path', { d: d, class: 'abb-kurve' }));
    [0, 20, 37, 60].forEach(function (x) { kurve.appendChild(s('text', { x: 20 + x * 4.4, y: 116, 'text-anchor': 'middle', class: 'abb-klein' }, x + ' °C')); });
    kurve.appendChild(s('text', { x: 22, y: 12, class: 'abb-klein' }, 'Aktivität'));
    kurve.appendChild(punkt);
    var regler = h('input', { type: 'range', min: '0', max: '60', value: '37', class: 'regler', 'aria-label': 'Temperatur' });
    var anzeige = h('p', { class: 'mono demo-meldung' });
    var text = h('p', { class: 'hinweis-klein', 'aria-live': 'polite' });
    var knoepfe = h('div', { class: 'demo-knoepfe' },
      h('button', { type: 'button', class: 'opt opt--kurz gewaehlt', onclick: function (e) { substrat = 'staerke'; markiere(e.target); zeichnen(); } }, 'Stärke'),
      h('button', { type: 'button', class: 'opt opt--kurz', onclick: function (e) { substrat = 'fett'; markiere(e.target); zeichnen(); } }, 'Fett'));
    function markiere(b) { Array.prototype.forEach.call(knoepfe.children, function (k) { k.classList.toggle('gewaehlt', k === b); }); }
    var neu = h('button', { type: 'button', class: 'btn btn--klein', hidden: true, onclick: function () { denaturiert = false; neu.hidden = true; temp = 37; regler.value = '37'; zeichnen(); } }, 'Neues Enzym');
    function zeichnen() {
      if (temp >= 42) { denaturiert = true; neu.hidden = false; }
      var a = substrat === 'staerke' ? aktivitaet(temp, denaturiert) : 0;
      figur.innerHTML = '';
      figur.appendChild(W.abb.zeichne('enzym', { denaturiert: denaturiert }));
      punkt.setAttribute('cx', (20 + temp * 4.4).toFixed(1));
      punkt.setAttribute('cy', (100 - 80 * a).toFixed(1));
      anzeige.textContent = temp + ' °C · Aktivität ' + Math.round(a * 100) + ' %';
      text.textContent = substrat === 'fett' ? 'Fett passt nicht ins aktive Zentrum der Amylase: keine Reaktion. Jedes Enzym ist substratspezifisch.'
        : denaturiert ? 'Denaturiert: Bei zu hoher Temperatur (im Modell ab 42 °C) wird das Eiweiß des Enzyms verformt. Das aktive Zentrum passt nicht mehr, auch nicht nach dem Abkühlen.'
          : temp < 20 ? 'Kalt: Die Teilchen bewegen sich langsam, das Enzym arbeitet träge, ist aber nicht kaputt.'
            : temp <= 40 ? 'Um 37 °C, also bei Körpertemperatur, arbeitet die Amylase am schnellsten.' : 'Es wird zu warm. Die Struktur des Enzyms beginnt sich zu verändern.';
    }
    regler.addEventListener('input', function () { temp = +regler.value; zeichnen(); });
    zeichnen();
    box.appendChild(figur);
    box.appendChild(h('div', { class: 'abb' }, kurve));
    box.appendChild(h('label', { class: 'regler-zeile' }, h('span', { class: 'hinweis-klein' }, '0 °C'), regler, h('span', { class: 'hinweis-klein' }, '60 °C')));
    box.appendChild(h('div', { class: 'demo-kopfzeile' }, anzeige, neu));
    box.appendChild(h('p', { class: 'hinweis-klein' }, 'Substrat:'));
    box.appendChild(knoepfe);
    box.appendChild(text);
  }

  W.demos = { bedside: bedside, blutweg: blutweg, atemmodell: atemmodell, diffusion: diffusion, venenklappe: venenklappe, enzymlabor: enzymlabor, _aktivitaet: aktivitaet };
})();
