import React, {PureComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  WelcomeScreen,
  SigninScreen,
  SignupEmailScreen,
  SignupPassScreen,
  MaleFemaleScreen,
  ProfilePictureScreen,
} from '../Screen';
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
          <Stack.Screen
            name={Screen.SignupEmailScreen}
            component={SignupEmailScreen}
          />
          <Stack.Screen
            name={Screen.SignupPassScreen}
            component={SignupPassScreen}
          />
          <Stack.Screen
            name={Screen.MaleFemaleScreen}
            component={MaleFemaleScreen}
          />
          <Stack.Screen
            name={Screen.ProfilePictureScreen}
            component={ProfilePictureScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
