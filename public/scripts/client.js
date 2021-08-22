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
    // $('.master-header').css('border-bottom', '1px solid #9B97A8')
    $('.master-header').css('box-shadow', '0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)')
  });

  $('.submission').on('click', () => {
    $('.catchphrase').hide();
  });

});

