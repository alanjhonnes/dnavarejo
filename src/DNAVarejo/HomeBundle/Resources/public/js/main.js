var controller;

$(document).ready(function(){
    
    var $header = $('header');
    var $window = $(window);
    var windowWidth;
    var windowHeight;
    var mobileMode = false;
    
    
    var $buttons = $("nav a");
    var $sections = $(".primary-section");
    var $activeButton = $buttons.eq(0);
    var $activeSection = $sections.eq(0);
    var activeIndex = 0;
    var scrollpoints = [];
    var navHeight = 0;
    
    //var colors = ['#3D4D62', '#5E7082', '#657F94', '#7897AC', '#4F8AA8', '#85ABBC', '#697AA9' ];
    var colors = ['#3D4D62', '#5E7082', '#657F94', '#7897AC', '#697AA9' ];
    
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
        var yOffset = $(".primary-section:eq(" + sectionIndex + ")").offset().top - navHeight;
        TweenLite.to(window, 0.6, { scrollTo: { y: yOffset } } );
    });
    
    $("#work .plus-button").click(function(){
       $(this).toggleClass("open").prev().fadeToggle("fast");
    });
    
    var $casePage = $("#case-page");
    var $caseClose = $("#case-close");
    $("#clients-cases li").click(function(){
       $casePage.css("display","block");
       TweenMax.to($casePage, 0.7, { x: 10, opacity: 1 } ); 
    });
    
    $caseClose.click(function(){
        TweenMax.to($casePage, 0.7, { x: "100%", opacity: 0, onComplete: function(){
                $casePage.css("display","none");
        }} ); 
    });
    
    
    controller = new ScrollMagic();
    
    var aboutTimeline = new TimelineMax();
    aboutTimeline.add(new TweenMax.staggerFrom($("#white-bar div"), 0.7, { opacity: 0, y: "-=50" }, 0.2 ));

    // build scene
    var aboutScene = new ScrollScene({triggerElement: "#about", triggerHook: "onCenter"})
                                    .setTween(aboutTimeline)
                                    .addTo(controller);
                            
                            
    var workTimeline = new TimelineMax();
    
    //index of icons that should have their labels animated to the left;
    var labelsToLeft = [0, 1, 4, 5];
    
    
    $("#work article").each(function(index){
        var $icon = $(this).children(".icon");
        var $label = $(this).children(".icon-label");
        var $arrow = $(this).next();
        var $plus = $(this).children(".plus-button");
        workTimeline.add(TweenMax.from($icon, 0.7, { opacity: 0, scale: 1.4 }), "-=0.55");
        //animate from right to left
        if($plus){
            workTimeline.add(TweenMax.from($plus, 0.7, { opacity: 0, scale: 1.4 }), "-=0.55");
        }
        workTimeline.add(TweenMax.from($arrow, 0.7, { opacity: 0, scale: 1.4 }), "-=0.55");
        if(labelsToLeft.indexOf(index) !== -1){
            workTimeline.add(TweenMax.from($label, 0.7, { opacity: 0, x: "+= 80" }), "-=0.55");
        }
        //animate from left to right
        else {
            workTimeline.add(TweenMax.from($label, 0.7, { opacity: 0, x: "-= 80" }), "-=0.55");
        }
        
    });
    
    // build scene
    var workScene = new ScrollScene({triggerElement: "#work", triggerHook: 0.2})
                                    .setTween(workTimeline)
                                    .addTo(controller);
    
    var servicesTimeline = new TimelineMax();
    
    $("#services .girl-icon").each(function(){
        var $ballon = $(this).children("div");
        servicesTimeline.add(TweenMax.from($(this), 0.7, { opacity: 0, scale: 1.4 }), "-=0.55");
        servicesTimeline.add(TweenMax.from($ballon, 0.7, { opacity: 0, y:"-=50" }), "-=0.55");
    });
    
    var $greenArrows = $("#services .responsive-green-arrow");
    
    servicesTimeline.add(TweenMax.from($greenArrows.first(), 
                                        0.7, { opacity: 0, x:"-=50", scale: 1.4 }), "-=0.55");
    
    servicesTimeline.add(TweenMax.from($("#services .resume"), 
                                        0.7, { opacity: 0, y:"-=50", scale: 1.4 }), "-=0.25");
    
    servicesTimeline.add(TweenMax.from($greenArrows.last(), 
                                        0.7, { opacity: 0, x:"-=50", scale: 1.4 }), "-=0.55");
                                        
    servicesTimeline.add(TweenMax.from($("#services .apples"), 
                                        0.7, { opacity: 0, x:"-=50" }), "-=0.25");
                                        
    servicesTimeline.add(TweenMax.from($("#services .girl"), 
                                        0.7, { opacity: 0, y:"-=50" }), "-=0.35");
                                        
    servicesTimeline.add(TweenMax.allFrom($("#services-list > div"), 
                                        0.7, { opacity: 0, x:"-=50" }, 0.3), "-=0.35");
    
    var servicesScene = new ScrollScene({triggerElement: "#services", triggerHook: 0.2})
                                    .setTween(servicesTimeline)
                                    .addTo(controller);
                            
                            
    var recruitmentTimeline = new TimelineMax();
    
    recruitmentTimeline.add(TweenMax.staggerFrom($("#recruitment-icons div"), 0.7, {opacity: 0, scale: 1.4 }, 0.2));
    
    var recruitmentScene = new ScrollScene({triggerElement: "#recruitment", triggerHook: 0.2})
                                    .setTween(recruitmentTimeline)
                                    .addTo(controller);
                            
    var trainningTimeline = new TimelineMax();
    
    trainningTimeline.add(TweenMax.staggerFrom($("#trainning-icons div"), 0.7, {opacity: 0, scale: 1.4 }, 0.2));
    
    var trainningScene = new ScrollScene({triggerElement: "#trainning", triggerHook: 0.2})
                                    .setTween(trainningTimeline)
                                    .addTo(controller);
                            
    var clientsTimeline = new TimelineMax();
    
    $(".client-icon").each(function(index){
        var $icon = $(this).children(".icon");
        var $clientCheckmark = $(this).children(".checkmark-green");
        var $clientLabel = $(this).children(".icon-label");
        
        clientsTimeline.add(TweenMax.from($icon, 0.7, { opacity: 0, x:"-=50", scale: 1.4 }), "-=0.5");
        clientsTimeline.add(TweenMax.from($clientCheckmark, 0.7, { opacity: 0, y:"-=50", scale: 1.4 }), "-=0.5");
        clientsTimeline.add(TweenMax.from($clientLabel, 0.7, { opacity: 0, y:"-=50", scale: 1.4 }), "-=0.5");
        
        //se indice for menos que 2 dá pra buscar a proxima seta a seguir
        if(index < 2){
            var $arrow = $(this).next();
            clientsTimeline.add(TweenMax.from($arrow, 0.7, { opacity: 0, x:"-=50", scale: 1.4 }), "-=0.5");
        }
        
    });
    
    var clientsScene = new ScrollScene({triggerElement: "#clients", triggerHook: 0.5})
                                    .setTween(clientsTimeline)
                                    .addTo(controller);
                            
    var contactTimeline = new TimelineMax();
    
    $("#contact-icons div").each(function(){
        contactTimeline.add(TweenMax.from($(this), 0.7, { opacity: 0, x:"-=50", scale: 1.4 }), "-=0.5");
        
    });
    
    var contactScene = new ScrollScene({triggerElement: "#contact", triggerHook: 0.2})
                                    .setTween(contactTimeline)
                                    .addTo(controller);
    
    // show indicators (requires debug extension)
//    aboutScene.addIndicators();
//    workScene.addIndicators();
//    servicesScene.addIndicators();
//    recruitmentScene.addIndicators();
//    trainningScene.addIndicators();
//    clientsScene.addIndicators();
//    contactScene.addIndicators();
});
