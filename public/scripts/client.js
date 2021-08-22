const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const closeModalButtons = document.querySelectorAll('[data-close-button]')

const renderTimeslots = function () {
  $('#add-timeslots').append(addTimeslots());
}

const addTimeslots = function () {
  const $timeslot = $('<section>').addClass('add-timeslots');
  const html = `
    <div class="modal" id="modal">
      <div class="modal-header">
        <p class="fix-title">Eventure Title</p>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="submit">
        <button type="submit" form="nameform" value="Submit" class="button-submit">Submit</button>
      </div>
    </div>
  `;
  return $timeslot.html(html);
}

$(document).ready(function() {
  $('.master-body').hide();
  $('.title-create').on('click', () => {
    $('.master-body').slideDown();
    $('.master-body').show();
    // $('.master-header').css('border-bottom', '1px solid #9B97A8')
    $('.master-header').css('box-shadow', '0 50px 200px -200px rgba(0,0,0,0.5), 0 10px 10px -10px rgba(0,0,0,0.3)')
  });

  $('.button-next').on('click', () => {
    $('.catchphrase').hide();
    renderTimeslots();
    $('#overlay').css('opacity', '1');
  });
});
