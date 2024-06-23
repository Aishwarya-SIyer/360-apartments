import type { NextPage } from "next";
import Component1 from "./component1";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <section className={styles.component40Parent}>
      <Component1 />
      <div className={styles.easyWayToFindAPerfectProWrapper}>
        <h1 className={styles.easyWayToContainer}>
          <span>
            <span>Easy way to find a perfect property</span>
            <span className={styles.span}>{` `}</span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent1;
