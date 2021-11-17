$(function () {

    $('.suggested__location-content-slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
      });

      $('.suggested__location-content-title-about-batton-btn-left').on('click', function() {
        $('.suggested__location-content-slider').slick('slickNext');
        });

        $('.suggested__location-content-title-about-batton-btn-right').on('click', function() {
            $('.suggested__location-content-slider').slick('slickPrev');
            });

            $('.about__us-wrap-slider').slick({
                arrows: false,
                dots: true,
                infinite: true,
                speed: 0.2,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
              });

              $('.check__our-wrap-slider').slick({
                arrows: false,
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 3000,
              });

});