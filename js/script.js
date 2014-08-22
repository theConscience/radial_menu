$(document).ready(function() {
	var rotateAngle = 60;
	var spinway = 0;
	$('nav').find('li').find('a').click( function(event){
		event.preventDefault();
		if ( $(this).text() === $('.selected').find('a').text() ) {

		} else {
			var thisVal = parseInt($(this).text());
			var selectedVal = parseInt($('.selected').find('a').text());	
			var angle = Math.abs(selectedVal - thisVal);
			if (angle >= 180 && selectedVal > thisVal) {
				/*alert("Formula1 " + angle+" angle;\n "+selectedVal+" selectedVal; \n"+thisVal+"  thisVal;");*/
				rotateAngle -= 360-angle;
				spinway = -1;
			} else if (angle >= 180 && selectedVal < thisVal) {
				rotateAngle += 360-angle;
				spinway = 1;
			} else if (angle < 180 && selectedVal > thisVal) {
				rotateAngle += angle;
				spinway = 2;
			} else if (angle < 180 && selectedVal < thisVal) {
				rotateAngle -= angle;
				spinway = -2;
			}
			$('ul').css({'transform': 'rotate(' + rotateAngle + 'deg)', '-moz-transform': 'rotate(' + rotateAngle + 'deg)', '-webkit-transform': 'rotate(' + rotateAngle + 'deg)'});
			;
			switch($(this).text()) {
			    case '0':
			        $('.center').css({'background-image': 'url("img/1.jpg")'});
			        if ( spinway > 0 ) {
						$('.centered').addClass('left').removeClass('right').removeClass('centered');
			        	$('.container').find('.main').removeClass('hide').addClass('centered');
			        } else if  ( spinway < 0 ) {
						$('.centered').addClass('right').removeClass('left').removeClass('centered');
			        	$('.container').find('.main').removeClass('hide').addClass('centered');
			        }
			        $('.container').find('.contacts').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.library').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.licence').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.works').addClass('hide').removeClass('right').addClass('left');
			        $('.container').find('.about').addClass('hide').removeClass('right').addClass('left');
			        break;
			    case '60':
			    	$('.center').css({'background-image': 'url("img/2.jpg")'});
			        if ( spinway > 0 ) {
						$('.centered').addClass('left').removeClass('right').removeClass('centered');
			        	$('.container').find('.works').removeClass('hide').addClass('centered');
			        } else if  ( spinway < 0 ) {
						$('.centered').addClass('right').removeClass('left').removeClass('centered');
			        	$('.container').find('.works').removeClass('hide').addClass('centered');
			        }
			        $('.container').find('.library').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.licence').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.main').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.about').addClass('hide').removeClass('right').addClass('left');
			        $('.container').find('.contacts').addClass('hide').removeClass('right').addClass('left');
			        break;
			    case '120':
			    	$('.center').css({'background-image': 'url("img/3.jpg")'});
			        if ( spinway > 0 ) {
						$('.centered').addClass('left').removeClass('right').removeClass('centered');
			        	$('.container').find('.about').removeClass('hide').addClass('centered');
			        } else if  ( spinway < 0 ) {
						$('.centered').addClass('right').removeClass('left').removeClass('centered');
			        	$('.container').find('.about').removeClass('hide').addClass('centered');
			        }
			        $('.container').find('.licence').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.works').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.main').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.contacts').addClass('hide').removeClass('right').addClass('left');
			        $('.container').find('.library').addClass('hide').removeClass('right').addClass('left');
			        break;
			    case '180':
			    	$('.center').css({'background-image': 'url("img/4.jpg")'});
			        if ( spinway > 0 ) {
						$('.centered').addClass('left').removeClass('right').removeClass('centered');
			        	$('.container').find('.contacts').removeClass('hide').addClass('centered');
			        } else if  ( spinway < 0 ) {
						$('.centered').addClass('right').removeClass('left').removeClass('centered');
			        	$('.container').find('.contacts').removeClass('hide').addClass('centered');
			        }
			        $('.container').find('.works').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.about').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.library').addClass('hide').removeClass('right').addClass('left');
			        $('.container').find('.licence').addClass('hide').removeClass('right').addClass('left');
			        $('.container').find('.main').addClass('hide').removeClass('right').addClass('left');
			        break;
			    case '240':
			    	$('.center').css({'background-image': 'url("img/5.jpg")'});
			        if ( spinway > 0 ) {
						$('.centered').addClass('left').removeClass('right').removeClass('centered');
			        	$('.container').find('.library').removeClass('hide').addClass('centered');
			        } else if  ( spinway < 0 ) {
						$('.centered').addClass('right').removeClass('left').removeClass('centered');
			        	$('.container').find('.library').removeClass('hide').addClass('centered');
			        }
			        $('.container').find('.about').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.contacts').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.licence').addClass('hide').removeClass('right').addClass('left');
			        $('.container').find('.main').addClass('hide').removeClass('right').addClass('left');
			        $('.container').find('.works').addClass('hide').removeClass('right').addClass('left');
			        break;
			    case '300':
			    	$('.center').css({'background-image': 'url("img/6.jpg")'});
			        if ( spinway > 0 ) {
						$('.centered').addClass('left').removeClass('right').removeClass('centered');
			        	$('.container').find('.licence').removeClass('hide').addClass('centered');
			        } else if  ( spinway < 0 ) {
						$('.centered').addClass('right').removeClass('left').removeClass('centered');
			        	$('.container').find('.licence').removeClass('hide').addClass('centered');
			        }
			        $('.container').find('.contacts').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.library').addClass('hide').removeClass('left').addClass('right');
			        $('.container').find('.main').addClass('hide').removeClass('right').addClass('left');
			        $('.container').find('.works').addClass('hide').removeClass('right').addClass('left');
			        $('.container').find('.about').addClass('hide').removeClass('right').addClass('left');
			        break;
			}
			$('.selected').removeClass('selected');
			$(this).parent().addClass('selected')
		}
	});
});