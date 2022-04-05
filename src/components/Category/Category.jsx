import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import styles from "./Category.module.css";

export const Category = ({ src, title, className }) => {
  const [isImageAbsent, setIsImageAbsent] = useState(false);

  return (
    <div className={cn(styles.wrapper, className)}>
      {isImageAbsent ? (
        <div className={cn(styles.errorImage, styles.image)}></div>
      ) : (
        <>
          <Image src={src} alt={title} layout="fill" onError={() => setIsImageAbsent(true)} />
          <div className={styles.forGradient} />
        </>
      )}
      <p className={styles.text}>{title}</p>
    </div>
  );
};
