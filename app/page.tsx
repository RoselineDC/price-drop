import React from 'react'
import Image from 'next/image'
import Seachbar from '@/components/Seachbar'
import HeroCarosel from '@/components/HeroCarosel'
import { getAllProducts } from '@/lib/action'

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center"> 
            <p className="small-text">
            Lavishly designed to be the best at your convenience
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className='head-text'>
              BEST PRICES IN YOUR FINGERTIPS ... <br></br>
              <span className='text-primary'> PRICE DROP</span>

            </h1>
            <p className='mt-6'>
              Get your drop shipping business up and running in no time. <br></br>
             Check prices, never miss a sale again. Convert, engage and retain more <br></br>
             Buy at <span className='text-primary'> the best price</span> and sell at <span className='text-primary'> the best price</span>
             <i className='italic text-primary'> <br></br>LAVISH DEALS IS HERE</i> <br></br>

            </p>

            <Seachbar />
          </div>

          <HeroCarosel />
        </div>
      </section>
      <section className='trending-section'>
        <h2 className='section-text'>
          Trending in Tech
        </h2>
        <div className='flex  flex-wrap gap-x-8 gap-y-16'>
          {allProducts?.map((product) => {
            <div>{product}</div>

          })
          }
          
            
        

        </div>


      </section>
    </>
  )
}

export default Home