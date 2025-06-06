import { Product } from "@/lib/types";
import React from "react";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} className="product-card">
      <div className="product-card_img-container">
        <img
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="product-card_img"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="product-title">{product.title}</h3>
        <div className="flex justify-between">
            <p className="text-black opacity-50 text-lg capitalize">
                {product.category}
            </p>
            <p className="text-black font-semibold text-lg">
                <span>
                    {product?.currency}
                </span>
                <span>
                    {product?.currentPrice}
                </span>
                {/* <span>
                    {product?.originalPrice}
                </span> */}
            </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
