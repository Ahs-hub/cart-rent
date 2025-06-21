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

//#region Form Toggle (Taxi, Rent Car, Sightseeing, Activities)
document.addEventListener('DOMContentLoaded', function () {
  const forms = {
    taxiBtn: "taxiForm",
    rentCarBtn: "rentCarForm",
    sightseeingBtn: "sightseeingForm",
    activitiesBtn: "activitiesForm"
  };

  Object.keys(forms).forEach(btnId => {
    const btn = document.getElementById(btnId);
    const formId = forms[btnId];

    if (btn && document.getElementById(formId)) {
      btn.addEventListener("click", function () {
        // Reset all buttons and forms
        Object.keys(forms).forEach(b => {
          document.getElementById(b).classList.remove("active");
          document.getElementById(forms[b]).classList.add("d-none");
        });

        // Activate selected
        this.classList.add("active");
        document.getElementById(formId).classList.remove("d-none");
      });
    }
  });

  const sameLocationCheck = document.getElementById('sameLocationCheck');
  const returnLocationGroup = document.getElementById('returnLocationGroup');

  if (sameLocationCheck && returnLocationGroup) {
    sameLocationCheck.addEventListener('change', function () {
      returnLocationGroup.style.display = this.checked ? 'none' : 'block';
    });
  }
});
//#endregion Form Toggle

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
