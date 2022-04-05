import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { Username } from "../../../../components/Username/Username";
import { CustButton } from "../../../../components/CustButton/CustButton";
import styles from "./Creator.module.css";

export const Creator = ({ username, src, account, isConfirmed, className }) => {
  const [isImageAbsent, setIsImageAbsent] = useState(false);

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.avatar}>
        {isImageAbsent ? (
          <div className={styles.errorImage}></div>
        ) : (
          <Image
            alt={`${username}-avatar`}
            height={179}
            width={179}
            onError={(e) => e && setIsImageAbsent(true)}
            src={src}
          />
        )}
      </div>

      <div className={styles.username}>
        <Username username={username} isConfirmed={isConfirmed} color="lightblue" isBig />
      </div>
      <div className={styles.account}>
        <span>{`${account.substring(0, 6)}...${account.substring(account.length - 6)}`}</span>
      </div>
      <div className={styles.button}>
        <CustButton color="primary" text="Follow" />
      </div>
    </div>
  );
};
