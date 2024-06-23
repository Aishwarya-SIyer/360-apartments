import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./temp-image-cr-kcqs.module.css";

const TempImageCrKcqs: NextPage = () => {
  return (
    <section className={styles.tempImageCrKcqs}>
      <div className={styles.component32}>
        <div className={styles.component31Wrapper}>
          <div className={styles.component31}>
            <div className={styles.tempimagel29kdo1Wrapper}>
              <img
                className={styles.tempimagel29kdo1Icon}
                loading="lazy"
                alt=""
                src="/tempimagel29kdo-1@2x.png"
              />
            </div>
            <div className={styles.div}>+91 8974362889</div>
          </div>
        </div>
        <div className={styles.component28}>
          <img
            className={styles.component28Child}
            alt=""
            src="/rectangle-347@2x.png"
          />
          <div className={styles.ownerOfMansarovar}>
            Owner of Mansarovar Pearl Gardens is a visionary real estate
            developer dedicated to creating luxurious living spaces in Thane.
            With a passion for excellence and a commitment to quality, they
            strive to redefine urban living experiences.
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.contactUsWrapper}>
          <div className={styles.contactUs}>CONTACT US</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frame}>
            <TextField
              className={styles.frameChild}
              defaultValue="NAME"
              variant="outlined"
              placeholder="NAME"
              sx={{
                "& fieldset": { borderColor: "#000" },
                "& .MuiInputBase-root": {
                  height: "38px",
                  borderRadius: "0px 0px 0px 0px",
                },
              }}
            />
            <TextField
              className={styles.frameItem}
              defaultValue="MOBILE"
              variant="outlined"
              placeholder="MOBILE"
              sx={{
                "& fieldset": { borderColor: "#000" },
                "& .MuiInputBase-root": {
                  height: "38px",
                  borderRadius: "0px 0px 0px 0px",
                },
              }}
            />
            <div className={styles.frameGroup}>
              <TextField
                className={styles.frameInner}
                defaultValue="EMAIL"
                variant="outlined"
                placeholder="EMAIL"
                sx={{
                  "& fieldset": { borderColor: "#000" },
                  "& .MuiInputBase-root": {
                    height: "38px",
                    borderRadius: "0px 0px 0px 0px",
                  },
                }}
              />
              <div className={styles.emailInput}>
                <Button
                  className={styles.emailInputChild}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "24",
                    background: "#3a678d",
                    borderRadius: "50px",
                    "&:hover": { background: "#3a678d" },
                    width: 136,
                    height: 55,
                  }}
                >
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempImageCrKcqs;
