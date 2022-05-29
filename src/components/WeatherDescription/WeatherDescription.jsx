import React from 'react'
import styles from './WeatherDescription.module.css'
const WeatherDescription = ({temp_description}) => {
  //console.log(temp_description);
  //const HOURLY_TEMP =Math.round(temp.temp);
  const TEMP_MIN = Math.round(temp_description.temp_min);
  const TEMP_MAX = Math.round(temp_description.temp_min);
  const TEMP_FEEL = Math.round(temp_description.feels_like);
  const HUMIDITY = Math.round(temp_description.humidity);

  return (
    <div className={styles.description}>
      <p>MIN TEMP</p>
      <span>{TEMP_MIN} <sup>°C</sup></span>
      <p>MAX TEMP</p>
      <span>{TEMP_MAX} <sup>°C</sup></span>
      <p>FEELING TEMP</p>
      <span>{TEMP_FEEL} <sup>°C</sup></span>
      <p>humidity</p>
      <span>{HUMIDITY} %</span>
    </div>
  )
}

export default WeatherDescription