import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

$('document').ready(function(){
  $('.slider').slick({
		dots: true,
		infinite: true
	});
	
	$('.carousel').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});
})






