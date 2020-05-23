import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import IncomeTab from './src/screens/IncomeTab';
import GraphsScreen from './src/screens/GraphsScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import InputScreen from './src/screens/InputScreen';
import CameraScreen from './src/screens/CameraScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function Calendar(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="InputScreen" component={InputScreen} options={InputScreen.navigationOptions}/>
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
    
);
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Income" component={IncomeTab} />
        <Tab.Screen name="Graphs" component={GraphsScreen} />
        <Tab.Screen name="Calender" component={Calendar}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}