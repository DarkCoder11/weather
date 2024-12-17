import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeatherScreen from './src/screens/WeatherScreen';

export const App = () => {
  return (
    <View style={styles.container}>
      <WeatherScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
