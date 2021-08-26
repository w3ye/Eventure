const randomLink = "";

/* LINKS FOR REFERENCE
 * Facebook - https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.amazon.ca
 * Messenger - https://www.facebook.com/dialog/send?app_id=140586622674265&link=https%3A%2F%2Fwww.google.com.&redirect_uri=https%3A%2F%2Fwww.addthis.com%2Fmessengerredirect
 * Twitter - https://twitter.com/intent/tweet?text=Join%20My%20Eventure!&url=https%3A%2F%2Fwww.amazon.ca&related=
 */

// const grabLinks = function() {
//   $.get(`/api/event/${link}`).then((link) => {
//     console.log(link);
//     const $shareRow = $("#share-row")
//     const $shareLinks = `
//       <a title="Mail" href="mailto:?subject=Eventure Invite&body=Hey! Check out my event here: ${link}"><i class="icon fas fa-at"></i></a>
//       <a target="_blank" title="Facebook" href="https://www.facebook.com/sharer/sharer.php?u=${link}" class="fb-xfbml-parse-ignore"><i class="icon fab fa-facebook"></i></a>
//       <a target="_blank" title="Messenger" href="https://www.facebook.com/dialog/send?app_id=140586622674265&link=${link}.&redirect_uri=https%3A%2F%2Fwww.addthis.com%2Fmessengerredirect"><i class="icon fab fa-facebook-messenger"></i></a>
//       <a target="_blank" title="Twitter" href="https://twitter.com/intent/tweet?text=Join%20My%20Eventure!&url=${link}"><i class="icon fab fa-twitter"></i></a>
//     `
//     return $shareRow.append($shareLinks)
//   });
// }

// const renderConfirmation = (link) => {
//   $.get(`/api/event/${link}`).then((data) => {
//     console.log(data)
//     $('#eventure-title').text(data.title);
//   });
// }

const eventConfirmation = function () {
  const $shareContainer = $("#share-event");
  const $confirm = `
    <div class="share-catchphrase">
      <p class="share-catchphrase-words">Your&nbsp;</p>
      <p class="share-catchphrase-eventure">Eventure</p>
      <p class="share-catchphrase-words">has been created!</p>
    </div>
    <div class="share-box">
      <p id="eventure-title"></p>
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
const submitButton = function() {
  $("#submit-button").click((event) => {
    event.preventDefault();
    $("#result-event").slideDown(500);
    $("#result-event").fadeIn(500);
    $('#overlay').css('opacity', '1');
    $('#timeslot').fadeOut();
    $('#timeslot').hide();
    $('#attend-event').hide();
    const serialize = $("#time-container").serialize();
    console.log(serialize)
  });
};

const modifyButton = function () {
  $("#modify-button").click((event) => {
    event.preventDefault();
    $("#share-event").hide();
    $("#master-box").fadeIn();
  });
};

$(document).ready(function () {
  $("#share-event").hide();
  submitButton();
  eventConfirmation();
  modifyButton();
});
