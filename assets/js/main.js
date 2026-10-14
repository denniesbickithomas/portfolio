// Theme toggle, mobile menu, and footer year. No dependencies.
(function () {
  var root = document.documentElement;

  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) { /* storage blocked — fall back to system theme */ }

  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var themeBtn = document.querySelector("[data-theme-toggle]");
    function paint() { if (themeBtn) themeBtn.textContent = isDark() ? "☀" : "☾"; }
    paint();
    if (themeBtn) themeBtn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint();
    });

    var menuBtn = document.querySelector("[data-menu-toggle]");
    var links = document.querySelector(".nav-links");
    if (menuBtn && links) {
      menuBtn.addEventListener("click", function () {
        var open = links.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      links.addEventListener("click", function (e) {
        if (e.target.tagName === "A") { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
      });
    }

    var year = document.querySelector("[data-year]");
    if (year) year.textContent = new Date().getFullYear();
  });
})();

// Project figures whose image hasn't been added yet are removed instead of showing a broken icon.
function hideMissing(img) {
  var fig = img.closest("figure");
  if (fig) fig.remove(); else img.remove();
}
