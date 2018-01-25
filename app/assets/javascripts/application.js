// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// open nav and set left margin of main content to 250px


$(document).ready(function(){
        // hover has two events combined
    $('.dropdown').hover(
        // on mouseover
        function(){
            $('.dropbtn').css('background-color', 'blue');
        // on mouseleave
        }, function(){
            $('.dropbtn').css('background-color', 'green');
    });

    // make it so that navbar follows window as you scroll
    var element = $('.navbar'),
    originalY = element.offset().top;

    // Space between element and top of screen (when scrolling)




    $(window).on('scroll', function(event) {
        // get the number of pixels above the broser window (pixels you cant see b/c you've scrolled)
        var scrollTop = $(window).scrollTop();

        element.stop(false, false).animate({
            top: scrollTop < originalY
                    ? 0
                    : scrollTop - originalY 
        }, 300);
    });

    // $(window).on('load', function(event){
    //     element.

    // })
    
})

