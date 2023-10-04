import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';

import { SliderProducts } from '../../data/products';

function Slider() {
  return (
    <div className='s-container'>
      <Swiper

      breakpoints={{
        640:{
          slidesPerView:3,
        },
          0:{
            slidesPerView:1
          }
      }
        
      }
        modules={[Pagination, Navigation]}
        className='mySwiper'
        navigation={true}
        LoopFillGroupWithBlank={true}
        slidesPerView={3} // Corrected: Change "sidesPerView" to "slidesPerView"
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide >
            <div className='left-s'>
              <div className='name'>
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}</span>
              <div>shop now</div>
            </div>
            <img src={slide.img} alt='product' className='img-p' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
