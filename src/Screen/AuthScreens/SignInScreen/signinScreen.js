import React, {PureComponent} from 'react';
import {Image, Text, View, TextInput, TouchableOpacity} from 'react-native';
import AuthButton from '../../../Componant/authButton';
import AuthHeader from '../../../Componant/authHeader';
import {Images} from '../../../Helper';
import {styles} from './signinScreenStyles';

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
        {/* <TouchableOpacity>
          <View style={styles.btnColor}>
            <Text style={styles.btnText}>Continue</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  }
}
