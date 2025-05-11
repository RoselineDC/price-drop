import axios from 'axios';
import * as cheerio from 'cheerio';


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
         host: 'brd.superproxy.io',
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
        // print product title
        console.log('title', title);





        // console.log('response', response.data);
    }
    catch (error: any) {
        throw new Error(`Error scraping Amazon products: ${error.message}`);

    }

}
