import { View, StyleSheet, Dimensions } from 'react-native';
import Color from '../../constants/color';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceHeight = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: deviceHeight < 380 ? 18 : 36,
    marginHorizontal: 24,
    backgroundColor: Color.primary800,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
