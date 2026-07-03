// O'salon — shared chrome behaviour (theme toggle, language buttons, scroll reveal)
// used by every page. Page-specific translation content lives in its own script.
var OsalonCommon = (function () {

  function initTheme() {
    var root = document.documentElement;

    function setTheme(isDark) {
      root.classList.toggle('dark', isDark);
      try { localStorage.setItem('osalonTheme', isDark ? 'dark' : 'light'); } catch (e) {}
    }

    var savedTheme = null;
    try { savedTheme = localStorage.getItem('osalonTheme'); } catch (e) {}
    if (savedTheme) {
      setTheme(savedTheme === 'dark');
    } else {
      setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    var themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        setTheme(!root.classList.contains('dark'));
      });
    }
  }

  function initLangButtons(onSelect) {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { onSelect(btn.getAttribute('data-lang')); });
    });
  }

  function highlightActiveLangButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('bg-gradient-to-br', isActive);
      btn.classList.toggle('from-men', isActive);
      btn.classList.toggle('to-women', isActive);
      btn.classList.toggle('text-white', isActive);
    });
  }

  function getStoredLang(supportedLangs, fallback) {
    var lang = fallback;
    try {
      var saved = localStorage.getItem('osalonLang');
      if (saved && supportedLangs.indexOf(saved) !== -1) lang = saved;
    } catch (e) {}
    return lang;
  }

  function storeLang(lang) {
    try { localStorage.setItem('osalonLang', lang); } catch (e) {}
  }

  function initReveal() {
    var revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      revealItems.forEach(function (el) { observer.observe(el); });
    } else {
      revealItems.forEach(function (el) { el.classList.add('is-visible'); });
    }
    revealItems.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-visible');
    });
  }

  function neutralizePlaceholderLinks() {
    document.querySelectorAll('a[href="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) { e.preventDefault(); });
    });
  }

  return {
    initTheme: initTheme,
    initLangButtons: initLangButtons,
    highlightActiveLangButton: highlightActiveLangButton,
    getStoredLang: getStoredLang,
    storeLang: storeLang,
    initReveal: initReveal,
    neutralizePlaceholderLinks: neutralizePlaceholderLinks
  };
})();
