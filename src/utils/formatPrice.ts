// Formats a number into a currency string based on the selected currency.
const formatPrice = ( price : number ) =>{
    const formattedPrice = new Intl.NumberFormat( "es-PE",{
        style: "currency",
        currency: "PEN"
    }).format( price )

    return formattedPrice;
}

export default formatPrice;