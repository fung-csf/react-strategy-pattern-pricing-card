import { useMemo } from "react";
import { Country } from "../types";
import { CountryStrategy, createCountryStrategy } from "../models/CountryStrategy";

export function useCountryStrategy(countries: Country[]) {

    const countriesStrategy: CountryStrategy[] = useMemo(() => countries.map(country => createCountryStrategy(country)), [countries]);

    return countriesStrategy;
}