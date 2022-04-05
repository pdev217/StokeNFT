import Image from "next/image";
import { CustButton } from "../../../components/CustButton/CustButton";
import styles from "./VideoAboutNFT.module.css";

export const VideoAboutNFT = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.videoImage}>
        <div className={styles.image}>
          <Image src="/!!!!fakeNFTVideo.png" layout="fill" alt="video-bout-nft" />
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.title}>
          <span>Leading the Charge in the NFT Revolution</span>
        </div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
        <div className={styles.button}>
          <CustButton color="primary" text="Learn More" />
        </div>
      </div>
    </div>
  );
};
