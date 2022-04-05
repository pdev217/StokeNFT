import cn from "classnames";
import styles from "./Username.module.css";

const icon = (
  <div className={styles.icon}>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
      <path
        id="Icon_metro-user-check"
        data-name="Icon metro-user-check"
        d="M13.821,9.053l-3.375,3.375L9.321,11.3l-.75.75,1.875,1.875L14.571,9.8Zm-6,1.875h3.75V9.579a7.2,7.2,0,0,0-3-.87V8.09a3.35,3.35,0,0,0,1.5-2.787c0-1.864,0-3.375-2.25-3.375S5.571,3.439,5.571,5.3a3.35,3.35,0,0,0,1.5,2.787v.619c-2.544.208-4.5,1.458-4.5,2.969h5.25v-.75Z"
        transform="translate(-2.571 -1.928)"
        fill="#00eaf4"
      />
    </svg>
  </div>
);

export const Username = ({ username, className, isConfirmed, color, isBig }) => (
  <div
    className={cn(styles.username, className, {
      [styles.lightblue]: color === "lightblue",
      [styles.white]: color === "var(--white)",
      [styles.big]: isBig,
    })}
  >
    <p>@{username}</p>
    {isConfirmed && icon}
  </div>
);
