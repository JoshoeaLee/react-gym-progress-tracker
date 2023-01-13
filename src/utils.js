/**
 * Formats the numbers given into kg.
 * Gets rid of the .00 at the end of whole numbers
 */
export const unitFormatter = new Intl.NumberFormat('en-AU',{
    style: 'unit',
    unit: 'kilogram',
    minimumFractionDigits: 0
})