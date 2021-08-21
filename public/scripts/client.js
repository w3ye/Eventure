const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function() {
  $('.master-body').hide();
  $('.title').on('click', () => {
    $('.master-body').slideDown();
    $('.master-body').show();
    $('.master-header').css('border-bottom', '1px solid #9B97A8')
  });
});
