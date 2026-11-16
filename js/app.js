/* Start, Router (Hash), Kopfzeile mit EKG-Linie und Namensschild, Navigation. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var h = function () { return W.h.apply(null, arguments); };

  var NAV = [['#/', 'Board', 'board'], ['#/wv', 'Wiedervorlage', 'wv'], ['#/pruefung', 'Prüfung', 'pruefung'], ['#/plan', 'Plan', 'plan']];

  function ekgSvg() {
    return W.frag('<svg class="ekg" viewBox="0 0 120 24" aria-hidden="true"><polyline class="ekg__basis" points="0,14 28,14 34,14 38,9 42,14 48,14 52,2 56,22 60,14 68,14 74,11 80,14 120,14"/><polyline class="ekg__linie" points="0,14 28,14 34,14 38,9 42,14 48,14 52,2 56,22 60,14 68,14 74,11 80,14 120,14"/></svg>');
  }

  function kopf() {
    var el = document.getElementById('kopf');
    if (!el) return;
    var d = W.state.data;
    var rang = W.logic.rang(d, W.ansichten.faelle());
    el.innerHTML = '';
    el.appendChild(h('a', { href: '#/', class: 'marke' }, ekgSvg(), h('span', { class: 'marke__text mono' }, 'NACHTSCHICHT')));
    el.appendChild(h('a', { href: '#/einstellungen', class: 'schild', 'aria-label': 'Namensschild und Einstellungen' },
      h('span', { class: 'schild__name' }, d.name || rang.titel),
      h('span', { class: 'schild__rang' }, d.name ? rang.titel : 'Namensschild')));
  }

  function nav(aktiv) {
    var el = document.getElementById('nav');
    if (!el) return;
    var wv = W.state.wvListe().length;
    el.innerHTML = '';
    NAV.forEach(function (n) {
      el.appendChild(h('a', { href: n[0], class: 'nav__punkt' + (aktiv === n[2] ? ' nav__punkt--an' : ''), 'aria-current': aktiv === n[2] ? 'page' : null },
        h('span', null, n[1]), n[2] === 'wv' && wv ? h('span', { class: 'nav__zahl mono' }, String(wv)) : null));
    });
  }

  function route() {
    var teile = (location.hash || '#/').replace(/^#\/?/, '').split('/').filter(Boolean);
    return { name: teile[0] || 'board', args: teile.slice(1) };
  }

  function zeige() {
    var r = route();
    var main = document.getElementById('inhalt');
    main.innerHTML = '';
    var aktiv = r.name === 'fall' ? 'board' : r.name;
    kopf();
    nav(aktiv);
    try {
      switch (r.name) {
        case 'fall': W.ansichten.fall(main, r.args[0], r.args[1]); break;
        case 'wv': W.ansichten.wiedervorlage(main); break;
        case 'plan': W.ansichten.plan(main); break;
        case 'einstellungen': W.ansichten.einstellungen(main); break;
        case 'pruefung':
          if (W.pruefungAnsicht) W.pruefungAnsicht(main, r.args); else main.appendChild(h('p', { class: 'seite' }, 'Die Prüfung kommt gleich.'));
          break;
        case 'triage':
          if (W.triageAnsicht) { W.triageAnsicht(main); break; }
          location.hash = '#/'; return;
        case 'kitteltasche':
          if (W.kittelAnsicht) { W.kittelAnsicht(main); break; }
          location.hash = '#/'; return;
        default: W.ansichten.board(main);
      }
    } catch (e) {
      main.appendChild(h('div', { class: 'seite' }, h('p', null, 'Hier ist etwas schiefgegangen. '), h('a', { href: '#/' }, 'Zurück zum Board')));
      if (window.console) console.error(e);
    }
    window.scrollTo(0, 0);
  }

  /** EKG schlägt einmal sichtbar aus (z. B. nach einem entlassenen Patienten). */
  W.ekg = {
    schlag: function () {
      var l = document.querySelector('.ekg');
      if (!l || W.reducedMotion()) return;
      l.classList.remove('ekg--schlag');
      void l.getBoundingClientRect();
      l.classList.add('ekg--schlag');
    }
  };

  W.app = { zeige: zeige, kopf: kopf };

  function start() {
    W.state.load();
    window.addEventListener('hashchange', zeige);
    W.state.on(function () { kopf(); nav(route().name === 'fall' ? 'board' : route().name); });
    zeige();
    if (!W.state.data.begruesst) W.ansichten.begruessung(zeige);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
