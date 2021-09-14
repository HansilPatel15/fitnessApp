import {StyleSheet} from 'react-native';
import {Rs, Color} from '../../../Helper';

export const styles = StyleSheet.create({
  whoIs: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 35,
  },
  maleFemale: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  logo: {
    height: Rs.heightPx(17),
    width: Rs.widthPx(15),
    marginTop: 7,
  },
  logoStyle: {
    backgroundColor: Color.white,
    width: '25%',
    height: '110%',
    alignItems: 'center',
  },
  toGive: {
    color: Color.gray,
    textAlign: 'center',
    marginTop: 40,
  },
});
