import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { AmountWithIcon } from "../AmountWithIcon/AmountWithIcon";
import { CustButton } from "../CustButton/CustButton";
import styles from "./BigMainpageCollectionInfo.module.css";

export const BigMainpageCollectionInfo = ({ title, upperCaseText, discount, src, className }) => {
  const [isImageAbsent, setIsImageAbsent] = useState(false);

  return (
    <div className={cn(styles.wrapper, className)}>
      {isImageAbsent ? (
        <div className={styles.errorImage}></div>
      ) : (
        <>
          <Image alt={title} layout="fill" onError={(e) => e && setIsImageAbsent(true)} src={src} />
          <div className={styles.forGradient} />
        </>
      )}
      <div className={styles.infoWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.upperCaseText}>{upperCaseText}</p>
        <p className={styles.discount}>
          Get <AmountWithIcon amount={discount} color="primary" size="m" /> for purchasing!
        </p>
        <CustButton text="Collect Now" color="primary" />
      </div>
    </div>
  );
};
