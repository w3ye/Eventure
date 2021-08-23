const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const enterTitle = function() {
  $('.title-create').on('click', () => {
    $('.master-body').slideDown();
    $('.master-body').show();
    $('.master-header').css('box-shadow', '0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)')
  });
}

$(document).ready(function() {
  $('.master-body').hide();
  enterTitle();
});
