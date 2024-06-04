import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import SliderImage1 from '../../Images/sliderImg_1.jpg';
import SliderImage2 from '../../Images/sliderImg_2.jpg';
import SliderImage3 from '../../Images/sliderImg_3.jpg'

const Banner = () => {
  return (
    <div className='relative'>
         <Carousel autoPlay showIndicators={false} infiniteLoop showThumbs={false} interval={3000}>
                <div>
                   <Image src={SliderImage1} alt='sliderImag1' />
                </div>
                <div>
                <Image src={SliderImage2} alt='sliderImag2'/>
                </div>
                <div>
                <Image src={SliderImage3} alt='sliderImag3'/>
                </div>
            </Carousel> 
            <div className="w-full h-40 bg-gradient-to-t from-[#c2c0c0]-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  )
}

export default Banner