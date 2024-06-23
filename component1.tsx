import type { NextPage } from "next";
import { MouseEventHandler, useCallback } from "react";
import { Button } from "@mui/material";
import styles from "./component1.module.css";
import { useRouter } from 'next/router';



const Component1: NextPage = () => {
  const router = useRouter();


  const onEXPLORETextClick = useCallback(() => {
    window.location.href = '/parent-container';
  }, []);

  // const onLogin = useCallback(() => {
  //   window.location.href = '/FinalLogin/pages/_app.js';
  // }, []);


 

  const onLogin = () => {
    window.open('http://127.0.0.1:5500/SignIn-SignUp-Form-main/index.html', '_self');  };



  return (
    <header className={styles.component40}>
      <div className={styles.component39}>
        <img
          className={styles.component39Child}
          alt=""
          src="/rectangle-25.svg"
        />
        <div className={styles.component3}>
          <img
            className={styles.component1Icon}
            loading="lazy"
            alt=""
            src="/component-1.svg"
          />
          <div className={styles.apartments}>360 APARTMENTS</div>
        </div>
      </div>
      <div className={styles.component38Wrapper}>
        <div className={styles.component38}>
          <button className={styles.exploreWrapper}>
            <div className={styles.explore} onClick={onEXPLORETextClick}>
              EXPLORE
            </div>
          </button>


          <Button
            className={styles.component38Child}
            disableElevation={true}
            variant="outlined" 
            onClick={onLogin}
            sx={{
              color: "#fff",
              fontSize: "20",
              borderColor: "#000",
              borderRadius: "50px",
              "&:hover": { borderColor: "#000" },
              
            }}
          >
            Login
          </Button>



          <Button
            className={styles.component38Item}
            disableElevation={true}
            variant="outlined"
            onClick={onLogin}
            sx={{
              color: "#fff",
              fontSize: "20",
              borderColor: "#000",
              borderRadius: "50px",
              "&:hover": { borderColor: "#000" },
            }}
          >
            SIGN UP
          </Button>



        </div>
      </div>
    </header>
  );
};

export default Component1;
