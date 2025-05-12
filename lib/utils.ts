export function extractPrice(...elements: any) {
    // mapp over element 
    for (const element of elements) {
        const priceText = element.text().trim();

        //chect uf priceText exist
        if (priceText) {
            const cleanPrrice = priceText.replace(/[^\d.]/g, '');


            let firstPrice;
            if (cleanPrrice) {
                firstPrice = cleanPrrice.match(/\d+\.\d{2}/)?.[0];
            }

            return firstPrice || cleanPrrice;
        }


    }
    return '';
}

// extract currency
export function extractCurrency(element: any) {
    //extract currency from element
    const currencyText = element.text().trim().slice(0, 1);
    // check if currencyText exist
    return currencyText ? currencyText : '';
}

// extract description
export function extractDescription($: any) {
    const selectors = [
        ".a-unordered-list .a-list-item",
        ".a-expander-content p",
    ];
    for (const selector of selectors) {
        const elements = $(selector);
        if (elements.length > 0) {
            const textContent = elements
                .map((_: any, element: any) => $(element).text().trim())
                .get()
                .join("\n");
            return textContent;
        }
    }
    return '';
}
