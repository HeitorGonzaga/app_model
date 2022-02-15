import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <NativeBaseProvider>
        <NavigationContainer>
          <AppRoutes/>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}

