$(document).ready(function(){
	$('#collect-c').click(function(){
		if ($(this).hasClass('glyphicon-heart-empty')) {
			$(this).removeClass('glyphicon-heart-empty').addClass('glyphicon-heart');
		}
		else{
			$(this).removeClass('glyphicon-heart').addClass('glyphicon-heart-empty');
		}
	});
	$('.job-name').siblings().addClass('hidden').end()
	.click(function(){
		$(this).siblings().toggleClass('hidden');
	});
});
