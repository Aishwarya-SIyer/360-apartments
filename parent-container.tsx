import type { NextPage } from "next";
import Component6 from "../components/component6";
import InstanceApartmentShare from "../components/instance-apartment-share";
import Component5 from "../components/component5";
import styles from "./parent-container.module.css";

const ParentContainer: NextPage = () => {
  return (
    <div className={styles.parentContainer}>
      <Component6 />
      <main className={styles.instanceApartmentView}>
        <section className={styles.frameParent}>
          <div className={styles.component43Wrapper}>
            <img
              className={styles.component43Icon}
              loading="lazy"
              alt=""
              src="/component-43.svg"
            />
          </div>
          <InstanceApartmentShare />
          <Component5 iconHeartFlex="unset" iconHeartAlignSelf="stretch" />
        </section>
      </main>
    </div>
  );
};

export default ParentContainer;
