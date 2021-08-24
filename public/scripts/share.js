var a2a_config = a2a_config || {};
a2a_config.onclick = 1;

const generateRandomString = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = "";
  for (let i = 15; i > 0; i--) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

const randomLink = generateRandomString();

/* LINKS FOR REFERENCE
* Facebook - https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.amazon.ca
* Messenger - https://www.facebook.com/dialog/send?app_id=140586622674265&link=https%3A%2F%2Fwww.google.com.&redirect_uri=https%3A%2F%2Fwww.addthis.com%2Fmessengerredirect
* Twitter - https://twitter.com/intent/tweet?text=Join%20My%20Eventure!&url=https%3A%2F%2Fwww.amazon.ca&related=
*/

const eventConfirmation = function() {
  const $shareContainer = $('#share-event');
  const $confirm = `
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
        <p class="secret-link">Secret Link: <input type="text" id="link" name="link" class="link" value="${randomLink}" readonly></p>
        <div class="share-row">
          Share:
          <a title="Mail" href="mailto:?subject=Eventure Invite&body=Hey! Check out my event here: ${randomLink}"><i class="icon fas fa-at"></i></a>
          <a target="_blank" title="Facebook" href="https://www.facebook.com/sharer/sharer.php?u=${randomLink}" class="fb-xfbml-parse-ignore"><i class="icon fab fa-facebook"></i></a>
          <a target="_blank" title="Messenger" href="https://www.facebook.com/dialog/send?app_id=140586622674265&link=${randomLink}.&redirect_uri=https%3A%2F%2Fwww.addthis.com%2Fmessengerredirect"><i class="icon fab fa-facebook-messenger"></i></a>
          <a target="_blank" title="Twitter" href="https://twitter.com/intent/tweet?text=Join%20My%20Eventure!&url=${randomLink}"><i class="icon fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  `;
  return $shareContainer.html($confirm);
};

const submitButton = function() {
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

$(document).ready(function() {
  $('#share-event').hide();
  eventConfirmation();
  submitButton();
});

// <!-- AddToAny BEGIN -->
// <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
// <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
// <a class="a2a_button_copy_link"></a>
// <a class="a2a_button_email"></a>
// <a class="a2a_button_linkedin"></a>
// <a class="a2a_button_facebook_messenger"></a>
// <a class="a2a_button_whatsapp"></a>
// </div>
// <script>
// var a2a_config = a2a_config || {};
// a2a_config.onclick = 1;
// </script>
// <script async src="https://static.addtoany.com/menu/page.js"></script>
// <!-- AddToAny END -->
