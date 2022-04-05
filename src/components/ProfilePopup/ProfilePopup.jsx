import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { open as openLogout } from "../../redux/slices/logoutModalSlice";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { close } from "../../redux/slices/profilePopupSlice";
import styles from "./ProfilePopup.module.css";
import useAuth from "../../hooks/useAuth";

export const ProfilePopup = ({ categories, className }) => {
  const dispatch = useDispatch();
  const ref = useRef();

  const { isAuthorized } = useAuth();

  const handleLogout = () => {
    dispatch(openLogout());
  };

  const closePopup = () => {
    dispatch(close());
  };

  useOnClickOutside(ref, closePopup);

  return (
    <div className={cn(className, styles.wrapper)} ref={ref}>
      {categories.map(({ categoryName, src, href, id }) => (
        <div key={id} className={styles.category}>
          <Link href={href} passHref>
            <>
              <div className={styles.icon}>
                <Image src={src} alt={categoryName} layout="fill" />
              </div>
              <div className={styles.text}>{categoryName}</div>
            </>
          </Link>
        </div>
      ))}
      {isAuthorized && (
        <div className={styles.category} onClick={handleLogout}>
          <div className={styles.icon}>
            <Image src="/signout-icon.svg" alt="signout-icon" layout="fill" />
          </div>
          <div className={styles.text}>Log Out</div>
        </div>
      )}
    </div>
  );
};
