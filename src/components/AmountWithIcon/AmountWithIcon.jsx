import cn from "classnames";
import { numberWithSymbol } from "../../helpers/numberWithSymbol";
import styles from "./AmountWithIcon.module.css";

export const AmountWithIcon = ({ amount, color, size, className }) => {
  return (
    <span
      className={cn(styles.span, className, {
        [styles.l]: size === "l",
        [styles.m]: size === "m",
        [styles.sm]: size === "sm",
        [styles.primary]: color === "primary",
        [styles.red]: color === "red",
        [styles.yellow]: color === "yellow",
      })}
    >
      IC ${numberWithSymbol(amount, ",")}
    </span>
  );
};
