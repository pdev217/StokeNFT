import styles from "./ViewIndividualTokenPage.module.css";

const fakeData = [
    { likes: "18" },

];

export const ViewIndividualTokenPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <div className={styles.leftSide}>
            <div className={styles}></div>
        </div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  );
};
