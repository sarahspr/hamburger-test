$(document).ready(function() {
    // store burger-closed HTML in burgerClosed variable.
    var mobileMenuBurger = $('.mobile-menu-burger');
    var burgerClosed = $('.burger-closed');
    var burgerOpen = $('.burger-open');
    var mobileMenu = $('.mobile-menu');

    // log variable value.
    // console.log(mobileMenuBurger);

    // click on mobile menu burger
    mobileMenuBurger.on('click', function() {
        // console.log(burgerClosed);
        // console.log(burgerOpen);
        // console.log(mobileMenu);
        burgerOpen.toggleClass('display-none');
        burgerClosed.toggleClass('display-none');
        mobileMenu.toggleClass('display-none');
    });
});