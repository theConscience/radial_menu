$(document).ready(function() {
	$('nav').find('li').find('a').click( function(event){
		event.preventDefault();
		if ( $(this).text() === $('.selected').find('a').text() ) {

		} else {
			var thisVal = parseInt($(this).text());
			var selectedVal = parseInt($('.selected').find('a').text());	
			var angle = 60 - thisVal;
			$('ul').css({'transform': 'rotate(' + angle + 'deg)', '-moz-transform': 'rotate(' + angle + 'deg)', '-webkit-transform': 'rotate(' + angle + 'deg)'});	
			switch($(this).text()) {
			    case '0':
			        $('.center').css({'background-image': 'url("img/1.jpg")'});
			        break;
			    case '60':
			        $('.center').css({'background-image': 'url("img/2.jpg")'});
			        break;
			    case '120':
			        $('.center').css({'background-image': 'url("img/3.jpg")'});
			        break;
			    case '180':
			        $('.center').css({'background-image': 'url("img/4.jpg")'});
			        break;
			    case '240':
			        $('.center').css({'background-image': 'url("img/5.jpg")'});
			        break;
			    case '300':
			        $('.center').css({'background-image': 'url("img/6.jpg")'});
			        break;
			}
			$('.selected').removeClass('selected');
			$(this).parent().addClass('selected')
		}
	});
});