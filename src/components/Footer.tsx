import React from 'react';
import logo from '../../Images/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='h-20 w-full text-[#c2c0c0] gap-4 bg-amazon_light flex justify-center items-center'>
        <Image src={logo} alt='logo'  className='w-24'/>
        <p className='-mt-4'>All rights resesrved {' '}
            <a href='https://www.amazon.com' target='_blank' className='hover:underline hover:text-[#FFF] '>@vinodA-Z</a>
        </p>

    </div>
  )
}

export default Footer