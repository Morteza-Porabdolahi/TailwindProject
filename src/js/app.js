const handleNavbarPosition = (function () {
  const navbarElem = document.querySelector('nav');

  return function () {
    const scrollTop = document.documentElement.scrollTop;

    navbarElem.classList[scrollTop <= 0 ? 'remove' : 'add']('active');
  };
})();

window.addEventListener('load', handleNavbarPosition);
window.addEventListener('scroll', handleNavbarPosition);
