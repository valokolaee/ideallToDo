import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Splash from '../../routs/auth/Splash';
import { authRoutsEnum } from './authRoutsEnum';
import MainRoutWrapper from '../../routs/main/MainRoutWrapper';




const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={authRoutsEnum.Splash} component={Splash} />
        <Stack.Screen name={authRoutsEnum.MainRouteWrapper} component={MainRoutWrapper} />

      </Stack.Navigator>
      {/* } */}
    </>
  );
};


