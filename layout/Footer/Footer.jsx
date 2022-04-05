import Image from "next/image";
import Link from "next/link";
import { CustButton } from "../../src/components/CustButton/CustButton";
import { icons, categories } from "./Footer.utils";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Image src="/footer-logo.png" alt="stoke-logo" layout="fill" />
        </div>
      </div>
      <p className={styles.aboutStoke}>
        About Stoke ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
        ut labore et
      </p>
      <div className={styles.categoriesAndWalletIconsWrapper}>
        <div className={styles.categories}>
          {categories.map(({ id, name, href }) => (
            <div key={id} className={styles.category}>
              <Link href={href}>{name}</Link>
            </div>
          ))}
        </div>
        <div className={styles.icons}>
          {icons.map((icon) => (
            <div key={icon.id} className={styles.walletIcon}>
              <Image src={icon.src} alt={icon.alt} layout="fill" />
            </div>
          ))}
          <p className={styles.andMore}>...and&nbsp;more!</p>
        </div>
      </div>
      <div className={styles.getAlertsAndSignUpWrapper}>
        <div className={styles.getAlerts}>
          <div className={styles.alertIcon}>
            <Image src="/add-alert-icon.svg" alt="add-alert-icon" layout="fill" />
          </div>
          <p className={styles.getAlertsText}>Get New Drop Alerts</p>
        </div>
        <CustButton color="primary" text="Sign Up" className={styles.button} />
      </div>
    </footer>
  );
};
