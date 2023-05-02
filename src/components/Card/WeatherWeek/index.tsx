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
  date: string;
}

export const CardWeatherWeek = ({
  day,
  date,
  tempMin,
  tempMax,
  condition,
}: CardProps) => {
  const handleIcon = () => {
    switch (condition) {
      case "rain":
        return <S.Icon source={midRainIcon} resizeMode="contain" />;
      case "cloudly_day":
        return <S.IconSecondary source={cloundlyIcon} resizeMode="contain" />;
      case "clear_day":
        return <S.IconSecondary source={sunIcon} resizeMode="contain" />;
      case "cloud":
        return (
          <S.IconSecondary source={sunCloundlyIcon} resizeMode="contain" />
        );
    }
  };

  const handleDay = () => {
    switch (day) {
      case "Seg":
        return <S.TextDay>Segunda</S.TextDay>;
      case "Ter":
        return <S.TextDay>Terça</S.TextDay>;
      case "Qua":
        return <S.TextDay>Quarta</S.TextDay>;
      case "Qui":
        return <S.TextDay>Quinta</S.TextDay>;
      case "Sex":
        return <S.TextDay>Sexta</S.TextDay>;
      case "Sáb":
        return <S.TextDay>Sábado</S.TextDay>;
      case "Dom":
        return <S.TextDay>Domingo</S.TextDay>;
    }
  };

  return (
    <>
      <S.Box>
        <S.ContainerColumn>
          {handleDay()}
          <S.TextDate>{date}</S.TextDate>
        </S.ContainerColumn>
        {handleIcon()}
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
