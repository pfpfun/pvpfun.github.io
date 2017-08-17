$(document).ready(function(e) {
	var elhover =$('.logo, .quickstart, .logo2, .updater, .client, .lk, .osx, .simplemodal-close, .reg')
	$(elhover).append('<div class="fhover"></div>').each(function() {
		var $fake = $('> .fhover', this).css('opacity', '0');
		$(this).hover(function () {
			$fake.stop().fadeTo(400, 1);
		}, function () {
			$fake.stop().fadeTo(400, 0);
		});
	});
	
	
	$("#navi li a").hover(function() {
		var x = this.offsetLeft - 5;		
		var w = $(this).width() + 50;
		$(this).animate({ opacity: 1},600);
		$('.hover').stop().animate({left: x, width: w }, 600);
    },function() {
		$('.hover').stop().animate({left: 100, width:100},600);
		$(this).animate({ opacity: 0.7},600);
    });
	
	$("#bnavi li a").hover(function() {
		var x = this.offsetLeft - 5;		
		var w = $(this).width();
		$('.linearr').stop().animate({left: x, width: w }, 600);
    },function() {
		$('.linearr').stop().animate({left: 0, width:0},600);
    });
	$('.fade').height($(document).height());
	$('.fade').click(function(e) {
        $('#popup').stop().animate({top: -490},400);
		$('.fade').fadeOut(400);
		$('.popup').delay(400).hide();
    });

	$('#stock').click(function(e) {
		if($(this).hasClass('active')) {
			$(this).animate({right: -516},1300).removeClass('active');	
		} else {
        	$(this).animate({right: -100},1300).addClass('active');
		}
    });
});


function showPopup() {
	$('#popup').show().stop().animate({top:200},400);
	$('.fade').fadeIn(400);
}
