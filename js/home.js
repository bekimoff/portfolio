$(window).scroll(function() {
    if ($(window).scrollTop() >= 500) {
        $('nav').removeClass('before');
        $('nav').addClass('after');

    } else {
        $('nav').removeClass('after');
        $('nav').addClass('before');
    }
});