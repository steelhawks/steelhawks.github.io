import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Lazy, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/lazy';
import './carousel.css';

const Carousel = (props) => {
  return (
    <Swiper
      className='max-w-[1000px]'
      grabCursor={true}
      loop={true}
      modules={[Autoplay, Lazy, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      {props.images.map((image, i) => (
        <SwiperSlide key={i} className='flex justify-center mt-8'>
          <picture>
            <source
              srcSet={'/media/' + props.location + '/avif/' + image + '.avif'}
              type='image/avif'
            />
            <source
              srcSet={'/media/' + props.location + '/webp/' + image + '.webp'}
              type='image/webp'
            />
            <source
              srcSet={'/media/' + props.location + '/jpg/' + image + '.jpg'}
              type='image/jpg'
            />
            <img className='rounded-lg py-2' alt='' />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
