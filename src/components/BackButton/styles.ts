import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";


export const Container = styled(RectButton)`
  flex: 1;
  height: ${hp(3)}px;
  max-height: ${hp(3)}px; 
  justify-content: flex-start; 
  background-color: ${(props)=>`${props.background}`};
  align-items: center; 
  flex-direction: row;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1; 
  height: ${hp(3)}px; 
  max-height: ${hp(3)}px; 
  justify-content: flex-start; 
  background-color: ${(props)=>`${props.background}`};
  align-items: center; 
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color:${(props)=>props.textColor}; 
  font-size:${wp(4)}px;
  font-family: "sans-serif";
`;

export const Icon = styled(Ionicons)`
  margin-right: 8px;
`;