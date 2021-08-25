// const escape = function (str) {
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(str));
//   return div.innerHTML;
// };

const eventCreation = function () {
  const $eventContainer = $("#create-event");

  const $creation = `
  <div class="master-catchphrase">
    <p class="master-catchphrase-words">Start your&nbsp;</p>
    <p class="master-catchphrase-eventure">Eventure</p>
  </div>

  <div class="master-box" id="master-box">
    <form class="title" id="new-event">
      <div class="master-header">
          <label for="title">
            <input type="text" name="title" class="title-create" placeholder="Eventure Title" maxlength="30" autocomplete="off" required>
          </label>
      </div>

    <div class="master-body">
      <p class="details">Select Date(s):</p>
      <div class="indent date">
        <label for="from">From</label>
        <input type="text" id="from" name="from" required>
        <label for="to">To</label>
        <input type="text" id="to" name="to" required>
      </div>
      <p class="details">Submission Deadline:</p>
      <div class="indent date">
        <label for="deadline"><i>(Optional)</i></label>
        <input name="deadline" type="text" id="deadline">
      </div>
      <p class="details">Event Description:</p>
      <textarea name="description" id="event-details" maxlength="250" required></textarea>
      <p class="details">Name:</p>
      <input name="name" id="owner-name" class="owner" maxlength="30" required></textarea>
      <p class="details">E-mail:</p>
      <input name="email" id="owner-email" class="owner" maxlength="50" required></textarea>

      <div class="next">
        <a href="#success"><button type="submit" id="next-button"">Next</button></a>
      </div>
    </form>
  </div>
  `;
  // THIS BUTTON IS TO OPEN MODAL (STRETCH)
  // <button type="submit" id="next-button" onclick="openForm()">Next</button>

  return $eventContainer.html($creation);
};

const enterTitle = function () {
  $(".title-create").on("click", () => {
    $(".master-body").slideDown();
    $(".master-body").show();
    $(".master-header").css(
      "box-shadow",
      "0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)"
    );
  });
};

const nextButton = function () {
  $("#next-button").click((event) => {
    event.preventDefault();
    $('#master-box').hide();
    $('.master-catchphrase').hide();
    // $('#share-event').show();
    $('#share-event').fadeIn();
    const serialize = $("#new-event").serialize();
    $.post("/create", serialize).done(console.log("success"));
  });
};

const homePageAnimate = function() {
  $(window).on("load", function () {
    $('#create-event').slideDown(800);
    $('#create-event').fadeIn(800);
  });
}

$(document).ready(function () {
  $("#create-event").hide();
  homePageAnimate();
  eventCreation();
  $(".master-body").hide();
  enterTitle();
  nextButton();
});
