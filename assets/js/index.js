$(document).ready(function () {
    var x = window.matchMedia("(min-width: 768px)")
    var y = window.matchMedia("(min-height: 576px)");
    var owl = $('.owl-carousel');
    if(x.matches){
        owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    }else if(y.matches){
        owl.owlCarousel({
            items: 2,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    }else{
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        })
    }
});
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-main");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
