$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('.navbar-brand-txt').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('#navbar-logo').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('.white-box').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('.btn-join').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('#navbar-logo').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('.navbar-toggler').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('.navbar-brand-mobile').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('footer').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('footer').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('footer').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
