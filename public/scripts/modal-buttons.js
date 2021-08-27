const openForm = function() {
  document.getElementById("overlay").style.opacity = "1";
  // document.getElementById("timeslot").style.display = "block";
}

const closeForm = function() {
  document.getElementById("overlay").style.opacity = "0";
  // document.getElementById("timeslot").style.display = "none";
}

$(document).ready(function() {
  openForm();
  closeForm();
});
