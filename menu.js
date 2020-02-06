let menu = document.querySelector('.main-menu-toggle');
let menuLine = document.querySelector('.main-menu-toggle__line');
menu.addEventListener('click', function (enevt) {
  event.preventDefault;
  menuLine.classList.toggle('menu-active');
  document.querySelector('.main-menu__nav').classList.toggle('menu-active__nav');
  onscroll = function () { return false; }
});

