export function extractPrice(...elements: any) {
    // mapp over element 
    for (const element of elements) {
        const priceText = element.text().trim();

        //chect uf priceText exist
        if (priceText) return priceText.replace(/[^]d./g, '');


    }
    return '';
}
