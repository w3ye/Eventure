$(function() {
  $('.datefilter').daterangepicker({
    // autoUpdateInput: false,
    // locale: {
    //   cancelLabel: 'Clear'
    // },
    // "minDate": "-1d",
    // minDate: today,
    // minDate: Date.now(),
    // locale: {
    //   format: 'YYYY/MM/DD'
    // },
    // timePicker: true,
    // timePickerIncrement: 5,
    // timePicker12Hour: true,
    // timePickerSeconds: false,
    // minDate: 0,
      autoclose: true,
      todayHighlight: true,
      format: "dd-mm-yyyy",
      minDate: 0,
      clearBtn: true,
      multidate: false,
      multidateSeparator: ",",
      toggleActive: true
  });
  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });
  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
  });
});
