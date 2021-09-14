import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Images} from '../../../Helper';
import {styles} from './welcomeScreenStyle';
import AuthHeader from '../../../Componant/authHeader';
import AuthButton from '../../../Componant/authButton';

export default class welcomeScreen extends PureComponent {
  render() {
    return (
      <View>
        <AuthHeader />
        {/* <Image source={Images.logo} style={styles.logo} /> */}
        <Text style={styles.wlcText}> Welcome to Fitness App </Text>
        <Text style={styles.uikit}>
          The Best Ui Kit for your next health and {'\n'} fitness app
        </Text>
        <Image source={Images.main_Screen} style={styles.mainImage} />
        <AuthButton
          text="Get Started"
          screen="SignupEmailScreen"
          {...this.props}
        />
        {/* <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SignupEmailScreen');
          }}>
          <View style={styles.btnColor}>
            <Text style={styles.btnText}>Get Started</Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SigninScreen');
          }}>
          <View>
            <Text style={styles.uikit}>
              Already have an account?{' '}
              <Text style={styles.siginColor}>Sign In</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
