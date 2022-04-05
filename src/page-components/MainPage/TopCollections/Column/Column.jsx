import cn from "classnames";
import Image from "next/image";
import { numberWithSymbol } from "../../../../helpers/numberWithSymbol";
import { AmountWithIcon } from "../../../../components/AmountWithIcon/AmountWithIcon";
import { AmountDifference } from "../../../../components/AmountDifference/AmountDifference";
import styles from "./Column.module.css";

export const Column = ({ start, end, array, className }) => {
  const newArr = array.slice(start, end);
  let number = start + 1;

  return (
    <div className={cn(styles.collectorsColumn, className)}>
      {newArr.map(({ username, account, src, balance, NFTs, balanceDifference, id }) => (
        <div key={id} className={styles.collector}>
          <div className={styles.number}>
            <span>{number++}</span>
          </div>
          <div className={styles.imageWrapper}>
            <Image layout="fill" src={src} alt={username} />
          </div>
          <div className={styles.userAndAmount}>
            <div className={styles.username}>
              <span>{username}</span>
            </div>
            <AmountWithIcon amount={balance} color="primary" size="m" className={styles.amountWithIcon} />
          </div>
          <div className={styles.accountAndNFTs}>
            <div className={styles.account}>
              <span>{`${account.substring(0, 6)}...${account.substring(account.length - 6)}`}</span>
            </div>
            <div className={styles.NFTs}>
              <span>{`${numberWithSymbol(NFTs, ",")} NFTs`}</span>
            </div>
          </div>
          <AmountDifference
            direction={balanceDifference.direction}
            percent={balanceDifference.percent}
            className={styles.amountDifference}
          />
        </div>
      ))}
    </div>
  );
};
