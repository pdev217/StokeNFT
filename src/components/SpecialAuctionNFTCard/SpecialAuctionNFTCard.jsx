import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";
import Image from "next/image";
import { setActive } from "../../redux/slices/carouselSlice";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { AmountWithIcon } from "../AmountWithIcon/AmountWithIcon";
import { Tag } from "../Tag/Tag";
import { SmallChart } from "../SmallChart/SmallChart";
import { CustButton } from "../CustButton/CustButton";
import { Views } from "../Views/Views";
import styles from "./SpecialAuctionNFTCard.module.css";

export const SpecialAuctionNFTCard = ({
  NFTName,
  chartData,
  className,
  code,
  currPrice,
  onClick,
  prevPrices,
  src,
  tag,
  time,
  username,
  views,
  index,
}) => {
  const [isImageAbsent, setIsImageAbsent] = useState(false);
  const [rotation, setRotation] = useState(0);
  const dispatch = useDispatch();

  const ref = useRef();
  const windowWidth = useWindowWidth();
  const windowCenter = windowWidth / 2;

  useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    const { parentNode } = ref.current.parentNode;

    const handleScroll = () => {
      const { x } = ref.current.getBoundingClientRect();

      const viewportCenter = windowCenter === 0 ? window.innerWidth / 2 : windowCenter;
      const elementCenterPosition = x + width / 2;
      const distance = viewportCenter - elementCenterPosition;

      const baseDegree = 20;
      const degree = (distance / width) * baseDegree;
      setRotation(degree);

      if (Math.abs(distance) < 180) {
        dispatch(setActive(index));
      }
    };
    handleScroll();

    parentNode.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(styles.wrapper, className)}
      style={{
        transform: `perspective(500px) translateX(${rotation * 2}px) translateZ(${-Math.abs(
          rotation * 2
        )}px) rotateY(${rotation}deg)`,
        transition: "0.5s",
      }}
    >
      <div className={styles.leftSide}>
        <div className={styles.imageWrapper}>
          {isImageAbsent ? (
            <div className={styles.errorImage}></div>
          ) : (
            <Image
              alt={NFTName}
              className={styles.image}
              layout="fill"
              onError={(e) => e && setIsImageAbsent(true)}
              src={src}
            />
          )}
        </div>
        <div className={styles.leftSideInfo}>
          <p className={styles.NFTName}>{NFTName}</p>
          <p className={styles.time}>{time}</p>
          <div className={styles.usernameCodeTag}>
            <div className={styles.usernameCode}>
              <p className={styles.username}>{username}</p>
              <p className={styles.code}>{code}</p>
            </div>
            <Tag text={tag} className={styles.tag} />
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.currentPriceTitle}>CURRENT PRICE</p>
        <AmountWithIcon amount={currPrice} color="primary" size="l" className={styles.amountWithIconBig} />
        <Views quantity={views} className={styles.views} />
        <p className={styles.historyTitle}>HISTORY</p>
        <SmallChart data={chartData} className={styles.chart} />
        <div className={styles.prevPrices}>
          {prevPrices.length > 0 &&
            prevPrices.map((price) => (
              <div key={price.id} className={styles.prevPrice}>
                <AmountWithIcon
                  amount={price.price}
                  color="primary"
                  size="sm"
                  className={styles.amountWithIconSmall}
                />
                <p className={styles.updatePrevPrice}>{price.updated}</p>
              </div>
            ))}
        </div>
        <CustButton text="Bid" color="primary" className={styles.button} />
      </div>
    </div>
  );
};
