import { getProductById } from "@/lib/action";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Product } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import PriceInfoCard from "@/components/PriceInfoCard";

type Props = {
  params: {
    id: string;
  };
};

const ProductDetails = async ({ params: { id } }: Props) => {
  const product: Product = await getProductById(id);
  if (!product) redirect("/");

  return (
    <div className="product-container">
      <div className="flex gap-28 xl:flex-row flex-col">
        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
            width={580}
            height={400}
            className="mx-auto"
          />
        </div>
        <div className="flex-1 flex-col">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className=" text-[28] text-secondary font-semibold">
                {product.title}
              </p>
              <Link
                href={product.title}
                target="_blank"
                className=" text-base text-black opacity-50"
              >
                Visit Product
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="product-hearts">
                <img
                  src="/assets/icons/red-heart.svg"
                  alt="heart"
                  width={20}
                  height={20}
                />
                <p className="text-base font-semibold text-[#D46F77]">
                  {product.reviewsCount}
                </p>
              </div>
              <div className="p-2 bg-white-200 rounded-10">
                <img
                  src="/assets/icons/bookmark.svg"
                  alt="share"
                  width={20}
                  height={20}
                />
              </div>
              <div className="p-2 bg-white-200 rounded-10">
                <img
                  src="/assets/icons/share.svg"
                  alt="share"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="product-info">
            <div className="flex flex-col gap-3">
              <p className="text-[34px] text-secondary font-bold">
                {product.currency} {formatNumber(product.currentPrice)}
              </p>
              <p className="text-[21px] text-black opacity-50 line-through">
                {product.currency} {formatNumber(product.originalPrice)}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex  gap-3">
                <div className="product-stars">
                  <img
                    src="/assets/icons/star.svg"
                    alt="star"
                    width={16}
                    height={16}
                  />
                  <p>
                    {
                      product.stars || '25' 
                    }
                  </p>
                </div>
                <div className="product-reviews">
                  <img
                    src="/assets/icons/comment.svg"
                    alt="review"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-secondary font-semibold">
                    {
                      product.reviewsCount 
                    } Reviews
                  </p>
                </div>              
               

              </div>
              <p className="text-sm text-black opacity-50">
                 {/* dynamically collect this text after span  */}
                <span className="text-primary-green font-semibold">
                  93%
                 
                </span> Of buyers have recommended this. 
              </p>
              </div>
          </div>
        </div>
        <div className='my-7 flex-col gap-5'>
          <div className="flex flex-wrap gap-5">
            <PriceInfoCard
             title="current Price"
             iconSrc="/assets/icons/price-tag.svg"
             value={`${product.currency} ${formatNumber(product.currentPrice)}`}
             borderColor="#b6dbff"
            />
            <PriceInfoCard
             title="Average Price"
             iconSrc="/assets/icons/chart.svg"
             value={`${product.currency} ${formatNumber(product.averagePrice)}`}
             borderColor="#b6dbff"
            />
            <PriceInfoCard
             title="Highest Price"
             iconSrc="/assets/icons/arrow-up.svg"
             value={`${product.currency} ${formatNumber(product.highestPrice)}`}
             borderColor="#b6dbff"
            />
            <PriceInfoCard
             title="Lowest Price"
             iconSrc="/assets/icons/arrow-down.svg"
             value={`${product.currency} ${formatNumber(product.lowestPrice)}`}
             borderColor="#b6dbff"
            />

          </div>

        </div>
        MODAL
      </div>
      
    </div>
  );
};

export default ProductDetails;
