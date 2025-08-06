jQuery(document).ready(function($) {
    var sliderLeft = $('.slider-left');
    var sliderRight = $('.slider-right');
    var heroSection = $('.hero');

    sliderLeft.on('init', function(event, slick) {
        checkSlidersInitialized();
    });

    sliderRight.on('init', function(event, slick) {
        checkSlidersInitialized();
    });

    sliderLeft.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-right',
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
    });

    sliderRight.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-left',
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 6000,
    });

    function checkSlidersInitialized() {
        if (sliderLeft.hasClass('slick-initialized') && sliderRight.hasClass('slick-initialized')) {
            heroSection.css('visibility', 'visible');
            AOS.init();
        }
    }

    // Бургер-меню и боковая панель
    $('#burger').on('click', function() {
        $('#sideMenu').addClass('open');
        $('#overlay').addClass('active');
    });

    $('#overlay').on('click', function() {
        $('#sideMenu').removeClass('open');
        $('#overlay').removeClass('active');
    });
});
