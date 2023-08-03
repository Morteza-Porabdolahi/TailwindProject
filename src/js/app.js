import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const handleNavbarPosition = (function () {
  const navbarElem = document.querySelector('nav');

  return function () {
    const scrollTop = document.documentElement.scrollTop;

    navbarElem.classList[scrollTop <= 0 ? 'remove' : 'add']('active');
  };
})();

window.addEventListener('load', handleNavbarPosition);
window.addEventListener('scroll', handleNavbarPosition);

// Swiper Initialize
(function () {
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__bullet',
      bulletActiveClass: 'pagination__bullet--active',
      bulletElement: 'div',
    },
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
