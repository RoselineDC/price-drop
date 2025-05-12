"use server"

import { connect } from "http2";
import { scrapeAmazonProducts } from "../scraper";
import { connectToDB } from "../mongoose";
 
export async function scrapeAndStoreProducts(productUrl: string) {

    if (!productUrl) return;
    try {
        // connect tp mongodb
        connectToDB();


        const scrapedProduct = await scrapeAmazonProducts(productUrl);
        if (!scrapedProduct) return;

        // if products exist, store in our db
        

        
    }
    catch (error: any) {

        throw new Error(`FAILED TO SCRAPE AMAZON PRODUC: ${error.message}`);

    }

}