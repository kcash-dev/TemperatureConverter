import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export const ButtonComp = ({ name }) => (
  <Button mode="contained" style={ styles.button }>
    { name }
  </Button>
);

const styles = StyleSheet.create({
    button: {
        width: '40%',
        alignSelf: 'center',
    }
})