import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { Tag } from "../Tag/Tag";
import { AmountWithIcon } from "../AmountWithIcon/AmountWithIcon";
import { SmallChart } from "../SmallChart/SmallChart";
import { AmountDifference } from "../AmountDifference/AmountDifference";
import { Username } from "../Username/Username";
import styles from "./HorizontalNFTCard.module.css";

export const HorizontalNFTCard = ({
  className,
  username,
  availible,
  chartData,
  lastUpdate,
  price,
  priceDifference,
  tag,
  title,
  src,
}) => {
  const [isImageAbsent, setIsImageAbsent] = useState(false);

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
        <p className={styles.availible}>{availible} Availible</p>
        <Tag text={tag} className={styles.tag} />
        <AmountWithIcon amount={price} color="primary" size="m" />
        <SmallChart data={chartData} className={styles.chart} />
        <div className={styles.priceDiffAndLastUpdate}>
          <AmountDifference
            direction={priceDifference.direction}
            percent={priceDifference.difference}
            className={styles.priceDifferenceInfo}
          />
          <p className={styles.lastUpdate}>{lastUpdate} Hrs</p>
        </div>
        <Username username={username} color="lightblue" isConfirmed className={styles.username} />
      </div>
    </div>
  );
};
