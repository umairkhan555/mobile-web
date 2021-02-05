jQuery(window).on("load", function () {
    "use strict";

    /* ===================================
       Tablet Toggle Button
       ====================================== */

        $("#tablet-toggle").on("click", function () {
            $(".btn-setting").toggleClass("btn-rotate");

            $(".device-image-setting.seven-tablet").toggleClass("tablet-rotate");
            $(".seven-tablet-box").toggleClass("tablet-rotate")
        });

    /* =====================================
       Wow
       ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    /*  ===================================
        Carousel
        ====================================== */

    /* Watch Slider */
    $(".owl-simple-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive: {
            1280: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });

    /* Mobile Slider */
    $(".owl-down-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout:1500,
        smartSpeed:450,
        responsive: {
            1280: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });

    /* Tablet Slider */
    $(".owl-tablet-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        mouseDrag:true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:500,
        responsive: {
            1280: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });

    /* Laptop Slider */
    $(".owl-img-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    animateIn: 'fadeIn',
    mouseDrag:false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    autoplay:true,
    autoplayTimeout:3000,
    responsive: {
        1280: {
            items: 1,
        },
        600: {
            items: 1,
        },
        320: {
            items: 1,
        },
    }
});


});