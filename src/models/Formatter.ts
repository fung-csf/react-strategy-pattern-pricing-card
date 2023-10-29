import { Country, Currency } from "../types";

import { COUNTRY_DATA_BY_NAME } from "../constants";

export function Formatter(country: Country) {


    const getDiscountMessage = (discountedPrice: number) => {
        return () => {

            const formattedPrice = formatPriceByCurrency(discountedPrice);

            return {
                [Country.VIETNAM]: `The price has been discounted by ${formattedPrice} because you come from Vietnam.`,
                [Country.JAPAN]: `We have discounted the price by ${formattedPrice} thanks to the support from Japan's government.`,
            }[country] ?? `It's lucky that you come from ${country}, because we're running a program that discounts the price by ${discountedPrice}.`

        }
    }

    const formatPriceByCurrency = (price: number) => {
        const priceString = Math.round(price).toLocaleString();

        const currency = COUNTRY_DATA_BY_NAME[country].currency;
        const symbol = COUNTRY_DATA_BY_NAME[country].symbol;

        return {
            [Currency.USD]: [symbol, priceString].join(''),
            [Currency.VND]: [priceString, symbol].join(''),
            [Currency.YEN]: [symbol, priceString].join(''),
            [Currency.SUSD]: [symbol, priceString].join(''),
            [Currency.RM]: [symbol, priceString].join(''),
        }[currency];
    };


    return {
        getDiscountMessage,
        formatPriceByCurrency,
    };

}