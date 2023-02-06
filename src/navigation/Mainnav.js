import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStacknav, Stacknav, UnauthStacknav} from './stack';
import { useSelector } from 'react-redux';

export const Mainnav = () => {
    const selector=useSelector(state=>state)
   
  return (
    <NavigationContainer>
      {selector.islogin && selector.islogin.islogin ===true? (
         <AuthStacknav />
        
      ) : (
        <UnauthStacknav />
      )}
    </NavigationContainer>
  );
};
