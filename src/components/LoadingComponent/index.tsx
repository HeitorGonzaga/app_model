import React from 'react';
import { ActivityIndicator } from 'react-native';
import {
  LoadingContainer,
  LoadingText,
  AcoesContainer,
  IconMenu,
} from './styles';
import LottieView from 'lottie-react-native';

interface LoadingProps{
  tipo: string
}

const LoadingComponent: React.FC<LoadingProps> = ({tipo}) => {
  return (
    <>
      <LoadingContainer>
        <LottieView
          source={
            require('../../assets/loading.json')
          }
          autoPlay
          loop
          style={{ height: 300}}
        />
        <LoadingText >
          {tipo==='Loading'?'Por favor aguarde....':'Ops, nada a exibir aqui....'}
        </LoadingText>
      </LoadingContainer>
    </>
  );
};

export default LoadingComponent;
