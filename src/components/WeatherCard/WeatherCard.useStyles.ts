import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 15,
      marginBottom: 15,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    cardContainer: {
      flex: 1,
      padding: 15,
    },
    detailItem: {
      alignItems: 'center',
    },
    detailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 15,
    },
    errorContainer: {
      alignItems: 'center',
      backgroundColor: '#f8d7da',
      borderRadius: 10,
      marginTop: 20,
      padding: 10,
    },
    errorText: {
      color: '#721c24',
      fontWeight: 'bold',
    },
    label: {
      color: '#555',
      fontSize: 14,
      marginTop: 5,
    },
    loadingText: {
      color: '#007bff',
      fontSize: 18,
      marginVertical: 20,
      textAlign: 'center',
    },
    retryButton: {
      alignItems: 'center',
      backgroundColor: '#28a745',
      borderRadius: 5,
      justifyContent: 'center',
      marginTop: 10,
      padding: 10,
    },
    retryText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    temperature: {
      color: '#f39c12',
      fontSize: 60,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    title: {
      color: '#333',
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    value: {
      color: '#333',
      fontSize: 16,
      fontWeight: '600',
    },
    weatherCondition: {
      color: '#555',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    weatherIcon: {
      alignSelf: 'center',
      marginVertical: 15,
    },
  });

  return { styles };
};
