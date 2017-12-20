$(document).ready(loadPage);
var loadPage = function () {
    var target =0;
    // elementos:
    var $buttons = $('.control');
    console.log($buttons)
    var $previous = $('.previous');
    var $next = $('.next');
    //eventos
    $buttons.click(changeImage);
    $previous.click(previousImage);
    $next.click(nextImage);

    var changeImage = function () {
        console.log('funciona')
       target = parseInt($(this).data(target)) ;
       showImge(target);
    }

    var previousImage = function(e) {
        e.preventDefault();
        target = target - 1;
        target = (target < 0) ? 4 :target;
        showImge(target);
    }

    var nextImage = function (e) {
        e.preventDefault();
        target = target + 1 ;
        target = (target>4) ? 0 : target;
        showImge(target);
    }

    var showImge = function () {
       var $lastSlide = $('div.active') ;
       var $slide = $("'div[data-slide='" + target + " ']");
       $lastSlide.removeClass("active");
       $slide.addClass('active');
    }
} 
loadPage();
