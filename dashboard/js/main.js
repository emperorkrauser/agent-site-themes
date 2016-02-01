$(document).ready(function(){

	// tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
	
	// accordion
	$(".panel-collapse").hide();
	$(".moreDetails").show();
	$(".panel-heading").on("click",function(){
		var $this = $(this);
		
		$this.stop().next().slideDown().parent().siblings().find('.panel-collapse').slideUp();
		$this.find('.fa-plus-circle').removeClass('fa-plus-circle').addClass('fa-minus-circle')
			.parents('.panel-default').siblings().find('.fa-minus-circle').removeClass('fa-minus-circle').addClass('fa-plus-circle');
	});

});