$(document).ready(function () {

    $('.hobbyContainer').mouseover(function () {
        $(this).parent().find('.displayHobby').css("visibility", "visible");
    });

    $('.hobbyContainer').mouseleave(function () {
        $(this).parent().find('.displayHobby').css("visibility", "hidden");
    });

});


jQuery(document).ready(function ($) {
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top
        }, 1200);
    }
    $('[data-scroll]').on('click', scrollToSection);
}(jQuery));