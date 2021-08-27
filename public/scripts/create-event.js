const generateRandomString = () => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 15; i > 0; i--) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

const randomString = generateRandomString();

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
      <input name="name" id="owner-name" class="owner" maxlength="30" required></input>
      <p class="details">E-mail:</p>
      <input name="email" id="owner-email" class="owner" maxlength="50" required></input>

      <div class="next">
        <button type="submit" id="confirm-button">Confirm</button>
      </div>
    </form>
  </div>
  `;
  // THIS BUTTON IS TO OPEN MODAL (STRETCH)
  // <a href="#timeslot"><button type="submit" id="next-button" onclick="openForm()">Next</button></a>

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

// ONLY FOR MODAL IMPEMENTATION (TIMESLOT)
// const nextButton = function () {
//   $("#next-button").click((event) => {
//     event.preventDefault();
//     $('#master-box').hide();
//     $('.master-catchphrase').hide();
//     $('#share-event').fadeIn();
//     const serialize = $("#new-event").serialize();
//     $.post("/create", serialize).done(console.log("success"));
//   });
// };

const generateLinks = function (link) {
  const $shareRow = $("#share-row");
  const $shareLinks = `
    <a title="Mail" href="mailto:?subject=Eventure Invite&body=Hey! Check out my event here: ${link}"><i class="icon fas fa-at"></i></a>
    <a target="_blank" title="Facebook" href="https://www.facebook.com/sharer/sharer.php?u=${link}" class="fb-xfbml-parse-ignore"><i class="icon fab fa-facebook"></i></a>
    <a target="_blank" title="Messenger" href="https://www.facebook.com/dialog/send?app_id=140586622674265&link=${link}.&redirect_uri=https%3A%2F%2Fwww.addthis.com%2Fmessengerredirect"><i class="icon fab fa-facebook-messenger"></i></a>
    <a target="_blank" title="Twitter" href="https://twitter.com/intent/tweet?text=Join%20My%20Eventure!&url=${link}"><i class="icon fab fa-twitter"></i></a>
    `;
  $shareRow.append($shareLinks);

  const $resultButton = $("#result-button");
  const $resultLink = `
  <a href="/result/${link}">Result</a>
  `;
  $resultButton.append($resultLink);
};

const confirmButton = function () {
  $("#confirm-button").click((event) => {
    event.preventDefault();
    $("#overlay").css("opacity", "0");
    $("#master-box").hide();
    $(".master-catchphrase").hide();
    $("input").prop("required", true);
    let serialize = $("#new-event").serialize();
    serialize += `&link=${randomString}`;

    $.post("/create", serialize).done((result) => {
      $("#share-event").fadeIn();
      console.log("inside /create", result);
      $.get("/links").then((link) => {
        console.log(link);
        $("#link").val(link);
        $("#share-row").empty();
        $("#result-button").empty();
        generateLinks(link);
        $("#submit-poll").click((event) => {
          event.preventDefault;
          window.location.pathname = `/result/${link}`
        });
        });
    });
  });
};

$(document).ready(function () {
  $("#create-event").hide();
  $("#overlay").css("opacity", "1");
  $("#overlay").hide();
  eventCreation();
  $(".master-body").hide();
  enterTitle();
  // nextButton(); // ONLY ACTIVATE WHEN TIMESLOTS ARE IMPLEMENTED
  confirmButton();
});
