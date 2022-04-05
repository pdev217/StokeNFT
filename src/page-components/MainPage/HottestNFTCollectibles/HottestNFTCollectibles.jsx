import Image from "next/image";
import { BigMainpageCollectionInfo } from "../../../components/BigMainpageCollectionInfo/BigMainpageCollectionInfo";
import { HorizontalNFTCard } from "../../../components/HorizontalNFTCard/HorizontalNFTCard";
import { Category } from "../../../components/Category/Category";
import { fakeChartData, fakeCategories } from "./HottestNFTCollectibles.utils";
import styles from "./HottestNFTCollectibles.module.css";

export const HottestNFTCollectibles = ({ categories = fakeCategories }) => {
  return (
    <div className={styles.wrapper}>
      <Image layout="fill" src="/mainpage-smoke-background.png" alt="background-with-smoke" />
      <div className={styles.leftSide}>
        <HorizontalNFTCard
          className={styles.horizontalNFTCard}
          username={"MLB"}
          availible={247}
          chartData={fakeChartData}
          lastUpdate={24}
          price={122.48}
          priceDifference={{
            direction: "up",
            difference: 12.34,
          }}
          rewards={"rare"}
          tag="Athletes"
          title={"Maikel Franco"}
          src="/testImages/baseballist-3d.png"
        />
        <BigMainpageCollectionInfo
          className={styles.bigMainpageCollectionInfo}
          title={"Rookie Maikel Franco Limited Bobblehead!"}
          upperCaseText={"ONLY 1,000 MINTED!"}
          discount={150}
          src="/testImages/baseballist-big.png"
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.rightSideTitle}>
          Hottest NFT Collectibles From Your Top Music Artists, Athletes, and Artists From All Over the World!
        </div>
        <div className={styles.browseText}>Browse Collections</div>
        <div className={styles.categoriesBox}>
          {categories.map(({ id, title, src }) => (
            <Category key={id} title={title} src={src} className={styles.category} />
          ))}
        </div>
      </div>
    </div>
  );
};
