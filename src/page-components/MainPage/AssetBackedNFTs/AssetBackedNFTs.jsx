import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { CustButton } from "../../../components/CustButton/CustButton";
import { AssetBackedNFTCard } from "../../../components/AssetBackedNFTCard/AssetBackedNFTCard";
import { ScrollableList } from "../../../components/ScrollableList/ScrollableList";
import { fakeNFTs, switcherSections } from "./AssetBackedNFTs.utils";
import styles from "./AssetBackedNFTs.module.css";

export const AssetBackedNFTs = () => {
  const [choosen, setChoosen] = useState(-1);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSwitherButtonWrapper}>
        <p className={styles.title}>Asset-Backed NFTs</p>
        <div className={styles.toCenter}>
          <div className={styles.switcher}>
            {switcherSections.map(({ text, id }, index) => (
              <div
                className={cn(styles.section, {
                  [styles.active]: choosen === index,
                })}
                key={id}
                onClick={() => setChoosen(index)}
              >
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={cn(styles.titleElement, styles.button)}>
          <CustButton text="Browse All" color="primary" />
        </div>
      </div>
      <div className={styles.aboutABNFTs}>
        <div className={styles.categoriesTextWrapper}>
          <div className={styles.categories}>
            <div className={styles.bigIcon}>
              <Image src="/!!!!fakeImage.png" height={79} width={79} alt="big-icon" />
            </div>
            <div className={styles.delta}>
              <Image src="/delta-right-contained-icon.svg" height={20} width={20} alt="delta-right-icon" />
            </div>
            <div className={styles.bigIcon}>
              <Image src="/!!!!fakeImage.png" height={79} width={79} alt="big-icon" />
            </div>
            <div className={styles.delta}>
              <Image src="/delta-right-contained-icon.svg" height={20} width={20} alt="delta-right-icon" />
            </div>
            <div className={styles.bigIcon}>
              <Image src="/!!!!fakeImage.png" height={79} width={79} alt="big-icon" />
            </div>
          </div>
          <div className={styles.textsUnderIcons}>
            <div className={styles.textUnderIcon}>
              <span>Pre-Mint Physical Assets</span>
            </div>
            <div className={styles.textUnderIcon}>
              <span>Buy, Sell Asset- Backed NFTs</span>
            </div>
            <div className={styles.textUnderIcon}>
              <span>Register to Buy and Sell AB NFTs</span>
            </div>
          </div>
        </div>
        <div className={styles.aboutTextWrapper}>
          <div className={styles.aboutTitle}>
            <span>What are Asset-Backed NFTs?</span>
          </div>
          <div className={styles.aboutText}>
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
              sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
              et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
              est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
              kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet
            </span>
          </div>
        </div>
      </div>
      <ScrollableList items={fakeNFTs} Component={AssetBackedNFTCard} />
    </div>
  );
};
