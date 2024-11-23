import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { mainRoutsEnum } from './mainRoutsEnum';
import ToDoList from '../../routs/main/routs/ToDoList';





const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }} >
      <Stack.Screen name={mainRoutsEnum.ToDoList} component={ToDoList} />
    </Stack.Navigator>
  );
};


