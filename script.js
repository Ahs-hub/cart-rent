//#region harmburger -> cross
document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const icon = toggler.querySelector('.icon-toggler');
    const navCollapse = document.querySelector('#navbarNav');

    // Toggle icon on collapse event
    navCollapse.addEventListener('show.bs.collapse', function () {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    });

    navCollapse.addEventListener('hide.bs.collapse', function () {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    });
});
//#endregion harmburger -> cross



//#region Form (rent,taxi,...)
const forms = {
    taxiBtn: "taxiForm",
    rentCarBtn: "rentCarForm",
    sightseeingBtn: "sightseeingForm",
    activitiesBtn: "activitiesForm"
  };

  Object.keys(forms).forEach(btnId => {
    document.getElementById(btnId).addEventListener("click", function () {
      // Set active button
      Object.keys(forms).forEach(b => {
        document.getElementById(b).classList.remove("active");
        document.getElementById(forms[b]).classList.add("d-none");
      });
      this.classList.add("active");
      document.getElementById(forms[btnId]).classList.remove("d-none");
    });
  });

  document.getElementById('sameLocationCheck').addEventListener('change', function () {
    document.getElementById('returnLocationGroup').style.display = this.checked ? 'none' : 'block';
  });
//#endregion Form (rent,taxi,...)
