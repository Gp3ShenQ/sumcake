

$(".line").on('click', function(){
  if($('.leftbar-box').hasClass('change')) {
    $('.leftbar-box').removeClass('change')
    return;
  }
    $('.leftbar-box').addClass('change')
    $('.leftbar-shadow').addClass('change')
})
    
$(window).on('resize',function() {
  if (window.innerWidth>1200) $('.leftbar-box').removeClass('change')
})

$('.leftbar-shadow').on('click',function(){
  $('.leftbar-shadow').removeClass('change')
  $('.leftbar-box').removeClass('change')
  $('.question').removeClass('change')
})

$('.l,.leftbar-img').on('click',function(){ 
  $('.leftbar-shadow').removeClass('change')
  $('.leftbar-box').removeClass('change')
})

$(".w.fl5,.l.bar5").on("click",function(){
  if($(".question").hasClass('change')){
    $('.question').removeClass('change')
    return
  }
  $(".question").addClass('change')
  $('.leftbar-shadow').addClass('change')
})

//-----------首頁輪播
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      // spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
    });
//-----------首頁輪播

//-----------商品輪播
var swiper = new Swiper(".mySwiper11", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
//-----------商品輪播

//-----------商品下拉
$('.commodity-box .commodity').on('click',function(){
  $(this).next().slideToggle();
  // console.log($(this).next())
})
//-----------商品下拉

$('.t.tback').on('click',function(){
  $('html,body').animate({scrollTop:0}, 100);
})
$('.leftbar-img').on('click',function(){
  $('html,body').animate({scrollTop:0}, 100);
})


const anchor = (el) => {
  $(el).on('click',function (){
    const target = $(this).attr('anchor-target');
    const height = $(target).offset().top - 130;
    window.scrollTo({top: height, behavior: 'smooth'})
  })
}
anchor('.w')
anchor('.l')
