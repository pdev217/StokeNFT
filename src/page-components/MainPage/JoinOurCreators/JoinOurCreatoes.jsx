import { Button } from "@mui/material";
import Image from "next/image";
import { CustButton } from "../../../components/CustButton/CustButton";
import styles from "./JoinOurCreatoes.module.css";

export const JoinOurCreatoes = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <Image src="/circle-pictures-image.png" width={1016} height={438} alt="circle-pictures-image" />
        <div className={styles.leftSideTextButtonWrapper}>
          <div className={styles.leftSideTextWrapper}>
            <div className={styles.leftSideTitle}>Join Our Network of Creators!</div>
            <div className={styles.leftSideText}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea
            </div>
          </div>
          <div className={styles.leftSideButton}>
            <Button
              sx={{
                flexDirection: "column",
                width: "246px",
                height: "161px",
                textTransform: "none",
                background: "#617BFF 0% 0% no-repeat padding-box;",
                color: "var(--white)",
                boxShadow: "none",
                borderRadius: "30px",
                fontSize: "22px",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "33px",
                fontWeight: "800",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "rgb(82, 96, 227)",
                },
              }}
              variant="contained"
            >
              <div>Get Started</div>
              <div className={styles.deltaIcon}>
                <Image
                  src="/delta-right-contained-icon.svg"
                  height={24}
                  width={24}
                  alt="delta-right-contained-icon"
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.bellIcon}>
          <Image src="/add-alert-icon.svg" height={58} width={50} alt="add-alert-icon" />
        </div>
        <div className={styles.rightSideTitle}>Sign Up for New Drop Alerts</div>
        <div className={styles.rightSideText}>
          No account or wallet needed! We’ll let you know when new hot new NFTs hit the store!
        </div>
        <div className={styles.rightSideButton}>
          <CustButton color="primary" text="Get Email or SMS Alerts" />
        </div>
      </div>
    </div>
  );
};
