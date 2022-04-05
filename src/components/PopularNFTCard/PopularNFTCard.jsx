import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { AmountWithIcon } from "../AmountWithIcon/AmountWithIcon";
import { AmountDifference } from "../AmountDifference/AmountDifference";
import { Tag } from "../Tag/Tag";
import { Username } from "../Username/Username";
import styles from "./PopularNFTCard.module.css";

export const PopularNFTCard = ({ className, username, account, price, priceDifference, src, tag, title }) => {
  const [isImageAbsent, setIsImageAbsent] = useState(false);
  const accountUpdated = `${account.substring(0, 6)}...${account.substring(account.length - 6)}`;

  return (
    <div className={cn(styles.wrapper, className)}>
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
        <div className={styles.priceInfo}>
          <AmountWithIcon amount={price} color="red" size="m" />
          <AmountDifference direction={priceDifference.direction} percent={priceDifference.percent} />
        </div>
        <Username username={username} color="lightblue" isConfirmed />
        <div className={styles.codeAndTag}>
          <p className={styles.code}>{accountUpdated}</p>
          <Tag text={tag} />
        </div>
      </div>
    </div>
  );
};
