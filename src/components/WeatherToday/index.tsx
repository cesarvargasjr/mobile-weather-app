import React from "react";
import sunAndCloudly from "../../assets/sunAndCloudly.png";
import rain from "../../assets/rain.png";
import * as S from "./styles";

interface WeatherProps {
  temperature: string;
  temperatureMax: string;
  temperatureMin: string;
  condition: string;
}

export const WeatherToday = ({
  temperature,
  temperatureMax,
  temperatureMin,
  condition,
}: WeatherProps) => {
  return (
    <S.ContainerContent>
      <S.Image source={condition === "rain" ? rain : sunAndCloudly} />
      <S.Title>{temperature}°</S.Title>
      <S.Subtitle>Precipitations</S.Subtitle>
      <S.ContainerInline>
        <S.Subtitle>Max.: {temperatureMax}° </S.Subtitle>
        <S.Subtitle> Min.: {temperatureMin}°</S.Subtitle>
      </S.ContainerInline>
    </S.ContainerContent>
  );
};
