import React from "react";
import styles from "./Weather.module.css";
import WeatherUpComing from "../WeatherUpComing";
import WeatherDescription from "../WeatherDescription";
import useHook from "../../Hook/useHook";
const Weather = () => {
  const { location, currentDay,temp_main, weather, upcoming_weather_main} = useHook();

  const DAY = String(currentDay[0]).slice(0, 3);
  const DATE = String(currentDay[0]).slice(4, 11);
  const HOURLY_TEMP =Math.round(temp_main.temp);
  const ICON_URL =`http://openweathermap.org/img/wn/${weather.icon}@2x.png`
  //console.log(temp);
  return (
    <div className={styles.weather}>
      <div className={styles.cont_left}>
        <div className={styles.top}>
          <h2 className={styles.day}>{DAY} </h2>
          <h4 className={styles.date}>{DATE}</h4>
          <div className={styles.location_cont}>
            <div className={styles.locationicon} />
            <p className={styles.city}>{location}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <img className={styles.weathericon} src={ICON_URL}/>
          <h1 className={styles.deg}>{HOURLY_TEMP}°C</h1>
          <span>{weather.main}</span>
        </div>
      </div>

      <div className={styles.cont_right}>
        <WeatherDescription temp_description={temp_main} />
        <WeatherUpComing />
      </div>
    </div>
  );
};

export default Weather;
