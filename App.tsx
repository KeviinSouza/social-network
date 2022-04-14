import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  function onChange(text:string) {
    console.log(text);
  }

  function singIn() {
    
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Faça Login para continuar !</Text>
    
      <TextInput style={styles.input} onChangeText={setEmail} keyboardType='email-address' />
      <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry/>

      <Button title='Login' onPress={() => alert('Testado')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: Dimensions.get('screen').width - 40,
    padding: 0.9,
    borderWidth: 1.8,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#7D7D78',
    borderColor: '#1F1F1E',
  },
  button: {
    width: Dimensions.get('screen').width,
    borderColor: '#563440',
    color: '#836E87'
  }
});
