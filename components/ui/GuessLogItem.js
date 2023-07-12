import { View, Text, StyleSheet } from 'react-native';
import UserMessage from '../../constants/UserMessage';
import Color from '../../constants/color';

function GuessLogItem({ guessNum, roundNum }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.orderNuber}>#{roundNum + 1}</Text>
      <Text style={styles.guessNumber}>
        {UserMessage.opponentGuess(guessNum)}
      </Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Color.accent500,
    borderWidth: 1,
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 6,
    backgroundColor: Color.primary800,
    marginHorizontal: 24,
  },
  orderNuber: {
    color: Color.defaultWhite,
  },
  guessNumber: {
    color: Color.accent500,
    fontFamily: 'open-sans_bold',
  },
});
