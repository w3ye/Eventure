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
