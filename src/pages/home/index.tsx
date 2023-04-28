import React, { useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { getWeather } from "../../services/weather";
import { WeatherToday } from "../../components/WeatherToday";
import { CardWeatherToday } from "../../components/Card/WeatherToday";
import { CardWeatherWeek } from "../../components/Card/WeatherWeek";
import { LinearGradient } from "expo-linear-gradient";
import { Dropdown } from "../../components/Dropdown";
import { optionsCity } from "../../utils/optionsCity";
import calendar from "../../assets/calendar.png";
import location from "../../assets/location.png";
import arrowDown from "../../assets/arrowDown.png";
import * as S from "./styles";

export const Home = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState<string>("São Paulo, SP");
  const [showDropdown, setShowDropdown] = useState(false);
  const hourNow = new Date()?.toString().slice(16, 18);
  const weatherWeek = data?.forecast?.slice(1, 8);

  const handleWeather = async () => {
    setLoading(true);
    const response = await getWeather(city);
    setData(response?.results);
    setLoading(false);
  };

  useEffect(() => {
    handleWeather();
  }, [city]);

  return (
    <LinearGradient
      colors={
        hourNow > "17" && hourNow < "6"
          ? ["#08244F", "#134CB5", "#0B42AB"]
          : ["#29B2DD", "#29B2DD", "#2DC8EA"]
      }
    >
      {showDropdown && (
        <S.Background onTouchEnd={() => setShowDropdown(false)} />
      )}
      {showDropdown && (
        <S.ContainerDropDown>
          {optionsCity?.map((item: string, i: number) => (
            <Dropdown
              key={i}
              cityName={item}
              onPress={() => (setCity(item), setShowDropdown(false))}
            />
          ))}
        </S.ContainerDropDown>
      )}
      {data === undefined && loading ? (
        <S.ContainerLoading>
          <ActivityIndicator />
          <S.TextLoading>Carregando...</S.TextLoading>
        </S.ContainerLoading>
      ) : (
        <S.ContainerScreen showsVerticalScrollIndicator={false}>
          <S.ContainerLocation>
            <S.Icon source={location} />
            <TouchableOpacity
              style={{
                marginLeft: 12,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setShowDropdown(true)}
            >
              <S.TextLocation>{city}</S.TextLocation>
              <S.Icon source={arrowDown} />
            </TouchableOpacity>
          </S.ContainerLocation>
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
            hourNow={hourNow}
          />
          <S.ContainerCardWeek hourNow={hourNow}>
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
        </S.ContainerScreen>
      )}
    </LinearGradient>
  );
};
