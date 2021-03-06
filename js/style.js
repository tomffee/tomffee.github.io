$(function () {
	new WOW().init();

	var introHeight = {
		init: function () {
			var innerH = $(window).innerHeight();
			if( innerH <= 845 ) {
				introHeight.change(500, 135);
			};
			if ( innerH <= 500) {
				introHeight.change(450, 80);
			};
		},
		change: function (h, p) {
			$('section.intro').css(
				{
					height: h + 'px',
					maxHeight: h + 'px',
					padding: p + 'px ' + 0
				}
			);
			$('.intro-space').css(
				{
					height: h + 'px',
					maxHeight: h + 'px'	
				}
			);
		},
	};

	introHeight.init();

	var navbar = {
		init: function () {
			var nav = $('#nav'),
				win = $(window);
				hidden = true,
				scrolled = false,
				lastScrollTop = 0,
				delta = 100,
				navbarHeight = nav.outerHeight();
			

			win.scroll(function(event){
			    scrolled = true;
			});

			setInterval(function() {
			    if (scrolled) {
			        navbar.open();

			        scrolled = false;
			    }
			}, 250);
		},
		open: function () {
				var navbarHeight = $('#nav').outerHeight();

			st = $(window).scrollTop();

			if ( Math.abs(lastScrollTop - st) <= delta ) {
        		return;
			}
		    if (st >= lastScrollTop && st >= navbarHeight){
		        $('#nav').removeClass('close-it').addClass('showen');
		    } else {
		        // Scroll Up
		        if(st + $(window).height() < $(document).height()) {
		            $('#nav').removeClass('showen').addClass('close-it');
		        }
		    }
		    
		    lastScrollTop = st;
		}

	};

	navbar.init();

	var scrollTo = {
		init: function () {
			var scrollDownBtn = $('#scroll-down');
			var scrollUpBtn = $('#scroll-up');

			scrollDownBtn.on('click', function() {
				scrollTo.scrollDown();
			});

			scrollUpBtn.on('click', function() {
				scrollTo.scrollUpTo();
			});
		},
		scrollDown: function () {
			$('#about').ScrollTo({
				duration: 800,
				easing: 'swing'
			});
		},
		scrollUpTo: function () {
			$('#intro-space').ScrollTo({
				duration: 600
			});
		}
	};

	scrollTo.init();

});