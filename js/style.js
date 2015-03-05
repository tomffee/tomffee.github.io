$(function () {
	new WOW().init();

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
		        $('#nav').removeClass('hidden').addClass('showen');
		    } else {
		        // Scroll Up
		        if(st + $(window).height() < $(document).height()) {
		            $('#nav').removeClass('hidden').addClass('showen');
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