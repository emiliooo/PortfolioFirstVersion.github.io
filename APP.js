

$(document).ready(function() {
    $("#arrow").click(function () {
        $('html, body').animate({scrollTop: $('.about').offset().top}, 1000);
    });

    $(".menu ul li:nth-child(1)").click(function () {
        $('html, body').animate({scrollTop: $('.about').offset().top}, 1000);
    });

    $("nav ul li:nth-child(2)").click(function () {
        $('html, body').animate({scrollTop: $('.exo1').offset().top}, 1000);
    });
    $("nav ul li:nth-child(3)").click(function () {
        $('html, body').animate({scrollTop: $('.port').offset().top}, 1000);
    });

    $("nav ul li:nth-child(4)").click(function () {
        $('html, body').animate({scrollTop: $('.chose').offset().top}, 1000);
    });


    //sticky

    var stickyNavTop=$('.sticked').offset().top;
    var position=$('.about').offset().top;

    var sticky=function(){
        var scrollTop=$(window).scrollTop();

        if(scrollTop >position){
            $('.sticked').addClass("stick")
        }else{
            $('.sticked').removeClass("stick")
        }
    }

    sticky()

    $(window).scroll(function () {
        sticky()
    })




})
