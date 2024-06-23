import type { NextPage } from "next";
import Component4 from "../components/component4";
import Component3 from "../components/component3";
import ComponentCharmingBHKDescr from "../components/component-charming-b-h-k-descr";
import Component2 from "../components/component2";
import ComponentAMENITIESL from "../components/component-a-m-e-n-i-t-i-e-s-l";
import TempImageCrKcqs from "../components/temp-image-cr-kcqs";
import styles from "./viewed.module.css";

const ViewedPROPERTY: NextPage = () => {
  return (
    <div className={styles.viewedProperty}>
      <Component4 />
      <main className={styles.component36Parent}>
        <Component3 />
        <ComponentCharmingBHKDescr />
        <Component2 />
        <ComponentAMENITIESL />
        <TempImageCrKcqs />
      </main>
    </div>
  );
};

export default ViewedPROPERTY;
