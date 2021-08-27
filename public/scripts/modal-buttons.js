const openForm = function() {
  document.getElementById("overlay").style.opacity = "1";
  document.getElementById("polling-event").style.display = "block";
}

const closeForm = function() {
  document.getElementById("overlay").style.opacity = "0";
  document.getElementById("polling-event").style.display = "none";
}

$(document).ready(function() {
  openForm();
  closeForm();
});
