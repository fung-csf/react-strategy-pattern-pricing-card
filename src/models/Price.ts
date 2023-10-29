import { Country } from "../types";
import { PRICE_BY_COUNTRY, COUNTRY_DATA_BY_NAME } from "../constants";


export function Price(country: Country) {

    const discountRatio = COUNTRY_DATA_BY_NAME[country].discountRatio;


    const shouldDiscount = (): boolean => {

        return discountRatio > 0;
    }

    const getFinalPrice = () => PRICE_BY_COUNTRY[country] * (1 - discountRatio);

    const getDiscountedPrice = () => PRICE_BY_COUNTRY[country] - getFinalPrice();

    return {
        shouldDiscount,
        getFinalPrice,
        getDiscountedPrice,
    };

}