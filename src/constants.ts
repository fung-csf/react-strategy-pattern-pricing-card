import { Country, Currency } from "./types"

export const DISCOUNT_RATIO_BY_COUNTRY = {
    [Country.VIETNAM]: 0.4,
    [Country.JAPAN]: 0.2,
    [Country.AMERICA]: 0,
    [Country.SINGAPORE]: 0,
    [Country.MALAYSIA]: 0.3,

}

export const PRICE_BY_COUNTRY = {
    [Country.VIETNAM]: 1365000,
    [Country.JAPAN]: 7669,
    [Country.AMERICA]: 55,
    [Country.SINGAPORE]: 40,
    [Country.MALAYSIA]: 135,

}

export const CURRENCY_SYMBOL_BY_COUNTRY = {
    [Country.AMERICA]: '$',
    [Country.VIETNAM]: 'VND',
    [Country.JAPAN]: '¥',
    [Country.SINGAPORE]: 'S$',
    [Country.MALAYSIA]: 'RM',


}

export const CURRENCY_BY_COUNTRY = {
    [Country.VIETNAM]: Currency.VND,
    [Country.JAPAN]: Currency.YEN,
    [Country.AMERICA]: Currency.USD,
    [Country.SINGAPORE]: Currency.SUSD,
    [Country.MALAYSIA]: Currency.RM,
}

const createCountryData = (country: Country) => {

    return {
        name: country,
        discountRatio: DISCOUNT_RATIO_BY_COUNTRY[country],
        price: PRICE_BY_COUNTRY[country],
        currency: CURRENCY_BY_COUNTRY[country],
        symbol: CURRENCY_SYMBOL_BY_COUNTRY[country],
    }
}

//could be from external source, e.g. 3rd party API, need to restructure the data into this shape. This data shape is known as 'index'.
export const COUNTRY_DATA_BY_NAME = {
    [Country.VIETNAM]: createCountryData(Country.VIETNAM),
    [Country.JAPAN]: createCountryData(Country.JAPAN),
    [Country.AMERICA]: createCountryData(Country.AMERICA),
    [Country.SINGAPORE]: createCountryData(Country.SINGAPORE),
    [Country.MALAYSIA]: createCountryData(Country.MALAYSIA),
}

