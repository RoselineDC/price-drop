import { getProductById } from '@/lib/action';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
    params: {
        id: string 
    }
}


const ProductDetails = async  ( {params: { id }}: Props) => {
    const product = await getProductById(id);
    if(!product) redirect('/')
  return (
	<div className='product-container'>
	  <div className='flex gap' >
      <div>
      <img 
      src={product.image}
      alt={product.title}
      width={580}
      height={400} 
      className='mx-auto'     
      />
    </div>
    </div>
	</div>
  );
};

export default ProductDetails;