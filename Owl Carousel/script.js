$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        autoplay: true,
        responsiveClass:true,
        center:true,
        nav: false,
        NavText:[
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bxs-chevron-right'></i>"
        ],
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })    
});

