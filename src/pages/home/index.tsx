import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getWeather } from "../../services/weather";
import { WeatherToday } from "../../components/WeatherToday";
import { CardWeatherToday } from "../../components/Card/WeatherToday";
import * as S from "./styles";

export const Home = () => {
  const [data, setData] = useState<any>();

  const handleWeather = async () => {
    const response = await getWeather();
    setData(response?.results);
  };

  useEffect(() => {
    handleWeather();
  }, []);

  console.log("==========", data);

  return (
    <ScrollView>
      <S.ContainerScreen>
        <WeatherToday
          condition={data?.forecast[0]?.condition}
          temperature={data?.temp}
          temperatureMax={data?.forecast[0]?.max}
          temperatureMin={data?.forecast[0]?.min}
        />
        <CardWeatherToday
          windSpeedy={data?.wind_speedy}
          rainProbability={data?.forecast[0]?.rain_probability}
          humidity={data?.humidity}
        />
      </S.ContainerScreen>
    </ScrollView>
  );
};
