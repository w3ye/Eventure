// // const openModalButtons = document.querySelector('#next-button')
// // const closeModalButtons = document.querySelector('#close-button')
// // const overlay = document.getElementById('overlay')

// // // openModalButtons.forEach($('#next-button') => {
// // //   $('#next-button').addEventListener('click', () => {
// // //     const modal = document.querySelector(button.dataset.modalTarget)
// // //     openModal(modal)
// // //     console.log("click!")
// // //   })
// // // })

// // openModalButtons.addEventListener('click', () => {
// //   const modal = document.querySelector(openModalButtons.dataset.modalTarget)
// //   openModal(modal);
// //   console.log("click!")
// // })

// // // $('.next-button').on('click', () => {
// // //   // const modal = document.querySelector(button.dataset.modalTarget)
// // //   openModal($('#modal'));
// // //   console.log("click!")
// // // })

// // // $('.close-button').addEventListener('click', () => {
// // //   const modal = button.closest('.modal')
// // //   closeModal(modal)
// // // });

// // // $('.close-button').addEventListener('click', () => {
// // //   $('#modal').classList.remove('active')
// // //   $('#modal').hide();
// // //   closeModal($('#modal'))
// // // });

// // // closeModalButtons.forEach(button => {
// // //   button.addEventListener('click', () => {
// // //     const modal = button.closest('.modal')
// // //     closeModal(modal)
// // //   })
// // // })

// // function openModal(modal) {
// //   if (modal == null) return
// //   modal.classList.add('active')
// //   overlay.classList.add('active')
// // }

// // function closeModal(modal) {
// //   if (modal == null) return
// //   modal.classList.remove('active')
// //   overlay.classList.remove('active')
// // }

// // // const enterTitle = function() {
// // //   $('.close-button').on('click', () => {
// // //     $('.master-body').slideDown();
// // //   });
// // // }

// const openForm = function() {
//   document.getElementById("overlay").style.opacity = "1";
//   document.getElementById("myForm").style.display = "block";
//   document.getElementById("modal").style.display = "block";
// }

// const closeForm = function() {
//   document.getElementById("modal").style.display = "none";
//   document.getElementById("myForm").style.display = "none";
// }

// // function openForm() {
// //   document.getElementById("overlay").style.opacity = "1";
// //   document.getElementById("myForm").style.display = "block";
// //   document.getElementById("modal").style.display = "block";
// // }

// // function closeForm() {
// //   document.getElementById("overlay").style.opacity = "0";
// //   document.getElementById("myForm").style.display = "none";
// //   document.getElementById("modal").style.display = "none";
// // }

// $(() => {

//   // const openForm = function() {
//   //   document.getElementById("overlay").style.opacity = "1";
//   //   document.getElementById("myForm").style.display = "block";
//   //   document.getElementById("modal").style.display = "block";
//   // }

//   // const closeForm = function() {
//   //   document.getElementById("modal").style.display = "none";
//   //   document.getElementById("myForm").style.display = "none";
//   // }

//   $('.open-button').on('click', {
//     openForm();
//   })

//   $('.close-button').on('click', {
//     closeForm();
//   })


// });
