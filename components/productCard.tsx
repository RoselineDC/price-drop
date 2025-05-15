import { Product } from "@/lib/types";
import React from "react";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} className="product-card">
      <div >
        <img
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="product-card_img"
        />
      </div>
    </Link>
  );
};

export default ProductCard;
