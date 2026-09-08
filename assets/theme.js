// Manual theme toggle. Default follows the OS; a click pins a choice in localStorage.
(function () {
  var root = document.documentElement;
  function current() {
    var pinned = root.getAttribute('data-theme');
    if (pinned) return pinned;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = current() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
      });
    });
  });
})();

// Resume / CV switcher in the "Resume & CV" section. Enhancement only: with
// this file absent the resume embed and both download links still render.
(function () {
  var FRAGMENT = '#toolbar=0&navpanes=0&pagemode=none&view=FitH';
  var DOCS = {
    resume: { file: 'assets/DanielNguyenResume.pdf', open: 'Open the resume' },
    cv: { file: 'assets/DanielNguyenCV.pdf', open: 'Open the CV' }
  };
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.doc-toggle');
    var embed = document.querySelector('.cv-embed object');
    if (!toggle || !embed) return;
    var buttons = toggle.querySelectorAll('button[data-doc]');
    if (!buttons.length) return;

    function show(key) {
      var doc = DOCS[key];
      if (!doc) return;
      embed.setAttribute('data', doc.file + FRAGMENT);
      // Some engines keep showing the old document when only the attribute
      // changes; re-inserting the same node forces a reload.
      var parent = embed.parentNode;
      var next = embed.nextSibling;
      parent.removeChild(embed);
      parent.insertBefore(embed, next);
      // The link inside the <object> is the fallback for browsers with no
      // inline PDF viewer, so it points at whichever document is selected.
      var fallback = embed.querySelector('a');
      if (fallback) {
        fallback.setAttribute('href', doc.file);
        fallback.textContent = doc.open;
      }
      buttons.forEach(function (other) {
        other.setAttribute('aria-pressed', String(other.dataset.doc === key));
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        show(btn.dataset.doc);
      });
    });
    toggle.hidden = false;
  });
})();
