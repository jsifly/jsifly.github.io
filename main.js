$.fn.extend({
  qcss: function(css) {
    return $(this).queue(function(next) {
      $(this).css(css);
      next();
    });
  }
});
(function () {
  var toggle = document.querySelector('.nav-toggle');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
    $(".xqc").toggleClass('pop');
     $(".grimlock").toggleClass('fade');
     $(".M1").toggleClass('fade');
     $(".fin").toggleClass('fade');
     $(".demo").toggleClass('fade');
        $("body").toggleClass('frozone');

  });
})();

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[769,1],
        pagination:true,
        transitionStyle:"goDown",
        autoPlay:true
    });
});


$(document).ready(function(){



	$("#load").delay(1000).fadeOut(1000);
	$(".progress").delay(500).fadeOut(1000);
	var ii;
	var xx = 1500;
	for(ii=0;ii< $(".R3").length;ii++) {
		$(".R3").eq(ii).delay(xx).qcss({ opacity: '1' });
		xx += 400;
	}



});
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
   
    // build scenes
    new ScrollMagic.Scene({triggerElement: "#parallax1q"})
                    .setTween("#parallax1q > div", {y: "40%", ease: Linear.easeNone})
         	
                    .addTo(controller);
