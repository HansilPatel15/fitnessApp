import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Color, Rs} from '../Helper';

export default class authButton extends PureComponent {
  render() {
    console.log(this.props);
    const {text, screen} = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(screen);
          }}>
          <View style={styles.btnColor}>
            <Text style={styles.btnText}>{text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnColor: {
    backgroundColor: Color.themePurple,
    height: Rs.heightPx(5),
    width: Rs.widthPx(35),
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  btnText: {
    marginTop: 5,
    textAlign: 'center',
    justifyContent: 'center',
    color: Color.white,
  },
});
