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
    console.log('page is fully loaded');

    if (window.location.pathname.includes("/event/")) {
      // console.log("THIS IS EVENT!")
      $("#attend-event").slideDown(600);
      $("#attend-event").fadeIn(600);
    }
    else if (window.location.host) {
      console.log("THIS IS INDEX!")
      $("#create-event").slideDown(800);
      $("#create-event").fadeIn(800);
    } else if (window.location.pathname.includes("/*")) {
      console.log("THIS IS AN ERROR!")
    }
  });
});
