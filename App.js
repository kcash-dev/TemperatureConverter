import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Converter } from './src/components/Converter';


export default function App() {
  const [ result, setResult ] = useState('')

  return (
    <View style={ styles.outerContainer }>
      <Text style={ styles.title }>Temperature Converter</Text>
      <View style={styles.container}>
        <Converter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30
  },
  outerContainer: {
    flex: 1
  }
});
