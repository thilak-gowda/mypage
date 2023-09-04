import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

let ampsty = {
    fontSize:"20px",
    color: "grey",
    textAlign:"center",
    fontWeight:"600",
    textTransform:"uppercase"
}


export default function Amenities() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://primerosehills.prestigegroup.live/kids.svg" alt="" srcset="" className='w-50 d-block mx-auto' />
        <p style={ampsty}>Childrens Play Area</p>
        </SwiperSlide>
        <SwiperSlide><img src="https://primerosehills.prestigegroup.live/party-deck.svg" alt="" srcset="" className='w-50 d-block mx-auto' />
        <p style={ampsty}>Party Lawn</p>
        </SwiperSlide>
        <SwiperSlide><img src="https://primerosehills.prestigegroup.live/amp.svg" alt="" srcset="" className='w-50 d-block mx-auto' />
        <p style={ampsty}>Amphitheater</p>
        </SwiperSlide>
        <SwiperSlide><img src="	https://primerosehills.prestigegroup.live/swimming-pool.svg" alt="" srcset="" className='w-50 d-block mx-auto' />
        <p style={ampsty}>Swimming Pool</p>
        </SwiperSlide>
        <SwiperSlide><img src="	https://primerosehills.prestigegroup.live/club.svg" alt="" srcset="" className='w-50 d-block mx-auto' />
        <p style={ampsty}>Club House</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}