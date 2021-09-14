import React, {PureComponent} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {AuthButton, AuthHeader} from '../../../Componant';
import {styles} from './SignupPassScreenStyles';

export default class SignupPassScreen extends PureComponent {
  render() {
    return (
      <View>
        <AuthHeader isBack />
        <Text style={styles.whatIsEmail}>
          Now let's set up your {'\n'} password
        </Text>
        <View style={styles.textField}>
          <TextInput
            placeholder="Enter Your Password Here"
            style={styles.txtFld}
            secureTextEntry
          />
        </View>

        <AuthButton text="Continue" screen="MaleFemaleScreen" {...this.props} />
      </View>
    );
  }
}
