import styles from "./Stat.module.css";

export const Stat = ({ name, nftValue, maxValue }) => (
  <div className={styles.wrapper}>
    <span>{name}</span>
    <span>
      {nftValue} of {maxValue}
    </span>
  </div>
);
