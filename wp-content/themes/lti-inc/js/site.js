// @codekit-prepend "plugins/jquery.js";
// @codekit-prepend "plugins/imagesloaded.js";
// @codekit-prepend "plugins/isotope.js";
// @codekit-prepend "plugins/slick.js";
// @codekit-prepend "plugins/docCookies.js";
// @codekit-prepend "plugins/jquery.sharrre.js";
// @codekit-prepend "plugins/jquery.sidr.min.js";
// @codekit-prepend "plugins/jquery.magnific-popup.js";
// @codekit-prepend "plugins/dropkick.js"
// @codekit-prepend "plugins/jquery.lazyload.js"

// jQuery

jQuery(document).ready(function($) {
	
	// Mobile nav
	$("#nav-activate").sidr({
		name: 'mobile-nav',
		side: 'left',
		source: '#mobile',
		speed: 150,
		rename: false,
		displace: false
	});
	
	// Sidr nav show and hide
	$("ul.sidr-class-sub-menu").hide();
	$("li.sidr-class-menu-item-has-children > a").on("click", function(e) {
		e.preventDefault();
		$(this).toggleClass("is-open");
		$(this).next("ul.sidr-class-sub-menu").slideToggle();
	});
	
	// Site wide cookies
	// When user clicks end user link on gateway page, set relevant cookie for use on inner pages
	$('a#end-user').on("click", function() {
		docCookies.setItem("user_type", "end-user", 2592000, '/');
	});
	
	// When user clicks specifier link on gateway page, set relevant cookie for use on inner pages
	$('a#specifier').on("click", function() {
		docCookies.setItem("user_type", "specifier", 2592000, '/');
	});
	
	// Check what the user type is and hide relevant divs
	var user_type = docCookies.getItem('user_type');
	if(user_type === "end-user") {
		$(".specifier-content").hide();
		$(".end-user-content").show();
	} else if(user_type === "specifier") {
		$(".specifier-content").show();
		$(".end-user-content").hide();
	} else {
		$(".specifier-content").hide();
		$(".end-user-content").show();
	}
	
	// Cafeteria rescue modal
	$('#primary a[href$="http://cafeteriarescue.com/"]').on("click", function(e) {
		e.preventDefault();
		$('#page-mask').show();
		$('.modal.caf-rescue').show();
		setTimeout(function() {
			$('#page-mask').css('opacity', '1');
			$('.modal.caf-rescue').css('opacity', '1');
		}, 10);
	});
	
	// What's new modal
	$('li.whats-new a, li.sidr-class-whats-new a').on("click", function(e) {
		e.preventDefault();
		$.sidr('close', 'mobile-nav');
		$('#page-mask').show();
		$('.modal.whats-new').show();
		setTimeout(function() {
			$('#page-mask').css('opacity', '1');
			$('.modal.whats-new').css('opacity', '1');
		}, 10);
	});
	
	$('#modal-close').on("click", function(e) {
		e.preventDefault();
		$('#page-mask').css('opacity', '0');
		$('.modal').css('opacity', '0');
		setTimeout(function() {
			$('#page-mask').hide();
			$('.modal').hide();
		}, 10);
	});

	// Center modal
   	function adjustLayout(){
	    $('.modal').css({
	        position:'fixed',
	        left: ($(window).width() - $('.modal').outerWidth())/2,
	        top: ($(window).height() - $('.modal').outerHeight())/2
	    });
    }
    adjustLayout();
	$(window).resize(adjustLayout);
	
	// Search form activate
	$("#search-activate").on("click", function(e) {
		e.preventDefault();
		$("#searchform").toggle();
		$(this).toggleClass('active');
	});
	
	// Page mask click (modal away) close modal
	$("#page-mask").on("click", function() {
		$(this).hide();
		$(".modal").hide();
	});
	
	// Slider
	$('#slider').slick({
		infinite: true,
		slide: '.slide',
		arrows: true,
		appendArrows: '#slider .slider-nav',
		centerMode: true,
		focusOnSelect: true,
		variableWidth: true,
		autoplay: true,
		lazyLoad: 'ondemand',
		speed: 300,
		responsive: [
			{
				breakpoint: '1025',
				settings: {
					infinite: true,
					slide: '.slide',
					arrows: false,
					centerMode: false,
					variableWidth: false
				}
			}
		]
	});
	
	// Sidebar case studies slider
	$('#case-study-slider').slick({
		infinite: true,
		slide: '.case-study',
		arrows: true,
		prevArrow: $('.case-study-slider-prev'),
		nextArrow: $('.case-study-slider-next'),
		fade: true
	});
	
	$('.horizontal-nav a').click(function(){
	  $('html, body').animate({
	    scrollTop: $( $.attr(this, 'href') ).offset().top
	  }, 500);
	  return false;
	});
	
	// Match gallery items height to width
	function squareItem() {
		var gallery_item_width = $(".gallery-item").width();
		$(".gallery-item a").css("height", gallery_item_width);
	}
	squareItem();
	$(window).resize(function() {
		squareItem();
	});
	
	// Lazy load gallery items
	$(".gallery-item").lazyload({
		effect: "fadeIn"
	});
	
	// Init isotope after images within are loaded
	var container = $('.gallery-items').imagesLoaded( function() {
		container.isotope({
			itemSelector: '.gallery-item',
			layoutMode: 'fitRows'
		});
	});
	
	// Init isotope after images within are loaded (specsheets)
	var container2 = $('.grid-view').imagesLoaded( function() {
		container2.isotope({
			itemSelector: '.item'
		});
	});
	
	// Init sub filters (specsheets)
	/*$('.filters-specsheets li a').on( 'click', function(e) {
		// Stop link following blank href
		e.preventDefault();
		// Grab value
    	var filterValue = $(this).attr('data-option-value');
    	// Filter layout
	    container2.isotope({ filter: filterValue });
	    // Remove all active classes
	    $('.filters-specsheets li a').removeClass('active');
	    // Add relevant active class to clicked sub level item
	    $(this).addClass('active');
	    // Change title 
	    var linkText = $(this).text();
	    $(".specsheet-title").text(linkText);
  	});*/
	
	// Project filter
	// Hide all sub filter levels to start
	$('.sub-filter').hide();
	$('.top-level').on("click", function(e) {
		// Stop link following blank href
		e.preventDefault();
		// Reset project grid filters
		container.isotope({ filter: '*' });
		// Grab this ID
		var filterItem = $(this).attr('id');
		// Hide all sub filters on click
		$('.sub-filter').hide();
		// Show relevant one
		$('#' + filterItem + '-filters').show();
		// Remove current active classes
		$('.top-level').removeClass('active');
		// Add relevant active class to clicked top level item
		$(this).addClass('active');
		// Remove all sub class active classes
		$('.filters li a').removeClass('active');
		// Give first sub class item (all) active
		$('#' + filterItem + '-filters li:first-of-type a').addClass('active');
		
	});
	
	// Init sub filters
	$('.filters li a').on( 'click', function(e) {
		// Stop link following blank href
		e.preventDefault();
		// Grab value
    	var filterValue = $(this).attr('data-option-value');
    	// Filter layout
	    container.isotope({ filter: filterValue });
	    // Remove all active classes
	    $('.filters li a').removeClass('active');
	    // Add relevant active class to clicked sub level item
	    $(this).addClass('active');
  	});
	
	// Initialize gallery Sharrre buttons
    function initShare() {
	   
	   /* $('.social-buttons').sharrre({
	          share: {
			    twitter: true,
			    facebook: true
			  },
			  template: '<div class="box"><div class="left">Share</div><div class="middle"><a href="#" class="facebook"><i class="fa fa-facebook"></i></a><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></div></div>',
			  buttons: {
			  	facebook: {layout: 'box_count'},
			  	twitter: {count: 'vertical'},
    		 },
			  enableHover: false,
			  enableTracking: false,
			  /*render: function(api, options){
			  $(api.element).on('click', '.fa-twitter', function() {
			    api.openPopup('twitter');
			    alert('tweet');
			  });
			  $(api.element).on('click', '.fa-facebook', function() {
			    api.openPopup('facebook');
			     alert('book');
			  });
			  click: function(api, options) {
				  api.openPopup("facebook");
			  }
		});	*/
		
		$(".social-buttons .twitter-wrap").sharrre({
			share: {
				twitter: true
			},
			template: '<div class="twitter"><i class="fa fa-twitter"></i></div>',
			enableHover: false,
			enableTracking: false,
			buttons: {
				twitter: {}
			},
			click: function(api, options) {
				api.openPopup('twitter');
			}
		});
		
		$(".social-buttons .facebook-wrap").sharrre({
			share: {
				facebook: true
			},
			template: '<div class="facebook"><i class="fa fa-facebook"></i></div>',
			enableHover: false,
			enableTracking: false,
			buttons: {
				facebook: {}
			},
			click: function(api, options) {
				api.openPopup('facebook');
			}
		});
	}

	// Gallery items pop up
	$('.gallery-item a').on("click", function(e) {
		var target_url = $(this).attr('data-url');
		var target_text = $(this).attr('data-text');
		var target_title = $(this).attr('data-title');
		var target_pid = $(this).attr('data-pid');
		e.preventDefault();
		$(this).magnificPopup({
	        image: {
	            titleSrc: function() {
	                return '<div class="details-link"><a class="project-link" href="#">Project Details</a></div><div class="social-buttons"><div class="box"><div class="middle"><div class="twitter-wrap"></div><div class="facebook-wrap"></div></div><div class="left">Share</div></div><div><a class="gpimb-btn gpimb-btn-addto" data-pid="' + target_pid + '" href="#">Add to Mood Book <i class="fa fa-chevron-right"></i></a>&nbsp;<a class="gpimb-btn gpimb-btn-view" data-href="moodbook/yours/" href="moodbook/yours/">View Mood Book <i class="fa fa-chevron-right"></i></a></div></div>';
	            }
	        },
	        gallery: {
		      enabled: true,
		      preload: [0,4],  
	        },
	        type: 'image',
	        mainClass: 'mfp-with-zoom mfp-img-mobile',
	        callbacks: {
	            open: function() {
		            
		            $('.details-link a').attr("href", target_url);
		            $(".details-link a").text(target_title);
		            
	                $('.social-buttons .facebook-wrap').attr('data-url', target_url);
	                $('.social-buttons .facebook-wrap').attr('data-text', target_text);
	                $('.social-buttons .facebook-wrap').attr('data-title', target_title);
	                
	                $('.social-buttons .twitter-wrap').attr('data-url', target_url);
	                $('.social-buttons .twitter-wrap').attr('data-text', target_text);
	                $('.social-buttons .twitter-wrap').attr('data-title', target_title);
	                
	                initShare();
	            }
	        }
	    });
	});
	
	// Spec sheets landing page
	$(".back-to-top").on("click", function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
	$('.filters-specsheets').change(function(e) {
		// Stop link following blank href
		e.preventDefault();
		// Grab value
    	var filterValue = $(this).find("option:selected").val();
    	// Filter layout
	    container2.isotope({ filter: filterValue });
  	});
	
	$('.filters-specsheets').dropkick({
		mobile: true,
		change: function(value, elem) {
			if(value != "") {
				$('#dk1-timescale').addClass('valid').removeClass('error');
				$('#dk1-timescale .dk-selected').removeClass('dk-selected-disabled');
			}
		}
	});
	$('.dk-selected').addClass('dk-selected-disabled');
	
	// TH Edit: Listen for moodbook butons that have been dynamically created or already in DOM
	/*$("body").on("click", ".gpimb-btn-addto", function() {
		alert("bosh my js");
		addToMoodBook($(this));
	});*/
	
	// TH Edit: Add an alert to warn user the creation of the Mood Book PDF could take a while
	/*$(".gpimb-btn-makepdf").on("click", function() {
		alert("Your Mood Book is being created, please note this could take a few seconds.");
	});*/
	
});
