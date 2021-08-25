$(() => {
  const $footer = $('footer');
  const $madeBy = `
    <div>
    Github:
    <a href="https://github.com/zeeplo">@zeeplo</a>,
    <a href="https://github.com/rafay-siddiqui/">@rafay-siddiqui</a>,
    <a href="https://github.com/diannegabriel">@diannegabriel</a>
    </div>
    <div>
    Made by The Eventurers
    </div>
  `;
  return $footer.html($madeBy);
});
