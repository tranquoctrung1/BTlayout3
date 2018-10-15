// Main
console.log('FullStack Vietnam!')
$(document).ready(function(){
	$('.home .owl-carousel').owlCarousel({
	loop:true,
	responsiveClass:true,
	dots:false,
	items:1,
	nav:false,
	dots:false,
	autoplay: true,
	autoplaySpeed: 2000,
	autoplayHoverPause:true,
	})
	$(".slide .owl-carousel").owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		rtl:true,
		autoplaySpeed: 2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:3,
				dots:true,
			},
			600:{
				items:4,
				dots:true,
			},
			1025:{
				items:5,
				dots: false,
				nav:true,
				navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
			}
		}
	});
	
})
