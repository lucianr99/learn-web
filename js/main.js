;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function(position) {

		if(position === "fadein") {
			return $(".fh5co-loader").fadeIn("slow")
		}else if (position === "fadeout"){
			return $(".fh5co-loader").fadeOut("slow")
		}else {
			return false
		}
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};


	// Create animation for login form
	var formAnimation = function () {
		var inputContainer = $('.input-container'),
			inputControl = $('.form-control'),
		 	labelAction;

		inputContainer.on('focusin', function (e) {
			labelAction = $('label',this);

			if(!labelAction.hasClass('focus')){
				labelAction.addClass('focus');
			}

        });

		inputContainer.on('focusout', function (e) {

            if(labelAction.hasClass('focus') && !inputControl.val().length > 0 ){
                labelAction.removeClass('focus');
            }

        });

    };




    //Login form form check and show

	var logFrom = function () {
		var logButton = $('.btn-cta'),
			pageHide = $('.container.login-off'),
			pageShow = $('.page-show'),
			pageStatusOn = $('header .container').hasClass('page-show');

		logButton.on('click', function (e) {
			e.preventDefault();
			// if container has class page-show hide next row and display login form
			if(pageStatusOn) {
                pageShow
					.fadeOut()
					.css('opacity', '0');

                if(pageShow.css('opacity', '0')){
                	pageHide.delay('500').fadeIn();
				}
			}
        })
    };


	// Registration form

	var signUpForm = function () {
		var logForm = $('.sign-in-form'),
			regForm = $('.sign-up-form'),
			logStatus = $('.log-status'),
			targetSibling,
			target;


		logStatus.on('click',function (e) {
			e.preventDefault();

			target = $(e.target);
			targetSibling = target.siblings();

			if (target.is('a') ) {
                loaderPage("fadein"); // Show loader until sign up form is created

                // Check if this button was active
                if(target.hasClass('active')){
                    alert('Вы не можете открыть снова эту страницу');
                    loaderPage("fadeout");

                    return false
                }

                if(target.hasClass('inactive-w')) {
                    target
                        .removeClass('inactive-w')
                        .addClass('active');
                    targetSibling
                        .removeClass('active')
                        .addClass('inactive-w');
                }

                if(target.hasClass('active') && target.hasClass('sign-up')){
                    logForm.fadeOut('easy');
                    regForm.delay('500').fadeIn('easy');
                    loaderPage("fadeout"); // Hide the loader

                    return false

                }else if(target.hasClass('active') && target.hasClass('sign-in')){
                    regForm.fadeOut('easy');
                    logForm.delay('500').fadeIn('easy');
                    loaderPage("fadeout"); // Hide the loader

                    return false
                }

			}

        });

    };

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage("fadeout");
		counterWayPoint();
		counter();
		parallax();
		testimonialCarousel();
		logFrom();
        formAnimation();
        signUpForm();
	});


}());