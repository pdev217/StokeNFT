import { useState } from "react";
import Image from "next/image";
import { Tag } from "../Tag/Tag";
import { AmountWithIcon } from "../AmountWithIcon/AmountWithIcon";
import { Views } from "../Views/Views";
import styles from "./HotAuctionsCard.module.css";

export const HotAuctionsCard = ({ username, code, price, src, tag, time, title, views }) => {
  const [isImageAbsent, setIsImageAbsent] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        {isImageAbsent ? (
          <div className={styles.errorImage}></div>
        ) : (
          <Image
            alt={title}
            className={styles.image}
            layout="fill"
            onError={(e) => e && setIsImageAbsent(true)}
            src={src}
          />
        )}
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.title}>{title}</p>
        <div className={styles.priceAndTime}>
          <AmountWithIcon amount={price} color="yellow" size="m" />
          <span className={styles.time}>{time}</span>
        </div>
        <div className={styles.usernameAndViews}>
          <p className={styles.username}>@{username}</p>
          <Views quantity={views} className={styles.views} />
        </div>
        <div className={styles.codeAndTag}>
          <p className={styles.code}>{code}</p>
          <Tag text={tag} />
        </div>
      </div>
    </div>
  );
};
