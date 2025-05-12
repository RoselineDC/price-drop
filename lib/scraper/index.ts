import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractPrice, extractCurrency, extractDescription } from '../utils';



export async function scrapeAmazonProducts(Url: string) {
    // check if url exist
    if (!Url) return;

    // bright data proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 33335;
    const session_id = (1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxyJ.io',
        port,
        rejectUnauthorized: false,
    }
    try {
        // fatching the products 
        // axios for making api calls
        // cheerio for parsing and manipulating the HTML
        const response = await axios.get(Url, options);
        // initializing cheerio
        const $ = cheerio.load(response.data);

        // extracting the product title
        const title = $('#productTitle').text().trim();


        // extracting the product price
        const currentPrice = extractPrice(
            // pass all that is related to price
            $('.priceToPay span.a-price-whole'),
            $('a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base'),
            $('.a-price.a-text-price')
        );
        const originalPrice = extractPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen'),
            $('#listPrice'),
            $('#priceblock_dealprice'),
            $('a.size.base.a-color-price'),


        );

        // extract description
        const description = extractDescription($);
        // check out of stock
        const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';

        // get image
        const images =
            $('#imgBlkFront').attr('data-a-dynamic-image') ||
            $('#landingImage').attr('data-a-dynamic-image') ||
            '{}';

        // parse image
        const imagesUrl = Object.keys(JSON.parse(images));

        // get currency
        const currency = extractCurrency($('.a-price-symbol'));

        // get discount rate
        const discountRate = $('.savingsPercentage').text().replace(/[-%]/g, ``);

        // contructing the product object
        const data = {
            Url,
            currency: currency || 'ZAR',
            image: imagesUrl[0],
            title,
            currentPrice: Number(currentPrice) ||  Number(originalPrice),
            originalPrice: Number(originalPrice) || Number(currentPrice),
            description: description || 'No description available',
            priceHistory: [],
            discountRate: Number(discountRate),
           category: 'category',
            reviewsCount: 100,
            stars: 4.5,
            isOutOfStock: outOfStock,
            lowestPrice: Number(currentPrice) || Number(originalPrice),
            highestPrice: Number(originalPrice) || Number(currentPrice),
            averagePrice: Number(currentPrice) || Number(originalPrice),
        }
        return data;  

        // console.log('response', response.data);
    }
    catch (error: any) {
        throw new Error(`Error scraping Amazon products: ${error.message}`);

    }

}
