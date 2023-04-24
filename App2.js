import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suporte Steam</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Esqueci o nome de usuario e/ou senha da minha conta</Text>
        <Text style={styles.inputLabel}>Insira seu e-mail da conta Steam ou seu numero de telefone</Text>
        <TextInput style={[styles.input, { color: 'white', placeholderTextColor: 'white' }]} placeholder="" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, { color: 'white' }]}>Busca</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#131819',
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
