const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    console.log("click!")
  })
})

$('.next-button').addEventListener('click', () => {
  const modal = document.querySelector(button.dataset.modalTarget)
  openModal(modal);
  console.log("click!")
})

// $('.close-button').addEventListener('click', () => {
//   const modal = button.closest('.modal')
//   closeModal(modal)
// });

$('.close-button').addEventListener('click', () => {
  $('#modal').classList.remove('active')
  $('#modal').hide();
  closeModal($('#modal'))
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

const enterTitle = function() {
  $('.close-button').on('click', () => {
    $('.master-body').slideDown();
  });
}
