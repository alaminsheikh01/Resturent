$(document).ready(function(){
	$(".nav-icon").click(function(){
		$(".full-nav").addClass("open")
	});

	$(".nav-close").click(function(){
		$(".full-nav").removeClass("open")
	});

    $(window).scroll(function(){
    	var sc = $(window).scrollTop();
    	if(sc>100){
    		$(".nav").addClass("sticky");
    	}
    	else{
    		$(".nav").removeClass("sticky");
    	}
    })
});

//carousel

$(document).ready(function(){
  //$(".owl-carousel").owlCarousel();

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:4
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
  

});
//carousel
/*$(document).ready(function(){
	$(".img-wrapper").magnificPopup({
	delegate:'a',
	type:'image',
	gallery:{
		enabled:ture
	}
});

});*/


//box hover start
$(document).ready(function() {
var $container = $("#inner-container"), $articles = $container.children("article"), timeout;

$articles.on('mouseenter', function(event) {
var $article = $(this);
clearTimeout(timeout);
timeout = setTimeout(function() {
if ($article.hasClass('active')) return false;
$articles.not($article).removeClass('active').addClass('blur');
$article.removeClass('blur').addClass('active');
}, 75);
$container.on('mouseleave', function(event) {
clearTimeout(timeout);
$articles.removeClass('active blur');
});
});


//counter start
$('.counter').counterUp({
    delay: 10,
    time: 2500
});
//counter end

/*
//startlight
var user_configuration={

    // "circle" or "square"
    shape:"circle",

    // star size in pixels
    initial_size:"12px",

    // final size of the stars after expansion 
    final_size:"64px", 

    // how fast the stars get bigger, in milliseconds
    expand_speed:"1s", 

    // how long until the star fades out
    fade_delay:"0.5s", 

    // how long the star fades for
    fade_duration:"0.5s", 

    // The variety of colors of the stars. Can be any CSS complient color (eg. HEX, rgba, hsl)
    colors:["hsla(62, 50%,50%, 0.5)", "rgba(255,255,255,0.5)","hsla(180, 72%, 52%, 0.5)"], 

    // how often a new wave of stars pop-out (in milliseconds. Bigger==longer)
    //frequency:100, 

    // how many stars pop out per wave
    density: 1,

    // whether the stars disappear after they are created
    keep_lit: false, 

    // whether the stars rotate through out their expansion
    rotation: true, 

    // how much of the element's area the stars will show up in (0-1)
    //coverage:1, 

    // the elements the script will target based on the class name
    target_class:'.starlight'

};
var advanced_configuration={

    // could be ease, ease-in, ease-out, etc
    expand_transition_timing: "linear", 

    // how long until the star starts to expand
    expand_delay: "0s",  

    // could be ease, ease-in, ease-out, etc
    rotation_transition_timing: "linear",  

    // up to how much to rotate to
    rotation_angle: "360deg", 

    // how long the rotation will take place
    rotation_duration: "1s", 

    // how long until rotation starts
    rotation_delay: "0s", 
     
    
};
//starlight
*/
});


//logo start
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });


//vip card
$(function() {
        $('.material-card > .mc-btn-action').click(function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });
//vip card


});
//logo end
