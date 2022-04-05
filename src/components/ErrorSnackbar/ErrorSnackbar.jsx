import { useEffect } from "react";
//classnames
import cn from "classnames";
//next
import Image from "next/image";
//redux
import { useSelector, useDispatch } from "react-redux";
import { close } from "../../redux/slices/errorSnackbarSlice";
//styles
import styles from "./ErrorSnackbar.module.css";

export const ErrorSnackbar = ({ className }) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.errorSnackbar.text);

  const closeSnackbar = () => {
    dispatch(close());
  };

  useEffect(() => {
    setTimeout(() => closeSnackbar(), 5000);
  }, []);

  return (
    <div className={cn(styles.wrapper, className)}>
      <div onClick={closeSnackbar} className={styles.icon}>
        <Image src="/x-icon.svg" height={19} width={19} alt="x-icon" />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
