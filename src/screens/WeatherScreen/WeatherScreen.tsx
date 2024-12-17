import React, { useCallback, useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useStyles } from './WeatherScreen.useStyles';

import { useWeatherQuery } from '../../hooks';
import { WeatherCard } from '../../components';

export const WeatherScreen = () => {
  const { styles } = useStyles();
  const [cityName, setCityName] = useState('');
  const { fetchWeatherByCurrentLocation, fetchWeatherByCityName, isLoading } =
    useWeatherQuery();

  useEffect(() => {
    fetchWeatherByCurrentLocation();
  }, []);

  const handleRefresh = useCallback(() => {
    if (cityName?.length) {
      fetchWeatherByCityName(cityName);
    } else {
      fetchWeatherByCurrentLocation();
    }
  }, [cityName]);

  const handleGetWeatherByLocation = useCallback(() => {
    fetchWeatherByCurrentLocation();
    setCityName('');
  }, []);

  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={cityName}
          style={styles.input}
          placeholder="Enter city"
          onChangeText={setCityName}
          placeholderTextColor="#aaa"
        />
        <MaterialCommunityIcons
          size={40}
          name="refresh"
          color="#f39c12"
          onPress={handleRefresh}
          style={styles.weatherIcon}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          (isLoading || !cityName.length) && styles.button_disabled,
        ]}
        disabled={isLoading || !cityName.length}
        onPress={() => fetchWeatherByCityName(cityName)}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isLoading}
        onPress={handleGetWeatherByLocation}
        style={[styles.button, isLoading && styles.button_disabled]}>
        <Text style={styles.buttonText}>Get Weather By Location</Text>
      </TouchableOpacity>

      {isLoading && <Text style={styles.loadingText}>Loading...</Text>}
      {!isLoading && <WeatherCard onRetry={handleRefresh} />}
    </ScrollView>
  );
};
