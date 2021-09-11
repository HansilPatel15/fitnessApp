import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Images, Rs} from '../Helper';

export default class authHeader extends PureComponent {
  render() {
    const {isBack} = this.props;
    return (
      <View style={styles.container}>
        {isBack ? (
          <Image source={Images.back} style={styles.back} />
        ) : (
          <View style={styles.back} />
        )}
        <Image source={Images.logo} style={styles.logo} />
        <View style={styles.back} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back: {
    height: Rs.heightPx(5),
    width: Rs.widthPx(11),
    marginLeft: 9,
  },
  logo: {
    height: Rs.heightPx(9),
    width: Rs.widthPx(20),
    alignSelf: 'center',
  },
});
