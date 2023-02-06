import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Authpage} from '../screens/Auth';
import Home from '../screens/Home';
import Details from '../screens/Details';
import { useSelector } from 'react-redux';


export const AuthStacknav = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="home" component={Home} />
      <AuthStack.Screen name="details" component={Details} />
    </AuthStack.Navigator>
  );
};
export const UnauthStacknav = () => {
  const UnauthStack = createStackNavigator();

  return (
    <UnauthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
       <UnauthStack.Screen name="Authpage" component={Authpage} />
      <UnauthStack.Screen name="home" component={Home} />
      <UnauthStack.Screen name="details" component={Details} />
    </UnauthStack.Navigator>
  );
};

