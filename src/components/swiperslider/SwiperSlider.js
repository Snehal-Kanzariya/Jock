import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import './SwiperSlider.css';

const SwiperSlider = () => {
  return (
    <div>
        <div className="d-md-flex mb-221 mt-192">
            <div className="ps-70 pe-110 md:py-5">
              <h2 className="title fscolor titlefs">Always on safari with #Jocksafari</h2>
              <p className="ffG fs-14 tcolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              <img src="/img/swiper-previous.svg" className="me-3" alt="" />
              <img src="/img/swiper-next.svg" alt="" />
            </div>
            <Swiper
              slidesPerView={"2.5"}
              spaceBetween={35}
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
              className="mySwiper d-flex"
            >

              <SwiperSlide  >
                <img src="/img/bird.png" alt="" className="w-100" height={414} />
              </SwiperSlide>
              <SwiperSlide   >
                <img src="/img/hotel-room.png" alt="" className="w-100" height={414} />
              </SwiperSlide>
              <SwiperSlide  >
                <img src="/img/guide-person.png" alt="" className="w-100" height={414} />
              </SwiperSlide>
              <SwiperSlide  >
                <img src="/img/bird.png" alt="" className="w-100" height={414} />
              </SwiperSlide>
              <SwiperSlide  >
                <img src="/img/hotel-room.png" alt="" className="w-100" height={414} />
              </SwiperSlide>
              <SwiperSlide  >
                <img src="/img/guide-person.png" alt="" className="w-100" height={414} />
              </SwiperSlide>
              <SwiperSlide  >
                <img src="/img/bird.png" alt="" className="w-100" height={414} />
              </SwiperSlide>
            </Swiper>
          </div>
    </div>
  )
}

export default SwiperSlider