$(window).scroll(function() {
    console.log(document.querySelector('.masthead').clientHeight);
    if ($(window).scrollTop() >= document.querySelector('.masthead').clientHeight) {
        $('nav').removeClass('before');
        $('nav').addClass('after');

    } else {
        $('nav').removeClass('after');
        $('nav').addClass('before');
    }
});