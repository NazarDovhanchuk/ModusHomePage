import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

$('document').ready(function(){
  $('.slider').slick({
    dots: true
  });
})


const mySwiper = new Swiper ('.swiper-container', {
	nextButton: '.swiper-right',
	prevButton: '.swiper-left',
	direction: 'horizontal',
	loop: true,
	slidesPerView: 6,
	autoplay: 10000,
	spaceBetween: 30,
	breakpoints: {

		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},

		480: {
			slidesPerView: 2,
			spaceBetween: 20
		},

		768: {
			slidesPerView: 3,
			spaceBetween: 30
		},

		992: {
			slidesPerView: 4,
			spaceBetween: 30
		}
	}
});






