import { useState, useRef } from "react";
import cn from "classnames";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { SpecialAuctionNFTCard } from "../SpecialAuctionNFTCard/SpecialAuctionNFTCard";
import styles from "./Mainpage3dCarousel.module.css";

// this component is still in process

export const Mainpage3dCarousel = ({ NFTCards }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {NFTCards.map((card, i) => (
          <SpecialAuctionNFTCard
            key={card.id}
            NFTName={card.NFTName}
            time={card.time}
            username={card.username}
            code={card.code}
            currPrice={card.currPrice}
            prevPrices={card.prevPrices}
            chartData={card.chartData}
            views={card.views}
            src={card.src}
            tag={card.tag}
            index={i}
          />
        ))}
      </div>
    </>
  );

  /// previous version of implementation

  // const [activeI, setactiveI] = useState(2);
  // const [prevI, setPrevI] = useState(2);
  // const [translation, setTranslation] = useState(0);

  // const handleClick = (i) => {
  //   const difference = activeI - i;
  //   setactiveI(i);

  //   setTranslation((prev) => prev + difference * 388);
  //   // console.log("activeI", activeI);
  // };

  // const getPerspective = (i) => {
  //   const baseValue = 1000;
  //   const difference = i < activeI ? activeI - i : i - activeI;

  //   return `${baseValue * difference + baseValue}`;
  // };

  // const getRotation = (i) => {
  //   console.log("getRotation");
  //   console.log("---activeI", activeI);
  //   console.log("---i", i);
  //   const degree = 20;

  //   if (i < activeI) {
  //     const difference = activeI - i;
  //     return `rotateY(${degree * difference}deg)`;
  //   }

  //   if (i > activeI) {
  //     const difference = i - activeI;
  //     return `rotateY(-${degree * difference}deg)`;
  //   }

  //   return "";
  // };

  // const getZIndex = (i) => {
  //   if (i > activeI) {
  //     return NFTCards.length - (i - activeI);
  //   }

  //   if (i < activeI) {
  //     return NFTCards.length - (activeI - i);
  //   }

  //   return NFTCards.length;
  // };

  // return (
  //   <div className={styles.wrapper}>
  //     {NFTCards.map((card, i) => (
  //       <SpecialAuctionNFTCard
  //         styling={{
  //           transform: `scaleX(1) perspective(${getPerspective(i)}px) translateZ(${getZIndex(
  //             i
  //           )}px) translateX(${translation}px) ${getRotation(i)}`,
  //           transition: "0.3s",
  //           zIndex: `${Math.abs(getZIndex(i))}`,
  //         }}
  //         onClick={() => handleClick(i)}
  //         NFTName={card.NFTName}
  //         time={card.time}
  //         username={card.username}
  //         code={card.code}
  //         currPrice={card.currPrice}
  //         prevPrices={card.prevPrices}
  //         chartData={card.chartData}
  //         views={card.views}
  //         src={card.src}
  //         tag={card.tag}
  //         key={card.id}
  //       />
  //     ))}
  //   </div>
  // );
};
