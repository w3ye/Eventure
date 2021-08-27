/* LINKS FOR REFERENCE
 * Facebook - https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.amazon.ca
 * Messenger - https://www.facebook.com/dialog/send?app_id=140586622674265&link=https%3A%2F%2Fwww.google.com.&redirect_uri=https%3A%2F%2Fwww.addthis.com%2Fmessengerredirect
 * Twitter - https://twitter.com/intent/tweet?text=Join%20My%20Eventure!&url=https%3A%2F%2Fwww.amazon.ca&related=
 */

const eventConfirmation = function () {
  const $shareContainer = $("#share-event");
  const $confirm = `
    <div class="share-catchphrase">
      <p class="share-catchphrase-words">Your&nbsp;</p>
      <p class="share-catchphrase-eventure">Eventure</p>
      <p class="share-catchphrase-words">has been created!</p>
    </div>
    <div class="share-box">
      <div class="share-body">
        <p class="secret-link">Secret Link:</p>
        <p><input type="text" id="link" name="link" class="link" value="" readonly></p>
        <div class="share-row" id="share-row">

        </div>
        <div class="last-step">
          <button type="submit" id="modify-button">Modify</button>
          <button id="result-button"></button>
        </div>
      </div>
    </div>
  `;
  return $shareContainer.html($confirm);
};

// WHEN MODAL IS ONLY ACTIVATED
const submitButton = function () {
  $("#submit-button").click((event) => {
    event.preventDefault();
    $("#result-event").slideDown(500);
    $("#result-event").fadeIn(500);
    $("#overlay").css("opacity", "1");
    $("#timeslot").fadeOut();
    $("#timeslot").hide();
    $("#attend-event").hide();
    const serialize = $("#time-container").serialize();
    console.log(serialize);
  });
};

const modifyButton = function () {
  $("#modify-button").click((event) => {
    event.preventDefault();
    $("#share-event").hide();
    $("#master-box").fadeIn();
  });
};

const addVoteslot = function (dayStr, index) {
  const $voteContainer = $("#generate-voteslot");

  const $newVoteslot = `
  <div class="voteslots">
    <h3>${dayStr}</h3>
    <div class="vote-checkbox">
      <small>Select:</small>
      <input type="checkbox" id="day${index}" name="day${index}" value="${dayStr}">
    </div>
  </div>
  `;
  return $voteContainer.append($newVoteslot);
};

const submitPoll = function () {
  $("#submit-poll").on("click", function (event) {
    event.preventDefault();
    let votedDays = [];
    $("#generate-voteslot")
      .find("input")
      .each(function (input) {
        const formattedDate = new Date($(this).val());
        const dateISO = formattedDate.toISOString();
        if (this.checked) {
          votedDays.push(dateISO);
        }
      });
    console.log("You are available on: ", votedDays);
  });
};

const nextButton = function () {
  $("#next-button").click((event) => {
    event.preventDefault();
    $("#attend-event").hide();
    $(".form-popup").show();
    $(".form-popup").fadeIn();
    $("#polling-event").show();
    $.get("/polls")
      .then((dayArray) => {
        dayArray.forEach((day, order) => {
          const dayDate = new Date(Date.parse(day.day))
            .toString()
            .split(" ")
            .splice(0, 4)
            .join(" ");
          addVoteslot(dayDate, order);
        });
      })
      .then(() => {
        submitPoll();
      });
  });
};

// const nextButton = function() {
//   $("#next-button").click((event) => {
//     event.preventDefault();
//     $("#overlay").css("opacity", "0");
//     const serialize = $("#guest-details").serialize();
//     $.post('/user/create', serialize).done((result) => {
//       console.log(result);
//     });
//   });
// };

$(document).ready(function () {
  $("#share-event").hide();
  submitButton();
  eventConfirmation();
  modifyButton();
  nextButton();
  $("#polling-event").show();
  $.get("link").then((link) => {
    console.log(link);
    $("#link").val(link);
  });
});
