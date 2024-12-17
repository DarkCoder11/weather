import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { WeatherCode } from '../../services';
import { useWeatherQuery } from '../../hooks';
import { getWeatherDescription, getWeatherIcon } from '../../utils';

import { useStyles } from './WeatherCard.useStyles';

interface WeatherCardProps {
  onRetry: () => void;
}

export const WeatherCard = ({ onRetry }: WeatherCardProps) => {
  const { styles } = useStyles();
  const { weather, cityInfo, error } = useWeatherQuery();

  if (error) {
    return (
      <View style={styles.card}>
        <Text style={styles.loadingText}>No weather data available</Text>
        <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {/* City Name */}
        <Text style={styles.title}>{cityInfo?.displayName}</Text>

        {/* Weather Icon */}
        <MaterialCommunityIcons
          name={getWeatherIcon(
            weather?.current_weather?.weathercode || WeatherCode.CLEAR,
          )}
          size={80}
          color="#f39c12"
          style={styles.weatherIcon}
        />

        {/* Temperature */}
        <Text style={styles.temperature}>
          {weather?.current_weather?.temperature.toFixed(1)}°C
        </Text>

        {/* Weather Description */}
        <Text style={styles.weatherCondition}>
          {getWeatherDescription(
            weather?.current_weather?.weathercode || WeatherCode.CLEAR,
          )}
        </Text>

        {/* Weather Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={24}
              color="#555"
            />
            <Text style={styles.label}>Wind Speed:</Text>
            <Text style={styles.value}>
              {weather?.current_weather.windspeed.toFixed(1)} km/h
            </Text>
          </View>
          <View style={styles.detailItem}>
            <MaterialCommunityIcons name="map-marker" size={24} color="#555" />
            <Text style={styles.label}>Elevation:</Text>
            <Text style={styles.value}>{weather?.elevation} m</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
