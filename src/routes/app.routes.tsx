
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from '../pages/menu';
import ListaFuncionarios from '../pages/listafuncionarios';
import Funcionarios from '../pages/funcionarios';

const App = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
      <App.Navigator initialRouteName="Menu" screenOptions={{headerShown:false}}>
        <App.Screen name="Menu" component={Menu} />
        <App.Screen name="ListaFuncionarios" component={ListaFuncionarios} />
        <App.Screen name="Funcionarios" component={Funcionarios} />
      </App.Navigator>
  );
};

export default AppRoutes;
