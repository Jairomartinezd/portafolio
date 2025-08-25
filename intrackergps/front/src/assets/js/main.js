$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

/* Animate */
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    slideTransition: 'linear',
    nav: false,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

/* Mostrar el Año Actual */
const fecha = new Date();
const anio = fecha.getFullYear();
document.getElementById("anioActual").textContent = anio;

