//#region Hamburger Icon Toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  if (!toggler) return;

  const icon = toggler.querySelector('.icon-toggler');
  const navCollapse = document.querySelector('#navbarNav');

  if (navCollapse) {
    navCollapse.addEventListener('show.bs.collapse', function () {
      icon.classList.remove('bx-menu');
      icon.classList.add('bx-x');
    });

    navCollapse.addEventListener('hide.bs.collapse', function () {
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu');
    });
  }
});
//#endregion Hamburger Icon Toggle



//#region Carousel (Empty Region - add your logic here)
        // Initialize Swiper
        const swiper = new Swiper('.mySwiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
              delay: 4000,
              disableOnInteraction: false,
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          breakpoints: {
              640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
              },
              768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
              },
              1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
              },
              1200: {
                  slidesPerView: 4,
                  spaceBetween: 30,
              },
          },
      });

      // Add click handlers for buttons
      document.querySelectorAll('.square-yellow-btn').forEach(button => {
          button.addEventListener('click', function() {
              const serviceName = this.closest('.car-card').querySelector('h5').textContent;
              alert(`Learn more about: ${serviceName}`);
          });
      });

      document.querySelector('.view-all-btn').addEventListener('click', function() {
          alert('Redirecting to all services page...');
      });
//#endregion Carousel
