const url = window.location.pathname;

const option = {
  year: 'numeric',
  month: 'short',
  day: '2-digit'
};

const getDate = (str) => {
  const date = new Date(str);
  return date.toLocaleDateString('en-Us', option);
};

const renderEvent = (link) => {
  $.get(`/api/event/${link}`).then((data) => {
    console.log(data)
    $('#title-create').text(data.title);
    $('#first-name').html(`<strong>${data.first_name}</strong> has invited you to an event!`);
    const startDate = getDate(data.start_date);
    const endDate = getDate(data.end_date);
    $('#event-date-range').html(`Dates: ${startDate} &nbsp - &nbsp; ${endDate}`)
    $('#event-detail').html(`Description: ${data.detail}`);
  });
}

const attendEvent = function(event) {
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
        <p class="title-create" id="title-create"></p>
      </div>
      <div class="master-body">
        <p class="details" id="first-name"></p>
        <p class="details" id="event-date-range"></p>
        <p class="details" id="event-detail">Event Description:</p>
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
    $('#attend-event').hide();
    const serialize = $("#guest-details").serialize();
    $.post('/user/create', serialize).done((result) => {
      console.log(result);
    });
  });
};

$(document).ready(function() {
  const link = url.substring(7, 22);
  renderEvent(link);
  $('#attend-event').hide();
  $('#create-event').hide();
  attendEvent();
  nextButton();
});
