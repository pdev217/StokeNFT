import Image from "next/image";
import { fakeCategories } from "./MakeYourOwnCollection.utils";
import styles from "./MakeYourOwnCollection.module.css";

export const MakeYourOwnCollection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>Own, Grow, & Trade Your Collection, and Much More!</span>
      </div>
      <div className={styles.categoriesWrapper}>
        {fakeCategories.map(({ id, src, title, text, height, width }) => (
          <div key={id} className={styles.category}>
            <div className={styles.imageWrapper}>
              <Image src={src} height={height} width={width} alt={title} />
            </div>
            <div className={styles.categoryTitleTextWrapper}>
              <div className={styles.categoryTitle}>
                <span>{title}</span>
              </div>
              <div className={styles.categoryText}>
                <span>{text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
