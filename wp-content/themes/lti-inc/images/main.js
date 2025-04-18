$(document).ready(function () {
  if ($('.blue-slant').length) {
    var blue_pos = ($('.blue-slant').position().left / $(window).width()) * 150
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop()
      var vh = $(window).height()
      var math = blue_pos - (scrollTop / vh ) * blue_pos
      $('.blue-slant').css('left', math + '%')
    })
  }

  $('#menu-button').on('click', function () {
    $('.hamburger').toggleClass('is-active')
    $('.nav-overlay').toggleClass('active')
    $('body').toggleClass('no-overflow')
  })

  //initialize swiper when document ready
  if ($('.swiper-container').length && $('.swiper-slide').length > 1) {
    console.log('html-loaded')
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.6/js/swiper.min.js', function () {
      //$('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css">');
      var home_feat_swiper = new Swiper('.home-featured-properties .swiper-container', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        loop:true,
        navigation: {
          nextEl: '.home-feat-swiper-button-next',
          prevEl: '.home-feat-swiper-button-prev'
        },
        breakpoints: {
          // when window width is <= 992px Large
          992: {
            slidesPerView: 1
          }
        }
      })
      var home_com_swiper = new Swiper('.home-communities .swiper-container', {
        slidesPerView: 4,
        slidesPerGroup: 2,
        loop:true,
        spaceBetween: 30,
        simulateTouch: false,
        navigation: {
          nextEl: '.home-com-swiper-button-next',
          prevEl: '.home-com-swiper-button-prev'
        },
        // Responsive breakpoints
        breakpoints: {
          // when window width is <= 576px Small/XS
          576: {
            slidesPerView: 1
          },
          // when window width is <= 768px Medium
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is <= 992px Large
          992: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is <= 1200px XL
          1200: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      })

      $('.home-filters-container .button').on('click', function () {
        var filter = $(this).data('state')
        if ($(this).hasClass('active')) {
          console.log('already')
          $('.home-filters-container .button').removeClass('active')
          $('.home-com-swiper-container .swiper-slide').show()
        } else {
          console.log('nope')
          $('.home-filters-container .button').removeClass('active')
          $(this).addClass('active')
          $('.home-com-swiper-container .swiper-slide').hide()
          $('.home-com-swiper-container .swiper-slide[data-state="' + filter + '"]').show()
        }
        home_com_swiper.update()
      })

      var single_com_swiper = new Swiper('.single-com-slider .swiper-container', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween: 30,
        simulateTouch: false,
        navigation: {
          nextEl: '.single-com-swiper-button-next',
          prevEl: '.single-com-swiper-button-prev'

        },
        // Responsive breakpoints
        breakpoints: {
          // when window width is <= 576px Small/XS
          576: {
            slidesPerView: 1
          },
          // when window width is <= 768px Medium
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is <= 992px Large
          992: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is <= 1200px XL
          1200: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      })

      var com_story_swiper = new Swiper('.com_stories_feat_container .swiper-container', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
          nextEl: '.com-story-swiper-button-next',
          prevEl: '.com-story-swiper-button-prev'
        }
      })

      var com_story_logo_swiper = new Swiper('.com_story_logos_slider .swiper-container', {
        slidesPerView: 6,
        slidesPerGroup: 6,
        autoplay: {
    delay: 5000,
  },
        // Responsive breakpoints
        breakpoints: {
          // when window width is <= 992px Large
          992: {
            slidesPerView: 3,
            slidesPerColumn: 2
          }
        }
      })
    })
  }
  // var our_story_swiper = new Swiper('.our-stories-videos .swiper-container', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //    navigation: {
  //     nextEl: '.com-story-swiper-button-next',
  //     prevEl: '.com-story-swiper-button-prev'
  //  }
  //  })

  //Play icon plays video
  var video1 = $('#video1').get(0)
  var video2 = $('#video2').get(0)
  var video3 = $('#video3').get(0) // added these matt
  $('.video-player')
    .off()
    .on('click', function (e) {
      e.stopPropagation()
      $('.video-player-overlay').fadeToggle()
      $('.play-icon').fadeToggle()
      $('.video-player-button-next').fadeToggle()
      $('.video-player-button-prev').fadeToggle()

      if ($(video1).hasClass('video-player active')) {
        if (video1.paused) {
          video1.play()
        } else {
          video1.pause()
		  $(".video-player-overlay").attr("id", "facade-video")
        }
      }
      if ($(video2).hasClass('video-player active')) {
        if (video2.paused) {
          video2.play()
        } else {
          video2.pause()
		$(".video-player-overlay").attr("id", "hr_video")

        }
      }
	  if ($(video3).hasClass('video-player active')) {
        if (video3.paused) {
          video3.play()
        } else {
          video3.pause()
		$(".video-player-overlay").attr("id", "trejos") // added matt

        }
      }
    })

  // The previous and next buttons

  $('.video-player-button-prev').click(function () {
    video1.pause()
    video2.pause()
	video3.pause()
    $('.play-icon').show()
    $('.video-player-overlay').show()
    if ($('#video1').hasClass('video-player active')) {
      $('#video1').attr('class', 'video-player hidden')
      $('#video3').attr('class', 'video-player active')
	  $(".video-player-overlay").attr("id", "trejos")

    } else if ($('#video2').hasClass('video-player active')) {
      $('#video2').attr('class', 'video-player hidden')
      $('#video1').attr('class', 'video-player active')
	  $(".video-player-overlay").attr("id", "facade-video")

    } else if ($('#video3').hasClass('video-player active')) {
      $('#video3').attr('class', 'video-player hidden')
      $('#video2').attr('class', 'video-player active')
	  $(".video-player-overlay").attr("id", "hr_video")

    }
  })

  $('.video-player-button-next').click(function () {
    video1.pause()
    video2.pause()
	video3.pause()
    $('.play-icon').show()
    $('.video-player-overlay').show()
    if ($('#video1').hasClass('video-player active')) {
      $('#video1').attr('class', 'video-player hidden')
      $('#video2').attr('class', 'video-player active')
	  $(".video-player-overlay").attr("id", "hr_video")

    } else if ($('#video2').hasClass('video-player active')) {
      $('#video2').attr('class', 'video-player hidden')
      $('#video3').attr('class', 'video-player active')
	  $(".video-player-overlay").attr("id", "trejos")

    } else if ($('#video3').hasClass('video-player active')) {
      $('#video3').attr('class', 'video-player hidden')
      $('#video1').attr('class', 'video-player active')
	  $(".video-player-overlay").attr("id", "facade-video")

    }
  })

  $('#closeNav').click(function () {
    $('#mobile_navbar_menu').css('display', 'none')
  })

  $('#openNav').click(function () {
    $('#mobile_navbar_menu').css('display', 'block')
  })
})

