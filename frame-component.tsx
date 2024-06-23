import type { NextPage } from "next";
import Component from "./component";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <section className={styles.component42Wrapper}>
      <Component />
    </section>
  );
};

export default FrameComponent;
