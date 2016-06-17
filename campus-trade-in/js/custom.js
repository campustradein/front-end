
// custom js files 

/*
	
	1. Customized navigation effect on scrolling
	2. backstrech image flipper header section. see documentation ( http://srobbin.com/jquery-plugins/backstretch/ )
    3. activator on sign up or login form. when clicks it will activate the current button 
    4. Featured Books Carousel. see documentation ( http://www.owlgraphic.com/owlcarousel/ )
    5. Swing Scroll to top. Used for the arrow on the right side, which takes you up to the top
    6. register and login link auto clicked while opening modal
*/

/* 1. navigation scroll effect */

    var navigation = $('.header').offset().top + 200;
    $(document).scroll(function(){
        if($(this).scrollTop() > navigation){
            $('.ArrowUp').show();
        }
        else{
            $('.ArrowUp').hide();
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
 
/* 4. owl carousel */

    owl.owlCarousel({
     
        // Most important owl features
        items : 4,

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

// 5. navigation scroll/swing code you can customize it . see documentation for furhter details

    $(".scroll").on('click',function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top - 50;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
    });

// 6. Auto clicked

    $('#registerUser').on('click', function(){
        $('#targetRegisterUser').trigger('click');
    });
    $('#loginUser').on('click', function(){
        $('#targetLogInUser').trigger('click');
    });


// 7. form validation library
    
    // login form 

    var validator = new FormValidator('example_form', [{
        name: 'req',
        display: 'required',
        rules: 'required'
    }, {
        name: 'password',
        rules: 'required'
    }, {
        name: 'email',
        rules: 'valid_email',
        depends: function() {
            return Math.random() > .5;
        }
    }, {
        name: 'minlength',
        display: 'min length',
        rules: 'min_length[8]'
    }], function(errors, event) {
        if (errors.length > 0) {
            alert('errors');
        }
    });

    // sign up form 

    var validator = new FormValidator('example_form2', [{
        name: 'req',
        display: 'required',
        rules: 'required'
    }, {
        name: 'passwordSignUp',
        rules: 'required'
    }, {
        name: 'fullName',
        rules: 'required'
    },  {
        name: 'emailSignUp',
        rules: 'valid_email',
        depends: function() {
            return Math.random() > .5;
        }
    }, {
        name: 'minlength',
        display: 'min length',
        rules: 'min_length[8]'
    }], function(errors, event) {
        if (errors.length > 0) {
            alert('errors');
        }
    });