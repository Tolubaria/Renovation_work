$(document).ready(function(){
	$('.content_toggle').click(function(){
		$('.content_block').toggleClass('hide');	
		if ($('.content_block').hasClass('hide')) {
			$('.content_toggle').html('Читать дальше');
		} else {
			$('.content_toggle').html('Скрыть');
		}		
		return false;
	});				
});