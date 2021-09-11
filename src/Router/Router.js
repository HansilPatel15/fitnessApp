import React, {PureComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {WelcomeScreen, SigninScreen} from '../Screen';
import {Screen} from '../Helper';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default class Router extends PureComponent {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={Screen.WelcomeScreen} component={WelcomeScreen} />
          <Stack.Screen name={Screen.SigninScreen} component={SigninScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
