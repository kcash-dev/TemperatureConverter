import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../utils/Colors';

export const ButtonComp = ({ name }) => (
  <Button mode="contained" style={ styles.button }>
    <Text style={ styles.buttonText }>{ name }</Text>
  </Button>
);

const styles = StyleSheet.create({
    button: {
        width: '40%',
        alignSelf: 'center',
        backgroundColor: colors.neonGreen,
        color: colors.black
    },
    buttonText: {
      color: colors.black,
      fontWeight: 'bold'
    }
})