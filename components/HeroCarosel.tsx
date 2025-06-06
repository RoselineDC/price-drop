"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
    { ImgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
    { ImgUrl: "/assets/images/hero-2.svg", alt: "Iphone pro" },
    { ImgUrl: "/assets/images/hero-3.svg", alt: "Samsung Galaxy" },
    { ImgUrl: "/assets/images/hero-4.svg", alt: "Google Pixel" },
    { ImgUrl: "/assets/images/hero-5.svg", alt: "Macbook Pro" },
   
]


const HeroCarosel = () => {
    return (
        <div className='hero-carousel'>
            <Carousel 
                showThumbs={false}                
                infiniteLoop
                // autoPlay
                interval={2000}
                showStatus={false}
                showArrows={false}
            
            >
               {
                heroImages.map((image) => (
                    <Image 
                    src={image.ImgUrl}
                    key={image.alt} 
                    alt={image.alt} 
                    width={484}
                    height={484}
                    className='object-container'
                    />
                )) }
            </Carousel>
            <Image 
                src="/assets/icons/hand-drawn-arrow.svg"
                alt="arrow"
               
                width={175}
                height={175}
                 className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
            />
        </div>

    )
}

export default HeroCarosel