import styled from "styled-components/native";
import fonts from '../../../utils/fonts'
import colors from "../../../utils/colors";

export const ContainerCard = styled.View<{ currently: string }>`
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  height: 47px;
  border-radius: 20px;
  width: 100%;
  margin-top: 30px;
  background-color: ${({ currently }) =>
    currently === "noite"
      ? colors.backgroundDay
      : colors.backgroundNight
  };
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${fonts.bold};
  color: ${colors.white};
`;

export const Icon = styled.Image`
  max-height: 24px;
  max-width: 24px;
  margin-right: 5px;
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
`;