import React from "react";
import sunAndCloudly from "../../assets/sunAndCloudly.png";
import rain from "../../assets/rain.png";
import nightAndCloudly from "../../assets/nightAndCloudly.png";
import * as S from "./styles";

interface WeatherProps {
  temperature: string;
  temperatureMax: string;
  temperatureMin: string;
  condition: string;
  description: string;
  currently: string;
}

export const WeatherToday = ({
  temperature,
  temperatureMax,
  temperatureMin,
  condition,
  description,
  currently,
}: WeatherProps) => {
  const RenderImage = () => {
    if (condition === "rain") {
      return <S.Image source={rain} />;
    } else if (condition !== "rain" && currently === "dia") {
      return <S.Image source={sunAndCloudly} />;
    } else if (condition !== "rain" && currently === "noite") {
      return <S.ImageNight source={nightAndCloudly} />;
    }
  };

  return (
    <S.ContainerContent>
      {RenderImage()}
      <S.Title>{temperature}°</S.Title>
      <S.Subtitle>{description}</S.Subtitle>
      <S.ContainerInline>
        <S.Subtitle>Max.: {temperatureMax}° </S.Subtitle>
        <S.Subtitle> Min.: {temperatureMin}°</S.Subtitle>
      </S.ContainerInline>
    </S.ContainerContent>
  );
};
