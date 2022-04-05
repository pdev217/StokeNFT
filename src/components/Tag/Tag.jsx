import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({ text, className }) => (
  <div className={cn(styles.tag, className)}>
    <p>{text}</p>
  </div>
);
