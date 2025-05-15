import { Product } from '@/lib/types';
import React from 'react'

interface Props {
    product: Product
}

const ProductCard = ({product }: Props) => {
  return (
    <Link href={`/products/${product._id}`}>productCard</Link>
  )
}

export default ProductCard;