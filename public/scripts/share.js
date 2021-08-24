const generateRandomString = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let $result = "";
  for (let i = 15; i > 0; i--) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return $result;
}

const eventConfirmation = function () {
  const $shareContainer = $('#share-event');
  const $confirm=`
    <div class="share-catchphrase">
      <p class="share-catchphrase-words">Your&nbsp;</p>
      <p class="share-catchphrase-eventure">Eventure</p>
      <p class="share-catchphrase-words">has been created!</p>
    </div>

    <div class="share-box">
      <div class="share-header">
        <p>Eventure Title is ready.</p>
        </div>
      <div class="share-body">
        <p class="secret-link">Secret Link: <input type="text" id="link" name="link" class="link" value="eventure.com/aj1poid1238lkjasdh123" readonly></p>
        <p>Share:</p>
        <a href="mailto:"><i class="icon-email fas fa-at"></i></a>

      </div>
    </div>
  `;
  return $shareContainer.html($confirm);
}

const submitButton = function () {
  $("#submit-button").click((event) => {
    event.preventDefault();
    $('#overlay').css('opacity', '0');
    $('#timeslot').css('display', 'none');
    $('#master-box').css('display', 'none');
    $('#timeslot').hide();
    $('#master-box').hide();
    $('.master-catchphrase').hide();
    eventConfirmation();
    $('#share-event').show();
  });
};

$(document).ready(function () {
  $('#share-event').hide();
  eventConfirmation();
  submitButton();
});
