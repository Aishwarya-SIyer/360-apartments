import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <FrameComponent1 />
      <img className={styles.mainIcon} alt="" src="/main@2x.png" />
      <FrameComponent />
    </div>
  );
};

export default LandingPage;
