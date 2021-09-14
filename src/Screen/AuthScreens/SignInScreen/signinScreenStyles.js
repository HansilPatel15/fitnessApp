import {StyleSheet} from 'react-native';
import {Rs, Color} from '../../../Helper';

export const styles = StyleSheet.create({
  textField: {
    backgroundColor: Color.white,
    height: Rs.heightPx(7),
    width: Rs.widthPx(80),
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
  },
  perPass: {
    height: Rs.heightPx(4),
    width: Rs.heightPx(4),
    marginTop: 7,
    marginLeft: 9,
  },
  txtFld: {
    marginLeft: 9,
  },
});
