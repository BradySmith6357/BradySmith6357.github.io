
// Full page scroll (not part of navbar function)
$(document).ready(function() {
    $('#fullpage').fullpage({
    	sectionsColor: ['#ECF0F1', '#ECF0F1', '#ECF0F1', '#ECF0F1'],
    	anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
		menu: '#myMenu',
		autoScrolling: false,
		fitToSection: true,
		// animateAnchor: true,
		// recordHistory: false,
		navigation: true,
		// loopBottom: true,
		scrollBar: true,
		scrollingSpeed: 700
    });
});

$(document).on('click', '#moveDown', function(){
	$.fn.fullpage.moveSectionDown();
});

$(document).on('click', '#movePortfolio', function(){
	$.fn.fullpage.moveTo('3rdPage')
})

$(document).on('click', '#moveContact', function(){
	$.fn.fullpage.moveTo('4thPage')
})

// Start Nav function
$(function() {
    $('.toggle-nav').click(function() {
        toggleNavigation();
    });
});
 
// The toggleNav function itself
function toggleNavigation() {
    if ($('#container').hasClass('display-nav')) {
        // Close Nav
        $('#container').removeClass('display-nav');
    } else {
        // Open Nav
        $('#container').addClass('display-nav');
    }
}

// Sliding codes
$("#toggle > li > div").click(function () {
    if (false == $(this).next().is(':visible')) {
        $('#toggle ul').slideUp();
    }
 
    var $currIcon=$(this).find("span.the-btn");
 
    $("span.the-btn").not($currIcon).addClass('fa-plus').removeClass('fa-minus');
 
    $currIcon.toggleClass('fa-minus fa-plus');
 
    $(this).next().slideToggle();
 
    $("#toggle > li > div").removeClass("active");
    $(this).addClass('active');
 
});

// // Have hamburger disapear on scroll
// $(window).bind('scroll', function() {
//      if ($(window).scrollTop() > 100) {
//          $('#spinner-form4').hide();
//      }
//      else {
//          $('#spinner-form4').show();
//      }
// });

// Fire Modal
  $(document).ready(function(){
    $('.modal-trigger').leanModal({
    	opacity:.1
    });
  });
