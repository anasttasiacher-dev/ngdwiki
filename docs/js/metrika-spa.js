// Корректный учёт переходов при «мгновенной навигации» MkDocs Material.
// ym('init') считает первую страницу; здесь досчитываем последующие переходы.
(function () {
  if (typeof document$ === "undefined") return;
  var first = true;
  document$.subscribe(function () {
    if (first) { first = false; return; }   // первую уже посчитал init
    if (typeof window.ym === "function") {
      window.ym(110922219, "hit", location.href, { referer: document.referrer });
    }
  });
})();
