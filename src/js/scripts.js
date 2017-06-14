// Your code here...

//phone
if(window.innerWidth < 768){
$('.header__bottom').hide();
$('.content__link a').on('click', function(){
    $(this).toggleClass('active');
});
$('.slider_1').slick({
    swipe: false,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    TouchMove: true,
    nextArrow: $('.next1'),
    prevArrow: $('.next1')
});
$('.slider_2').slick({
    swipe: false,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    TouchMove: true,
    nextArrow: $('.next2'),
    prevArrow: $('.next2')
});
$('.slider_3').slick({
    swipe: false,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    TouchMove: true,
    nextArrow: $('.next3'),
    prevArrow: $('.next3')
});    
}


//tablet
if((window.innerWidth < 992) && (window.innerWidth > 768)){
$('.menu__item a').on('click', function(){
    $(this).toggleClass('active');
});
$('.content__link a').on('click', function(){
    $(this).toggleClass('active');
});
$(".slider1__button").hide();
$(".slider2__button").hide();
$(".slider3__button").hide();
$('.slider_1').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    TouchMove: true,
    infinite: false
});
$('.slider_2').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    TouchMove: true,
    infinite: false
});
$('.slider_3').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    TouchMove: true,
    infinite: false
});
}


//desktop
if(window.innerWidth > 992){
$('.menu__item a').on('click', function(){
    $(this).toggleClass('active');
})
$('.content__link a').on('click', function(){
    $(this).toggleClass('active');
});
$(".slider1__button").hide();
$(".slider2__button").hide();
$(".slider3__button").hide();
    $('.slider_1').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    TouchMove: true,
    infinite: false
});
$('.slider_2').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    TouchMove: true,
    infinite: false
});
$('.slider_3').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    TouchMove: true,
    infinite: false
});
}
