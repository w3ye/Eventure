const pollingConfirmation = function() {
  const $pollContainer = $("#polling-event");
  const $pollConfirm = `
  <div class="form-popup" id="polling">
    <form id="days-container">
      <div class="modal-body">
        <div class="voting-days">
         <p id="date">Please Select Your Available Days:</p>
          <div id="generate-voteslot">
          </div>
          <button type="submit" id="submit-poll">Submit Availability</button>
        </div>
      </div>
    </form>
  </div>
  `;
  return $pollContainer.html($pollConfirm);
};

$(document).ready(function() {
  $("#share-event").hide();
  $(".form-popup").show();
  pollingConfirmation();
  $("#polling-event").show();
});
