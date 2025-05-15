"use server"
import { revalidatePath } from "next/cache";
import { connect } from "http2";
import { scrapeAmazonProducts } from "../scraper";
import { connectToDB } from "../mongoose";
import Product from "../models/product.model";
import {getLowestPrice } from "../utils";
 
export async function scrapeAndStoreProducts(productUrl: string) {

    if (!productUrl) return;
    try {
         connectToDB();

        const scrapedProduct = await scrapeAmazonProducts(productUrl);
        if (!scrapedProduct) return;

        // if products exist, store in our db
        let product = scrapedProduct;
        const existingProduct = await Product.findOne({
            url: scrapedProduct.Url,
        });
        // DD THI 
        // check product
        if (existingProduct) {
            const updatedPriceHistory: any = [
                ...existingProduct.priceHistory,
                {
                    price: scrapedProduct.priceHistory
                }
            ]
            // modify product object
            product = {
                ...scrapedProduct,
                priceHistory: updatedPriceHistory,
                lowestPrice: getLowestPrice(updatedPriceHistory),
                highestPrice: getLowestPrice(updatedPriceHistory),
                averagePrice: getAveragePrice(updatedPriceHistory),
            }
        }
        const newProduct = await Product. findOneAndUpdate(
            {
                url: scrapedProduct.Url,
            },
            product,
            {
                new: true,
                upsert: true,
            }
        );
        revalidatePath(`/products/${newProduct._id}`);;   
    }
    catch (error: any) {

        throw new Error(`FAILED TO SCRAPE AMAZON PRODUC: ${error.message}`);

    }

}

function getAveragePrice(updatedPriceHistory: any): number {
    throw new Error("Function not implemented.");
}
export async function getProductById(productId: string) {
    try{
        connectToDB();
        // fetch product
        const product = await Product.findOne({
            _id: productId
        });
        

    } catch (error) {
        
    }
    
}