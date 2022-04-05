import { CustButton } from "../../../components/CustButton/CustButton";
import { ScrollableList } from "../../../components/ScrollableList/ScrollableList";
import { PopularNFTCard } from "../../../components/PopularNFTCard/PopularNFTCard";
import { fakeNFTs } from "./TrendingNFTs.utils";
import styles from "./TrendingNFTs.module.css";

export const TrendingNFTs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleAndbuttonWrapper}>
        <div>Trending NFTs</div>
        <CustButton color="primary" text="Browse All" />
      </div>
      <ScrollableList items={fakeNFTs} Component={PopularNFTCard} />
    </div>
  );
};
