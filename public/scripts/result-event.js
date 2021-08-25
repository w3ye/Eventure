const eventResult = function() {
  const $resultContainer = $('#result-event');
  const $result = `
    <div class="share-catchphrase">
      <p class="share-catchphrase-words">Get ready for your&nbsp;</p>
      <p class="share-catchphrase-eventure">Eventure</p>
    </div>
    <div class="share-box">
      <p class="eventure-title">Eventure Title: Midterm Meeting</p>
      <div class="share-body">
        <p>Results:</p>
        <div class="share-row">
        </div>
        <div class="last-step">
          <a href="#timeslots"><button type="submit" id="edit-button" onclick="openForm()">Edit</button></a>
        </div>
      </div>
    </div>
  `;
  return $resultContainer.html($result);
};

// WHEN MODAL IS ONLY ACTIVATED
const submitButton = function() {
  $("#submit-button").click((event) => {
    event.preventDefault();
    $('#overlay').css('opacity', '0');
    $('#timeslot').hide();
    $('#master-box').hide();
    $('.master-catchphrase').hide();
    // $('#share-event').show();
    $('#result-event').show();
    const serialize = $("#time-container").serialize();
    console.log(serialize)
  });
};

const editButton = function() {
  $("#edit-button").click((event) => {
    event.preventDefault();
    console.log("EDIT!")
    // $('#result-event').hide();
    // $('#master-box').fadeIn();
  });
}

$(document).ready(function() {
  $('#result-event').hide();
  submitButton();
  eventResult();
  editButton();
});
