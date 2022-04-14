import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SingIn from './src/pages/SingIn';
import styles from './src/pages/SingIn/styles';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SingIn />
    </View>
  );
}

