import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import AuthHeader from '../../../Componant/authHeader';

export default class signinScreen extends PureComponent {
  render() {
    return (
      <View>
        <AuthHeader isBack />
        <Text> textInComponent </Text>
      </View>
    );
  }
}
