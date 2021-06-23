// Burger menu
$('.menu-header__icon').click(function(event) {
    $(this).toggleClass('active');
    $('.menu-header__menu').toggleClass('active');
    if($(this).hasClass('.active')){
        $('body').data('scroll',$(window).scrollTop());
    }
        $('body').toggleClass('lock');
    if(!$(this).hasClass('active')){
        $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
});

// FILTER
$('.filter__item').click(function(event) {
    var i = $(this).data('filter');
    if (i==1) {
        $('.portfolio__column').show(); 
    } else {
        $('.portfolio__column').hide();
        $('.portfolio__column.f_'+i).show();
    }
    $('.filter__item').removeClass('active');
    $(this).addClass('active');
    return false;
});

// PARALLAX
// $(window).scroll(function(event) {
//     let s=0-$(this).scrollTop()/2;
//     $('.mainblock').css('transform','translate3d(0, '+s+'px, 0)');
// });


