const attendEvent = function() {
  const $eventContainer = $('#attend-event');
  const $attendee = `
  <div class="master-catchphrase">
    <p class="master-catchphrase-words">You're invited to an&nbsp;</p>
    <p class="master-catchphrase-eventure">Eventure</p>
    <p class="master-catchphrase-words">!</p>
  </div>
  <div class="master-box" id="master-box">
    <div class="title" id="new-event">
      <div class="master-header">
        <p class="title-create">Eventure Title
      </div>
      <div class="master-body">
        <p class="details">Select Date(s):</p>
        <div class="indent date">
          <label for="from">From:</label>
          <input type="text" id="from" name="from" required>
          <label for="to">To:</label>
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
          <a href="#timeslot"><button type="submit" id="next-button" onclick="openForm()">Next</button></a>
        </div>
      </div>
    </div>
  </div>
  `;
  return $eventContainer.html($attendee);
};

// const enterTitle = function() {
//   $('.title-create').on('click', () => {
//     $('.master-body').slideDown();
//     $('.master-body').show();
//     $('.master-header').css('box-shadow', '0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)');
//   });
// };

const nextButton = function() {
  $("#next-button").click((event) => {
    event.preventDefault();
    const serialize = $("#new-event").serialize();
    console.log(serialize);
  });
};

$(document).ready(function() {
  attendEvent();
  $('.master-header').css('box-shadow', '0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)');
  // enterTitle();
  nextButton();
});
