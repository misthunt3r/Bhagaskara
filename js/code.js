
$(function(){
    $('label').hide();
    //aniimacja liczników

    $('#count1').animateNumber({ number: 365 },3000);
    $('#count2').animateNumber({ number: 98 },3000);
    $('#count3').animateNumber({ number: 69 },3000);
    $('#count4').animateNumber(
        {
            number: 1642,
            numberStep: $.animateNumber.numberStepFactories.separator(',',3,'')
        },3000
    );

    // animacja wejścia dużych bloków elementów

    var windowWidth = $(window).width();
    if (windowWidth > 1000) {

        $(window).scroll(function() {
            $('.animatedEntrance').each(function() {
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 700) {
                    $(this).addClass("bounceInRight"); // slideInUp, slideInDown, slideInLeft, slideInRight, slideExpandUp, expandUp, fadeIn, expandOpen, bigEntrance, hatch
                }
            });
        });

    }
    // wyłączenie animacji dla "komórek"
    if (windowWidth < 1000) {
        /////////////////////////////////////
        //  Disable Mobile Animated
        /////////////////////////////////////
        $("body").removeClass("noIE");
    }

    // animacje wejścia małych elementów, do zdefiniowania w atrybucie data-animation w html
    $('.noIE .animated:not(.animation-done)').waypoint(function() {

        var animation = $(this).data('animation');

        $(this).addClass('animation-done').addClass(animation);

    }, {
        triggerOnce: true,
        offset: '90%'
    });

    $(document).ready(function() {
        $(".fancybox").fancybox();
    });

});


