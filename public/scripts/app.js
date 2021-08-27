const url = window.location.pathname;
const eventLink = url.substring(7, 22);
const resultLink = url.substring(8, 23);

$(() => {
  window.addEventListener('load', (event) => {
    event.preventDefault;
    if (window.location.pathname.includes("event")) {
      $("#attend-event").slideDown(600);
      $("#attend-event").fadeIn(600);
      renderEvent(eventLink);
    } else if (window.location.pathname.includes("result")) {
      $("#result-event").slideDown(800);
      $("#result-event").fadeIn(800);
      renderResult(resultLink);
    } else if (window.location.host) {
      $("#create-event").slideDown(800);
      $("#create-event").fadeIn(800);
    }
  });
});
