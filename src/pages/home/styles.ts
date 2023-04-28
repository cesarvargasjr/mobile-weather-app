import styled from "styled-components/native";
import fonts from "../../utils/fonts";
import { LinearGradient } from 'expo-linear-gradient';
import colors from "../../utils/colors";

export const ContainerScreen = styled(LinearGradient).attrs({ colors: ['#08244F', '#134CB5', '#0B42AB'] })`
  background-color: LinearGradient;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  padding: 10% 8%;
`;

export const ContainerCardWeek = styled.View`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  margin-top: 30px;
  padding: 5%;
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const Icon = styled.Image`
  max-height: 50px;
  max-width: 50px;
`;

export const TitleCardWeek = styled.Text`
  font-size: 20px;
  font-family: ${fonts.bold};
  color: ${colors.white};
`;

export const TextLoading = styled.Text`
  font-size: 20px;
  font-family: ${fonts.bold};
  color: ${colors.white};
  width: 100%;
  text-align: center;
`;