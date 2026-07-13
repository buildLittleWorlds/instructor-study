(function () {
  var script = document.currentScript;
  var rootUrl = script ? new URL('.', script.src) : new URL('./', window.location.href);
  var path = window.location.pathname;

  var sessions = [
    ['session-01/', '1', 'Map of Meaning'],
    ['session-02/randomness-lab/', '2', 'Randomness Lab'],
    ['session-03/', '3', 'Attention Spotlight'],
    ['session-04/', '4', 'Slop Detector'],
    ['session-05/', '5', 'Next Move'],
    ['session-06/', '6', 'Agreement Machine'],
    ['session-07/', '7', 'Debug Loop'],
    ['session-08/', '8', 'Naming of Things'],
    ['session-09/', '9', 'Argument You Run'],
    ['session-10/', '10', 'Second Opinion']
  ];

  function href(relativePath) {
    return new URL(relativePath, rootUrl).href;
  }

  function activeKey() {
    if (/\/anthology\/?$/.test(path)) return 'anthology';
    if (/\/proceedings\/?$/.test(path)) return 'proceedings';
    var match = path.match(/\/session-(\d{2})\//);
    return match ? 'session-' + match[1] : 'home';
  }

  function currentAttr(key, active) {
    return key === active ? ' aria-current="page"' : '';
  }

  function sessionLinks(active) {
    return sessions.map(function (item) {
      var key = item[0].slice(0, 10);
      return '<a class="study-nav__session" href="' + href(item[0]) + '"' + currentAttr(key, active) + '>' +
        '<span>Session ' + item[1] + '</span>' +
        '<strong>' + item[2] + '</strong>' +
      '</a>';
    }).join('');
  }

  function installStyles() {
    if (document.getElementById('study-nav-styles')) return;
    var style = document.createElement('style');
    style.id = 'study-nav-styles';
    style.textContent = [
      '.study-nav{position:sticky;top:0;z-index:50;background:rgba(253,252,249,.94);border-bottom:1px solid rgba(34,34,42,.12);backdrop-filter:blur(12px);font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#22222a;}',
      '.study-nav *{box-sizing:border-box;}',
      '.study-nav__inner{width:min(72rem,calc(100% - 1.5rem));min-height:3.25rem;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:1rem;}',
      '.study-nav__brand{display:inline-flex;align-items:center;gap:.5rem;color:#214f44;text-decoration:none;font-weight:850;font-size:.95rem;white-space:nowrap;}',
      '.study-nav__brand::before{content:"";width:.65rem;height:.65rem;border-radius:50%;background:#2f6f5e;box-shadow:0 0 0 4px #e7f1ee;}',
      '.study-nav__links{display:flex;align-items:center;justify-content:flex-end;gap:.25rem;}',
      '.study-nav a,.study-nav summary{border-radius:999px;color:#34343b;text-decoration:none;font-size:.86rem;font-weight:760;line-height:1;cursor:pointer;}',
      '.study-nav__link,.study-nav summary{display:inline-flex;align-items:center;min-height:2.15rem;padding:.55rem .78rem;}',
      '.study-nav a:hover,.study-nav a:focus-visible,.study-nav summary:hover,.study-nav summary:focus-visible{background:#e7f1ee;color:#214f44;outline:none;}',
      '.study-nav a[aria-current="page"]{background:#2f6f5e;color:#fff;}',
      '.study-nav__menu{position:relative;}',
      '.study-nav__menu summary{list-style:none;}',
      '.study-nav__menu summary::-webkit-details-marker{display:none;}',
      '.study-nav__menu summary::after{content:"";width:.42rem;height:.42rem;margin-left:.45rem;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:translateY(-.12rem) rotate(45deg);}',
      '.study-nav__menu[open] summary{background:#e7f1ee;color:#214f44;}',
      '.study-nav__panel{position:absolute;right:0;top:calc(100% + .55rem);width:min(26rem,calc(100vw - 1rem));display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.35rem;padding:.55rem;border:1px solid rgba(34,34,42,.14);border-radius:14px;background:#fffdf8;box-shadow:0 18px 46px rgba(34,34,42,.16);}',
      '.study-nav__session{display:grid;gap:.1rem;border-radius:10px!important;padding:.6rem .7rem!important;line-height:1.25!important;}',
      '.study-nav__session span{color:#6b6b76;font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;font-weight:800;}',
      '.study-nav__session strong{font-size:.88rem;font-weight:780;}',
      '.study-nav__session[aria-current="page"] span{color:rgba(255,255,255,.78);}',
      '@media (max-width:640px){.study-nav__inner{width:min(100% - .85rem,72rem);min-height:3rem;gap:.45rem;}.study-nav__brand{font-size:.88rem;}.study-nav__brand::before{display:none;}.study-nav__links{gap:.1rem;}.study-nav__link,.study-nav summary{padding:.5rem .55rem;font-size:.8rem;}.study-nav__panel{position:fixed;left:.5rem;right:.5rem;top:3.45rem;width:auto;grid-template-columns:1fr;max-height:70vh;overflow:auto;}.study-nav__link--optional{display:none!important;}}'
    ].join('');
    document.head.appendChild(style);
  }

  function installNav() {
    if (document.querySelector('.study-nav')) return;
    var active = activeKey();
    var nav = document.createElement('nav');
    nav.className = 'study-nav';
    nav.setAttribute('aria-label', 'Instructor Study site navigation');
    nav.innerHTML =
      '<div class="study-nav__inner">' +
        '<a class="study-nav__brand" href="' + href('./') + '"' + currentAttr('home', active) + '>Instructor Study</a>' +
        '<div class="study-nav__links">' +
          '<details class="study-nav__menu">' +
            '<summary>Sessions</summary>' +
            '<div class="study-nav__panel">' + sessionLinks(active) + '</div>' +
          '</details>' +
          '<a class="study-nav__link" href="' + href('anthology/') + '"' + currentAttr('anthology', active) + '>Anthology</a>' +
          '<a class="study-nav__link study-nav__link--optional" href="' + href('proceedings/') + '"' + currentAttr('proceedings', active) + '>Gallery</a>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(nav, document.body.firstChild);

    var menu = nav.querySelector('.study-nav__menu');
    document.addEventListener('click', function (event) {
      if (menu.open && !menu.contains(event.target)) menu.open = false;
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') menu.open = false;
    });
  }

  installStyles();
  if (document.body) {
    installNav();
  } else {
    document.addEventListener('DOMContentLoaded', installNav);
  }
})();
