// // Preloader
// $(window).on('load', function () {
//     $("#preloader").delay(600).fadeOut();
// });

//change menu color
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").classList.add("scroll");
    } 
    else {
        document.getElementById("nav").classList.remove("scroll");
    }

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("back-to-top").style.display = "block";
    } 
    else {
        document.getElementById("back-to-top").style.display = "none";
    }
};

//change svg hm menu
$(document).ready(function () {
    var temp = document.getElementsByClassName("navbar-toggler");
    $(temp).click(function () {
        if ((document.getElementById("bar").style.display) == "none") {
            document.getElementById("bar").style.display = "inline-block";
            document.getElementById("times").style.display = "none";
        }
        else {
            document.getElementById("times").style.display = "inline-block";
            document.getElementById("bar").style.display = "none";
        }
    })
});

//animation for going to a ID
$("#nav .nav-item [href^='#']").on('click', function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 600);
});

//animation for going to the top
$('#back-to-top').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
});

//initialiaze gallery
const gallery = document.querySelector('tz-gallery');
if(gallery !== null) {
    baguetteBox.run('.tz-gallery');
}

//solving IOS problem
$(document).ready(function () {
    scroll = window.pageYOffset;
    $(".lightbox").click(function () {
        // document.body.style.overflowY = 'hidden';//ok
        document.body.style.height = '100%';//ok
        document.body.style.position = 'fixed';//ok
        document.body.style.top = '100%';
        document.getElementById("nav").style.display="none";
    });
    $("#close-button").click(function () {
        // document.body.style.overflowY = 'scroll';//ok
        document.body.style.height = '100%';//pok
        document.body.style.position = 'unset';//ok
        document.body.style.top = '0';
        document.getElementById("nav").style.display = "flex";
        document.getElementById('gallery').scrollIntoView(true);//ok
        
    });
    $(document).keyup(function (e) {
        if (e.key === "Escape") { // escape key maps to keycode `27`
            document.body.style.height = '100%';//pok
            document.body.style.position = 'unset';//ok
            document.body.style.top = '0';
            document.getElementById("nav").style.display = "flex";
            document.getElementById('gallery').scrollIntoView(true);//ok

        }
    });
});

//gallery filter section
$(".filter").not('.' + 'pizze-snack').hide('3000');
$(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});


