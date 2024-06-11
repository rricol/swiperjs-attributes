/* eslint-disable @typescript-eslint/no-unused-vars */

import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
Swiper.use([Autoplay, Navigation, Pagination, Scrollbar]);

const slidersList = document.querySelectorAll('.swiper');
slidersList.forEach((slider) => {
  if (slider instanceof HTMLElement) {
    const direction = slider.getAttribute('nu-slider-direction') || 'horizontal';
    const loop = slider.getAttribute('nu-slider-loop') === 'true' ? true : false;
    const speed = parseInt(slider.getAttribute('nu-slider-speed') || '400', 10);
    const spaceBetween = parseInt(slider.getAttribute('nu-slider-space-between') || '16', 10);
    const slidesPerView = parseInt(slider.getAttribute('nu-slider-slides-per-view') || '1', 10);
    const navigationNext = slider.getAttribute('nu-slider-navigation-next') || undefined;
    const navigationPrev = slider.getAttribute('nu-slider-navigation-prev') || undefined;
    const pagination = slider.getAttribute('nu-slider-pagination') || undefined;
    const scrollbar = slider.getAttribute('nu-slider-scrollbar') || undefined;
    const autoplay = slider.getAttribute('nu-slider-autoplay') === 'true' ? true : false;
    const autoplaySpeed = parseInt(slider.getAttribute('nu-slider-autoplay-speed') || '5000', 10);
    const effect = slider.getAttribute('nu-slider-effect') || 'slide';
    const pauseOnHover = slider.getAttribute('nu-slider-pause-on-hover') === 'true' ? true : false;

    const navigationNextEl = navigationNext ? document.querySelector(navigationNext) : undefined;
    const navigationPrevEl = navigationPrev ? document.querySelector(navigationPrev) : undefined;
    const paginationEl = pagination ? document.querySelector(pagination) : undefined;
    const scrollbarEl = scrollbar ? document.querySelector(scrollbar) : undefined;

    const swiperConfig: SwiperOptions = {
      // Optional parameters
      direction: direction as 'horizontal' | 'vertical',
      loop: loop,
      speed: speed,
      spaceBetween: spaceBetween,
      slidesPerView: slidesPerView,
      effect: effect as 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip',
    };

    // Autoplay configuration
    if (autoplay) {
      swiperConfig.autoplay = {
        delay: autoplaySpeed,
        pauseOnMouseEnter: pauseOnHover,
      };
    }

    // Scrollbar configuration
    if (scrollbarEl instanceof HTMLElement) {
      swiperConfig.scrollbar = {
        el: scrollbarEl,
      };
    }

    // Pagination configuration
    if (paginationEl instanceof HTMLElement) {
      swiperConfig.pagination = {
        el: paginationEl,
        clickable: true,
      };
    }

    // Navigation configuration
    if (navigationNextEl instanceof HTMLElement && navigationPrevEl instanceof HTMLElement) {
      swiperConfig.navigation = {
        nextEl: navigationNextEl,
        prevEl: navigationPrevEl,
      };
    }

    const swiper = new Swiper(slider, swiperConfig);
  } else {
    console.error('Slider element is not HTMLElement');
  }
});
