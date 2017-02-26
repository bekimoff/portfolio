$(window).scroll(function() {
    if ($(window).scrollTop() >= 510) {
        $('nav').removeClass('before');
        $('nav').addClass('after');

    } else {
        $('nav').removeClass('after');
        $('nav').addClass('before');
    }
});