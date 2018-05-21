
/* ==========================================================================
   WE MAKE WEBSITES TECHNICAL TEST JAVASCRIPT GOES BELOW:
   ========================================================================== */

$(document).ready(function () {
    /************************************
    NAVIGATION MENU / HOVER
    *************************************/
    //On mouse enter show sub navigation
    $('#navbarDropdownMenuLink').mouseenter(function () {
        $('.sub-navigation').addClass('sub-menu-open');
        //If open class is present fade in shopping cart
        if ($('.sub-navigation').hasClass('sub-menu-open')) {
            $('.sub-navigation').fadeIn();
        };
    });

    //On sub navigation mouse leave fade sub nav out and remove class
    $('.sub-navigation').mouseleave(function () {
        $(this).removeClass('sub-menu-open').fadeOut();
    });

    /************************************
    SHOPPING CART JAVASCRIPT (JQUERY)
    *************************************/

    //Move shopping cart position in DOM to allow for better responsive appearence when using bootstrap navigation
    //If a different navigation menu is used, this is not required
    if (matchMedia) {
        //Set media query
        const browserSize = window.matchMedia("(max-width: 991px)");
        //Add event listener to check for browser width chages
        browserSize.addListener(WidthChange);
        //Fire WidthChange function
        WidthChange(browserSize);
    };

    // media query change
    function WidthChange(browserSize) {
        //If browser window matches media query execute code in if statement, else run else code
        if (browserSize.matches) {
            $(".shopping-cart").detach().appendTo('.mobile-cart-container');
        } else {
            $(".shopping-cart").detach().appendTo('.shopping-cart-desktop');
            $('.sub-navigation').hide();
            $('#main-content').css({ top: '0px' });
        }

    };

    //On mouse enter show shopping cart and add a class of open
    $('.cart').mouseenter(function () {
        $('.shopping-cart').addClass('open opened');
        //If open class is present fade in shopping cart
        if ($('.shopping-cart').hasClass('open')) {
            $('.shopping-cart').fadeIn();
        };
    });

    //On shopping cart mouse leave fade cart out and remove open class
    $('.shopping-cart').mouseleave(function () {
        $(this).removeClass('open').fadeOut();
    });

    //On mobile devices add click functionality to cart to open and toggle class cart-open
    $('.mobile-cart-button').on('click', function () {
        //If navigation menu is open then close menu and then open shopping cart
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-toggler').click();
            //Timeout function to allow navbar to close
            setTimeout(function () {
                $('.shopping-cart').toggleClass('cart-open');
            },400);
        } else {
            $('.shopping-cart').toggleClass('cart-open');
        }
    });

    //Close shopping cart when navigation button is clicked
    $('.mobile-navigation').on('click', function () {
        $('.shopping-cart').removeClass('cart-open');
    });

    $('.mobile-navigation').on('click', function () {
        $('#main-content').toggleClass('menu-is-open');
        if ($('#main-content').hasClass('menu-is-open')) {
            $('#main-content').css({ top: '290px' });
        } else {
            $('#main-content').css({ top: '0px' });
        };
    
    });

});




