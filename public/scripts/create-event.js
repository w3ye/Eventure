const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const eventCreation = function() {
  const $eventContainer = $('#create-event');

  const $creation =`
  <div class="catchphrase">
  <p class="catchphrase-words">Start your&nbsp;</p>
    <p class="catchphrase-eventure">
    Eventure
  </p>
  </div>

  <!-- CREATE EVENT -->

  <div class="master-box" id="master-box">
    <div class="master-header">
      <form class="title" id="new-event">
      <!-- <div class="title"> -->
        <!-- <form class="" action="" method="post"> -->
        <label for="title">
          <input type="text" name="title" class="title-create" placeholder="Eventure Title" maxlength="30" autocomplete="off" required>
        </label>
        <!-- </form> -->
      <!-- </div> -->
    </div>
    <!-- <form method="POST" action="/create" class="master-body" id="new-event"> -->

    <div class="master-body">
      <p>Select Date(s):</p>
      <div class="indent date">
        <label for="from">From</label>
        <input type="text" id="from" name="from" required>
        <label for="to">To</label>
        <input type="text" id="to" name="to" required>
      </div>
      <p class="details">Submission Deadline:</p>
      <div class="indent date">
        <label for="deadline"><i>(Optional)</i></label>
        <input name="deadline" type="text" id="deadline">
      </div>
      <p class="details">Event Description:</p>
      <textarea name="description" id="event-details" maxlength="250" required></textarea>
      <p class="details">Name:</p>
      <input name="name" id="owner-name" class="owner" maxlength="30" required></textarea>
      <p class="details">E-mail:</p>
      <input name="email" id="owner-email" class="owner" maxlength="50" required></textarea>

      <div class="next">
        <button type="submit" data-modal-target="#modal" id="next-button">Next</button>
      </div>
    <!-- </div> -->
    </form>
      <!-- <div class="button">
        <button type="submit" id="next-button">Next</button>
      </div>
    </from> -->
  </div>
  `;
  // $('.master-body').hide();
  // $('.master-body').css('display', 'none');

  return $eventContainer.html($creation)
}

const enterTitle = function() {
  $('.title-create').on('click', () => {
    $('.master-body').slideDown();
    $('.master-body').show();
    $('.master-header').css('box-shadow', '0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)')
  });
}

$(document).ready(function() {
  eventCreation();
  $('.master-body').hide();
  enterTitle();
});
