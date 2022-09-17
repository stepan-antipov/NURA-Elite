$(function () {
  


$('.house__slider-box').slick({
  arrows: false,
  draggable: false,
  appendArrows: $('.house__arrows')
})

$('.house__arrow-left').on('click', function(e) {
  e.preventDefault()
  $('.house__slider-box').slick('slickPrev')
}
)

$('.house__arrow-right').on('click', function(e) {
  e.preventDefault()
  $('.house__slider-box').slick('slickNext')
}
)


$('.burger, .overlay, .header__active-logo').on('click', function(e) {
  e.preventDefault()
  $('.header__right').toggleClass('header__right--active')
  $('.overlay').toggleClass('overlay--show')
})


$('.close-button').on('click', function(e) {
  e.preventDefault()
  $('.header__right').removeClass('header__right--active')
  $('.overlay').removeClass('overlay--show')
})


$('.header__link-item').on('click', function(e){

  $('.header__right').removeClass('header__right--active')
  $('.overlay').removeClass('overlay--show')
})

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 0) {
    $('.burger').addClass('burger--follow')
  } else {
    $('.burger').removeClass('burger--follow')
  }
})


});
