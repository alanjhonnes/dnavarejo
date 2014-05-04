$(document).ready(function(){
    
    var $header = $('header');
    var $window = $(window);
    var windowWidth;
    var windowHeight;
    var mobileMode = false;
    
    
    var $buttons = $("nav a");
    var $sections = $("section");
    var $activeButton = $buttons.eq(0);
    var $activeSection = $sections.eq(0);
    var activeIndex = 0;
    var scrollpoints = [];
    var navHeight = 0;
    
    var colors = ['#3D4D62', '#5E7082', '#657F94', '#7897AC', '#4F8AA8', '#85ABBC', '#697AA9' ];
    
    $activeButton.addClass("active-button");
    
    $window.resize(function(){
        windowWidth = $window.width();
        windowHeight = $window.height();
        //console.log('W: ' + windowWidth + ' H: ' + windowHeight);
        if(windowWidth > 991){
            $header.css('height', windowHeight);
            var size = (windowHeight / 5) + 'px';
            navHeight = 0;
            mobileMode = false;
        }
        else {
            $header.css('height', 'auto');
            navHeight = 70;
            mobileMode = true;
        }
        $sections.css('min-height', (windowHeight -navHeight)+ 'px');
        
        calculateScrollpoints();
        
        $sections.each(function(){
            var $sectionContent = $(this).children(".section-content");
            var sectionOffset = ($(this).height() - $sectionContent.height()) / 2;
           $sectionContent.css("top", sectionOffset + "px");
        });

    }).resize();
    
    function calculateScrollpoints() {
        scrollpoints = [];
        $sections.each(function() {
            var offset;
            offset = $(this).offset().top - navHeight;
            scrollpoints.push(offset);
        });
    }
    
    
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        var totalPoints = scrollpoints.length;
        while (totalPoints--) {
            if (scrollpoints[totalPoints] <= scrolled) {
                if (activeIndex !== totalPoints) {
                    $activeButton.removeClass("active-button");
                    activeIndex = totalPoints;
                    TweenLite.to('#content', 0.6, { backgroundColor: colors[activeIndex] } );
                    $activeButton = $buttons.eq(totalPoints);
                    $activeButton.addClass("active-button");
                    $activeSection.removeClass('active-section');
                    $activeSection = $sections.eq(activeIndex);
                    $activeSection.addClass('active-section');
                }
                break;
            }
        }
    });
    
    $buttons.click(function(){
        $buttons.removeClass('active-button');
        $(this).addClass('active-button');
        var sectionIndex = $(this).index() -1;
        //scroll down to the respective section
        var yOffset = $("section:eq(" + sectionIndex + ")").offset().top - navHeight;
        TweenLite.to(window, 0.6, { scrollTo: { y: yOffset } } );
        
        
    });
    
    $(".plus-button").click(function(){
       $(this).toggleClass("open").prev().fadeToggle("fast");
    });
    
    
    
    
});
