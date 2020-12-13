/*global $ , jquery , alert*/
//the selected time what do you want to turn carousel
$(document).ready(function () {
    "use strict";
    // use nice scroll
    $("html").niceScroll();
    
    $('.carousel').carousel({
        interval: 6000// select the time
    });


    $('.gear-check').click(function () {
        $('.color-option').fadeToggle();
                           
    });

//     change color theme
    var colorLi = $(".color-option ul li"),
        scrollButton = $("#scroll-top");
    colorLi
        .eq(0).css("backgroundColor", "#173e18").end()
        .eq(1).css("backgroundColor", "#3b5b8a").end()
        .eq(2).css("backgroundColor", "#8a6d3b").end()
        .eq(3).css("backgroundColor", "#35022f");
        
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    $(window).scroll(function () {
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });
     
    scrollButton.click(function () {
        $("html,body").animate({scrollTop : 0}, 600);
    });
});


//      Loading spinner
$(window).load(function () {
    "use strict";
    $("body").css("overflow", "auto");
    $(".loading-overlay .spinner,.loading-overlay").fadeOut(1500);
});

