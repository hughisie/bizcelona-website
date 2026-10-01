// Bizcelona site: mobile menu, current-section highlight, gentle reveal.
// Everything works without this file; it only adds polish.
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var panel = document.getElementById('site-nav');
  if (btn && panel) {
    var mq = window.matchMedia('(min-width: 56em)');
    var setOpen = function (open) {
      btn.setAttribute('aria-expanded', String(open));
      if (open) { panel.removeAttribute('hidden'); } else { panel.setAttribute('hidden', ''); }
    };
    setOpen(false);
    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a') && !mq.matches) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        btn.focus();
      }
    });
  }

  // Current section in the nav (home page only)
  var links = document.querySelectorAll('.nav-link[data-section]');
  if (links.length && 'IntersectionObserver' in window) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('data-section')] = a; });
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) current = en.target.id;
      });
      Object.keys(map).forEach(function (id) {
        if (id === current) { map[id].setAttribute('aria-current', 'true'); }
        else { map[id].removeAttribute('aria-current'); }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if (items.length) {
    if ('IntersectionObserver' in window) {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      items.forEach(function (el) { ro.observe(el); });
    } else {
      items.forEach(function (el) { el.classList.add('in'); });
    }
  }
})();
