/* Ansichten: Board, Fall (Aufnahme, Verstehen, Üben, Erklären, Abschluss), Wiedervorlage, Plan, Einstellungen. */
(function () {
  'use strict';
  var W = (window.W = window.W || {});
  var h = function () { return W.h.apply(null, arguments); };

  var REIHENFOLGE = [0, 1, 2, 3, 4, 6, 5, 7, 8, 9];
  var STATUS_TEXT = { wartet: 'wartet', behandlung: 'in Behandlung', entlassen: 'entlassen' };
  var STATUS_ZEICHEN = { wartet: '○', behandlung: '●', entlassen: '✓' };
  var TABS = [['aufnahme', 'Aufnahme'], ['verstehen', 'Verstehen'], ['ueben', 'Üben'], ['erklaeren', 'Erklären'], ['abschluss', 'Abschluss']];
  var WOCHENTAG = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

  function faelle() { return (W.faelle || []).slice().sort(function (a, b) { return a.box - b.box; }); }
  function fallNachId(id) { return faelle().filter(function (f) { return f.id === id; })[0]; }
  function fallNachBox(n) { return faelle().filter(function (f) { return f.box === n; })[0]; }
  function status(f) { return W.logic.fallStatus(f, W.state.data); }

  function naechsterFall() {
    for (var i = 0; i < REIHENFOLGE.length; i++) {
      var f = fallNachBox(REIHENFOLGE[i]);
      if (f && status(f).status !== 'entlassen') return f;
    }
    return null;
  }

  /** Aufgabe zu einer ID finden: Fälle, Prüfung, Triage. */
  function itemNachId(id) {
    if (/^p\d/.test(id) && W.pruefung && W.pruefung.itemNachId) return W.pruefung.itemNachId(id);
    if (/^t-/.test(id) && W.triage && W.triage.itemNachId) return W.triage.itemNachId(id);
    var gefunden = null;
    faelle().forEach(function (f) {
      f.ueben.concat(f.abschluss).forEach(function (it) { if (it.id === id) gefunden = it; });
    });
    return gefunden;
  }
  function erklNachId(id) {
    var gefunden = null;
    faelle().forEach(function (f) { f.erklaeren.forEach(function (e) { if (e.id === id) gefunden = { erkl: e, fall: f }; }); });
    if (!gefunden && W.pruefung && W.pruefung.erklNachId) {
      var e = W.pruefung.erklNachId(id);
      if (e) gefunden = { erkl: e, fall: null };
    }
    return gefunden;
  }

  function pille(st) { return h('span', { class: 'pille pille--' + st }, STATUS_ZEICHEN[st] + ' ' + STATUS_TEXT[st]); }
  function link(href, text, cls) { return h('a', { href: href, class: cls || '' }, text); }
  function karte(cls) { var args = Array.prototype.slice.call(arguments, 1); return h.apply(null, ['section', { class: 'karte ' + (cls || '') }].concat(args)); }

  function datumText(iso) {
    var p = iso.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return WOCHENTAG[d.getDay()] + ', ' + (+p[2]) + '.' + (+p[1]) + '.';
  }

  function zielText(z) {
    if (z.indexOf('box:') === 0) {
      var f = fallNachBox(+z.slice(4));
      return f ? { text: 'Box ' + f.box + ': ' + f.titel, href: '#/fall/' + f.id, st: status(f).status } : null;
    }
    return {
      pruefung: { text: 'Facharztprüfung', href: '#/pruefung' },
      wv: { text: 'Wiedervorlage abarbeiten', href: '#/wv' },
      kitteltasche: { text: 'Kitteltasche lesen', href: '#/kitteltasche' },
      triage: { text: 'Triage: 60 Sekunden', href: '#/triage' }
    }[z] || null;
  }

  /* ---------- Oberärztin ---------- */
  function spruch() {
    var d = W.state.data;
    var alle = faelle();
    var entl = alle.filter(function (f) { return status(f).status === 'entlassen'; }).length;
    var wv = W.state.wvListe().length;
    var plan = W.logic.planFuer(W.logic.heuteISO());
    if (!plan) return 'Die Arbeit ist geschrieben. Die Fälle bleiben offen, falls du etwas nachschlagen willst.';
    if (plan.tage === 0) return 'Heute ist die Arbeit. Kitteltasche lesen, ruhig bleiben, sauber schreiben.';
    if (plan.tage === 1 && entl < alle.length) return 'Morgen ist die Arbeit. Heute Box 5 bis 9, danach eine Facharztprüfung.';
    if (!entl && !Object.keys(d.items).length) return 'Zehn Boxen, eine Arbeit am Donnerstag. Fang bei Box 0 an, die ist kurz.';
    if (wv >= 8) return wv + ' Fälle in der Wiedervorlage. Die arbeiten wir ab, bevor neue reinkommen.';
    if (entl === alle.length) return 'Alle Patienten entlassen. Jetzt die Facharztprüfung unter Zeitdruck.';
    if (entl >= 6) return 'Gute Schicht bisher. Bleib dran, die letzten Boxen sind die mit den Punkten.';
    return 'Weiter. Nächster Patient wartet.';
  }

  /* ---------- Board ---------- */
  function board(host) {
    var alle = faelle();
    var plan = W.logic.planFuer(W.logic.heuteISO());
    var rang = W.logic.rang(W.state.data, alle);
    var next = naechsterFall();
    var wv = wvAnzahl();
    var best = W.state.data.pruefung.best || {};

    var laufend = W.state.pruefungLaufend();
    var pruefHinweis = laufend && !laufend.abgegeben ? h('a', { href: '#/pruefung', class: 'karte pruef-hinweis' }, h('strong', null, 'Prüfung läuft'), ' · weiter zur Facharztprüfung →') : null;
    var countdown = plan ? karte('countdown',
      h('div', { class: 'countdown__zahl mono' }, plan.tage === 0 ? 'HEUTE' : 'T−' + plan.tage),
      h('div', null,
        h('p', { class: 'countdown__titel' }, plan.tage === 0 ? 'Heute ist die Bioarbeit.' : 'Bioarbeit am ' + datumText(W.logic.ARBEIT) + (plan.tage === 1 ? ' Morgen.' : '')),
        h('p', { class: 'hinweis-klein' }, 'Heute dran: ', plan.heute.map(zielText).filter(Boolean).map(function (t, i) {
          return [i ? ', ' : '', link(t.href, t.text.replace(/^Box (\d+):.*/, 'Box $1'))];
        }), ' · ', link('#/plan', 'Plan')))) : null;

    var stufen = rang.entlassen + ' von ' + alle.length + ' Patienten entlassen';
    host.appendChild(h('div', { class: 'seite' },
      h('p', { class: 'funk' }, h('span', { class: 'funk__wer' }, 'Dr. Brandt, Oberärztin'), spruch()),
      pruefHinweis,
      countdown,
      karte('rang', h('div', { class: 'rang__kopf' }, h('span', { class: 'rang__titel' }, rang.titel), h('span', { class: 'mono hinweis-klein' }, stufen)),
        h('div', { class: 'balken' }, h('span', { style: { width: Math.round(100 * rang.entlassen / Math.max(1, alle.length)) + '%' } })),
        rang.naechster ? h('p', { class: 'hinweis-klein' }, 'Nächster Rang: ' + rang.naechster) : null),
      h('h2', { class: 'zwischen' }, 'Patientenboard'),
      h('ol', { class: 'board' }, alle.map(function (f) {
        var st = status(f);
        var istNext = next && next.id === f.id;
        return h('li', null, h('a', { href: '#/fall/' + f.id, class: 'box box--' + st.status + (istNext ? ' box--next' : '') },
          h('span', { class: 'box__nr mono' }, String(f.box)),
          h('span', { class: 'box__mitte' },
            h('span', { class: 'box__patient' }, f.patient),
            h('span', { class: 'box__symptom' }, f.symptom),
            h('span', { class: 'box__thema' }, f.titel + (istNext ? ' · als Nächstes' : ''))),
          pille(st.status)));
      })),
      h('div', { class: 'kacheln' },
        h('a', { href: '#/wv', class: 'kachel' + (wv ? ' kachel--amber' : '') }, h('span', { class: 'kachel__zahl mono' }, String(wv)), h('span', null, 'Wiedervorlage')),
        h('a', { href: '#/pruefung', class: 'kachel' }, h('span', { class: 'kachel__zahl mono' }, best['1'] || best['2'] ? Math.round(100 * Math.max(best['1'] || 0, best['2'] || 0)) + ' %' : '—'), h('span', null, 'Facharztprüfung')),
        W.triage ? h('a', { href: '#/triage', class: 'kachel' }, h('span', { class: 'kachel__zahl mono' }, String(W.state.data.triage.best || 0)), h('span', null, 'Triage-Bestwert')) : null,
        W.kitteltasche ? h('a', { href: '#/kitteltasche', class: 'kachel' }, h('span', { class: 'kachel__zahl mono' }, 'A4'), h('span', null, 'Kitteltasche')) : null)));
  }

  /* ---------- Fall ---------- */
  function monitor(werte) {
    var w = werte || {};
    var feld = function (k, label, einheit, cls) {
      return w[k] != null ? h('div', { class: 'vital ' + cls }, h('span', { class: 'vital__label' }, label), h('span', { class: 'vital__wert mono' }, String(w[k])), h('span', { class: 'vital__einheit' }, einheit)) : null;
    };
    var f = [feld('puls', 'HF', '/min', 'vital--gruen'), feld('af', 'AF', '/min', 'vital--gelb'), feld('spo2', 'SpO₂', '%', 'vital--blau')].filter(Boolean);
    return f.length ? h('div', { class: 'monitor' }, f) : null;
  }

  function fehltListe(st, f) {
    if (st.status === 'entlassen') return h('p', { class: 'ok-text' }, '✓ Patient entlassen.');
    function ziel(t) { return /Übung/.test(t) ? 'ueben' : /Erklärung/.test(t) ? 'erklaeren' : 'abschluss'; }
    return h('div', { class: 'fehlt' }, h('p', { class: 'fehlt__titel' }, 'Bis zur Entlassung fehlt:'),
      h('ul', null, st.fehlt.map(function (t) { return h('li', null, h('a', { href: '#/fall/' + f.id + '/' + ziel(t) }, t)); })));
  }

  function fall(host, id, tab) {
    var f = fallNachId(id);
    if (!f) { host.appendChild(h('p', { class: 'seite' }, 'Diesen Fall gibt es nicht. ', link('#/', 'Zum Board'))); return; }
    tab = tab || 'aufnahme';
    var st = status(f);
    var inhalt = h('div', { class: 'fall__inhalt' });
    host.appendChild(h('div', { class: 'seite fall' },
      h('div', { class: 'fall__kopf' },
        link('#/', '← Board', 'zurueck'),
        h('div', { class: 'fall__titelzeile' }, h('span', { class: 'mono box__nr box__nr--klein' }, String(f.box)), h('h1', null, f.patient), pille(st.status)),
        h('p', { class: 'fall__thema' }, f.titel)),
      h('nav', { class: 'tabs', 'aria-label': 'Abschnitte' }, TABS.map(function (t) {
        return h('a', { href: '#/fall/' + f.id + '/' + t[0], class: 'reiter' + (t[0] === tab ? ' reiter--an' : ''), 'aria-current': t[0] === tab ? 'page' : null }, t[1]);
      })),
      inhalt));
    ({ aufnahme: aufnahme, verstehen: verstehen, ueben: ueben, erklaeren: erklaerenTab, abschluss: abschluss }[tab] || aufnahme)(inhalt, f, st);
  }

  function aufnahme(host, f, st) {
    var a = f.aufnahme;
    host.appendChild(h('div', null,
      karte('aufnahme', h('p', { class: 'aufnahme__kopf mono' }, 'BOX ' + f.box + ' · ' + f.symptom.toUpperCase()), monitor(a.werte), h('div', { html: a.text })),
      h('p', { class: 'funk' }, h('span', { class: 'funk__wer' }, 'Dr. Brandt'), a.oberaerztin),
      karte('leitfrage', h('p', { class: 'leitfrage__titel' }, 'Leitfrage'), h('p', null, a.leitfrage)),
      fehltListe(st, f),
      h('div', { class: 'aktionen' }, link('#/fall/' + f.id + '/verstehen', 'Fall übernehmen', 'btn btn--haupt'))));
  }

  function verstehen(host, f) {
    var gesehen = W.state.data.karten[f.id];
    var i = gesehen == null || gesehen >= f.karten.length - 1 ? 0 : gesehen;
    function zeigen() {
      host.innerHTML = '';
      var k = f.karten[i];
      W.state.karteGesehen(f.id, i);
      var demo = k.demo && W.demos && W.demos[k.demo] ? h('div', { class: 'demo' }) : null;
      host.appendChild(h('article', { class: 'wissen' },
        h('div', { class: 'wissen__kopf' }, h('span', { class: 'mono hinweis-klein' }, 'Karte ' + (i + 1) + ' / ' + f.karten.length), k.plus ? h('span', { class: 'tag tag--plus' }, 'Plus') : null),
        h('h2', null, k.titel),
        k.abb ? h('figure', { class: 'abb' }, W.abb.zeichne(k.abb, k.abbOpts || { beschriftet: true })) : null,
        h('div', { class: 'wissen__text', html: k.text }),
        demo,
        k.merk ? h('div', { class: 'merk' }, h('strong', null, 'Merke'), h('p', null, k.merk)) : null,
        k.achtung ? h('div', { class: 'achtung', html: k.achtung }) : null,
        h('div', { class: 'aktionen aktionen--zwei' },
          h('button', { type: 'button', class: 'btn', disabled: i === 0, onclick: function () { i--; zeigen(); } }, '← Zurück'),
          i < f.karten.length - 1 ? h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { i++; zeigen(); window.scrollTo(0, 0); } }, 'Weiter →')
            : link('#/fall/' + f.id + '/ueben', 'Zu den Übungen', 'btn btn--haupt'))));
      if (demo) { try { W.demos[k.demo](demo); } catch (e) { demo.remove(); } }
    }
    zeigen();
  }

  function ueben(host, f, st) {
    var d = W.state.data.items;
    var pflicht = f.ueben.filter(function (u) { return !u.plus; });
    var offen = pflicht.filter(function (u) { return !(d[u.id] && d[u.id].ok); });
    var plus = f.ueben.length - pflicht.length;
    function los(items, titel) {
      host.innerHTML = '';
      var spielHost = h('div');
      host.appendChild(spielHost);
      W.aufgaben.spiele(spielHost, items, { titel: titel, onFertig: function () { W.app.zeige(); } });
    }
    host.appendChild(h('div', null,
      karte('',
        h('p', null, h('span', { class: 'mono' }, Math.round(st.quote * 100) + ' %'), ' der Pflichtaufgaben sind gelöst. Für die Entlassung brauchst du 80 %.'),
        h('div', { class: 'balken' }, h('span', { style: { width: Math.round(st.quote * 100) + '%' } })),
        h('p', { class: 'hinweis-klein' }, f.ueben.length + ' Aufgaben, davon ' + plus + ' Plus (freiwillig, kommen in der Arbeit nicht vor).')),
      h('div', { class: 'aktionen aktionen--stapel' },
        offen.length ? h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { los(offen, 'Offene Aufgaben'); } }, 'Offene üben (' + offen.length + ')') : null,
        h('button', { type: 'button', class: 'btn' + (offen.length ? '' : ' btn--haupt'), onclick: function () { los(pflicht, 'Pflicht'); } }, 'Alle Pflichtaufgaben (' + pflicht.length + ')'),
        plus ? h('button', { type: 'button', class: 'btn', onclick: function () { los(f.ueben.filter(function (u) { return u.plus; }), 'Plus'); } }, 'Nur Plus (' + plus + ')') : null,
        link('#/fall/' + f.id + '/erklaeren', 'Weiter: Erklären →', 'btn'))));
  }

  function erklaerenTab(host, f) {
    var d = W.state.data.erkl;
    function liste() {
      host.innerHTML = '';
      host.appendChild(h('div', null,
        h('p', { class: 'hinweis-klein' }, 'Erklär-Aufgaben bringen in der Arbeit die meisten Punkte. Für die Entlassung braucht jede Pflicht-Erklärung mindestens 60 %.'),
        h('ol', { class: 'erkl-liste' }, f.erklaeren.map(function (e, i) {
          var r = d[e.id];
          var p = r ? Math.round(100 * r.best) : null;
          return h('li', null, h('button', { type: 'button', class: 'erkl-zeile', onclick: function () { oeffnen(e); } },
            h('span', { class: 'mono erkl-zeile__nr' }, String(i + 1)),
            h('span', { class: 'erkl-zeile__frage', html: e.frage }),
            e.plus ? h('span', { class: 'tag tag--plus' }, 'Plus') : null,
            h('span', { class: 'mono erkl-zeile__p ' + (p == null ? '' : p >= 60 ? 'gut' : 'schwach') }, p == null ? 'offen' : p + ' %')));
        })),
        h('div', { class: 'aktionen' }, link('#/fall/' + f.id + '/abschluss', 'Weiter: Fallabschluss →', 'btn'))));
    }
    function oeffnen(e) {
      host.innerHTML = '';
      var e2 = h('div');
      host.appendChild(e2);
      W.erklaeren.render(e2, e, { onFertig: function () { W.app.zeige(); } });
    }
    liste();
  }

  function abschluss(host, f, st) {
    function epikrise() {
      var neu = status(f);
      return h('div', null,
        karte('epikrise', h('p', { class: 'aufnahme__kopf mono' }, 'EPIKRISE · BOX ' + f.box), h('div', { html: f.epikrise })),
        fehltListe(neu, f),
        h('div', { class: 'aktionen' }, link('#/', 'Zurück zum Board', 'btn btn--haupt')));
    }
    if (st.abschluss) {
      host.appendChild(h('div', null, epikrise(),
        h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn', onclick: start }, 'Abschlussfragen wiederholen'))));
      return;
    }
    function start() {
      host.innerHTML = '';
      var sp = h('div');
      host.appendChild(sp);
      W.aufgaben.spiele(sp, f.abschluss, {
        titel: 'Fallabschluss', mischen: false, nochmal: false, fertigText: 'Weiter',
        onFertig: function (erg) {
          host.innerHTML = '';
          if (erg.richtig === erg.gesamt) {
            W.state.abschlussSetzen(f.id);
            if (W.ekg) W.ekg.schlag();
            host.appendChild(epikrise());
          } else {
            host.appendChild(h('div', null,
              karte('', h('p', null, 'Noch nicht alles richtig. Für den Fallabschluss müssen alle Fragen sitzen. Die Antworten werden neu gemischt.')),
              h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: start }, 'Nochmal'))));
          }
        }
      });
    }
    host.appendChild(h('div', null,
      karte('', h('p', null, f.abschluss.length + ' Transferfragen zum Patienten. Alle richtig: Fallabschluss mit Epikrise.')),
      h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: start }, 'Fall abschließen'))));
  }

  /* ---------- Wiedervorlage ---------- */
  function aufloesbar(id) { return id.indexOf('e:') === 0 ? !!erklNachId(id.slice(2)) : !!itemNachId(id); }
  /** Einträge entfernen, deren Aufgabe es nicht mehr gibt (z. B. nach einer Inhaltsänderung). */
  function aufraeumen() { W.state.wvListe().forEach(function (id) { if (!aufloesbar(id)) W.state.wvEntfernen(id); }); }
  function wvAnzahl() { return W.state.wvListe().filter(aufloesbar).length; }

  function wiedervorlage(host) {
    aufraeumen();
    var ids = W.state.wvListe();
    var items = ids.filter(function (id) { return id.indexOf('e:') !== 0; }).map(itemNachId).filter(Boolean);
    var erkl = ids.filter(function (id) { return id.indexOf('e:') === 0; }).map(function (id) { return erklNachId(id.slice(2)); }).filter(Boolean);
    var seite = h('div', { class: 'seite' });
    host.appendChild(seite);
    seite.appendChild(h('h1', null, 'Wiedervorlage'));
    if (!items.length && !erkl.length) {
      seite.appendChild(karte('', h('p', null, 'Keine Wiedervorlagen. Falsch beantwortete Aufgaben landen hier und bleiben, bis sie zweimal hintereinander sitzen.')));
      return;
    }
    var spiel = h('div');
    seite.appendChild(h('div', null,
      items.length ? karte('', h('p', null, items.length + (items.length === 1 ? ' Aufgabe' : ' Aufgaben') + ' kommen zurück. Erledigt ist eine Aufgabe nach zwei richtigen Antworten hintereinander.'),
        h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () {
          seite.innerHTML = '';
          seite.appendChild(spiel);
          W.aufgaben.spiele(spiel, items, { titel: 'Wiedervorlage', nochmal: false, onFertig: function () { W.app.zeige(); } });
        } }, 'Abarbeiten'))) : null,
      erkl.length ? h('div', null, h('h2', { class: 'zwischen' }, 'Erklärungen'),
        h('ol', { class: 'erkl-liste' }, erkl.map(function (x) {
          return h('li', null, h('button', { type: 'button', class: 'erkl-zeile', onclick: function () {
            seite.innerHTML = '';
            var e2 = h('div');
            seite.appendChild(e2);
            W.erklaeren.render(e2, x.erkl, { onFertig: function () { W.app.zeige(); } });
          } }, h('span', { class: 'erkl-zeile__frage', html: x.erkl.frage }), h('span', { class: 'mono erkl-zeile__p schwach' }, Math.round(100 * ((W.state.data.erkl[x.erkl.id] || {}).prozent || 0)) + ' %')));
        })),
        h('p', { class: 'hinweis-klein' }, 'Erledigt, sobald du sie einmal mit mindestens 80 % neu bearbeitet hast.')) : null));
  }

  /* ---------- Plan ---------- */
  function planAnsicht(host) {
    var heute = W.logic.heuteISO();
    var plan = W.logic.planFuer(heute);
    var seite = h('div', { class: 'seite' }, h('h1', null, 'Plan bis zur Arbeit'));
    host.appendChild(seite);
    if (!plan) { seite.appendChild(karte('', h('p', null, 'Die Arbeit ist geschrieben. Die Fälle bleiben zum Wiederholen offen.'))); return; }
    seite.appendChild(h('p', { class: 'hinweis-klein' }, 'Bioarbeit am ' + datumText(W.logic.ARBEIT) + ' · ' + (plan.tage === 0 ? 'heute' : 'noch ' + plan.tage + (plan.tage === 1 ? ' Tag' : ' Tage'))));
    plan.liste.forEach(function (tag) {
      var aktiv = tag.ziele.join() === plan.heute.join();
      seite.appendChild(karte('plan-tag' + (aktiv ? ' plan-tag--heute' : ''),
        h('p', { class: 'plan-tag__kopf' }, h('span', { class: 'mono' }, tag.tag), aktiv ? h('span', { class: 'tag tag--vital' }, 'heute') : null),
        h('p', null, tag.text),
        h('ul', { class: 'plan-ziele' }, tag.ziele.map(function (z) {
          var t = zielText(z);
          if (!t) return null;
          return h('li', null, h('a', { href: t.href }, t.st ? STATUS_ZEICHEN[t.st] + ' ' : '', t.text));
        }))));
    });
  }

  /* ---------- Einstellungen ---------- */
  function einstellungen(host) {
    var d = W.state.data;
    var name = h('input', { type: 'text', class: 'eingabe', maxlength: '30', placeholder: 'Vorname', value: d.name || '' });
    var code = h('textarea', { class: 'erkl__text', rows: '3', placeholder: 'Code hier einfügen' });
    host.appendChild(h('div', { class: 'seite' },
      h('h1', null, 'Einstellungen'),
      karte('', h('label', { class: 'feld' }, h('span', null, 'Name auf dem Namensschild'), name),
        h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { W.state.setName(name.value); W.toast('Gespeichert', 'ok'); W.app.kopf(); } }, 'Speichern'))),
      W.ton ? karte('', h('label', { class: 'schalter' }, h('input', { type: 'checkbox', checked: !!d.ton, onchange: function (e) { W.state.set('ton', e.target.checked); } }), h('span', null, 'Monitor-Piep bei richtigen Antworten'))) : null,
      karte('', h('h2', null, 'Fortschritt übertragen'),
        h('p', { class: 'hinweis-klein' }, 'Der Fortschritt bleibt nur auf diesem Gerät. Um auf einem anderen Gerät weiterzumachen, kopierst du den Code und fügst ihn dort ein.'),
        h('div', { class: 'aktionen aktionen--zwei' },
          h('button', { type: 'button', class: 'btn', onclick: function () {
            var c = W.state.exportCode();
            code.value = c;
            code.select();
            try { navigator.clipboard.writeText(c).then(function () { W.toast('Code kopiert', 'ok'); }, function () {}); } catch (e) { /* manuell kopieren */ }
          } }, 'Code erzeugen'),
          h('button', { type: 'button', class: 'btn', onclick: function () {
            if (!code.value.trim()) { W.toast('Erst einen Code einfügen'); return; }
            if (!window.confirm('Der Fortschritt auf diesem Gerät wird durch den Code ersetzt. Fortfahren?')) return;
            if (W.state.importCode(code.value)) { W.toast('Fortschritt übernommen', 'ok'); W.app.kopf(); } else W.toast('Code ungültig');
          } }, 'Code übernehmen')), code),
      karte('', h('h2', null, 'Neu anfangen'), h('p', { class: 'hinweis-klein' }, 'Löscht den gesamten Fortschritt auf diesem Gerät.'),
        h('div', { class: 'aktionen' }, h('button', { type: 'button', class: 'btn btn--gefahr', onclick: function () {
          if (window.confirm('Wirklich alles löschen? Das lässt sich nicht rückgängig machen.')) { W.state.reset(); location.hash = '#/'; W.app.kopf(); }
        } }, 'Alles zurücksetzen'))),
      h('p', { class: 'hinweis-klein fuss' }, 'Alles bleibt auf diesem Gerät. Kein Konto, kein Server, kein Tracking.')));
  }

  /* ---------- Erster Start ---------- */
  function begruessung(onFertig) {
    var name = h('input', { type: 'text', class: 'eingabe', maxlength: '30', placeholder: 'Vorname', autocomplete: 'given-name' });
    function fertig(mitName) {
      if (mitName) W.state.setName(name.value);
      W.state.set('begruesst', true);
      dlg.remove();
      onFertig();
    }
    var dlg = h('div', { class: 'dialog', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'dlg-titel' },
      h('div', { class: 'dialog__box' },
        h('p', { class: 'mono hinweis-klein' }, 'NOTAUFNAHME · 22:00 UHR'),
        h('h1', { id: 'dlg-titel' }, 'Nachtschicht'),
        h('p', null, 'Zehn Patienten, zehn Themen deiner Bioarbeit. Du verstehst, übst, erklärst und entlässt sie. Am Ende wartet die Facharztprüfung.'),
        h('label', { class: 'feld' }, h('span', null, 'Wie heißt du? Nur für dein Namensschild, bleibt auf diesem Gerät.'), name),
        h('div', { class: 'aktionen aktionen--zwei' },
          h('button', { type: 'button', class: 'btn', onclick: function () { fertig(false); } }, 'Ohne Namen'),
          h('button', { type: 'button', class: 'btn btn--haupt', onclick: function () { fertig(true); } }, 'Schicht beginnen'))));
    name.addEventListener('keydown', function (e) { if (e.key === 'Enter') fertig(true); });
    document.body.appendChild(dlg);
    name.focus();
  }

  W.ansichten = {
    board: board, fall: fall, wiedervorlage: wiedervorlage, plan: planAnsicht, einstellungen: einstellungen,
    begruessung: begruessung, faelle: faelle, wvAnzahl: wvAnzahl, fallNachId: fallNachId, itemNachId: itemNachId, karte: karte, link: link, datumText: datumText
  };
})();
