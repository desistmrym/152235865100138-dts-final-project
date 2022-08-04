import React from 'react';
import banner1 from '../assets/images/2.png'
import { Swiper, SwiperSlide } from "swiper/react";
import Categories from '../content/Categories';
import { BiRightArrowAlt } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper";
import Navbar from '../component/Navbar';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <div className='absolute' style={{backgroundImage: `url(${banner1})`, width: '100%', height: '35rem', backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}></div>
            <div className='relative p-20 pl-10 pr-10 w-full pt-[8%]'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                    }}
                    navigation={false}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="mySwiper w-[50%] float-right"
                >
                    <SwiperSlide className=''>
                        <div className='bg-white p-5 rounded-xl'>
                            <img src="https://i.pinimg.com/564x/8d/c6/e2/8dc6e29bb5956c9a18e334db274d6ffd.jpg" alt="" className='h-[15rem] w-full object-cover rounded-xl' />
                            <h1 className='text-center font-bold pt-3'>Title Recepie</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='bg-white p-5 rounded-xl'>
                            <img src="https://i.pinimg.com/564x/8d/c6/e2/8dc6e29bb5956c9a18e334db274d6ffd.jpg" alt="" className='h-[15rem] w-full object-cover rounded-xl' />
                            <h1 className='text-center font-bold pt-3'>Title Recepie</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='relative mt-[10%] p-10 ml-[12%]'>
                <button className='border border-[#FFA113] bg-[#FFA113] text-white font-bold p-1 px-10 hover:border-white hover:bg-transparent hover:text-[#FFA113] rounded-lg flex'>View More <BiRightArrowAlt className='text-[20px] ml-3 mt-1'></BiRightArrowAlt></button>
            </div>
            <div className='relative mt-[1%]'>
                <Categories />
            </div>
        </div>
    )
}

export default Landing;