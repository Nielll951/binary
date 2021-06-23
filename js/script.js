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

// FORMS
// function forms(){
//     $('input,textarea').focus(function(){
//         if($(this).val() == $(this).attr('data-value')){
//                 $(this).addClass('focus');
//                 $(this).parent().addClass('focus');
//                 $(this).removeClass('err');
//                 $(this).parent().removeClass('err');
//             if($(this).attr('data-type')=='pass'){
//                 $(this).attr('type','password');
//             };
//             $(this).val('');
//         };
//     });
// };


// $(window).resize(function(event) {
//     mainblock();
// });
// function mainblock(){
//     var h=$(window).outerHeight();
//     $('.mainblock').css({
//         minHeight: h
//     });
// }
//     mainblock();