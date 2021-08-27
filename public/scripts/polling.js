const pollingConfirmation = function() {
  const $pollContainer = $("#polling-event");
  const $pollConfirm = `
  <div class="form-popup" id="polling">
    <form id="days-container">
      <div class="modal-body">
        <div class="voting-days">
          <div class="voting-header">
            <p id="date">Please Select Your Available Days:</p>
            <button type="button" onclick="closeForm()" id="close-button">&times;</button>
          </div>
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
  $(".form-popup").show();
  pollingConfirmation();
  $("#close-button").click((event) => {
    event.preventDefault;
    $("#polling-event").hide();
    if (window.location.pathname == "/") {
      $("#share-event").show();
    }
  });
  $("#submit-poll").click((event) => {
    event.preventDefault;
    $("#polling-event").hide();
  });
});
