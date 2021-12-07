$(window).scroll(function(){
    $('.navbar-default').toggleClass('scrolled', $(this).scrollTop() > 140);
});


 
$('back-top-a').hide();

$(window).scroll(function(){
  var scrollpos =$(this).scrollTop();
  $('#back-to-top').text(scrollpos).css('backgr','#fff');

  if(scrollpos >= 170){
    $('.navbar-default').addClass('navbar-fixed-top');

  }else{
    $('.navbar-default').removeClass('navbar-fixed-top');
  }if(scrollpos >= 270){
    $('#back-to-top-a').fadeIn('blend');
  }else{
    $('#back-to-top-a').fadeOut();
  }
});

$('#back-to-top-a').click(function(){
  $('html, body').animate({scrollTop:0}, 5000);
});


$('.owl-carousel').owlCarousel({
  autoplay: true,
  autoplayHoverPause: true,
  loop:true,
  margin:10,
  dots:true,
  nav:true,
  lazyLoad:true,
  margin:5,
});

// $(document).ready(function)
//   $(window).scroll(function){
//     if($(document).scrollTop()>50{
//       $(navbar-default).css("background-color","#f8f8f8");
//       else{
//         $(navbar-default).css("background-color","yellow");
//       }
//     })
//   })