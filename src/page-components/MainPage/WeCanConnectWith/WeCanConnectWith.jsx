import Image from "next/image";
import { wallets } from "./WeCanConnectWith.utils";
import styles from "./WeCanConnectWith.module.css";

export const WeCanConnectWith = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>We can connect with</div>
      <div className={styles.wallets}>
        {wallets.map(({ name, src, id, height, width }) => (
          <div key={id} className={styles.item}>
            <Image src={src} alt={name} height={height} width={width} />
            <p className={styles.walletName}>{name}</p>
          </div>
        ))}
        <div className={styles.item}>
          <Image src="/and-more-icon.svg" alt="and-more-icon" height={44} width={59} />
          <p className={styles.walletName}>And More!</p>
        </div>
      </div>
    </div>
  );
};
