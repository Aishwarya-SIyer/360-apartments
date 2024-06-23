import type { NextPage } from "next";
import styles from "./component.module.css";

const Component: NextPage = () => {
  return (
    <div className={styles.component42}>
      <div className={styles.rentBuyAndSellPropertiesWrapper}>
        <h2 className={styles.rentBuyAnd}>Rent, Buy and Sell properties!</h2>
      </div>
      <div className={styles.propertiesContainer}>
        <div className={styles.section3}>
          <img
            className={styles.section3Child}
            loading="lazy"
            alt=""
            src="/rectangle-8@2x.png"
          />
          <div className={styles.section3Inner}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/rectangle-10@2x.png"
            />
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-11@2x.png"
            />
          </div>
          <img
            className={styles.propertyCardDetails}
            loading="lazy"
            alt=""
            src="/rectangle-14@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Component;
