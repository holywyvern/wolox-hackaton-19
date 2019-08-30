import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FindIt from './games/find-it';

const Game = FindIt;

export default function App() {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
});
