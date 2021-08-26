const pollingConfirmation = function() {
  const $pollContainer = $("#polling-event");
  const $pollConfirm = `
  <div class="form-popup" id="polling">
    <form action="/" id="days-container">
      <div class="modal-header">
        <p class="fix-title">Eventure Title</p>
      </div>
      <div class="modal-body">
        <div class="voting-days">
         <p id="date">Please Select Your Available Days:</p>

          <div id="generate-voteslot">

          </div>

          <button type="submit" id="submit-button"><a href="#success">Submit Availability</a></button>
        </div>
      </div>
    </form>
  </div>
  `;
  return $pollContainer.html($pollConfirm);
};


// const addVoteslot = function(dayStr) {
//   const $voteContainer = $("#generate-voteslot");

//   const $newVoteslot = `
//   <div class="voteslots">
//     <h3>${dayStr}</h3>
//     <div class="vote-checkbox">
//       <small>Select:</small>
//       <input type="checkbox" id="day1" name="day1" value="thisDay">
//     </div>
//   </div>
//   `
// };

//USE THIS TO ADD NEW DAYS TO VOTE ON
/*
const addMeetingTime = function() {
  const $timeslotContainer = $('#generate-timeslot');

  const $newMeetingTime = `
  <div class="new-meeting-time">
    <div class="start-row">
      <label for="start">Start Time:</label>
      <input type="text" class="start" name="start" />
    </div>
    <div class="end-row">
      <label for="end">End Time:</label>
      <input type="text" class="end" name="end" />
    </div>
  </div>
  `;
  return $timeslotContainer.append($newMeetingTime);
};

*/

$(document).ready(function() {
  $("#share-event").hide();
  $(".form-popup").show();
  pollingConfirmation();
  $("#polling-event").show();
  // resultButton();
});
