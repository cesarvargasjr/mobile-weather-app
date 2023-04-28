import React from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

interface DropdownProps {
  cityName: string;
  onPress: () => void;
}

export const Dropdown = ({ cityName, onPress }: DropdownProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <S.Option>{cityName}</S.Option>
    </TouchableOpacity>
  );
};
