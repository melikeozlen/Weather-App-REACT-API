import React, { useState } from "react";
import styles from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cityNameChange } from "../../redux/citySlice";

const Form = () => {
  const location = useSelector((state) => state.city.city_name);
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");

  const handlerChange = (e) => {
    setCityName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!cityName || cityName === "") {
      alert("Fill in blank");
    } else {
      dispatch(cityNameChange({ cityName }));
      setCityName('');
    }
  };
  return (
    <div className={styles.box}>
      <form action="">
        <input
          type="text"
          placeholder="Citiy Name.."
          className={styles.input}
          autoFocus
          required
          value={cityName}
          onChange={(e) => handlerChange(e)}
        />

        <button
          type="submit"
          className={styles.button}
          onClick={(e) => onSubmit(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
