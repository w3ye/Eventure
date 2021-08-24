$(document).ready(function () {
  $("#start").timepicker({
    timeFormat: "hh:mm a",
    interval: 15,
    maxTime: "11:45 PM",
    startTime: "12:00 AM",
    endTime: "11:45 PM",
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });

  $("#start").timepicker("option", "change", function (time) {
    const startHour = parseInt($("#start").val().substring(0, 2));
    const startMinutes = $("#start").val().substring(2, 8);
    const endMinTime = startHour.toString().concat(startMinutes + 0.15);

    $("#end").timepicker("option", "minTime", endMinTime);
    $("#end").timepicker("setTime", endMinTime);
  });

  $("#end").timepicker({
    timeFormat: "hh:mm a",
    interval: 15,
    maxTime: "11:45 PM",
    endTime: "11:45 PM",
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });
});
