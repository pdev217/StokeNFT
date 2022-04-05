import { ScrollableList } from "../../../components/ScrollableList/ScrollableList";
import { Creator } from "./Creator/Creator";
import { fakeCreators } from "./Creator/Creator.utils";
import styles from "./PopularCreators.module.css";

export const PopularCreators = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>Popular Creators</span>
      </div>
      <ScrollableList items={fakeCreators} Component={Creator} />
    </div>
  );
};
