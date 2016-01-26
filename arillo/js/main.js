$(document).ready(function(){
	var $galleryLength = $('.photo-gallery .col-md-2').length;
	var $this = $('.photo-gallery .col-md-2');

	var count=0;
	$this.each(function(){
		if(++count == 8){
        	$this.css('display','block');
        }
        else if(count > 8){
         	$(this).css('display','none');
        }
	});
});

$(window).ready(function() {
	'use strict';
	$(function() {
	    $('.slider-area').vegas({
	        slides: [
	            { src: '../arillo/img/property1.jpg' },
	            { src: '../arillo/img/property2.jpg' }
	        ]
	    });
	});
});