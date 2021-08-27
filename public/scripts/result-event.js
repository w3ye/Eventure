const renderResult = (link) => {
  $.get(`/api/event/${link}`).then((data) => {
    console.log(data)
    $('.title-create').text(data.title);
    $('.title-create').css("background-color", "transparent");
    $(".title-create").css(
      "box-shadow",
      "0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)"
    );
    // $('#first-name').html(`<strong>${data.first_name}</strong> has invited you to an event!`);
    // const startDate = getDate(data.start_date);
    // const endDate = getDate(data.end_date);
    // $('#event-date-range').html(`Dates: ${startDate} &nbsp - &nbsp; ${endDate}`)
    // $('#event-detail').html(`Description: ${data.detail}`);
  });
}

const eventResult = function() {
  const $resultContainer = $('#result-event');
  const $result = `
    <div class="share-catchphrase">
      <p class="share-catchphrase-words">Get ready for your&nbsp;</p>
      <p class="share-catchphrase-eventure">Eventure</p>
    </div>
    <div class="share-box">
      <p class="title-create"></p>
      <div class="share-body">
        <p>Results:</p>
        <div class="share-row">
        </div>
        <div class="last-step">
          <button type="submit" id="edit-button" onclick="openForm()">Edit</button></a>
        </div>
      </div>
    </div>
  `;
  return $resultContainer.html($result);
};

// WHEN MODAL IS ONLY ACTIVATED
// const submitButton = function() {
//   $("#submit-button").click((event) => {
//     event.preventDefault();
//     $('#overlay').css('opacity', '0');
//     $('#timeslot').hide();
//     $('#master-box').hide();
//     $('.master-catchphrase').hide();
//     // $('#share-event').show();
//     $('#result-event').show();
//     const serialize = $("#time-container").serialize();
//     console.log(serialize)
//   });
// };

const editButton = function() {
  $("#edit-button").click((event) => {
    event.preventDefault();
    console.log("EDIT!")
    $('#add-timeslots').show();
  });
}

$(document).ready(function() {

  $('#result-event').hide();
  eventResult();
  editButton();
});
