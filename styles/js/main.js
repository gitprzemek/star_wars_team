$(document).ready(function(){

// SLIDER FOR ARTICLES

$('#articles-slider').owlCarousel({
    margin: 10,
    smartSpeed: 1000,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

// SMOOTH SCROOLING
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
/*NAVBAR AFTER SCROLL*/

// $(window).scroll(function(){
//     if($(document).scrollTop() > 50){
//         $("nav").addClass("scrolling");
//     } else {
//         $("nav").removeClass("scrolling");
//     }    
// });



})

