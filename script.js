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
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 3000,         // Time between slides in milliseconds (3000 = 3 seconds)
    disableOnInteraction: false,  // Keeps autoplay after user swipes
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
//#endregion Carousel
