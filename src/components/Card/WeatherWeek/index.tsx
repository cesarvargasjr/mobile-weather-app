import React from "react";
import cloundlyIcon from "../../../assets/cloundlyIcon.png";
import midRainIcon from "../../../assets/midRainIcon.png";
import sunCloundlyIcon from "../../../assets/sunCloundlyIcon.png";
import sunIcon from "../../../assets/sunIcon.png";
import * as S from "./styles";

interface CardProps {
  day: string;
  tempMin: number;
  tempMax: number;
  condition: string;
}

export const CardWeatherWeek = ({
  day,
  tempMin,
  tempMax,
  condition,
}: CardProps) => {
  const renderIcon = () => {
    if (condition === "rain") {
      return <S.Icon source={midRainIcon} resizeMode="contain" />;
    } else if (condition === "cloudly_day") {
      return <S.IconSecondary source={cloundlyIcon} resizeMode="contain" />;
    } else if (condition === "clear_day") {
      return <S.IconSecondary source={sunIcon} resizeMode="contain" />;
    } else if (condition === "cloud") {
      return <S.IconSecondary source={sunCloundlyIcon} resizeMode="contain" />;
    } else {
      return <S.IconSecondary source={sunCloundlyIcon} resizeMode="contain" />;
    }
  };

  return (
    <>
      <S.Box>
        <S.Text>{day}</S.Text>
        {renderIcon()}
        <S.BoxTemp>
          <S.BoxTemp>
            <S.Text>{tempMax}</S.Text>
            <S.TextCelsiusMax>°C</S.TextCelsiusMax>
          </S.BoxTemp>
          <S.BoxTemp>
            <S.TextTempMin>{tempMin}</S.TextTempMin>
            <S.TextCelsiusMin>°C</S.TextCelsiusMin>
          </S.BoxTemp>
        </S.BoxTemp>
      </S.Box>
    </>
  );
};
