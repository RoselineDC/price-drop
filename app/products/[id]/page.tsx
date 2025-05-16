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
	  {id}
	</div>
  );
};

export default ProductDetails;