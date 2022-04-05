import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { Tag } from "../Tag/Tag";
import styles from "./AssetBackedNFTCard.module.css";

export const AssetBackedNFTCard = ({ src, title, text, tags, className }) => {
  const [isImageAbsent, setIsImageAbsent] = useState(false);

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.imageWrapper}>
        {isImageAbsent ? (
          <div className={styles.errorImage}></div>
        ) : (
          <Image alt={title} layout="fill" onError={(e) => e && setIsImageAbsent(true)} src={src} />
        )}
      </div>{" "}
      <div className={styles.infoWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
        <div className={styles.tagsContainer}>
          {tags.map((tag, i) => (
            <Tag key={`asset-backed-tag-${i}`} text={tag.text} />
          ))}
        </div>
      </div>
    </div>
  );
};
