import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';
import {AuthButton, AuthHeader} from '../../../Componant';
import {Images} from '../../../Helper';
import {styles} from './maleFemaleScreenStyles';

export default class maleFemaleScreen extends PureComponent {
  render() {
    return (
      <View>
        <AuthHeader isBack />
        <Text style={styles.whoIs}>Which One Are You?</Text>
        <View style={styles.maleFemale}>
          <View style={styles.logoStyle}>
            <Image source={Images.male} style={styles.logo} />
          </View>
          <View style={styles.logoStyle}>
            <Image source={Images.female} style={styles.logo} />
          </View>
        </View>
        <Text style={styles.toGive}>
          To give you a batter experience {'\n'} we need to know your gender
        </Text>
        <AuthButton text="Continue" screen="" {...this.props} />
      </View>
    );
  }
}
