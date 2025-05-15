import { Product } from "@/lib/types";
import React from "react";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} className="product-card">
      <img src={product.image}
       alt={product.title}
       width={2}
        />
    </Link>
  );
};

export default ProductCard;
