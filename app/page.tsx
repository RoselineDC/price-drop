import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <section className='px-6 border-2 md:px-20 py-24 border-red-500'>
        <div className='flex mx-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center '>
            <p className='small-text'>
              Lavishly designed to be the best at your convenience
              <Image
                src='/assets/icons/arrow-right.svg'
                alt='arrow'
                width={16}
                height={16}
                // className='ml-2 inline'              
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
            Search Bar


          </div>
          HeroCorausel

        </div>

      </section>
      <section className='trending-section'>
        <h2 className='section-text'>
          Trending in Tech
        </h2>
        <div className='flex  flex-wrap gap-x-8 gap-y-16'>
          {['Apple Iphone 14 Pro', 'Samsung Galaxy S23 Ultra', 'Google Pixel 7 Pro'].map
          ((product) => (
            <div>{product}</div>
          ))}

        </div>


      </section>
    </>
  )
}

export default Home