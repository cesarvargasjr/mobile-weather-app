import React from "react";
import nounRain from "../../../assets/nounRain.png";
import temperature from "../../../assets/temperature.png";
import windSpeedyIcon from "../../../assets/windSpeedy.png";
import * as S from "./styles";

interface CardProps {
  windSpeedy: string;
  rainProbability: string;
  humidity: string;
  hourNow: string;
}

export const CardWeatherToday = ({
  windSpeedy,
  rainProbability,
  humidity,
  hourNow,
}: CardProps) => {
  return (
    <S.ContainerCard hourNow={hourNow}>
      <S.Box>
        <S.Icon source={nounRain} />
        <S.Text>{rainProbability}%</S.Text>
      </S.Box>
      <S.Box>
        <S.Icon source={temperature} />
        <S.Text>{humidity}%</S.Text>
      </S.Box>
      <S.Box>
        <S.Icon source={windSpeedyIcon} />
        <S.Text>{windSpeedy}</S.Text>
      </S.Box>
    </S.ContainerCard>
  );
};
