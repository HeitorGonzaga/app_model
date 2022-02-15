import React from 'react';

import styled, { css } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const LoadingContainer = styled.View`
  flex: 1;
  background: white;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
`;

export const LoadingText = styled.Text`
  color: #A0A0A0;
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 80px;
  font-family: 'sans-serif';
  text-align: center;
`;

export const Rodape = styled.View`
  border-top-color: white;
  background: white;
  border-top-width: 1px;
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const RodapeText = styled.Text`
  font-size: 14px;
  color: white;
  font-family: 'sans-serif';
`;

export const AcoesContainer = styled.View`
  flex-direction: row-reverse;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding-left: 24px;
  padding-bottom: 12px;
  padding-top: 12px;
`;

export const IconMenu = styled(Ionicons)``;
