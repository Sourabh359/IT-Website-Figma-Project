$(function(){
     $(".menu").click(function(){
          $(".wrap-1 .collapse1").slideToggle();
          $(this).toggleClass("active");
     });


     $(".work-details a.vert").click(function(e){
          e.preventDefault();
          if( !$(this).parent().parent().hasClass("active")){
               $(".work .collapse").fadeOut(0);
               $(this).next(".collapse").fadeIn();
               $(".work-details li").removeClass("active");
               $(this).parent().parent().addClass("active");
          }
     });


     $(".banner").slick({
          autoplay:true,
          arrows:false,
          dots:true
     })


     AOS.init();

     $(".review a").magnificPopup({type:"image"})

});
