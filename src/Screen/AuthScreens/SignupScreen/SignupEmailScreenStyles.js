import {StyleSheet} from 'react-native';
import {Rs, Color} from '../../../Helper';

export const styles = StyleSheet.create({
  whatIsEmail: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 35,
  },
  textField: {
    backgroundColor: Color.white,
    height: Rs.heightPx(7),
    width: Rs.widthPx(80),
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
  },
  txtFld: {
    marginLeft: 50,
  },
});
