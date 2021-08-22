$(document).ready(function () {
  const dateFormat = "mm/dd/yy",
    from = $("#from")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
        minDate: 0,
      })
      .on("change", function() {
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#to").datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 2,
    })
    .on("change", function() {
      from.datepicker("option", "maxDate", getDate(this));
    });

  const getDate = function(element) {
    let date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch(error) {
      date = null;
    }
    console.log(date)
    return date;
  }


  $("#deadline")
    .datepicker({
      minDate: 0,
      maxDate: "+1M +10D",
      startDate: Date.now(),
    });
});

// $(function() {
//   $("#datepicker").datepicker({
//     minDate: 0,
//     dateFormat: "yy-mm-dd",
//     onSelect: function(date, datepicker) {
//       let dependent= $(this).data('dependent');
//       let thisDate = $(this).val();
//       $(dependent).datepicker("option", "minDate", thisDate);
//       $(dependent).datepicker('refresh');
//     }
//   });
//   $("#datepicker2").datepicker({
//     dateFormat: "yy-mm-dd"
//   });
// });
