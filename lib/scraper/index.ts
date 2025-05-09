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


    }
    catch (error: any) {
        throw new Error(`Error scraping Amazon products: ${error.message}`);

    }

}
