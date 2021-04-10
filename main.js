$(document).on('ready', function () {

    // Toggle Hamber icon
    let hamburgerIcon = $('.hamburger-icon')
    hamburgerIcon.click(function () {
        let navbarCollapse = $('.navbar-collapse')
        navbarCollapse.slideToggle();
    })

    // Testimonial Slick Slider
    let testimonialOuter = $('.testimonial-sec .ts-outer');
    testimonialOuter.slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    // Sticky Header
    $(window).scroll(function () {
        let indegeneHeader = $('.ing-header');
        let sticky = indegeneHeader,
            scroll = $(window).scrollTop();

        if (scroll >= 77) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
});