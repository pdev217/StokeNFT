import cn from "classnames";
import styles from "./AmountDifference.module.css";

export const AmountDifference = ({ direction, percent, className }) => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12.794"
      fill={direction === "down" ? "#FF3856" : "#64FF8E"}
      height="7.764"
      viewBox="0 0 12.794 7.764"
    >
      <path
        id="Icon_awesome-chevron-up"
        data-name="Icon awesome-chevron-up"
        d="M7.06,3.824l5.694,5.694a.7.7,0,0,1,0,.994l-.664.664a.7.7,0,0,1-.993,0L6.563,6.665,2.029,11.177a.7.7,0,0,1-.993,0l-.664-.664a.7.7,0,0,1,0-.994L6.065,3.824A.7.7,0,0,1,7.06,3.824Z"
        transform="translate(-0.166 -3.618)"
      />
    </svg>
  );

  switch (direction) {
    case "up":
      return (
        <div className={cn(styles.wrapper, className)}>
          <div className={styles.icon}>{icon}</div> <div>{percent}%</div>
        </div>
      );
    case "down":
      return (
        <div className={cn(styles.wrapper, className, styles.down)}>
          <div className={styles.iconReversed}>{icon}</div> <div>{percent}%</div>
        </div>
      );
    default:
      return (
        <div className={cn(styles.wrapper, className)}>
          <div className={styles.icon}>{icon}</div> <div>{percent}%</div>
        </div>
      );
  }
};
