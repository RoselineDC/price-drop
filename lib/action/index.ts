"use server"

import { scrapeAmazonProducts } from "../scraper";

export async function scrapeAndStoreProducts(productUrl: string) {

    if (!productUrl) return;
    try {
        const scrapedProduct = await scrapeAmazonProducts(productUrl);
    }
    catch (error: any) {

        throw new Error(`FAILED TO SCRAPE AMAZON PRODUC: ${error.message}`);

    }

}