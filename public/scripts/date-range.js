// $(function() {
//   $('.datefilter').dateRangePicker({
//     // autoUpdateInput: false,
//     // locale: {
//     //   cancelLabel: 'Clear'
//     // },
//     // "minDate": "-1d",
//     // minDate: today,
//     // minDate: Date.now(),
//     // locale: {
//     //   format: 'YYYY/MM/DD'
//     // },
//     // timePicker: true,
//     // timePickerIncrement: 5,
//     // timePicker12Hour: true,
//     // timePickerSeconds: false,
//     // minDate: 0,
//       autoclose: true,
//       todayHighlight: true,
//       format: "mm-dd-yyyy",
//       minDate: 0,
//       clearBtn: true,
//       multidate: false,
//       multidateSeparator: ",",
//       toggleActive: true,
//       startDate: '08-10-2021',
//       endDate: '09-10-2021'
//   });
//   $('.datefilter').on('apply.daterangepicker', function(ev, picker) {
//     $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
//   });
//   $('.datefilter').on('cancel.daterangepicker', function(ev, picker) {
//     $(this).val('');
//   });
// });

$(document).ready(function () {
  const dateFormat = "mm/dd/yy",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
        minDate: 0
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 2
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
});
