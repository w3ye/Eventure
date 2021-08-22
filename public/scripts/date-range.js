$(function() {
  $('.datefilter').dateRangePicker({
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
      format: "mm-dd-yyyy",
      minDate: 0,
      clearBtn: true,
      multidate: false,
      multidateSeparator: ",",
      toggleActive: true,
      startDate: '08-10-2021',
      endDate: '09-10-2021'
  });
  $('.datefilter').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });
  $('.datefilter').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
  });
});
