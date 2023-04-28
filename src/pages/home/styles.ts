import styled from "styled-components/native";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

export const ContainerScreen = styled.ScrollView`
  padding: 10% 8%;
  height: 100%;
`;

export const ContainerLoading = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerCardWeek = styled.View<{ currently: string }>`
  align-items: center;
  border-radius: 20px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 80px;
  padding: 5%;
  background-color: ${({ currently }) =>
    currently === "noite"
      ? colors.backgroundDay
      : colors.backgroundNight
  };
`;

export const ContainerDropDown = styled.ScrollView<{ currently: string }>`
  position: absolute;
  min-width: 230px;
  max-height: 140px;
  border-radius: 20px;
  padding: 20px 20px 0 20px;
  top: 105px;
  left: 40px;
  z-index: 99999;
  flex-direction: column;
  background-color:  ${({ currently }) =>
    currently === "noite"
      ? colors.blue
      : colors.blueLight
  };
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const ContainerLocation = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 25px;
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
  margin-top: 20px;
`;

export const TextLocation = styled.Text`
  font-size: 18px;
  font-family: ${fonts.semiBold};
  color: ${colors.white};
  margin-left: 8px;
  margin-right: 15px;
`;

export const Background = styled.View`
  height: 100%;
  width: 100%;
  z-index: 9;
  position: absolute;
`;