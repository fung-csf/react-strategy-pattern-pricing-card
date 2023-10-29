import PricingCardHeader from "./PricingCardHeader";
import PricingCardBody from "./PricingCardBody";
import { CountryStrategy } from "../models/CountryStrategy";
import styles from "./PricingCard.module.css";

interface PricingCardProps {
  countryStrategy: CountryStrategy;
}

const PricingCard = ({ countryStrategy }: PricingCardProps) => {
  return (
    <div className={styles.card}>
      <PricingCardHeader />
      <div className={styles.divider} />
      <PricingCardBody countryStrategy={countryStrategy} />
    </div>
  );
};

export default PricingCard;
