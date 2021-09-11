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
    height: '100%',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  siginColor: {
    color: Color.themePurple,
    textAlign: 'center',
  },
});
