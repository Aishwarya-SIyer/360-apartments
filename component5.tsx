import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./component5.module.css";
import { useRouter } from 'next/router';



export type Component5Type = {
  /** Style props */
  iconHeartFlex?: CSSProperties["flex"];
  iconHeartAlignSelf?: CSSProperties["alignSelf"];
};

const Component5: NextPage<Component5Type> = ({
  iconHeartFlex,
  iconHeartAlignSelf,
}) => {
  const component45Style: CSSProperties = useMemo(() => {
    return {
      flex: iconHeartFlex,
      alignSelf: iconHeartAlignSelf,
    };
  }, [iconHeartFlex, iconHeartAlignSelf]);


  const router = useRouter();

  const loadPage = () => {
    window.open('http://127.0.0.1:5500/app-files/viewer360.html', '_self');  };


 
  return (
    <div className={styles.component45} style={component45Style}>
      <div className={styles.heartIcon} />
      <img
        className={styles.component45Child}
        loading="lazy"
        alt=""
        src="/rectangle-18@2x.png"
      />
      <img
        className={styles.component45Item}
        loading="lazy"
        alt=""
        src="/rectangle-19.svg"
      />
      <div className={styles.vasaiWestMumbai}>Vasai West Mumbai</div>
      <div className={styles.type}>Type</div>
      <div className={styles.location}>Location</div>
      <div className={styles.carpetArea}>Carpet Area</div>
      <div className={styles.sqft}>408sqft</div>
      <div className={styles.apartment}>Apartment</div>
      <div className={styles.component45Inner}>
        <div className={styles.instanceChild} />
      </div>
      <div className={styles.photosButton}>
        <div className={styles.photosButtonChild} />
      </div>

      <Button
        className={styles.view}
        disableElevation={true}
        variant="text"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 99, height: 18.4 }}
        onClick={loadPage} 
      >
        360 View
      </Button>


      {/* <Button
        className={styles.contactOwner}
        disableElevation={true}
        variant="text"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 161.8, height: 18.4 }}
      >
        View Details
      </Button> */}
      <a href="/viewed" className={styles.contactOwner}>
  <Button
    disableElevation={true}
    variant="text"
    sx={{ borderRadius: "0px 0px 0px 0px", width: 161.8, height: 18.4 }}
  >
    View Details
  </Button>
</a>
      <Button
        className={styles.photos}
        disableElevation={true}
        variant="text"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 75.2, height: 18.4 }}
      >
        Photos
      </Button>
      <img className={styles.shareIcon} src="sharebtn2.svg" style={{ width: '40px', height: '40px' }} />
      <img
        className={styles.iconHeart}
        loading="lazy"
        alt=""
        src="/-icon-heart.svg"
      />
      <h3 className={styles.bhkApartmentFor}>
        1 BHK Apartment for Sale in Pearl Gardens
      </h3>
    </div>
  );
};

export default Component5;
