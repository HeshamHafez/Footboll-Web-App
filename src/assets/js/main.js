(function ($) {
    "use strict";

    //when dom is ready

    /*preloader*/
    $(window).on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        })
    });

    /*nav-menu dropdown*/
    $(document).ready(function () {
        $(".dropdown").hover(function () {
            $(".dropdown-menu", this).fadeIn();
        }, function () {
            $(".dropdown-menu", this).fadeOut('fast');
        });

        /*---------------------
 TOP Menu Stick
--------------------- */
        var s = $("#sticky-menu");
        var pos = s.position();
        $(window).scroll(function () {
            var windowpos = $(window).scrollTop();
            if (windowpos > pos.top) {
                s.addClass("fixed-top");
            } else {
                s.removeClass("fixed-top");
            }
        });


        /*video megnific-popup*/
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });

        $(".slider-area").owlCarousel({
            smartSpeed: 700,
            autoplay: false,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            slidesToShow: 1,
            loop: true,
            transitionStyle: "fade",
            responsiveClass: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        items: 1,
                    }
			},
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        items: 1,
                    }
			},
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        items: 1,
                    }
			}
        ]
        });

        $(".schedule-slider").owlCarousel({
            smartSpeed: 700,
            autoplay: false,
            dots: false,
            nav: false,
            items: 1,
            slidesToShow: 1,
            loop: true,
            transitionStyle: "fade",
            responsiveClass: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        items: 1
                    }
			},
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        items: 1
                    }
			},
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        items: 1
                    }
			}
        ]
        });

        $(".upmatches-slider").owlCarousel({
            smartSpeed: 900,
            autoplay: 5500,
            dots: true,
            nav: false,
            items: 1,
            slidesToShow: 1,
            loop: true,
            transitionStyle: "fade",
            responsiveClass: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        items: 1
                    }
			},
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        items: 1
                    }
			},
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        items: 1
                    }
			}
        ]
        });

        $(".score-slider").owlCarousel({
            smartSpeed: 500,
            autoplay: 3000,
            dots: true,
            nav: false,
            items: 1,
            slidesToShow: 1,
            loop: true,
            transitionStyle: "fade",
            responsiveClass: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        items: 1
                    }
			},
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        items: 1
                    }
			},
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        items: 1
                    }
			}
        ]
        });

        $(".gallery-slider").owlCarousel({
            smartSpeed: 500,
            autoplay: 3000,
            dots: true,
            nav: true,
            items: 1,
            slidesToShow: 1,
            loop: true,
            transitionStyle: "fadeIn",
            responsiveClass: true,
        });

        $(".post-slider").owlCarousel({
            smartSpeed: 500,
            autoplay: 3000,
            dots: false,
            nav: true,
            items: 1,
            slidesToShow: 1,
            loop: true,
            transitionStyle: "fadeOut",
            responsiveClass: true,
        });

        $(".home3-slider").owlCarousel({
            smartSpeed: 500,
            autoplay: 3000,
            dots: false,
            nav: true,
            center: true,
            margin: 10,
            loop: true,
            items: 1,
            responsive: {
                480: {
                    items: 1,
                },
                768: {
                    items: 1
                },
                1024: {
                    items: 3
                }
            }
        });

        /*---------------------
         countdown
        --------------------- */
        $('[data-countdown]').each(function () {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
            });
        });


        /*----------------------------
        Search Popup / Hide Show Activation
        ------------------------------ */
        if ($('#search-popup').length) {

            //Show Popup
            $('.search-box-btn').on('click', function (e) {
                e.preventDefault();
                $('#search-popup').addClass('popup-visible');
            });

            //Hide Popup
            $('.close-search').on('click', function () {
                $('#search-popup').removeClass('popup-visible');
            });
        }

        /*----------------------------
         wow js active
        ------------------------------ */
        new WOW().init();


    });

    // back to top start
    $('#back-to-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    // back to top end      

    //dom ready end



})(jQuery);
