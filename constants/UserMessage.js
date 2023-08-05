import { Text, StyleSheet, View } from 'react-native';
import Color from './color';

const UserMessage = {
  startscreenTitle: 'guess my number?',
  enterNumber: 'enter a number here',
  opponentGuessTitle: `Opponent's Guess`,
  higherOrLower: 'Higher or Lower',
  gameover: 'GAME OVER',
  startNewGame: 'Start new game',
  gameSummary: (rounds, number) => (
    <View style={styles.textContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.outerText}>
          Your phone needed <Text style={styles.boldText}>{rounds}</Text> rounds
          to guess
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.outerText}>
          number <Text style={styles.boldText}>{number}</Text>
        </Text>
      </View>
    </View>
  ),
  opponentGuess: (num) => `Opponent guess ${num}`,
};

export default UserMessage;

const styles = StyleSheet.create({
  boldText: {
    fontFamily: 'open-sans_bold',
    color: Color.accent500,
  },
  outerText: {
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
});
