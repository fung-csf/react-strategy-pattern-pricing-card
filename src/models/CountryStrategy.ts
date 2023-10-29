import { Country } from "../types";
import { Price } from "./Price";
import { Formatter } from "./Formatter";

export interface CountryStrategy {
    shouldDiscount: () => boolean,
    getDiscountMessage: () => string,
    getFinalPrice: () => string,
}


export function createCountryStrategy(country: Country): CountryStrategy {

    const { getDiscountMessage,
        formatPriceByCurrency, } = Formatter(country);

    const { shouldDiscount,
        getFinalPrice,
        getDiscountedPrice, } = Price(country);

    return {
        shouldDiscount,
        getDiscountMessage: getDiscountMessage(getDiscountedPrice(), formatPriceByCurrency),
        getFinalPrice: () => formatPriceByCurrency(getFinalPrice()),
    }
}