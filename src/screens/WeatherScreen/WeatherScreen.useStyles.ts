import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#008CBA',
      borderRadius: 5,
      marginBottom: 20,
      padding: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    button_disabled: {
      opacity: 0.5,
    },
    container: {
      flex: 1,
      padding: 16,
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
    },
    input: {
      backgroundColor: '#f9f9f9',
      borderColor: '#ccc',
      borderRadius: 4,
      borderWidth: 1,
      fontSize: 16,
      marginBottom: 16,
      padding: 10,
      width: '85%',
    },
    inputWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },

    loadingText: {
      color: '#aaa',
      fontSize: 18,
      textAlign: 'center',
    },
    weatherIcon: {
      height: '100%',
    },
  });

  return { styles };
};
