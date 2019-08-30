import React from 'react';

import { View, Button, StyleSheet } from 'react-native';

function GameInstructions({ intructionsComponent: InstructionsText, onPlay }) {
  return (
    <View style={styles.view}>
      <InstructionsText />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Repetir" />
        <Button style={styles.button} title="Jugar" onPress={onPlay} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexGrow: 1,
    flex: 1
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    padding: '20px',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})

export default GameInstructions;
