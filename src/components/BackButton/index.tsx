import React from "react";

import { ActivityIndicator } from 'react-native';
import { Container, ButtonContainer, ButtonText, Icon } from "./styles";
import { RectButtonProperties } from "react-native-gesture-handler";


interface ButtonProps extends RectButtonProperties {
  text: string;
  textColor: string;
  background: string;
  evento():void;
}

const BackButton: React.FC<ButtonProps> = ({ text, textColor, evento, background, ...rest }) => {
  return (
    <Container background={background}>
      <ButtonContainer onPress={()=>evento()}>
        <Icon name={'chevron-back-outline'} size={25} color={textColor} />
        <ButtonText textColor={textColor}>{text}</ButtonText>
      </ButtonContainer>
    </Container>
  );
};

export default BackButton;
