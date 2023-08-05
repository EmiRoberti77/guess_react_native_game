import { Text, StyleSheet } from 'react-native';
import Color from '../../constants/color';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans_bold',
    color: Color.defaultBlack,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Color.accent500,
    padding: 12,
    maxWidth: '80%',
    minWidth: '80%',
    width: 300,
  },
});
