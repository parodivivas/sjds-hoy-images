/* InGuía ES/EN switch. Runtime DOM translator + toggle button. No dependency on the app's minified names.
   - lang: localStorage 'inguia-lang' ('es'|'en'); default from navigator.language (en* -> en, else es)
   - UI strings are inlined below (UI); place/venue text comes from /__inguia/i18n/places-en.json (fetched only in EN)
   - Hoy events: title_en / note_en / place_en fields of the gist events.json, picked up from the app's own fetch.
   Fails safe: any error leaves the Spanish app untouched. */
(function () {
  'use strict';
  if (window.__inguiaI18n) return;
  window.__inguiaI18n = 1;
  var VER = '1';
  var KEY = 'inguia-lang';
  var UI = {"version":1,"exact":{"Hoy":"Today","Alojamiento":"Stay","Comida":"Food","Playas":"Beaches","Noche":"Night","Más":"More","Casas":"Homes","Hoteles y hostales":"Hotels & hostels","Explorar":"Explore","Rentas":"Rentals","Víveres":"Groceries","Farmacia":"Pharmacy","🌊 Mareas / Tides":"🌊 Tides","Pacífico · Rivas":"Pacific · Rivas","Colonial · Lago Cocibolca":"Colonial · Lake Cocibolca","Colonial · Volcanes":"Colonial · Volcanoes","Qué hay hoy en San Juan del Sur · Hoy, playas, comida y dónde dormir":"What's on today in San Juan del Sur · Today, beaches, food and where to stay","Qué hay hoy en San Juan del Sur":"What's on today in San Juan del Sur","Ver Hoy":"See Today","Compartir":"Share","Compartir InGuía":"Share InGuía","Enlace copiado":"Link copied","Buscar lugares":"Search places","Buscar…":"Search…","Limpiar búsqueda":"Clear search","Solo guardados":"Saved only","Categorías":"Categories","Música en vivo":"Live music","Día de la semana":"Day of the week","Domingo":"Sunday","Lunes":"Monday","Martes":"Tuesday","Miércoles":"Wednesday","Jueves":"Thursday","Viernes":"Friday","Sábado":"Saturday","Sin eventos":"No events","Nada guardado en esta pestaña":"Nothing saved in this tab","Sin resultados":"No results","Mañana":"Morning","Tarde":"Afternoon","Atardecer":"Sunset","Happy hour":"Happy hour","Música":"Music","Fiesta":"Party","Ver":"See","Nada fijo este día":"Nothing scheduled this day","Mira Noche para bares, o cambia de día arriba.":"Check Night for bars, or change the day above.","Carteleras":"Weekly posters","Agenda de cada semana. Las carteleras son las que publican los locales. Confirma en el lugar.":"Each week's lineup. The posters are the ones venues publish. Confirm on site.","Cerrar":"Close","Ver lugar":"View place","Destacado":"Featured","· sábados":"· Saturdays","Fuente":"Source","Me gusta":"Like","Quitar me gusta":"Remove like","Guardar":"Save","Quitar de guardados":"Remove from saved","Económico":"Budget","Medio":"Mid-range","Alto":"High-end","Cómo llegar":"Get directions","Sitio web":"Website","Consejo.":"Tip.","Amenidades":"Amenities","Video":"Video","Activar sonido":"Turn sound on","Silenciar":"Mute","No se pudo guardar tu me gusta. Intenta de nuevo.":"Couldn't save your like. Try again.","Mapa de zonas":"Zone map","Zonas de la costa":"Coastal zones","Toca un pin para abrir la playa":"Tap a pin to open the beach","Google Maps · tocá una zona":"Google Maps · tap a zone","Cerrar mapa":"Close map","Pin solo donde la ubicación está confirmada. El resto sigue en la lista.":"Pins only where the location is confirmed. The rest stay in the list.","En el pueblo":"In town","Al norte":"To the north","Al sur":"To the south","Lago Cocibolca":"Lake Cocibolca","Malecón y puerto":"Waterfront and port","Laguna de Apoyo":"Laguna de Apoyo","Las Isletas":"Las Isletas","Poneloya":"Poneloya","Las Peñitas":"Las Peñitas","Nada por aquí":"Nothing here","El marcador de arriba está activo y aquí no hay nada guardado.":"The saved filter above is on and nothing is saved here.","Prueba otra palabra o cambia de pestaña.":"Try another word or switch tabs.","Ver todo":"Show all","Privacidad":"Privacy","Fotos Granada: Adalberto.H.Vega (CC BY 2.0) · León: Guillaume Baviere (CC BY-SA 2.0), vía Wikimedia Commons":"Granada photos: Adalberto.H.Vega (CC BY 2.0) · León: Guillaume Baviere (CC BY-SA 2.0), via Wikimedia Commons","¿Eres el negocio?":"Own a business?","Da de alta tu ficha o corrige la que ya está. Fotos y descripción — las revisamos antes de publicar.":"Add your listing or correct the one that's already there. Photos and description — we review them before publishing.","Nuevo":"New","Corregir":"Correct","Empresa":"Company","Ficha actual":"Current listing","Elige el lugar…":"Choose the place…","Nombre":"Name","Ej. Hotel del Faro":"E.g. Hotel del Faro","Sección":"Section","Descripción":"Description","Horario, qué ofreces, cómo llegar…":"Hours, what you offer, how to get there…","Contacto":"Contact","Tu nombre":"Your name","Sitio o Instagram":"Website or Instagram","https:// o @cuenta":"https:// or @account","Fotos":"Photos","Hasta 3 fotos":"Up to 3 photos","O escribe directo a":"Or write directly to","Enviando…":"Sending…","Enviar a la guía":"Send to the guide","Enviar otra":"Send another","Revisa tu correo":"Check your email","Listo, lo revisamos":"Done, we'll review it","Se abrió un correo a la guía con la ficha. Falta pulsar enviar.":"An email to the guide opened with the listing. You still need to press send.","Fotos y texto llegan a la guía. Te avisamos si hace falta algo.":"Photos and text reach the guide. We'll let you know if anything is needed.","Actualizado septiembre 2026":"Updated September 2026","FAPV · Franco Parodi · Actualizado septiembre 2026":"FAPV · Franco Parodi · Updated September 2026","In Nicaragua es una guía de visitantes para San Juan del Sur, Granada y León. No pedimos cuenta ni contraseña para usarla.":"In Nicaragua is a visitor guide to San Juan del Sur, Granada and León. We don't ask for an account or password to use it.","Qué guardamos en tu teléfono":"What we store on your phone","Los lugares que marcas con el corazón y la ciudad que elegiste se guardan solo en este aparato (almacenamiento local). No los enviamos a un servidor.":"The places you mark with the heart and the city you chose are saved only on this device (local storage). We don't send them to a server.","Formulario de fichas":"Listing form","Si escribes para añadir o corregir un lugar, nos llega el texto, el contacto que pusiste y las fotos que adjuntaste. Eso se usa solo para actualizar la guía.":"If you write to add or correct a place, we receive the text, the contact details you entered and the photos you attached. That is used only to update the guide.","Las playas con ubicación confirmada se muestran en un mapa de OpenStreetMap. Las otras zonas siguen en Google Maps. Ahí aplican las reglas de ellos, no las nuestras.":"Beaches with a confirmed location are shown on an OpenStreetMap map. The other zones stay on Google Maps. Their rules apply there, not ours.","La guía no está dirigida a menores de 13 años.":"The guide is not directed at children under 13.","Franco Parodi · FAPV · In Nicaragua.":"Franco Parodi · FAPV · In Nicaragua.","Volver a la guía":"Back to the guide"},"months":{"enero":"January","febrero":"February","marzo":"March","abril":"April","mayo":"May","junio":"June","julio":"July","agosto":"August","septiembre":"September","octubre":"October","noviembre":"November","diciembre":"December"},"days":{"domingo":"Sunday","lunes":"Monday","martes":"Tuesday","miércoles":"Wednesday","jueves":"Thursday","viernes":"Friday","sábado":"Saturday"},"ui":{"toggleAria":"Cambiar idioma / Change language","shareText":"What's on today in San Juan del Sur"}};
  var PLACES_URL = '/__inguia/i18n/places-en.json?v=' + VER;
  var GIST_ID = 'f7c94c8e149107e70c3a4871150e1e21';
  var GIST_URL = 'https://gist.githubusercontent.com/parodivivas/' + GIST_ID + '/raw/events.json';
  var ATTRS = ['aria-label', 'placeholder', 'title', 'alt'];
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1, CODE: 1 };

  function detect() {
    try { var s = localStorage.getItem(KEY); if (s === 'en' || s === 'es') return s; } catch (e) {}
    var l = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
    return /^en/i.test(l) ? 'en' : 'es';
  }
  var lang = detect();

  var EX = UI.exact || {};
  var TXT = {};          // Spanish -> English for places / static events (places-en.json "text")
  var EV = {};           // Spanish -> English for Hoy events (title/note/place)
  var TABDAYS = { Dom: 'Sun', Lun: 'Mon', Mar: 'Tue', 'Mié': 'Wed', Jue: 'Thu', Vie: 'Fri', 'Sáb': 'Sat' };
  var cache = {};
  var placesLoaded = false, placesLoading = false;

  function dateTr(s) {
    var m = s.match(/^(?:([A-Za-zÁÉÍÓÚáéíóú]+),? )?(\d{1,2}) de ([a-zé]+)$/);
    if (m) {
      var mo = UI.months[m[3].toLowerCase()];
      var wd = m[1] ? UI.days[m[1].toLowerCase()] : null;
      if (mo) return (wd ? wd + ', ' : '') + mo + ' ' + m[2];
    }
    var d = UI.days[s.toLowerCase()];
    return d || s;
  }
  function plural(n, one, many) { return n + ' ' + (n === '1' ? one : many); }
  var PATTERNS = [
    [/^(\d+) eventos? · (.+)$/, function (m) { return plural(m[1], 'event', 'events') + ' · ' + dateTr(m[2]); }],
    [/^(\d+) (?:lugar|lugares)$/, function (m) { return plural(m[1], 'place', 'places'); }],
    [/^(\d+) playas?$/, function (m) { return plural(m[1], 'beach', 'beaches'); }],
    [/^(\d+) guardados$/, function (m) { return m[1] + ' saved'; }],
    [/^Foto (\d+) de (.+)$/, function (m) { return 'Photo ' + m[1] + ' of ' + tr(m[2]); }],
    [/^Video de (.+)$/, function (m) { return 'Video of ' + tr(m[1]); }],
    [/^Mapa (.+)$/, function (m) { return 'Map ' + tr(m[1]); }]
  ];

  function lookup(t) {
    var o = EV[t];
    if (o === undefined) o = EX[t];
    if (o === undefined) o = TXT[t];
    return o;
  }
  // translate a string; returns the same string when nothing applies
  function tr(s, ctx) {
    if (typeof s !== 'string') return s;
    var t = s.trim();
    if (!t || !/[A-Za-zÀ-ÿ]/.test(t)) return s;
    if (ctx === 'tab' && TABDAYS[t]) return s.replace(t, TABDAYS[t]);
    var o = lookup(t);
    if (o === undefined) {
      for (var i = 0; i < PATTERNS.length; i++) {
        var m = t.match(PATTERNS[i][0]);
        if (m) { o = PATTERNS[i][1](m); break; }
      }
    }
    if (o === undefined || o === t) return s;
    return s.replace(t, function () { return o; });
  }

  // ---- DOM walking -------------------------------------------------------------------------------------------
  var textRec = new WeakMap();   // text node -> {src, out}
  function skipEl(el) {
    for (var n = el; n && n.nodeType === 1; n = n.parentNode) {
      if (SKIP_TAGS[n.tagName] || (n.hasAttribute && n.hasAttribute('data-no-i18n'))) return true;
    }
    return false;
  }
  function doText(n) {
    var p = n.parentNode;
    if (!p || skipEl(p)) return;
    var cur = n.nodeValue, rec = textRec.get(n);
    if (rec && cur === rec.out) return;
    var out = tr(cur, p.closest && p.closest('[role=tab]') ? 'tab' : '');
    if (out !== cur) { textRec.set(n, { src: cur, out: out }); n.nodeValue = out; }
    else if (rec) textRec.delete(n);
  }
  function doAttrs(el) {
    if (skipEl(el)) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      var cur = el.getAttribute(a), rec = el.__i18na && el.__i18na[a];
      if (rec && cur === rec.out) continue;
      var out = tr(cur);
      if (out !== cur) { (el.__i18na || (el.__i18na = {}))[a] = { src: cur, out: out }; el.setAttribute(a, out); }
      else if (rec) delete el.__i18na[a];
    }
  }
  function walk(root, fn, afn) {
    if (!root) return;
    if (root.nodeType === 3) { fn(root); return; }
    if (root.nodeType !== 1) return;
    if (skipEl(root)) return;
    if (afn) afn(root);
    var tw = document.createTreeWalker(root, 5, null);   // SHOW_ELEMENT | SHOW_TEXT
    var n;
    while ((n = tw.nextNode())) {
      if (n.nodeType === 3) fn(n);
      else if (afn) afn(n);
    }
  }
  function restoreText(n) {
    var rec = textRec.get(n);
    if (rec && n.nodeValue === rec.out) { n.nodeValue = rec.src; }
    textRec.delete(n);
  }
  function restoreAttrs(el) {
    var r = el.__i18na; if (!r) return;
    for (var a in r) { if (el.getAttribute(a) === r[a].out) el.setAttribute(a, r[a].src); }
    el.__i18na = null;
  }
  function translateAll() { walk(document.body, doText, doAttrs); }
  function restoreAll() { walk(document.body, restoreText, restoreAttrs); }

  var mo = null;
  function startObserver() {
    if (mo || !window.MutationObserver) return;
    mo = new MutationObserver(function (recs) {
      if (lang !== 'en') { scheduleButton(); return; }
      for (var i = 0; i < recs.length; i++) {
        var r = recs[i];
        if (r.type === 'characterData') doText(r.target);
        else if (r.type === 'attributes') { if (r.target.nodeType === 1) doAttrs(r.target); }
        else if (r.type === 'childList') {
          for (var j = 0; j < r.addedNodes.length; j++) walk(r.addedNodes[j], doText, doAttrs);
        }
      }
      scheduleButton();
    });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }

  // ---- data --------------------------------------------------------------------------------------------------
  function loadPlaces() {
    if (placesLoaded || placesLoading) return;
    placesLoading = true;
    fetch(PLACES_URL).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      placesLoading = false;
      if (!j || !j.text) return;
      TXT = j.text; placesLoaded = true;
      if (lang === 'en') translateAll();
    }).catch(function () { placesLoading = false; });
  }
  function ingestEvents(list) {
    if (!Array.isArray(list)) return;
    var next = {};
    for (var i = 0; i < list.length; i++) {
      var e = list[i]; if (!e || typeof e !== 'object') continue;
      var pairs = [['title', 'title_en'], ['note', 'note_en'], ['place', 'place_en']];
      for (var k = 0; k < pairs.length; k++) {
        var es = typeof e[pairs[k][0]] === 'string' ? e[pairs[k][0]].trim() : '';
        var en = typeof e[pairs[k][1]] === 'string' ? e[pairs[k][1]].trim() : '';
        if (es && en && es !== en) next[es] = en;
      }
    }
    EV = next;
    if (lang === 'en') translateAll();
  }
  var origFetch = window.fetch;
  if (origFetch) {
    window.fetch = function (input) {
      var p = origFetch.apply(this, arguments);
      try {
        var u = typeof input === 'string' ? input : (input && input.url) || '';
        if (u.indexOf(GIST_ID) > -1 && u.indexOf('events.json') > -1) {
          p.then(function (r) { return r.clone().json(); }).then(ingestEvents).catch(function () {});
        }
      } catch (e) {}
      return p;
    };
  }
  function loadEvents() {
    try { origFetch(GIST_URL + '?t=' + Math.floor(Date.now() / 60000)).then(function (r) { return r.json(); }).then(ingestEvents).catch(function () {}); } catch (e) {}
  }
  if (navigator.share) {
    var os = navigator.share.bind(navigator);
    navigator.share = function (d) {
      if (lang === 'en' && d && typeof d === 'object') {
        d = Object.assign({}, d);
        if (d.text) d.text = UI.ui.shareText;
      }
      return os(d);
    };
  }

  // ---- toggle button -----------------------------------------------------------------------------------------
  var btn = null, ro = null, btnTimer = 0;
  function label() {
    var on = 'font-weight:700;opacity:1', off = 'font-weight:500;opacity:.6';
    return '<span style="' + (lang === 'es' ? on : off) + '">ES</span><span style="opacity:.5;margin:0 3px">|</span><span style="' + (lang === 'en' ? on : off) + '">EN</span>';
  }
  function setLang(l) {
    if (l === lang) return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    document.documentElement.lang = l;
    paintButton();
    if (l === 'en') { loadPlaces(); loadEvents(); translateAll(); }
    else restoreAll();
  }
  function paintButton() {
    if (!btn) return;
    var span = btn.querySelector('[data-lang-label]');
    if (span) span.innerHTML = label();
    btn.setAttribute('aria-label', UI.ui.toggleAria);
  }
  function findShare() {
    var h = document.querySelector('header');
    return h ? h.querySelector('button[aria-label*="InGu"]') : null;
  }
  function position() {
    var share = findShare();
    if (!btn || !share || btn.getAttribute('data-floating')) return;
    var cs = getComputedStyle(share);
    var right = parseFloat(cs.right) || 12;
    btn.style.right = (right + share.getBoundingClientRect().width + 6) + 'px';
  }
  function buildButton() {
    var share = findShare();
    var el;
    if (share) {
      el = share.cloneNode(true);                       // identical look to "Compartir", no CSS dependency
      var inner = el.querySelector('span');
      if (!inner) return null;
      inner.innerHTML = '<span data-lang-label></span>';
    } else {
      el = document.createElement('button');
      el.type = 'button';
      el.setAttribute('data-floating', '1');
      el.style.cssText = 'position:fixed;top:12px;right:12px;z-index:60;height:36px;padding:0 12px;border-radius:999px;border:0;background:rgba(28,24,20,.55);color:#fff;font:500 12px system-ui,sans-serif;backdrop-filter:blur(4px);cursor:pointer';
      el.innerHTML = '<span data-lang-label></span>';
    }
    el.id = 'inguia-lang';
    el.setAttribute('data-no-i18n', '');
    el.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); setLang(lang === 'en' ? 'es' : 'en'); });
    return el;
  }
  function ensureButton() {
    var share = findShare();
    var needs = !btn || !document.body.contains(btn) || (btn.getAttribute('data-floating') && share);
    if (!needs) { position(); return; }
    if (btn && btn.parentNode) btn.parentNode.removeChild(btn);
    if (ro) { ro.disconnect(); ro = null; }
    if (!share && location.pathname === '/' && !window.__i18nGiveUp) return;   // wait for the hero to exist
    btn = buildButton();
    if (!btn) return;
    (share ? share.parentNode : document.body).appendChild(btn);
    paintButton();
    position();
    if (share && window.ResizeObserver) { ro = new ResizeObserver(position); ro.observe(share); }
  }
  function scheduleButton() {
    if (btnTimer) return;
    btnTimer = setTimeout(function () { btnTimer = 0; try { ensureButton(); } catch (e) {} }, 150);
  }

  // ---- boot: wait until React has hydrated (avoids hydration mismatches) -----------------------------------------
  function hydrated() {
    var el = document.querySelector('header button') || document.querySelector('main') || document.body.firstElementChild;
    if (!el) return false;
    for (var k in el) { if (k.indexOf('__reactProps$') === 0 || k.indexOf('__reactFiber$') === 0) return true; }
    return false;
  }
  function boot() {
    try {
      startObserver();
      document.documentElement.lang = lang;
      ensureButton();
      if (lang === 'en') { loadPlaces(); loadEvents(); translateAll(); }
    } catch (e) { try { console.log('i18n boot error', e); } catch (_) {} }
  }
  var tries = 0;
  (function wait() {
    if (hydrated() || ++tries > 100) {       // up to ~10 s, then continue anyway
      if (tries > 100) window.__i18nGiveUp = 1;
      boot();
      return;
    }
    setTimeout(wait, 100);
  })();
})();
