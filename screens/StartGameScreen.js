import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Color from '../constants/color';
import Title from '../components/ui/Title';
import UserMessage from '../constants/UserMessage';

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
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>{UserMessage.enterNumber}</Text>
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
      </View>
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
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Color.primary800,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 8,
    shadowOpacity: 0.5,
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
  instructionText: {
    color: Color.accent500,
    fontSize: 24,
  },
});
