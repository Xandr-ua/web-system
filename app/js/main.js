$(function () {

    $('.suggested__location-content-slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
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
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                    }
                  }
                ]
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
                    breakpoint: 480,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                    }
                  }
                ]
              });

              const burger = document.querySelector('.header__mobile-btn');
              burger.addEventListener('click', () => {
                  burger.classList.toggle('burger_active'); 
              } );

              $('.header__mobile-btn').on('click', function () {
                $('.header__menu-wrap').toggleClass('active');
             });

});