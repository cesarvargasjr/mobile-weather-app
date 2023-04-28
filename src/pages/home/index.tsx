import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getWeather } from "../../services/weather";
import { WeatherToday } from "../../components/WeatherToday";
import * as S from "./styles";

interface DataProps {
  condition_code: string;
  forecast: {
    max: string;
    min: string;
  };
}

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
          temperature={data?.condition_code}
          temperatureMax={data?.forecast[0]?.max}
          temperatureMin={data?.forecast[0]?.min}
        />
      </S.ContainerScreen>
    </ScrollView>
  );
};
