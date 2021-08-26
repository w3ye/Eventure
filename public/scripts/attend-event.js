const attendEvent = function(event) {
  $.get("/create").then((event) => {
    console.log(event);
  });

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
        <p class="details">Name invited you to this event!${event}</p>
        <p class="details">Dates: 09/03/2021 - 09/07/2021</p>
        <p class="details">Event Description:</p>
        <p class="details">Name:</p>
      <form id="guest-details">
          <input name="name" id="guest-name" class="guest" maxlength="30" required></input>
          <p class="details">E-mail:</p>
          <input name="email" id="guest-email" class="guest" maxlength="50" required></input>
        </form>
        <div class="next">
          <button type="submit" id="next-button" onclick="openForm()">Next</button>
        </div>
      </div>
    </div>
  </div>
  `;
  return $eventContainer.html($attendee);
};



const nextButton = function() {
  $("#next-button").click((event) => {
    event.preventDefault();
    const serialize = $("#guest-details").serialize();
    console.log(serialize);
  });
};

$(document).ready(function() {

  attendEvent();
  $('.master-header').css('box-shadow', '0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)');
  nextButton();
});
