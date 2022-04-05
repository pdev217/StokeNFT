import Link from "next/link";
import { ChooseWalletBox } from "../../components/ChooseWalletBox/ChooseWalletBox";
import styles from "./ConnectWalletPage.module.css";

export const ConnectWalletPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.centralInfo}>
        <h2 className={styles.title}>Connect your wallet.</h2>
        <p className={styles.prompt}>
          Connect with one of our available{" "}
          <Link href="#" passHref>
            <span className={styles.walletLink}>wallet</span>
          </Link>{" "}
          providers or create a new one.
        </p>
        <div className={styles.chooseWalletWrapper}>
          <ChooseWalletBox />
        </div>
      </div>
    </div>
  );
};
