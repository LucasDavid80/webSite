jQuery(document).ready(function($){

    // FIXED HEADER
    window.onscroll = function(){
        if(window.pageYOffset > 140){
            $('#header').addClass("active");
        } else {
            $('#header').removeClass("active");
        }
    };

    //ISOTOPE
    let btns = $("#servicos .button-group button");

    btns.click(function(e){
        $("#servicos .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#servicos .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function(){
        $("#servicos .grid").isotope({
            filter:"*",
        });
    });

    //MAGNIFY
    // $(".grid .popup-link").magnificPopup({
    //     type: "image",
    //     gallery: {
    //         enable: true,
    //         tPrev: "Anterior",
    //         tNext: "Próxima",
    //         tCounter: "%curr% de %total%",
    //     },
    // });

    $(document).ready(function() {
        $('.grid').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
	    });
    });

    //OWL
    $(".owl-carousel").owlCarousel({
        loop:false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true,
        lazyLoad: true,
        nav: false,
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
});