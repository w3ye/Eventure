const rerunTimepicker = function() {
  $(".start").timepicker({
    timeFormat: "hh:mm a",
    interval: 15,
    maxTime: "11:45 PM",
    startTime: "12:00 AM",
    endTime: "11:45 PM",
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });

  $(".start").timepicker("option", "change", function(time) {
    const startHour = parseInt($(".start").val().substring(0, 2));
    const startMinutes = $(".start").val().substring(2, 8);
    const endMinTime = startHour.toString().concat(startMinutes + 0.15);

    $(".end").timepicker("option", "minTime", endMinTime);
    $(".end").timepicker("setTime", endMinTime);
  });

  $(".end").timepicker({
    timeFormat: "hh:mm a",
    interval: 15,
    maxTime: "11:45 PM",
    endTime: "11:45 PM",
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });
};

const ownerModal = function() {
  const $dateTimeContainer = $('#add-timeslots');
  const $selections = `
    <div class="form-popup" id="timeslot">
      <form action="/" id="time-container">
        <div class="modal-header">
          <p class="fix-title">Eventure Title</p>
          <button type="button" onclick="closeForm()" id="close-button">&times;</button>
        </div>
        <div class="modal-body">
          <div class="meeting-dates">
            <p id="date">Date:</p>
            <!-- <div id="add-timeslot">
              <div class="start-row">
                <label for="start">Start Time:</label>
                <input type="text" class="start" name="start" />
              </div>
              <div class="end-row">
                <label for="end">End Time:</label>
                <input type="text" class="end" name="end" />
              </div>
            </div>
            <div id="generate-timeslot">
            </div>
            <button type="submit" class="add-time">Add</button>
            <button type="submit" class="remove-time">Remove</button>
          </div> -->
          <button type="submit" id="submit-button"><a href="#success">Submit</a></button>
        </div>
      </form>
    </div>
  `;
  return $dateTimeContainer.html($selections);
}

const guestModal = function() {
  const $dateTimeContainer = $('#add-timeslots');
  const $selections = `
    <div class="form-popup" id="timeslot">
      <form action="/" id="time-container">
        <div class="modal-header">
          <p class="fix-title">Eventure Title</p>
          <button type="button" onclick="closeForm()" id="close-button">&times;</button>
        </div>
        <div class="modal-body">
          <div class="meeting-dates">
            <p id="date">Date:</p>
          <button type="submit" id="submit-button"><a href="#success">Submit</a></button>
        </div>
      </form>
    </div>
  `;
  return $dateTimeContainer.html($selections);
}

const addMeetingTime = function() {
  const $timeslotContainer = $('#generate-timeslot');

  const $newMeetingTime = `
  <div class="new-meeting-time">
    <div class="start-row">
      <label for="start">Start Time:</label>
      <input type="text" class="start" name="start" />
    </div>
    <div class="end-row">
      <label for="end">End Time:</label>
      <input type="text" class="end" name="end" />
    </div>
  </div>
  `;
  return $timeslotContainer.append($newMeetingTime);
};

const removeMeetingTime = function() {
  const $timeContainers = $('.new-meeting-time');
  for (const container of $timeContainers) {
    return container.remove();
  }
};

$(document).ready(function() {
  $('#timeslot').hide();
  $('#overlay').hide();

  $('.add-time').on('click', (event) => {
    event.preventDefault();
    addMeetingTime();
    rerunTimepicker();
  });

  $('.remove-time').on('click', (event) => {
    event.preventDefault();
    removeMeetingTime();
  });
});
