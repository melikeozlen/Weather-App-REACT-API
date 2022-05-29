import React from "react";
import Form from "../Form";
import Weather from "../Weather";
import styles from "./Page.module.css";
import useHook from "../../Hook/useHook";
import Error from '../Error'
import Loading from "../Loading";
const Page = () => {
  const { isLoading,Loaded,isError } = useHook();
  return (
    <div className={styles.box}>
      {isLoading && <Loading />}
      {!Loaded && !isLoading && <Form />}
      {Loaded && <Weather />}
      {isError && <Error />}
    <h5>Challange By <a href="https://theultimateapichallenge.com/weather-api-react"> The Ultimate Api Challenge</a> || Coded By <a href="https://github.com/melikeozlen">Melike ÖZLEN</a></h5>
    </div>
  );
};

export default Page;
