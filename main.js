  $(document).ready(function () {
   var page_height=$(window).height();
        var page_width=$(window).width();
//initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationClickable:true,
        spaceBetween:0 ,
        simulateTouch:false 
        
    }) 

      

    
      //on resize
    
      $( window ).resize(function() {
    
    }
    );
 if(page_width<778)
     {
         $('.divsn').removeClass('center-content');
         $('.mission-divsn').removeClass('mission-text');
       
     }
if(page_width<620){
        $('.bubble-mobile-right,.bubble-mobile-left').removeClass('bubble-new').removeClass('bubble-bottom');
}      
//Navigstion style change when Scroll
      
    $(window).scroll(function () { 
      
    if ($(window).scrollTop() > 80) {
        
      $('.navbar-default').addClass('navbar-scroll');
       $('.navbar').css({'min-height':'0px'});  
      $('.navbar-brand img').attr('src','images/logo-color.fw.png');   
       
       
    }
    else{
      $('.navbar-default').removeClass('navbar-scroll');
         $('.navbar-brand img').attr('src','images/Logo.fw.png');  
       
    }
         /* if($(window).scrollTop()>$('.about-slider').height()){
              $('section.services').css({'padding-top':'80px'});
              if(page_width>1550)
                  {
                   $('section.services').css({'padding-top':'10%'});    
                      
                  }
              $('section.services p.intro').css({'margin-bottom':'15px'});  
          }
          else{
             $('section.services').css({'padding-top':'0px'});
              if(page_width>1550)
                  {
                   $('section.services').css({'padding-top':'7%'});    
                  }
             $('section.services p.intro').css({'margin-bottom':'120px'}); 
          }
         */
  });
    
       
// Owl Carousel
      
         $('#owl').owlCarousel({
                   items:3,
                   margin:5,
                   mouseDrag:false,
                   touchDrag:false
               });
//Scrollify   
      if(page_width>800){
        /*  $.scrollify({
                        section : ".abs",
                        interstitialSection:'footer,header,.partners',
               
                scrollSpeed: 1100
                    });*/
                var container_height=$('.time-line').height();
    var bubble_container_height=$('.time-line .container').height();
    var offset=container_height-bubble_container_height;
    $('.time-line').css({'padding-top':offset/4});
      }
//

      $('.svgImage').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

      
  });

$(document).ready(function(){
        var container_height=$('.sliders').height();
        var content_height=$('.sliders .container').height();
    var nav_height=$('nav').height();
        var offset=container_height-content_height;
        $('.sliders').css({'padding-top':offset/2+nav_height});
});
