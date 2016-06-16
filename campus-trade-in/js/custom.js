
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