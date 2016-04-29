/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Uses the built in easing capabilities added In jQuery 1.1  * to offer multiple easing options * TERMS OF USE - jQuery Easing * Open source under the BSD License.  * Copyright © 2008 George McGinley Smith * All rights reserved.
*/
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
/*
/*!
 * classie - class helper functions * from bonzo https://github.com/ded/bonzo * 
 * classie.has( elem, 'my-class' ) -> true/false * classie.add( elem, 'my-new-class' ) * classie.remove( elem, 'my-unwanted-class' ) * classie.toggle( elem, 'my-class' ) */
/*jshint browser: true, strict: true, undef: true *//*global define: false */
!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){var n=a(s,e)?c:t;n(s,e)}var a,t,c;"classList"in document.documentElement?(a=function(s,e){return s.classList.contains(e)},t=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(a=function(s,n){return e(n).test(s.className)},t=function(s,e){a(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var i={hasClass:a,addClass:t,removeClass:c,toggleClass:n,has:a,add:t,remove:c,toggle:n};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);
/* END CLASSIE */



/* MENU RESPONSIVE */
/*! Pushy - v0.9.2 - 2014-9-13* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.* https://github.com/christophery/pushy/* by Christopher Yee */
$(function() {
    var pushy = $('.pushy'), //menu css class
        body = $('body'),
        container = $('#container'), //container css class
        push = $('.push'), //css class to add pushy capability
        siteOverlay = $('.site-overlay'), //site overlay
        pushyClass = "pushy-left pushy-open", //menu position & menu open class
        pushyActiveClass = "pushy-active", //css class to toggle site overlay
        containerClass = "container-push", //container open class
        pushClass = "push-push", //css class to add pushy capability
        menuBtn = $('.menu-btn, .pushy a'), //css classes to toggle the menu
        menuSpeed = 200, //jQuery fallback menu speed
        menuWidth = pushy.width() + "px"; //jQuery fallback menu width

    function togglePushy() {
        body.toggleClass(pushyActiveClass); //toggle site overlay
        pushy.toggleClass(pushyClass);
        container.toggleClass(containerClass);
        push.toggleClass(pushClass); //css class to add pushy capability
    }

    function openPushyFallback() {
        body.addClass(pushyActiveClass);
        pushy.animate({
            left: "0px"
        }, menuSpeed);
        container.animate({
            left: menuWidth
        }, menuSpeed);
        push.animate({
            left: menuWidth
        }, menuSpeed); //css class to add pushy capability
    }

    function closePushyFallback() {
        body.removeClass(pushyActiveClass);
        pushy.animate({
            left: "-" + menuWidth
        }, menuSpeed);
        container.animate({
            left: "0px"
        }, menuSpeed);
        push.animate({
            left: "0px"
        }, menuSpeed); //css class to add pushy capability
    }

    //checks if 3d transforms are supported removing the modernizr dependency
    cssTransforms3d = (function csstransforms3d() {
        var el = document.createElement('p'),
            supported = false,
            transforms = {
                'webkitTransform': '-webkit-transform',
                'OTransform': '-o-transform',
                'msTransform': '-ms-transform',
                'MozTransform': '-moz-transform',
                'transform': 'transform'
            };

        // Add it to the body to get the computed style
        document.body.insertBefore(el, null);

        for (var t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = 'translate3d(1px,1px,1px)';
                supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);

        return (supported !== undefined && supported.length > 0 && supported !== "none");
    })();

    if (cssTransforms3d) {
        //toggle menu
        menuBtn.click(function() {
            togglePushy();
        });
        //close menu when clicking site overlay
        siteOverlay.click(function() {
            togglePushy();
        });
    } else {
        //jQuery fallback
        pushy.css({
            left: "-" + menuWidth
        }); //hide menu by default
        container.css({
            "overflow-x": "hidden"
        }); //fixes IE scrollbar issue

        //keep track of menu state (open/close)
        var state = true;

        //toggle menu
        menuBtn.click(function() {
            if (state) {
                openPushyFallback();
                state = false;
            } else {
                closePushyFallback();
                state = true;
            }
        });

        //close menu when clicking site overlay
        siteOverlay.click(function() {
            if (state) {
                openPushyFallback();
                state = false;
            } else {
                closePushyFallback();
                state = true;
            }
        });
    }
});
/* END MENU RESPONSIVE */

/* --- MENU SECCIONES --- */
$(function() {
    var pushy_2 = $('.pushy_2'), //menu css class
        body = $('body'),
        container = $('#container'), //container css class
        push = $('.push'), //css class to add pushy capability
        siteOverlay_2 = $('.site-overlay-02'), //site overlay
        pushy_2Class = "pushy-left-02 pushy-open", //menu position & menu open class
        pushy_2ActiveClass = "pushy-active_2", //css class to toggle site overlay
        containerClass = "container-push", //container open class
        pushClass = "push-push", //css class to add pushy capability
        menuBtn_2 = $('.menu-secciones'), //css classes to toggle the menu
        menuSpeed = 200, //jQuery fallback menu speed
        menuWidth = pushy_2.width() + "px"; //jQuery fallback menu width

    function togglePushy() {
        body.toggleClass(pushy_2ActiveClass); //toggle site overlay
        pushy_2.toggleClass(pushy_2Class);
        container.toggleClass(containerClass);
        push.toggleClass(pushClass); //css class to add pushy capability
    }

    function openPushyFallback() {
        body.addClass(pushy_2ActiveClass);
        pushy_2.animate({
            left: "0px"
        }, menuSpeed);
        container.animate({
            left: menuWidth
        }, menuSpeed);
        push.animate({
            left: menuWidth
        }, menuSpeed); //css class to add pushy capability
    }

    function closePushyFallback() {
        body.removeClass(pushy_2ActiveClass);
        pushy_2.animate({
            left: "-" + menuWidth
        }, menuSpeed);
        container.animate({
            left: "0px"
        }, menuSpeed);
        push.animate({
            left: "0px"
        }, menuSpeed); //css class to add pushy capability
    }

    //checks if 3d transforms are supported removing the modernizr dependency
    cssTransforms3d = (function csstransforms3d() {
        var el = document.createElement('p'),
            supported = false,
            transforms = {
                'webkitTransform': '-webkit-transform',
                'OTransform': '-o-transform',
                'msTransform': '-ms-transform',
                'MozTransform': '-moz-transform',
                'transform': 'transform'
            };

        // Add it to the body to get the computed style
        document.body.insertBefore(el, null);

        for (var t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = 'translate3d(1px,1px,1px)';
                supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);

        return (supported !== undefined && supported.length > 0 && supported !== "none");
    })();

    if (cssTransforms3d) {
        //toggle menu
        menuBtn_2.click(function() {
            togglePushy();
        });
        //close menu when clicking site overlay
        siteOverlay_2.click(function() {
            togglePushy();
        });
    } else {
        //jQuery fallback
        pushy_2.css({
            left: "-" + menuWidth
        }); //hide menu by default
        container.css({
            "overflow-x": "hidden"
        }); //fixes IE scrollbar issue

        //keep track of menu state (open/close)
        var state = true;

        //toggle menu
        menuBtn_2.click(function() {
            if (state) {
                openPushyFallback();
                state = false;
            } else {
                closePushyFallback();
                state = true;
            }
        });


        //close menu when clicking site overlay
        siteOverlay_2.click(function() {
            if (state) {
                openPushyFallback();
                state = false;
            } else {
                closePushyFallback();
                state = true;

            }
        });
    }
});
/* ---  END MENU SECCIONES -- */



$(document).ready(function() {

    /*----- Header scrolldown ---------*/
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('header').addClass('header-scrolldown');
        } else {
            $('header').removeClass('header-scrolldown');
        }
    });
    /*----- END Header scrolldown ---------*/

    /*--- Anchor scrolldown ----*/
    $(".easing-anchor").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 130 + "px"
        }, {
            duration: 1000,
            easing: "easeInOutExpo"
        });
        return false;
    });

        <!-- Show table -->
        /*$('.ver-movimientos').click(function() {
            if ($(".minimize-table").hasClass('hidden-box-01')) {
                $(".minimize-table").removeClass('hidden-box-01');
                $(".ver-movimientos span").html('-');
                $(".ver-movimientos").attr('data-name-btn', '-');
            } else {
                $(".ver-movimientos span").html('+');
                $(".ver-movimientos").attr('data-name-btn', '+');
                $(".minimize-table").addClass('hidden-box-01');
            }
        });*/	
		
		$( ".toggle-table" ).click(function() {			
		  
		 if ($('#visible-table').hasClass('visible-table')) {
            $('#visible-table').slideDown(1000, "easeInOutQuint").removeClass('visible-table');
            $(".toggle-table span").html('-');
            $(".toggle-table").attr('data-name-btn', '-');
			
        } else {
            $('#visible-table').slideUp(600, "easeInOutQuint").addClass('visible-table');
            $(".toggle-table span").html('+');
            $(".toggle-table").attr('data-name-btn', '+');
        }
		  
		});
		

        <!-- END Show tables -->

    /*---- If Mobile ---*/
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("body").addClass("device-mobile")
    }
    /*---- END If Mobile ---*/

    /*---- Forzar Touch IOS -----*/
    document.addEventListener("touchstart", function() {}, false);
    /*---- Forzar Touch IOS -----*/

});