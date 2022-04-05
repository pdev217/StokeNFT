import cn from "classnames";
import Image from "next/image";
import styles from "./Filter.module.css";

export const Filter = ({ src, text, className }) => (
  <div className={cn(styles.wrapper, className)}>
    <Image src={src} height={14} width={14} alt={`${text}-icon`} />
    <p className={styles.text}>{text}</p>
    <Image src="/filter-delta-icon.svg" height={24} width={24} alt="filter-delta-icon" />
  </div>
);
