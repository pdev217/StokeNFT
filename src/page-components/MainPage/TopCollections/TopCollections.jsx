import cn from "classnames";
import Image from "next/image";
import { Filter } from "../../../components/Filter/Filter";
import { Column } from "./Column/Column";
import { fakeCollectors } from "./TopCollections.utils";
import styles from "./TopCollections.module.css";

export const TopCollections = () => (
  <div className={styles.wrapper}>
    <div className={styles.topPartWrapper}>
      <div className={styles.title}>
        <span>Top Collections</span>
      </div>
      <div className={styles.filters}>
        <Filter src="/flag-icon.svg" text="United States" className={styles.cursorPointer} />
        <Filter
          src="/location-arrow-icon.svg"
          text="Michigan"
          className={cn(styles.centralFilter, styles.cursorPointer)}
        />
        <Filter src="/location-searching-icon.svg" text="25 Miles" className={styles.cursorPointer} />
      </div>
      <div className={styles.cursorPointer}>
        <Image src="/cross-grey-contained.svg" height={24} width={24} alt="cross-icon" />
      </div>
    </div>
    <div className={styles.collectorsWrapper}>
      <Column start={0} end={5} array={fakeCollectors} className={cn(styles.column)}/>
      <Column start={5} end={10} array={fakeCollectors} className={cn(styles.column, styles.centralColumn)} />
      <Column start={10} end={15} array={fakeCollectors} className={cn(styles.column, styles.endColumn)}/>
    </div>
  </div>
);
