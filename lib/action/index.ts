"use server"
import { revalidatePath } from "next/cache";
import { connect } from "http2";
import { scrapeAmazonProducts } from "../scraper";
import { connectToDB } from "../mongoose";
import Product from "../models/product.model";
import {getLowestPrice, getAveragePrice } from "../utils";
 
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

export async function getProductById(productId: string) {
    try{
        connectToDB();
        // fetch product
        const product = await Product.findOne({
            _id: productId
        });
        if (!product) return null;

        return product

    } catch (error) {
        console.log(error);
        
    }
    
}
 export async function getAllProducts() {
    try{
        connectToDB();
        // fetch product
        const products = await Product.find({});

        return products;
    } catch (error) {
        console.log(error);
        
    }
    
}
 export async function getSimilarProducts(productId: string) {
    try{
        connectToDB();
        // fetch product
        const currentProduct = await Product.findById(productId);
        if(!currentProduct) return null;

        const similarProducts = await Product.find({
            _id: { $ne: currentProduct._id },
        }).limit(3);
        return similarProducts

    } catch (error) {
        console.log(error);
        
    }
    
}