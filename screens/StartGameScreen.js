import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Color from '../constants/color';
import Title from '../components/ui/Title';
import UserMessage from '../constants/UserMessage';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');
  function numberInputHandler(input) {
    setEnteredNumber(input);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }

    onPickedNumber(choosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>{UserMessage.startscreenTitle}</Title>
      <Card>
        <InstructionText>{UserMessage.enterNumber}</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    padding: 16,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Color.accent500,
    borderBottomWidth: 2,
    color: Color.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
