/*
* Template Name      : Hammani Queen
* Template Version   : V 1.0.0
* Template Url       : .....................
* Language           : HTML5 | CSS3 |JavaScript
* Framework          : Bootstrap[CSS] | jQuery [JavaScript]
* Preprocesseur      : SaSS [CSS]
* Contact Me : Skaype   :- Boudraa.Hammani
*				Facebook :- Ham mani
*				Email    :- Ham47mani@gmail.com
*/
/*global $, window*/
$(function () {
    "use strict";

    /*                       Start Cashing Variables
    ========================================================================== */
    var link            = $("header nav ul li a").not("header nav .dropdown-toggle"),
        imgCarouselold  = $("header .carousel .prin img"),
        imgCarouselNow  = $("header .carousel .choix img"),
        chivRight       = $(".services .glyphicon-chevron-right"),
        chivLeft        = $(".services .glyphicon-chevron-left"),
        itemServices    = $(".services .item");
    /*                       End Cashing Variables
    ========================================================================== */
    
    /*                       Start Header
    ========================================================================== */
    //--> Add Class Active For Navbar Link
    link.click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    //--> Contomize Carousel
    imgCarouselNow.click(function () {
        imgCarouselold.attr("src", $(this).attr("src"));
    });
    /*                       End Header
    ========================================================================== */
    
    /*                       Start Services
    ========================================================================== */
    //--> Customize Carousel
    chivRight.click(function () {
        itemServices.filter(".item_show").first().hide(1000, function () {
            itemServices.filter(".item_hide").last().show(1000).removeClass("item_hide").addClass("item_show");
            $(this).removeClass("item_show").addClass("item_hide");
        });
    });
    chivLeft.click(function () {
        itemServices.filter(".item_show").last().hide(1000, function () {
            itemServices.filter(".item_hide").first().show(1000).removeClass("item_hide").addClass("item_show");
            $(this).removeClass("item_show").addClass("item_hide");
        });
    });
    /*                       End Services
    ========================================================================== */
    
    /*                       Start Nice Scroll
    ========================================================================== */
    $('html').niceScroll({
        cursorcolor: 'var(--main-Color)',
        cursorborder: '1px solid var(--main-Color)'
    });
    /*                       End Nice Scroll
    ========================================================================== */
});

/* ------------------------------- Start Loading Screene ------------------------------- */
$(window).on("load", function () {
    "use strict";
    
});
/* ------------------------------- End Loading Screene ------------------------------- */