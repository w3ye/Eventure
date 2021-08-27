const renderResult = (link) => {
  $.get(`/api/rank/${link}`).then((data) => {
    console.log(data)
    data.forEach(i => {
      const d = new Date(i.a_day);
      const date = d.toString().substring(0,10);
      $('.date-row').text(`${date}:`)
      $('.count-row').text(i.count);
    });
    // $('.title-create').text(data.title);
    // $('.title-create').css("background-color", "transparent");
    $(".title-create").css(
      "box-shadow",
      "0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)"
    );
  });

  $.get(`/api/event/${link}`).then((data) => {
    $('.title-create').text(data.title);
     $('.title-create').css("background-color", "transparent");
     $(".title-create").css(
       "box-shadow",
       "0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)")
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
          <table>
            <tbody>
            </tbody>
          </table>
        </div>
        <div class="last-step">
          <button type="submit" id="edit-button" onclick="openForm()">Edit</button></a>
        </div>
      </div>
    </div>
  `;
  return $resultContainer.html($result);
};

const generateResults = function() {
  const $generateResultContainer = $('tbody');
  const $eachResult = `
    <tr class="time-row">
      <td class="date-row">:</td>
      <td class="count-row"></td>
    </tr>
  `;

  return $generateResultContainer.append($eachResult);
}

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
    $('#polling-event').show();
    $('#polling-event').fadeIn();
    $('.form-popup').show();
    $(".form-popup").fadeIn();

  });
}

$(document).ready(function() {
  $('#result-event').hide();
  eventResult();
  editButton();
  generateResults();
});
