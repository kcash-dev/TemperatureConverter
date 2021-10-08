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
        color: colors.black,
        shadowColor: colors.neonGreen,
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    buttonText: {
      color: colors.black,
      fontWeight: 'bold'
    }
})