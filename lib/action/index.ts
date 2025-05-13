"use server"

import { connect } from "http2";
import { scrapeAmazonProducts } from "../scraper";
import { connectToDB } from "../mongoose";
import Product from "../models/product.model";
import {getLowestPrice } from "../utils";
 
export async function scrapeAndStoreProducts(productUrl: string) {

    if (!productUrl) return;
    try {
        // connect tp mongodb
        connectToDB();


        const scrapedProduct = await scrapeAmazonProducts(productUrl);
        if (!scrapedProduct) return;

        // if products exist, store in our db
        let product = scrapedProduct;
        const existingProduct = await Product.findOne({
            url: scrapedProduct.Url,

        });
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
                
            }
            
            
        }
                      
                
        }

        
    }
    catch (error: any) {

        throw new Error(`FAILED TO SCRAPE AMAZON PRODUC: ${error.message}`);

    }

}