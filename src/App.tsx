import PricingCard from "./components/PricingCard";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import { Country, Currency } from "./types";
import { useCountryStrategy } from "./components/useCountryStrategy";
import { COUNTRY_DATA_BY_NAME } from "./constants";

const countriesToDisplay: Country[] = Object.keys(
  COUNTRY_DATA_BY_NAME
) as Country[];

export default function App() {
  const countryStrategies = useCountryStrategy(countriesToDisplay);
  return (
    <div className="App">
      {countryStrategies.map((countryStrategy) => (
        <PricingCard key={uuidv4()} countryStrategy={countryStrategy} />
      ))}
    </div>
  );
}
