import type { NextPage } from "next";
import styles from "./component2.module.css";

const Component2: NextPage = () => {
  return (
    <div className={styles.component35}>
      <div className={styles.componentFLOORPLAN}>
        <div className={styles.floorPlan}>
          <span>
            <p className={styles.floorPlan1}>FLOOR PLAN</p>
          </span>
        </div>
      </div>
      <div className={styles.floorplan1Wrapper}>
        <img
          className={styles.floorplan1Icon}
          loading="lazy"
          alt=""
          src="/floorplan-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Component2;
