import React from "react";
import styles from "./Header.module.css";
import useHook from '../../Hook/useHook'
const Header = () => {
  const {isLoading,Loaded} =useHook();
  const back = ()=>{
    Loaded(false);
  }
  return (
    <h2 className={styles.heading} onClick={back}>
      Weather <span className={styles.light}>APP</span>
    </h2>
  );
};

export default Header;
