jQuery(document).ready(function() {
	
	/* Swipe JS */
	window.mySwipe = $('#mySwipe').Swipe().data('Swipe');

	/* Scroll to class */
	$('a[data-slide="slides"]').click(function(e) {
		e.preventDefault();
		$('.sidebar-overlay').trigger('click');
		var target = $(this).data('slide-target');
        $("html, body").animate({
           scrollTop: $(target).offset().top - 13
        }, 600)
	});

	/* Dinamic Scrolled Navbar */
	function hasScrolled() {
		var navbar = $('.navbar');
		if (window.scrollY > 100) {
			navbar.addClass('scrolled');
		} else {
			navbar.removeClass('scrolled');
		}
	}

	/* Button To Top */
	function btnTop() {
		var btn = $('.btn-top');
		if (window.scrollY > 130) {
			btn.fadeIn();
		} else {
			btn.fadeOut();
		}
	}

	/* Call Function top and scroll */

	$(window).scroll(function() {
		hasScrolled();
		btnTop();
	});
	$(window).resize(function() {
		hasScrolled();
		btnTop();
	});
	hasScrolled();
	btnTop();

	/* Sidebar Trigger */
	$('.sidebar-toggle').click(function(e) {
		e.preventDefault();
		$('.sidebar').addClass('active');
		$('.sidebar-overlay').css('visibility', 'visible');
	});
	$('.sidebar-overlay, .close').click(function(e) {
		e.preventDefault();
		$('.sidebar').removeClass('active');
		$('.sidebar-overlay').css('visibility', 'hidden');
	});

	/* Login Form */

	$('#openLogin').click(function() {
		$('.login-overlay').fadeIn();
		$('.login-form').css({
			visibility: 'visible',
			opacity: '1'
		});
	});
	$('.close').click(function(){
		$('.login-overlay').fadeOut(1000);
		$('.login-form').css({
			visibility: 'hidden',
			opacity: '0'
		});
	});

	// Tambah Animasi
	$(window).scroll(function() {
        $(".slides").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 500) {
            	$(this).addClass("slideanim");
            }
        });
    });

});