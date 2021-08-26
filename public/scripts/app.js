// const eventURL = window.location.pathname;

$(() => {
  window.addEventListener('load', (event) => {
    event.preventDefault;
    if (window.location.pathname.includes("event")) {
      $("#attend-event").slideDown(600);
      $("#attend-event").fadeIn(600);
    } else if (window.location.pathname.includes("result")) {
      $("#result-event").slideDown(800);
      $("#result-event").fadeIn(800);
    } else if (window.location.host) {
      $("#create-event").slideDown(800);
      $("#create-event").fadeIn(800);
    }
  });
});
