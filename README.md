# SwiperJS attributes Integration

This project demonstrates how to integrate SwiperJS sliders using custom HTML attributes to configure various settings dynamically.

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- pnpm

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rricol/swiperjs-attributes.git
   cd swiperjs-attributes
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

## HTML Structure

To use the slider, add the following HTML structure and attributes to your project:

```html
<div
  class="swiper"
  nu-slider-direction="horizontal"
  nu-slider-loop="true"
  nu-slider-speed="500"
  nu-slider-space-between="20"
  nu-slider-slides-per-view="3"
  nu-slider-navigation-next=".swiper-button-next"
  nu-slider-navigation-prev=".swiper-button-prev"
  nu-slider-pagination=".swiper-pagination"
  nu-slider-scrollbar=".swiper-scrollbar"
  nu-slider-autoplay="true"
>
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    <!-- More slides as needed -->
  </div>

  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
```

## Attributes

    •	nu-slider-direction: Direction of the slider (horizontal or vertical).
    •	nu-slider-loop: Enable or disable loop mode (true or false).
    •	nu-slider-speed: Transition speed in milliseconds (default is 400).
    •	nu-slider-space-between: Space between slides in pixels (default is 16).
    •	nu-slider-slides-per-view: Number of slides to show per view (default is 1).
    •	nu-slider-navigation-next: CSS selector for the “Next” navigation button.
    •	nu-slider-navigation-prev: CSS selector for the “Prev” navigation button.
    •	nu-slider-pagination: CSS selector for the pagination element.
    •	nu-slider-scrollbar: CSS selector for the scrollbar element.
    •	nu-slider-autoplay: Enable or disable autoplay (true or false).

## License

This project is licensed under the MIT License.

## Acknowledgements

    •	[SwiperJS Documentation](https://swiperjs.com/)
