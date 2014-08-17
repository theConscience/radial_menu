$(document).ready(function() {
	var rotateAngle = 60;
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
			} else if (angle >= 180 && selectedVal < thisVal) {
				rotateAngle += 360-angle;
			} else if (angle < 180 && selectedVal > thisVal) {
				rotateAngle += angle;
			} else if (angle < 180 && selectedVal < thisVal) {
				rotateAngle -= angle;
			}
			$('ul').css({'transform': 'rotate(' + rotateAngle + 'deg)', '-moz-transform': 'rotate(' + rotateAngle + 'deg)', '-webkit-transform': 'rotate(' + rotateAngle + 'deg)'});
			switch($(this).text()) {
			    case '0':
			        $('.center').css({'background-image': 'url("img/1.jpg")'});
			        $('.centered').addClass('right').removeClass('centered');
			        $('.container').find('.main').addClass('centered').removeClass('right').removeClass('left');
			       	break;
			    case '60':
			        $('.center').css({'background-image': 'url("img/2.jpg")'});
			        $('.centered').addClass('left').removeClass('centered');
			        $('.container').find('.works').addClass('centered').removeClass('right').removeClass('left');
			        break;
			    case '120':
			        $('.center').css({'background-image': 'url("img/3.jpg")'});
			        $('.centered').addClass('right').removeClass('centered');
			        $('.container').find('.about').addClass('centered').removeClass('right').removeClass('left');
			        break;
			    case '180':
			        $('.center').css({'background-image': 'url("img/4.jpg")'});
			        $('.centered').addClass('left').removeClass('centered');
			        $('.container').find('.contacts').addClass('centered').removeClass('right').removeClass('left');
			        break;
			    case '240':
			        $('.center').css({'background-image': 'url("img/5.jpg")'});
			        $('.centered').addClass('right').removeClass('centered');
			        $('.container').find('.library').addClass('centered').removeClass('right').removeClass('left');
			        break;
			    case '300':
			        $('.center').css({'background-image': 'url("img/6.jpg")'});
			        $('.centered').addClass('left').removeClass('centered');
			        $('.container').find('.licence').addClass('centered').removeClass('right').removeClass('left');
			        break;
			}
			$('.selected').removeClass('selected');
			$(this).parent().addClass('selected')
		}
	});
});