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


})

