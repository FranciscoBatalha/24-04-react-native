import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>STEAM ACCOUNT NAME</Text>
        <TextInput style={[styles.input, { color: 'white', placeholderTextColor: 'white' }]} placeholder="" />
        <Text style={styles.inputLabel}>PASSWORD</Text>
        <TextInput style={[styles.input, { color: 'white', placeholderTextColor: 'white' }]} placeholder="" secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, { color: 'white' }]}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>Forgot your account name or password?</Text>
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
    fontSize: 16,
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
  forgotButton: {
    backgroundColor: 'transparent',
  },
  forgotText: {
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'none',
  },
});

export default App;
