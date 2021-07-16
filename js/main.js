$('.menu-btn').click(function() {
    $('.fa-caret-square-left').toggle();
    $('.fa-caret-square-right').toggle();

    $('.navbar-left li a span').toggle();
    $('.navbar-left').toggleClass('small');
    $('.body-pane').toggleClass('small');

    if (localStorage.getItem('menu')) {
        localStorage.removeItem('menu');
    }
    else {
     localStorage.setItem('menu', 'active');
    }
})


if (localStorage.getItem('menu')) {
    $('.fa-caret-square-left').toggle();
    $('.fa-caret-square-right').toggle();

    $('.navbar-left li a span').toggle();
    $('.navbar-left').toggleClass('small');
    $('.body-pane').toggleClass('small');
}


$('.menu li').click(function() {
    $('.menu li').removeClass('active');
    $(this).addClass('active');
})

