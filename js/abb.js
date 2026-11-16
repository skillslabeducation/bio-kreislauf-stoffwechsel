/* Abbildungen als selbst gezeichnetes SVG. Jede Abbildung hat Strukturmarken für Nummern oder Beschriftungen.
   W.abb.liste ist reine Daten (testbar), W.abb.zeichne baut das SVG-Element. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});

  /* Marke: x,y = Position der Nummer; tx,ty = Zielpunkt der Linie (fehlt: Nummer sitzt direkt auf der Struktur);
     a = Textausrichtung für die Beschriftung. */
  var L = {
    atemwege: {
      viewBox: '0 0 360 400', titel: 'Atemwege des Menschen',
      strukturen: {
        nasenhoehle: { label: 'Nasenhöhle', x: 36, y: 50, tx: 150, ty: 60, a: 'start' },
        mundhoehle: { label: 'Mundhöhle', x: 36, y: 112, tx: 160, ty: 103, a: 'start' },
        rachen: { label: 'Rachen', x: 326, y: 78, tx: 210, ty: 100, a: 'end' },
        kehlkopf: { label: 'Kehlkopf', x: 326, y: 140, tx: 216, ty: 160, a: 'end' },
        luftroehre: { label: 'Luftröhre', x: 326, y: 196, tx: 212, ty: 204, a: 'end' },
        bronchien: { label: 'Bronchien', x: 336, y: 250, tx: 246, ty: 262, a: 'end' },
        lungenfluegel: { label: 'Lungenflügel', x: 30, y: 292, tx: 118, ty: 292, a: 'start' },
        zwerchfell: { label: 'Zwerchfell', x: 330, y: 378, tx: 288, ty: 341, a: 'end' }
      }
    },
    alveole: {
      viewBox: '0 0 360 290', titel: 'Lungenbläschen mit Blutkapillare',
      strukturen: {
        lungenblaeschen: { label: 'Lungenbläschen', x: 40, y: 40, tx: 128, ty: 88, a: 'start' },
        kapillare: { label: 'Blutkapillare', x: 346, y: 186, tx: 300, ty: 222, a: 'end' },
        bronchiole: { label: 'Bronchiole', x: 300, y: 22, tx: 196, ty: 22, a: 'end' }
      }
    },
    kreislauf: {
      viewBox: '0 0 360 440', titel: 'Herz und Blutkreislauf (Ansicht von vorn)',
      strukturen: {
        'rechter-vorhof': { label: 'rechter Vorhof', kurz: 'rechter|Vorhof', x: 140, y: 184 },
        'rechte-kammer': { label: 'rechte Herzkammer', kurz: 'rechte|Kammer', x: 140, y: 244 },
        'linker-vorhof': { label: 'linker Vorhof', kurz: 'linker|Vorhof', x: 220, y: 184 },
        'linke-kammer': { label: 'linke Herzkammer', kurz: 'linke|Kammer', x: 220, y: 244 },
        lungenarterie: { label: 'Lungenarterie', x: 72, y: 110 },
        lungenvene: { label: 'Lungenvene', x: 290, y: 110 },
        aorta: { label: 'Aorta', x: 322, y: 320 },
        hohlvene: { label: 'Hohlvene', x: 40, y: 300 }
      }
    },
    gefaesse: {
      viewBox: '0 0 400 210', titel: 'Blutgefäße im Querschnitt und Venenklappe',
      strukturen: {
        arterie: { label: 'Arterie', x: 62, y: 180 },
        vene: { label: 'Vene', x: 168, y: 180 },
        kapillare: { label: 'Kapillare', x: 252, y: 180 },
        venenklappe: { label: 'Venenklappe', x: 382, y: 150, tx: 346, ty: 112, a: 'end' }
      }
    },
    zellatmung: {
      viewBox: '0 0 360 352', titel: 'Atmung, Verdauung und Zellatmung',
      strukturen: {
        'stoff-a': { label: 'Sauerstoff', x: 70, y: 92, buchst: 'A' },
        'stoff-b': { label: 'Glucose', x: 290, y: 92, buchst: 'B' },
        'stoff-c': { label: 'Kohlenstoffdioxid', x: 86, y: 336, buchst: 'C' },
        'stoff-d': { label: 'Wasser', x: 180, y: 336, buchst: 'D' },
        energie: { label: 'Energie', x: 276, y: 336 }
      }
    },
    enzym: {
      viewBox: '0 0 380 200', titel: 'Schlüssel-Schloss-Prinzip in drei Phasen',
      strukturen: {
        substrat: { label: 'Substrat', x: 18, y: 22, tx: 52, ty: 40, a: 'start' },
        'aktives-zentrum': { label: 'aktives Zentrum', x: 108, y: 70, tx: 64, ty: 102, a: 'end' },
        enzym: { label: 'Enzym', x: 18, y: 160, tx: 40, ty: 130, a: 'start' },
        komplex: { label: 'Enzym-Substrat-Komplex', x: 190, y: 22, tx: 190, ty: 92, a: 'middle' },
        produkte: { label: 'Produkte', x: 362, y: 22, tx: 330, ty: 48, a: 'end' }
      }
    },
    pulskurve: { viewBox: '0 0 360 230', titel: 'Puls vor, während und nach einem Lauf', strukturen: {} }
  };

  /* ---------- Grundzeichnungen (Markup) ---------- */

  function pfeilDefs(id) {
    return '<defs>' +
      '<marker id="' + id + '-p" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="abb-pfeilspitze"/></marker>' +
      '<marker id="' + id + '-pr" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--rot)"/></marker>' +
      '<marker id="' + id + '-pb" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--blau)"/></marker>' +
      '</defs>';
  }

  var BASIS = {
    atemwege: function () {
      return '' +
        // Kopf im Profil
        '<path class="abb-koerper" d="M150 14 C205 2 262 30 262 84 C262 118 246 140 226 146 L222 176 L190 176 L188 150 C170 152 150 146 140 132 C128 128 122 120 128 112 C118 110 116 100 124 94 C112 88 110 74 124 70 L118 60 C130 30 136 20 150 14 Z"/>' +
        '<ellipse class="abb-hoehle" cx="162" cy="60" rx="34" ry="12"/>' +
        '<ellipse class="abb-hoehle" cx="168" cy="103" rx="28" ry="10"/>' +
        '<path class="abb-weg" d="M194 62 C214 66 214 90 210 110 L208 150"/>' +
        '<path class="abb-weg" d="M194 104 C202 104 208 106 210 112"/>' +
        // Rumpf
        '<path class="abb-rumpf" d="M86 196 C110 180 300 180 324 196 L332 360 L78 360 Z"/>' +
        // Lungenflügel
        '<path class="abb-lunge" d="M190 222 C160 214 116 232 104 276 C94 312 100 338 112 344 C140 340 170 336 192 330 Z"/>' +
        '<path class="abb-lunge" d="M222 222 C252 214 296 232 308 276 C318 312 312 338 300 344 C272 340 242 336 220 330 Z"/>' +
        // Kehlkopf, Luftröhre mit Knorpelringen
        '<rect class="abb-kehlkopf" x="197" y="150" width="22" height="20" rx="6"/>' +
        '<rect class="abb-luftroehre" x="201" y="170" width="14" height="66" rx="3"/>' +
        [178, 188, 198, 208, 218, 228].map(function (y) { return '<line class="abb-ring" x1="201" y1="' + y + '" x2="215" y2="' + y + '"/>'; }).join('') +
        // Bronchien
        '<path class="abb-bronchus" d="M208 236 L176 262 L150 270 M176 262 L162 290 M208 236 L240 262 L266 270 M240 262 L254 290 M150 270 L130 284 M266 270 L286 284"/>' +
        // Zwerchfell
        '<path class="abb-zwerchfell" d="M80 354 Q206 296 330 354"/>';
    },

    alveole: function (o, id) {
      var pf = o.pfeile || 'ab';
      var tA = pf === 'gase' ? 'O<tspan baseline-shift="sub" font-size="10">2</tspan>' : 'A';
      var tB = pf === 'gase' ? 'CO<tspan baseline-shift="sub" font-size="10">2</tspan>' : 'B';
      return '' +
        '<path class="abb-weg" d="M180 0 L180 34"/>' +
        '<path class="abb-alveole" d="M168 30 C120 26 92 64 96 106 C100 150 140 172 180 172 C220 172 262 150 264 106 C266 64 238 26 192 30 Z"/>' +
        '<path class="abb-kapillare-blau" d="M10 252 C40 250 66 230 86 196 C104 168 120 178 150 186 L180 188"/>' +
        '<path class="abb-kapillare-rot" d="M180 188 L210 186 C240 178 256 168 274 196 C294 230 320 250 350 252"/>' +
        '<line class="abb-gaspfeil" x1="150" y1="122" x2="150" y2="178" marker-end="url(#' + id + '-p)"/>' +
        '<line class="abb-gaspfeil" x1="212" y1="180" x2="212" y2="124" marker-end="url(#' + id + '-p)"/>' +
        '<circle class="abb-buchst" cx="126" cy="150" r="13"/><text class="abb-buchst-t" x="126" y="155" text-anchor="middle">' + tA + '</text>' +
        '<circle class="abb-buchst" cx="236" cy="150" r="13"/><text class="abb-buchst-t" x="236" y="155" text-anchor="middle">' + tB + '</text>' +
        '<text class="abb-klein" x="10" y="284">Blut hinein</text>' +
        '<text class="abb-klein" x="350" y="284" text-anchor="end">Blut hinaus</text>';
    },

    kreislauf: function (o, id) {
      return '' +
        '<rect class="abb-box" x="110" y="14" width="140" height="44" rx="10"/><text class="abb-text" x="180" y="41" text-anchor="middle">Lunge</text>' +
        '<rect class="abb-box" x="110" y="366" width="140" height="44" rx="10"/><text class="abb-text" x="180" y="393" text-anchor="middle">Körperorgane</text>' +
        // Gefäße (blau = sauerstoffarm, rot = sauerstoffreich)
        '<path class="abb-ader-blau" d="M110 388 L40 388 L40 184 L104 184" marker-end="url(#' + id + '-pb)"/>' +
        '<path class="abb-ader-luecke" d="M110 244 L72 244 L72 36 L104 36"/>' +
        '<path class="abb-ader-blau" d="M110 244 L72 244 L72 36 L104 36" marker-end="url(#' + id + '-pb)"/>' +
        '<path class="abb-ader-rot" d="M250 36 L290 36 L290 184 L256 184" marker-end="url(#' + id + '-pr)"/>' +
        '<path class="abb-ader-rot" d="M250 244 L322 244 L322 388 L256 388" marker-end="url(#' + id + '-pr)"/>' +
        // Herz
        '<rect class="abb-herz" x="100" y="150" width="160" height="128" rx="22"/>' +
        '<rect class="abb-kammer-blau" x="110" y="160" width="60" height="46" rx="10"/>' +
        '<rect class="abb-kammer-blau" x="110" y="216" width="60" height="54" rx="10"/>' +
        '<rect class="abb-kammer-rot" x="190" y="160" width="60" height="46" rx="10"/>' +
        '<rect class="abb-kammer-rot" x="190" y="216" width="60" height="54" rx="10"/>' +
        '<line class="abb-innenpfeil" x1="140" y1="203" x2="140" y2="222" marker-end="url(#' + id + '-pb)"/>' +
        '<line class="abb-innenpfeil-r" x1="220" y1="203" x2="220" y2="222" marker-end="url(#' + id + '-pr)"/>' +
        '<text class="abb-klein" x="180" y="432" text-anchor="middle">Blau: sauerstoffarm · Rot: sauerstoffreich</text>';
    },

    gefaesse: function () {
      return '' +
        '<circle class="abb-arterie-wand" cx="62" cy="84" r="44"/><circle class="abb-lumen-rot" cx="62" cy="84" r="20"/>' +
        '<circle class="abb-vene-wand" cx="168" cy="84" r="44"/><path class="abb-lumen-blau" d="M168 46 C196 46 206 66 204 86 C202 110 190 120 168 120 C142 120 130 108 132 84 C134 60 144 46 168 46 Z"/>' +
        '<circle class="abb-kap-wand" cx="252" cy="84" r="11"/><circle class="abb-lumen-rot" cx="252" cy="84" r="7"/>' +
        '<text class="abb-klein" x="252" y="148" text-anchor="middle">(vergrößert)</text>' +
        // Vene längs mit Klappe, Blut fließt nach oben zum Herzen
        '<rect class="abb-vene-laengs" x="310" y="14" width="40" height="168" rx="6"/>' +
        '<path class="abb-klappe" d="M312 128 L330 100 M348 128 L330 100"/>' +
        '<path class="abb-klappe" d="M312 70 L330 42 M348 70 L330 42"/>' +
        '<text class="abb-klein" x="330" y="200" text-anchor="middle">↑ zum Herzen</text>';
    },

    zellatmung: function (o, id) {
      return '' +
        '<rect class="abb-box" x="20" y="20" width="100" height="40" rx="10"/><text class="abb-text" x="70" y="45" text-anchor="middle">Atmung</text>' +
        '<rect class="abb-box abb-box--warm" x="240" y="20" width="100" height="40" rx="10"/><text class="abb-text" x="290" y="45" text-anchor="middle">Verdauung</text>' +
        '<rect class="abb-box abb-box--rot" x="140" y="112" width="80" height="40" rx="10"/><text class="abb-text" x="180" y="137" text-anchor="middle">Blut</text>' +
        '<rect class="abb-box" x="116" y="196" width="128" height="48" rx="10"/><text class="abb-text" x="180" y="225" text-anchor="middle">Körperzelle</text>' +
        '<path class="abb-fluss" d="M70 60 L70 132 L134 132" marker-end="url(#' + id + '-p)"/>' +
        '<path class="abb-fluss" d="M290 60 L290 132 L226 132" marker-end="url(#' + id + '-p)"/>' +
        '<path class="abb-fluss" d="M180 152 L180 190" marker-end="url(#' + id + '-p)"/>' +
        '<path class="abb-fluss" d="M140 244 L96 314" marker-end="url(#' + id + '-p)"/>' +
        '<path class="abb-fluss" d="M180 244 L180 316" marker-end="url(#' + id + '-p)"/>' +
        '<path class="abb-fluss" d="M220 244 L266 314" marker-end="url(#' + id + '-p)"/>';
    },

    enzym: function (o) {
      var den = !!o.denaturiert;
      function enzym(x) {
        // Enzym mit Einbuchtung (aktives Zentrum) oben
        if (den) return '<path class="abb-enzym" d="M' + (x - 44) + ' 112 C' + (x - 44) + ' 96 ' + (x - 30) + ' 92 ' + (x - 20) + ' 96 C' + (x - 6) + ' 112 ' + (x + 8) + ' 88 ' + (x + 20) + ' 98 C' + (x + 34) + ' 92 ' + (x + 44) + ' 100 ' + (x + 44) + ' 116 L' + (x + 44) + ' 150 C' + (x + 44) + ' 160 ' + (x + 36) + ' 166 ' + (x + 26) + ' 166 L' + (x - 26) + ' 166 C' + (x - 36) + ' 166 ' + (x - 44) + ' 160 ' + (x - 44) + ' 150 Z"/>';
        return '<path class="abb-enzym" d="M' + (x - 44) + ' 110 C' + (x - 44) + ' 100 ' + (x - 38) + ' 94 ' + (x - 28) + ' 94 L' + (x - 14) + ' 94 L' + (x - 14) + ' 112 L' + (x + 14) + ' 112 L' + (x + 14) + ' 94 L' + (x + 28) + ' 94 C' + (x + 38) + ' 94 ' + (x + 44) + ' 100 ' + (x + 44) + ' 110 L' + (x + 44) + ' 150 C' + (x + 44) + ' 160 ' + (x + 36) + ' 166 ' + (x + 26) + ' 166 L' + (x - 26) + ' 166 C' + (x - 36) + ' 166 ' + (x - 44) + ' 160 ' + (x - 44) + ' 150 Z"/>';
      }
      function substrat(x, y) {
        return '<rect class="abb-substrat" x="' + (x - 13) + '" y="' + y + '" width="13" height="26" rx="3"/><rect class="abb-substrat" x="' + x + '" y="' + y + '" width="13" height="26" rx="3"/>';
      }
      return '' +
        enzym(60) + substrat(60, 30) +
        '<text class="abb-klein" x="60" y="190" text-anchor="middle">Phase 1</text>' +
        '<text class="abb-pfeil-text" x="120" y="132" text-anchor="middle">→</text>' +
        enzym(190) + (den ? substrat(190, 56) : substrat(190, 88)) +
        '<text class="abb-klein" x="190" y="190" text-anchor="middle">Phase 2</text>' +
        '<text class="abb-pfeil-text" x="254" y="132" text-anchor="middle">→</text>' +
        enzym(318) +
        (den ? '' : '<rect class="abb-substrat" x="296" y="34" width="13" height="26" rx="3" transform="rotate(-18 302 47)"/><rect class="abb-substrat" x="328" y="34" width="13" height="26" rx="3" transform="rotate(18 334 47)"/>') +
        '<text class="abb-klein" x="318" y="190" text-anchor="middle">Phase 3</text>';
    },

    pulskurve: function () {
      // x: 0–20 min → 50–340, y: 50–190 Schläge/min → 200–20
      function px(t) { return 50 + t * 14.5; }
      function py(p) { return 200 - (p - 50) * (180 / 140); }
      var pts = [[0, 74], [2, 76], [4, 75], [5, 112], [6, 138], [7, 152], [8, 160], [9, 164], [10, 166], [11, 138], [12, 118], [13, 104], [14, 95], [16, 86], [18, 81], [20, 78]];
      var d = pts.map(function (p, i) { return (i ? 'L' : 'M') + px(p[0]).toFixed(1) + ' ' + py(p[1]).toFixed(1); }).join(' ');
      var grid = [60, 100, 140, 180].map(function (p) { return '<line class="abb-gitter" x1="50" y1="' + py(p) + '" x2="340" y2="' + py(p) + '"/><text class="abb-klein" x="44" y="' + (py(p) + 4) + '" text-anchor="end">' + p + '</text>'; }).join('');
      var xt = [0, 5, 10, 15, 20].map(function (t) { return '<text class="abb-klein" x="' + px(t) + '" y="216" text-anchor="middle">' + t + '</text>'; }).join('');
      return '' +
        '<rect class="abb-band" x="' + px(4) + '" y="20" width="' + (px(10) - px(4)) + '" height="180"/>' +
        grid + xt +
        '<line class="abb-achse" x1="50" y1="200" x2="340" y2="200"/><line class="abb-achse" x1="50" y1="20" x2="50" y2="200"/>' +
        '<text class="abb-klein" x="' + px(2) + '" y="34" text-anchor="middle">Ruhe</text>' +
        '<text class="abb-klein" x="' + px(7) + '" y="34" text-anchor="middle">Lauf</text>' +
        '<text class="abb-klein" x="' + px(15) + '" y="34" text-anchor="middle">Erholung</text>' +
        '<path class="abb-kurve" d="' + d + '"/>' +
        '<text class="abb-klein" x="345" y="228" text-anchor="end">Zeit in min</text>' +
        '<text class="abb-klein" x="6" y="14">Puls pro min</text>';
    }
  };

  var zaehler = 0;

  function marken(name, o) {
    var str = L[name].strukturen;
    var out = '';
    var nummern = o.nummern || {};
    var ids = o.beschriftet ? Object.keys(str).filter(function (id) { return !o.nur || o.nur.indexOf(id) >= 0; }) : Object.keys(nummern);
    ids.forEach(function (id) {
      var m = str[id];
      if (!m) return;
      var hv = o.hervorheben && o.hervorheben.indexOf(id) >= 0 ? ' abb-marke--hv' : '';
      if (m.tx != null) out += '<line class="abb-leiter' + hv + '" x1="' + m.x + '" y1="' + m.y + '" x2="' + m.tx + '" y2="' + m.ty + '"/><circle class="abb-ziel" cx="' + m.tx + '" cy="' + m.ty + '" r="2.5"/>';
      if (o.beschriftet) {
        var a = m.a || 'middle';
        var zeilen = (m.kurz || m.label).split('|');
        var y0 = m.y + 4 - (zeilen.length - 1) * 7;
        out += '<text class="abb-label' + (zeilen.length > 1 ? ' abb-label--kurz' : '') + hv + '" x="' + m.x + '" y="' + y0 + '" text-anchor="' + a + '">' +
          zeilen.map(function (z, i) { return '<tspan x="' + m.x + '" dy="' + (i ? 14 : 0) + '">' + W.esc(z) + '</tspan>'; }).join('') + '</text>';
      } else {
        out += '<g class="abb-nr' + hv + '"><circle cx="' + m.x + '" cy="' + m.y + '" r="12"/><text x="' + m.x + '" y="' + (m.y + 5) + '" text-anchor="middle">' + nummern[id] + '</text></g>';
      }
    });
    // Buchstaben (Stoff A–D) zeigen, wenn keine Nummer bzw. Beschriftung darauf liegt
    if (name === 'zellatmung' && o.buchstaben !== false) {
      Object.keys(str).forEach(function (id) {
        var m = str[id];
        if (ids.indexOf(id) >= 0) return;
        out += m.buchst ? '<g class="abb-stoff"><rect x="' + (m.x - 30) + '" y="' + (m.y - 12) + '" width="60" height="22" rx="6"/><text x="' + m.x + '" y="' + (m.y + 4) + '" text-anchor="middle">Stoff ' + m.buchst + '</text></g>'
          : '<text class="abb-label" x="' + m.x + '" y="' + (m.y + 4) + '" text-anchor="middle">' + m.label + '</text>';
      });
    }
    return out;
  }

  /** opts: { nummern: {id: nr}, beschriftet: bool, nur: id[], hervorheben: id[], pfeile: 'ab'|'gase', denaturiert: bool, buchstaben: bool } */
  function zeichne(name, opts) {
    var o = opts || {};
    var def = L[name];
    if (!def) throw new Error('Unbekannte Abbildung: ' + name);
    var id = 'abb' + (++zaehler);
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" class="abb-svg abb-svg--' + name + '" viewBox="' + def.viewBox + '" role="img" aria-label="' + W.esc(def.titel) + '">' +
      pfeilDefs(id) + BASIS[name](o, id) + marken(name, o) + '</svg>';
    return W.frag(svg);
  }

  W.abb = { liste: L, zeichne: zeichne };
})();
