const modifyButton = function() {
  $("#modify-button").click((event) => {
    event.preventDefault();
    // $('#share-box').hide();
    console.log("hey!!")
    // $('#master-box').show();
    // $('.master-catchphrase').show();
  });
}

$(() => {
  $("#modify-button").on('submit', (event) => {
    event.preventDefault();
    // const serialized = $form.serialize();
    $('#share-box').hide();
    $('#master-box').show();
    $('.master-catchphrase').show();

      // });
  });
});
