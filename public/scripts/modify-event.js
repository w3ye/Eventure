const modifyButton = function() {
  $("#modify-button").click((event) => {
    event.preventDefault();
    $('#share-event').hide();
    $('#master-box').fadeIn();
  });
}

$(document).ready(function() {
  $('#share-event').hide();
  modifyButton();
});
