import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const KEY = "ef1f2e4f291d08c86ec570a488f1e6b0&units=metric";
const GEOCODING_API = "https://api.openweathermap.org/data/2.5/weather?q";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/forecast?";

const useHook = () => {
  const location = useSelector((state) => state.city.city_name);
  const [isError, Seterror] = useState(false);
  const [isLoading, SetLoading] = useState(false);
  const [Loaded, SetLoaded] = useState(false);
  const [coord, setCoord] = useState([]); //şehir kordinatlarımı tutuyor.
  const [currentDay, setCurrentDay] = useState([]);
  const [temp_main, setTemp] = useState({});
  const [weather, setWeather] = useState("");
  const [upcoming_weather_main, setUpcoming_weather_main] = useState([]);
  const [upcoming_weather_icon, setUpcoming_weather_icon] = useState([]);
  const [upcoming_weather_temp, setUpcoming_weather_temp] = useState([]);
  const [upcoming_weather_time, setUpcoming_weather_time] = useState([]);

  //1. location bilgilerini al

  useEffect(() => {
    if (location !== "") {
      getLocation();
    }
  }, [location]);

  const getLocation = () => {
    SetLoading(true);
    const URL = `${GEOCODING_API}=${location}&limit=5&appid=${KEY}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        Seterror(false);
        // console.log(data.coord);
        setCoord([data.coord.lon, data.coord.lat]);
      })
      .catch((err) => {
        Seterror(true);
        console.log(err);
        SetLoading(false)
      });
  };

  useEffect(() => {
    if (coord.length == 2) {
      getWeather();
    }
  }, [coord]);
  const getWeather = () => {
    const URL = `${WEATHER_API}lat=${coord[1]}&lon=${coord[0]}&appid=${KEY}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        Seterror(false);
        const UNIX_DAY = data.list[0].dt;
        console.log(UNIX_DAY);
        const date = new Date(UNIX_DAY * 1000);
        const main_temp = data.list[0].main;
        const weather_main = data.list[0].weather[0];
        setTemp(main_temp);
        setCurrentDay([date]);
        setWeather(weather_main);
        //  setUpcoming_weather({...upcoming_weather,
        //   item1:`${data.list[1].weather[0].main}`})
        data.list.map((upday, index) => {
          if (index < 5) {
            setUpcoming_weather_main((prew) => [
              ...prew,
              upday.weather[0].main,
            ]);
            setUpcoming_weather_icon((prew) => [
              ...prew,
              upday.weather[0].icon,
            ]);
            setUpcoming_weather_temp((prew) => [...prew, upday.main.temp]);
            setUpcoming_weather_time((prew) => [...prew, upday.dt_txt]);
          } else return;
        });

        setTimeout(() =>  SetLoading(false), 2000);
        setTimeout(() =>  SetLoaded(true), 2000);
        
      })
      .catch((err) => {
        console.log(err);
        Seterror(true);
        SetLoading(false)
      });
  };
  return {
    location,
    coord,
    currentDay,
    temp_main,
    weather,
    upcoming_weather_main,
    upcoming_weather_icon,
    upcoming_weather_time,
    upcoming_weather_temp,
    isLoading,
    Loaded,
    isError,
  };
};

export default useHook;
