const eventURL = window.location.pathname;

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Viewing index")},
    { path: eventURL, view: () => console.log("Viewing event")},
    { path: "/error", view: () => console.log("Error! Please go back")}
  ];
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  })

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    }
  }

  console.log(potentialMatches)
};

$(() => {
  router();

  window.addEventListener('load', (event) => {

    if (window.location.pathname.includes("/event/")) {
      $("#attend-event").slideDown(600);
      $("#attend-event").fadeIn(600);
    }
    else if (window.location.host) {
      $("#create-event").slideDown(800);
      $("#create-event").fadeIn(800);
    }
  });
});
