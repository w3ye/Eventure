const resultButton = function() {
  $("#result-button").click((event) => {
    event.preventDefault();
    console.log('clicked result')
    // $('#share-event').hide();
    // $('').fadeIn();
    $.get("/polls").then((daysObj) => {
      console.log('clicked result');
      const startDate = days.start_date.split('T')[0]
      const dayRange = days.range;

    });
  });
}

$(document).ready(function() {
  $("#share-event").hide();
  resultButton();
});



//TEMPORARILY GETTING POLL INFO IN HERE

//TEMPORARY CODE BLOCK


<div class="form-popup" id="polling">
  <form action="/" id="days-container">
    <div class="modal-header">
      <p class="fix-title">Eventure Title</p>
    </div>
    <div class="modal-body">
      <div class="voting-days">
        <p id="date">Please Select Your Available Days</p>
        <div id="add-timeslot">

          ADD DIV "FOREACH" DAY CONTAINING THE NAME OF THE DAY AND A CHECKBOX TO VOTE FOR IT

        </div>
        <div id="generate-timeslot">
        </div>
        <button type="submit" class="add-time">Add</button>
        <button type="submit" class="remove-time">Remove</button>
      </div>
      <button type="submit" id="submit-button"><a href="#success">Submit</a></button>
    </div>
  </form>
</div>


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
