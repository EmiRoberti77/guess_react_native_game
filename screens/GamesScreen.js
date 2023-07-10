import { Text, View, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Direction from '../constants/Direction';

function generateRandomNumber(min, max, exclude) {
  const runNum = Math.floor(Math.random() * (max - min)) + min;
  if (runNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return runNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, gameOverHandler }) {
  const initGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  function nextGuessNumber(direction) {
    if (
      (direction === Direction.lower && currentGuess < userNumber) ||
      (direction === Direction.higher && currentGuess > userNumber)
    ) {
      Alert.alert('Dont Lie', 'you know that this is wrong', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }

    //direction => lower , greater
    if (direction === Direction.lower) {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessNumber.bind(this, Direction.lower)}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessNumber.bind(this, Direction.higher)}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>{/* Log general rounds */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
