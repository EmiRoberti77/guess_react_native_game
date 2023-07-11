import { View, Image, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import UserMessage from '../constants/UserMessage';
import Color from '../constants/color';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ rounds, guessedNumber, startNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>{UserMessage.gameover}</Title>
      <View style={styles.imageBorder}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text>{UserMessage.gameSummary(rounds, guessedNumber)}</Text>
      <PrimaryButton onPress={startNewGame}>
        {UserMessage.startNewGame}
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageBorder: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Color.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
