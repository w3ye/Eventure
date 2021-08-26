const url = window.location.pathname;

const getEventLink = () => {
  $.get(`/api/event/${link}`).then((data) => {
    console.log(data.detail);
  });
}

const attendEvent = function(event) {
  // let $eventInformation;
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
        <p class="title-create">
      </div>
      <div class="master-body">
        <p class="details">Name invited you to this event!</p>
        <p class="details">Dates: to </p>
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
  $('#attend-event').hide();
  $('#create-event').hide();
  attendEvent();
  nextButton();
});
