const eventConfirmation = function () {
  const $shareContainer = $('#share-event');

  const $confirm=`
    <div class="master-body">
      <p>Event title has been made!</p>
      <p>Secret Link:</p>
      <p>Share:</p>
    </div>
  `;

  return $shareContainer.html($confirm);
}

const submitButton = function () {
  $("#submit-button").click((event) => {
    event.preventDefault();
    $('#overlay').css('opacity', '0');
    $('#timeslot').css('display', 'none');
    $('#timeslot').hide();
    $('.catchphrase').hide();
    $('#master-box').css('display', 'none');
    $('#master-box').hide();
  });
};

$(document).ready(function () {
  submitButton();
});
