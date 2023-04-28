import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getWeather } from "../../services/weather";
import { WeatherToday } from "../../components/WeatherToday";
import { CardWeatherToday } from "../../components/Card/WeatherToday";
import { CardWeatherWeek } from "../../components/Card/WeatherWeek";
import calendar from "../../assets/calendar.png";
import * as S from "./styles";

export const Home = () => {
  const [data, setData] = useState<any>();
  const weatherWeek = data?.forecast?.slice(1, 8);

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
        {data === undefined ? (
          <S.TextLoading>
            Estamos com problemas na busca das informações.
          </S.TextLoading>
        ) : (
          <>
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
            <S.ContainerCardWeek>
              <S.Box>
                <S.TitleCardWeek>Next Forecast</S.TitleCardWeek>
                <S.Icon source={calendar} />
              </S.Box>
              {weatherWeek?.map((item: any, i: number) => (
                <CardWeatherWeek
                  key={i}
                  day={item?.weekday}
                  tempMin={item?.min}
                  tempMax={item?.max}
                  condition={item?.condition}
                />
              ))}
            </S.ContainerCardWeek>
          </>
        )}
      </S.ContainerScreen>
    </ScrollView>
  );
};
