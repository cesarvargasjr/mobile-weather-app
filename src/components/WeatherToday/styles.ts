import styled from "styled-components/native";
import fonts from '../../utils/fonts'
import colors from "../../utils/colors";

export const ContainerContent = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 64px;
  font-family: ${fonts.bold};
  color: ${colors.white};
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-family: ${fonts.regular};
  color: ${colors.white};
  line-height: 21px;
`;

export const ContainerInline = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 187px;
  width: 284px;
`;

export const ImageNight = styled.Image`
  height: 160px;
  width: 160px;
  margin-top: 20px;
  margin-bottom: 10px;
`;