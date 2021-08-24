$(() => {
  const $starsContainer = $('#stars');
  const $stars = `
    <div class="star2"></div>
    <div class="star4"></div>
    <div class="star5"></div>
    <div class="star6"></div>
    <div class="star7"></div>
    <div class="star8"></div>
    <div class="star9"></div>
    <div class="star10"></div>
    <div class="star11"></div>
  `;
  return $starsContainer.html($stars);
});
