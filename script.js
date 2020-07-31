//==========================
// Change features on Scroll
//==========================

$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
    $('.navbar-brand-txt').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
    $('#navbar-logo').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
    $('.white-box').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
    $('.btn-join').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
    $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
    $('#navbar-logo').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
    $('.navbar-toggler').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
    $('.navbar-brand-mobile').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
    $('.progress-container').toggleClass('scrolled', $(this).scrollTop() > 10);
});

$(window).scroll(function () {
    $('.language').toggleClass('scrolled', $(this).scrollTop() > 10);
});

$(window).scroll(function () {
    $('.flag').toggleClass('scrolled', $(this).scrollTop() > 10);
});

//===================
// Hide & Seek Footer
//===================

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('footer').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('footer').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('footer').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

//==========
// Scrollbar
//==========

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

