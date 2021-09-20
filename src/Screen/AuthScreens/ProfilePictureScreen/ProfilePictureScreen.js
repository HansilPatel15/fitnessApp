import React, {PureComponent} from 'react';
import {Text, View, FlatList} from 'react-native';
import {AuthHeader} from '../../../Componant';

export default class ProfilePictureScreenStyles extends PureComponent {
  render() {
    return (
      <View>
        <AuthHeader isBack />
        <FlatList /> 
      </View>
    );
  }
}
