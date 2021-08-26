const url = window.location.pathname;
const link = url.substring(7, 22);
const resultlink = url.substring(8, 23);

$(() => {
  window.addEventListener('load', (event) => {
    event.preventDefault;
    if (window.location.pathname.includes("event")) {
      $("#attend-event").slideDown(600);
      $("#attend-event").fadeIn(600);
      renderEvent(link);
    } else if (window.location.pathname.includes("result")) {
      $("#result-event").slideDown(800);
      $("#result-event").fadeIn(800);
      renderResult(resultlink);
    } else if (window.location.host) {
      $("#create-event").slideDown(800);
      $("#create-event").fadeIn(800);
    }
  });
});
