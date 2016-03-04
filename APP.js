$(document).ready(function() {
    $("#arrow").click(function () {
        $('html, body').animate({scrollTop: $('.about').offset().top}, 1000);
    });

    $(".menu ul li:nth-child(1)").click(function () {
        $('html, body').animate({scrollTop: $('.about').offset().top}, 1000);
    });

    $("nav ul li:nth-child(2)").click(function () {
        $('html, body').animate({scrollTop: $('.port').offset().top}, 1000);
    });

    $("nav ul li:nth-child(3)").click(function () {
        $('html, body').animate({scrollTop: $('.chose').offset().top}, 1000);
    });

    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
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

    function setMenu() {
        $(window).on('resize', function() {
            if ($(window).width() < 700) {
                $('.menu').hide();
                $('.menuBtn').show();
            } else {
                $('.menu').show();
                $('.menuBtn').hide();
                $('.mobileMenu').hide();
            }
        });
    }

    function setClick() {
        $('.menuBtn').on('click', function() {
            $('.mobileMenu').toggle();
        });
    }

    setMenu();
    setClick();



})