// $(() => {
//   const $main = $('#main-content');

// const { render } = require("ejs");

//   window.views_manager = {};

//   window.views_manager.show = function(item) {
//     $eventCreation.appendTo($main)

//   };

// });

$(() => {
  window.onhashchange = function() {
    renderPage(window.location.hash);
  }
});

const renderPage = function(hashKey) {

  let pages = document.querySelectorAll('.page');
  for (let i = 0; i < pages.length; ++i) {
    pages[i].style.display = 'none';
  }

  switch(hashKey) {
    case "":
      pages[0].style.display = 'block';
      document.getElementById("create-event").classList.add("active");
      break;
    case "#create":
      pages[0].style.display = 'block';
      document.getElementById("create-event").classList.add("active");
      break;
      case "#success":
        pages[1].style.display = 'block';
        document.getElementById("share-event").classList.add("active");
        break;
    case "#timeslot":
      pages[2].style.display = 'block';
      document.getElementById("add-timeslot").classList.add("active");
      break;
    case "#modify":
      pages[0].style.display = 'block';
      document.getElementById("create-event").classList.add("active");
      break;
    default:
      pages[0].style.display = 'block';
      document.getElementById("create-event");
  }
}
