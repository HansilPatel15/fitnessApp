import React, {PureComponent} from 'react';
import {Image, View, TextInput} from 'react-native';
import {Images} from '../../../Helper';
import {styles} from './signinScreenStyles';
import {AuthButton, AuthHeader} from '../../../Componant';

export default class signinScreen extends PureComponent {
  render() {
    return (
      <View>
        <AuthHeader isBack />
        <View style={styles.textField}>
          <Image source={Images.person} style={styles.perPass} />
          <TextInput
            placeholder="Enter Your Email ID Here"
            style={styles.txtFld}
          />
        </View>
        <View style={styles.textField}>
          <Image source={Images.pass} style={styles.perPass} />
          <TextInput
            placeholder="Enter Your Password Here"
            style={styles.txtFld}
          />
        </View>
        <AuthButton text="Continue" screen="" {...this.props} />
      </View>
    );
  }
}
