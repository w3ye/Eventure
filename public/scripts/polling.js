const resultButton = function() {
  $("#result-button").click((event) => {
    event.preventDefault();
    console.log('clicked result')
    // $('#share-event').hide();
    // $('').fadeIn();
    $.get("/polls").then((daysObj) => {
      console.log('clicked result');
      const startDate = days.start_date.split('T')[0]
      const dayRange = days.range;

    });
  });
}

$(document).ready(function() {
  $("#share-event").hide();
  resultButton();
});



//TEMPORARILY GETTING POLL INFO IN HERE

//TEMPORARY CODE BLOCK