//Accordion at community stories
$(document).ready(function () {
  if ($(window).width() >= 760) {
    $('#person1-mobile').css('display', 'none')
    $('#person2-mobile').css('display', 'none')
    $('#person2-mobile').css('display', 'none')
  }

  $('#person1-click').click(function () {
    $('#person1-active').attr('class', 'col-md-4 com_test-title active')
    $('#person2-active').attr('class', 'col-md-4 com_test-title')
    $('#person3-active').attr('class', 'col-md-4 com_test-title')
    $('#person1')
      .css('display', 'flex')
      .slideDown('slow')
    $('#person2').hide()
    $('#person3').hide()
    if ($(window).width() <= 760) {
      $('#person1-mobile')
        .css('display', 'flex')
        .slideDown('slow')
      $('#person2-mobile').hide()
      $('#person3-mobile').hide()
    }
  })

  $('#person2-click').click(function () {
    $('#person1-active').attr('class', 'col-md-4 com_test-title')
    $('#person2-active').attr('class', 'col-md-4 com_test-title active')
    $('#person3-active').attr('class', 'col-md-4 com_test-title')
    $('#person2')
      .css('display', 'flex')
      .slideDown('slow')
    $('#person1').hide()
    $('#person3').hide()
    if ($(window).width() <= 760) {
      $('#person2-mobile')
        .css('display', 'flex')
        .slideDown('slow')
      $('#person1-mobile').hide()
      $('#person3-mobile').hide()
    }
  })
  $('#person3-click').click(function () {
    $('#person1-active').attr('class', 'col-md-4 com_test-title')
    $('#person2-active').attr('class', 'col-md-4 com_test-title')
    $('#person3-active').attr('class', 'col-md-4 com_test-title active')
    $('#person3')
      .css('display', 'flex')
      .slideDown('slow')
    $('#person1').hide()
    $('#person2').hide()
    if ($(window).width() <= 760) {
      $('#person3-mobile')
        .css('display', 'flex')
        .slideDown('slow')
      $('#person2-mobile').hide()
      $('#person1-mobile').hide()
    }
  })
})

