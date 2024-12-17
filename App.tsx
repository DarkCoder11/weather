import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';

import { store } from './src/redux';
import { WeatherScreen } from './src/screens';

const WeatherApp = () => (
  <Provider store={store}>
    <SafeAreaView style={styles.safeArea}>
      <WeatherScreen />
    </SafeAreaView>
  </Provider>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
});

export default WeatherApp;
