const option = {
  year: "numeric",
  month: "short",
  day: "2-digit",
};

const getDate = (str) => {
  const date = new Date(str);
  return date.toLocaleDateString("en-Us", option);
};

const linkForSubmit = function (link) {
  $("#submit-button").click((event) => {
    event.preventDefault();
    window.location = `/result/${link}`;
  });
};

const linkForSubmitPoll = function (link) {
  $("#submit-poll").click((event) => {
    window.location = `/result/${link}`;
  });
};

const renderEvent = (link) => {
  $.get(`/api/event/${link}`).then((data) => {
    linkForSubmit(data.link)
    // linkForSubmitPoll(data.link)
    console.log(data)
    $(".master-header").css(
      "box-shadow",
      "0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)"
    );
    $(".title-create").text(data.title);
    $(".title-create").css("text-align", "center");
    $(".title-create").css("background-color", "transparent");
    $("#first-name").html(
      `<strong>${data.first_name}</strong> has invited you to an event!`
    );
    const startDate = getDate(data.start_date);
    const endDate = getDate(data.end_date);
    $("#event-date-range").html(
      `Dates: ${startDate} &nbsp - &nbsp; ${endDate}`
    );
    $("#event-detail").html(`Description: ${data.detail}`);
  });
};

const attendEvent = function () {
  const $eventContainer = $("#attend-event");
  const $attendee = `
  <div class="master-catchphrase">
    <p class="master-catchphrase-words">You're invited to an&nbsp;</p>
    <p class="master-catchphrase-eventure">Eventure</p>
    <p class="master-catchphrase-words">!</p>
  </div>
  <div class="master-box" id="master-box">
    <div class="title" id="new-event">
      <div class="master-header">
        <p class="title-create"></p>
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
          <div class="next">
            <button type="submit" id="next-button" onclick="openForm()">Next</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  `;
  return $eventContainer.html($attendee);
};

const addVoteslot = function (dayStr, index) {
  const $voteContainer = $("#generate-voteslot");
  const $newVoteslot = `
  <div class="voteslots">
    <h3>${dayStr}</h3>
    <div class="vote-checkbox">
      <small>Select:</small>
      <input type="checkbox" id="day${index}" name="day${index}" value="${dayStr}">
    </div>
  </div>
  `;
  return $voteContainer.append($newVoteslot);
};

const submitPoll = function () {
  $("#submit-poll").on("click", function (event) {
    event.preventDefault();
    let votedDays = [];
    $("#generate-voteslot")
      .find("input")
      .each(function (input) {
        const formattedDate = new Date($(this).val());
        const dateISO = formattedDate.toISOString();
        if (this.checked) {
          votedDays.push(dateISO);
        }
      });
    console.log(votedDays);
    $.ajax({
      url: '/api/dates',
      type: 'POST',
      data: { myarr: votedDays }
    });
  });
};

const nextButton = function () {
  $("#next-button").click((event) => {
    event.preventDefault();
    $("#attend-event").fadeOut(400);
    $(".form-popup").fadeIn();
    $("#polling-event").fadeIn(500);
    // setTimeout(() => {
    // }, 300);
    const serialize = $("#guest-details").serialize();
    $.post("/create", serialize).done((result) => {
      console.log("/user/create: ", result);
    });
    $.get("/polls")
      .then((dayArray) => {
        dayArray.forEach((day, order) => {
          const dayDate = new Date(Date.parse(day.day))
            .toString()
            .split(" ")
            .splice(0, 4)
            .join(" ");
          addVoteslot(dayDate, order);
        });
      })
      .then(() => {
        submitPoll();
      });
  });
};

$(document).ready(function () {
  $("#attend-event").hide();
  $("#create-event").hide();
  attendEvent();
  nextButton();
});
