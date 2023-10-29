import React from "react";
import { CountryStrategy } from "../models/CountryStrategy";
import styles from "./PricingCardBody.module.css";

interface PricingCardBodyProps {
  countryStrategy: CountryStrategy;
}

const PricingCardBody = ({ countryStrategy }: PricingCardBodyProps) => {
  return (
    <div className={styles.body}>
      <h1>{countryStrategy.getFinalPrice()}</h1>
      {countryStrategy.shouldDiscount() && (
        <div className={styles.discount}>
          {countryStrategy.getDiscountMessage()}
        </div>
      )}
      <p>Learn the essential skills for modern fullstack app development.</p>
      <button className={styles.buyButton}>Get started</button>
    </div>
  );
};

export default PricingCardBody;
