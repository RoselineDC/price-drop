"use client"
import { scrapeAndStoreProducts } from "@/lib/action";
import { use } from "react"
import { FormEvent, useState } from "react"

// global access to the isValidAmazonProductUrl function
const isValidAmazonProductUrl = (url: string) => {
    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname;

        // Check if the URL is from Amazon
        if (
            hostname.includes('amazon.co.za') ||
            hostname.includes('amazon') ||
            hostname.endsWith('amazon') ||
            h
        ) {
            return true;

        }
    }
    catch (error) {
        console.error("Error validating URL:", error);
        return false;
    }
    return false;

}


const Seachbar = () => {
    // Component state to keep track of the search input
    const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading , setIsLoading] = useState(false);

    // handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // check if url is valid
        const isValidLink = isValidAmazonProductUrl(searchPrompt);
        if(!isValidLink){
            return alert('Please enter a valid Amazon product URL')
        }
        try{
            setIsLoading;
            // scrape first product
            const product = await scrapeAndStoreProducts(searchPrompt);
            
        }
        catch(error){
            console.error(error);
            console.log(error)
        } finally{
            setIsLoading(false);

        }
    }
    return (
        <form className='flex flex-wrap gap-4 mt-12'
            onSubmit={handleSubmit}>
            <input type="text"
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}//TRACK INPUT VALUE
                placeholder='Search for products'
                className='searchbar-input'
            />
            <button type="submit"
                className='searchbar-btn'
                disabled={searchPrompt === ''}
                >
                {isLoading ? 'Searching...' : 'Search'} 

            </button>

        </form>
    )
}

export default Seachbar