$(document).ready(function () {
  const dateFormat = "mm/dd/yy",
    from = $("#from").datepicker({
      changeMonth: true,
      numberOfMonths: 2,
      minDate: 0,
      onSelect: function () {
        to.datepicker('option', 'minDate', from.datepicker("getDate"));
        deadline.datepicker('option', 'maxDate', from.datepicker("getDate"));
      }
    }).on("change", function () {
      to.datepicker("option", "minDate", getDate(this));
    }),

    to = $("#to").datepicker({
      changeMonth: true,
      numberOfMonths: 2,
    }).on("change", function () {
      from.datepicker("option", "maxDate", getDate(this));
    });

  deadline = $("#deadline").datepicker({
    minDate: 0
  });

  const getDate = function (element) {
    let date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }
    return date;
  };
});
