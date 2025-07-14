$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 4,
        autoplay: false,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        navText: ["<i class='fa fa-long-arrow-left'>", "<i class='fa fa-long-arrow-right'>"]
    })

    $('.owl-carousel').find('.owl-nav').removeClass('disabled');
        $('.owl-carousel').on('changed.owl.carousel', (event) =>{
            $(this).find('.owl-nav').removeClass('disabled');
    });
});