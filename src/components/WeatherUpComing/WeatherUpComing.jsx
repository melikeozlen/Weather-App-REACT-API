import React from "react";
import useHook from "../../Hook/useHook";
import styles from "./WeatherUpComing.module.css";
const WeatherUpComing = () => {
  const {

    upcoming_weather_main,
    upcoming_weather_icon,
    upcoming_weather_temp,
    upcoming_weather_time,
  } = useHook();
  const ICON_URL = [
    `http://openweathermap.org/img/wn/${upcoming_weather_icon[0]}@2x.png`,
    `http://openweathermap.org/img/wn/${upcoming_weather_icon[1]}@2x.png`,
    `http://openweathermap.org/img/wn/${upcoming_weather_icon[2]}@2x.png`,
    `http://openweathermap.org/img/wn/${upcoming_weather_icon[3]}@2x.png`,
    `http://openweathermap.org/img/wn/${upcoming_weather_icon[4]}@2x.png`,
    `http://openweathermap.org/img/wn/${upcoming_weather_icon[5]}@2x.png`,
  ];
  const next_1 = String(upcoming_weather_time[1]).slice(11,16);
  const next_2 = String(upcoming_weather_time[2]).slice(11,16);
  const next_3 = String(upcoming_weather_time[3]).slice(11,16);
  const next_4 = String(upcoming_weather_time[4]).slice(11,16);
  const next_5 = String(upcoming_weather_time[5]).slice(11,16);

  return (
    <div className={styles.up_coming}>
      <div className={styles.up_coming_item1}>
        <p>{next_1}</p>
        <img className={styles.weathericon} src={ICON_URL[1]} />
        <p>{upcoming_weather_main[1]}</p>
        <p>{Math.round(upcoming_weather_temp[1])} °</p>
      </div>
      <div className={styles.up_coming_item1}>
        <p>{next_2}</p>
        <img className={styles.weathericon} src={ICON_URL[2]} />
        <p>{upcoming_weather_main[2]}</p>
        <p>{Math.round(upcoming_weather_temp[2])} °</p>
      </div>
      <div className={styles.up_coming_item1}>
        <p>{next_3}</p>
        <img className={styles.weathericon} src={ICON_URL[3]} />
        <p>{upcoming_weather_main[3]} °C</p>
        <p>{Math.round(upcoming_weather_temp[3])} °</p>
      </div>
      <div className={styles.up_coming_item1}>
        <p>{next_4}</p>
        <img className={styles.weathericon} src={ICON_URL[4]} />
        <p>{upcoming_weather_main[4]}</p>
        <p>{Math.round(upcoming_weather_temp[4])} °</p>
      </div>

    </div>
  );
};

export default WeatherUpComing;