$(document).ready(function () {
  $('.contact-map').hide()
  $('#houston-map').show()

  $('#houston-btn').click(function () {
    $('.contact-btn').removeClass('contact-active')
    $('#houston-btn').addClass('contact-active')

    $('.contact-map').hide()
    $('#houston-map').show()
    $( '#houston-map' ).attr('src', $( '#houston-map' ).attr('src')); // map re-load
  })

  $('#houston-btn-mobile').click(function () {
    $('.contact-btn-mobile').removeClass('contact-active')
    $('#houston-btn-mobile').addClass('contact-active')
    $('#mobile_location').text('Houston')

    $('.contact-map').hide()
    $('#houston-map').show()
    $( '#houston-map' ).attr('src', $( '#houston-map' ).attr('src')); // map re-load
  })

  $('#scottsdale-btn').click(function () {
    $('.contact-btn').removeClass('contact-active');
    $('#scottsdale-btn').addClass('contact-active');

    $('.contact-map').hide();
    $('#scottsdale-map').show();
    $( '#scottsdale-map' ).attr('src', $( '#scottsdale-map' ).attr('src')); // map re-load
  })

  $('#scottsdale-btn-mobile').click(function () {
    $('.contact-btn-mobile').removeClass('contact-active')
    $('#scottsdale-btn-mobile').addClass('contact-active')
    $('#mobile_location').html('Scottsdale')

    $('.contact-map').hide()
    $('#scottsdale-map').show()
    $( '#scottsdale-map' ).attr('src', $( '#scottsdale-map' ).attr('src')); // map re-load
  })

  $('#dallas-btn').click(function () {
    $('.contact-btn').removeClass('contact-active')
    $('#dallas-btn').addClass('contact-active')

    $('.contact-map').hide()
    $('#dallas-map').show()
    $( '#dallas-map' ).attr('src', $( '#dallas-map' ).attr('src')); // map re-load
  })

  $('#dallas-btn-mobile').click(function () {
    $('.contact-btn-mobile').removeClass('contact-active')
    $('#dallas-btn-mobile').addClass('contact-active')
    $('#mobile_location').text('Dallas')

    $('.contact-map').hide()
    $('#dallas-map').show()
    $( '#dallas-map' ).attr('src', $( '#dallas-map' ).attr('src')); // map re-load
  })

  $('#austin-btn').click(function () {
    $('.contact-btn').removeClass('contact-active')
    $('#austin-btn').addClass('contact-active')

    $('.contact-map').hide()
    $('#austin-map').show()
    $( '#austin-map' ).attr('src', $( '#austin-map' ).attr('src')); // map re-load
  })

  $('#austin-btn-mobile').click(function () {
    $('.contact-btn-mobile').removeClass('contact-active')
    $('#austin-btn-mobile').addClass('contact-active')
    $('#mobile_location').text('Austin')

    $('.contact-map').hide()
    $('#austin-map').show()
    $( '#austin-map' ).attr('src', $( '#austin-map' ).attr('src')); // map re-load
  })

  $('#sanantonio-btn').click(function () {
    $('.contact-btn').removeClass('contact-active')
    $('#sanantonio-btn').addClass('contact-active')

    $('.contact-map').hide()
    $('#sanantonio-map').show()
    $( '#sanantonio-map' ).attr('src', $( '#sanantonio-map' ).attr('src')); // map re-load
  })

  $('#sanantonio-btn-mobile').click(function () {
    $('.contact-btn-mobile').removeClass('contact-active')
    $('#sanantonio-btn-mobile').addClass('contact-active')
    $('#mobile_location').text('San Antonio')

    $('.contact-map').hide()
    $('#sanantonio-map').show()
    $( '#sanantonio-map' ).attr('src', $( '#sanantonio-map' ).attr('src')); // map re-load
  })

  if($(window).width() <= 767) {
    $("html, body").find('.ctu-ulitate-style-1-tabs').hide();
	 
  }
	  if($(window).width() <= 767) {  // Mathew Added
$("div").removeClass("active");
	  }
})


function showList() {
  $('#dropdown-content').toggle()
}