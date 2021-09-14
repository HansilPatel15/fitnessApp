import React, {PureComponent} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {AuthButton, AuthHeader} from '../../../Componant';
import {styles} from './SignupEmailScreenStyles';

export default class SignupEmailScreen extends PureComponent {
  render() {
    return (
      <View>
        <AuthHeader isBack />
        <Text style={styles.whatIsEmail}>What Is Your E-Mail Address?</Text>
        <View style={styles.textField}>
          <TextInput
            placeholder="Enter Your Email ID Here"
            keyboardType="email-address"
            style={styles.txtFld}
          />
        </View>

        <AuthButton text="Continue" screen="SignupPassScreen" {...this.props} />
      </View>
    );
  }
}
