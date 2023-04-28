import styled from "styled-components/native";
import fonts from '../../../utils/fonts'
import colors from "../../../utils/colors";

export const Text = styled.Text`
  font-size: 18px;
  font-family: ${fonts.bold};
  color: ${colors.white};
`;

export const TextTempMin = styled.Text`
  font-size: 18px;
  font-family: ${fonts.bold};
  color: ${colors.grey};
  margin-left: 7px;
`;

export const TextCelsiusMax = styled.Text`
  font-size: 10px;
  font-family: ${fonts.semiBold};
  color: ${colors.white};
  margin-top: 2px;
`;

export const TextCelsiusMin = styled.Text`
  font-size: 10px;
  font-family: ${fonts.semiBold};
  color: ${colors.grey};
  margin-top: 2px;
`;

export const Icon = styled.Image`
  max-height: 45px;
  max-width: 45px;
  min-height: 45px;
  min-width: 45px;
`;

export const IconSecondary = styled.Image`
  max-height: 30px;
  max-width: 30px;
  min-height: 30px;
  min-width: 30px;
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;
`;

export const BoxTemp = styled.View`
  flex-direction: row;
`;
