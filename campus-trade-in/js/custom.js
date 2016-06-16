
// custom js files 

/*
	
	1. Customized navigation effect on scrolling
	2. backstrech image flipper header section. see documentation ( http://srobbin.com/jquery-plugins/backstretch/ )
    3. activator on sign up or login form. when clicks it will activate the current button 

*/

/* 1. navigation scroll effect */

    var navigation = $('.header').offset().top + 10;
    $(document).scroll(function(){
        if($(this).scrollTop() > navigation){
            // $('.navbar-default').css({
            //     'background-color':'rgba(43,51,65,0.5)',
            //     'color':'#fff'
            // });
            // $('.navbar-default .navbar-brand').css({
            //     'color':'#fff'
            // });
            // $('.navbar-right li a').css({
            //     'color':'#fff',
            // });
            // $('.navbar-right li').css({
            //     'border':'none'
            // });
        }
    });

/* 2. backstretch image flipper */

     $(".header").backstretch([
      "assets/header/1.jpg",
      "assets/header/2.jpg",
      "assets/header/3.jpg"
      ], {
        fade: 750,
        duration: 4000
      }); 
    
/* 3. activator */

    $('#activator li').on('click', function(){
        $(this).addClass('itemActive').siblings().removeClass('itemActive');
    });


    var owl = $("#owl-demo");
    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
 
    owl.owlCarousel({
     
        // Most important owl features
        items : 4,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,

        //Autoplay
        autoPlay : true,
        stopOnHover : false,

        // Navigation
        navigation : false,
        rewindNav : true,
        scrollPerPage : false,

        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,

        //Pagination
        pagination : false,
        paginationNumbers: false,

    });

