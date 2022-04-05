import { useSelector } from "react-redux";
import cn from "classnames";
import { Mainpage3dCarousel } from "../../../components/3dMainpageCarousel/Mainpage3dCarousel";
import { NFTCards } from "./SpecialAuctionNFTs.utils";
import styles from "./SpecialAuctionNFTs.module.css";

// Title for this division is located in the Collections division
// because the background of Collections covers this title

export const SpecialAuctionNFTs = ({}) => {
  const active = useSelector((state) => state.carousel.active);
  return (
    <>
      <div className={styles.wrapper}>
        <Mainpage3dCarousel NFTCards={NFTCards} />
      </div>
      <div className={styles.dots}>
        {NFTCards.map(({ id }, index) => (
          <div
            key={id}
            className={cn(styles.dot, {
              [styles.active]: active === index,
            })}
          />
        ))}
      </div>
    </>
  );
};
