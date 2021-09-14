import {StyleSheet} from 'react-native';
import {Rs, Color} from '../../../Helper';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
  },
  logo: {
    height: Rs.heightPx(9),
    width: Rs.widthPx(20),
    alignSelf: 'center',
    marginTop: 80,
  },
  wlcText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  uikit: {
    textAlign: 'center',
    marginTop: 10,
    color: Color.gray,
  },
  mainImage: {
    height: Rs.heightPx(40),
    width: Rs.widthPx(100),
    alignSelf: 'center',
    marginTop: 10,
  },
  siginColor: {
    color: Color.themePurple,
    textAlign: 'center',
  },
});
