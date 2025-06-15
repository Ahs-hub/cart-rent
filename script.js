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
