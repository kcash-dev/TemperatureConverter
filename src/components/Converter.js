import React, { useState, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TextInput,
  Pressable 
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { ButtonComp } from '../components/Button'


export const Converter = () => {
  const [ degrees, setDegrees ] = useState(0);
  const [ unit, setUnit ] = useState('');
  const [ result, setResult ] = useState(0);
  const [ fahrenheit, setFahrenheit ] = useState(0);
  const [ celsius, setCelsius ] = useState(0);
  const [ kelvin, setKelvin ] = useState(0);


  const getResult = () => {
    if (unit === 'Celsius') {
      setCelsius(degrees)
      let fahrNum = degrees * 1.8 + 32
      let finalFahr = fahrNum.toFixed(1);
      let kelNum = degrees + 273.15
      let finalKel = kelNum.toFixed(2)
      setKelvin(finalKel)
      setFahrenheit(finalFahr);
    } else if (unit === 'Fahrenheit') {
      setFahrenheit(degrees)
      let celNum = 5/9 * (degrees - 32)
      let finalCel = celNum.toFixed(1)
      setCelsius(finalCel);
      let kelNum = finalCel + 273.15
      let finalKel = kelNum.toFixed(2)
      setKelvin(finalKel)
    }
  }
  
  return (
    <View>
      <View style={ styles.container }>
        <View style={ styles.innerContainer }>
          <Text>Degrees</Text>
          <TextInput
            value={ degrees }
            onChangeText={ setDegrees }
            borderBottomColor='grey'
            borderBottomWidth={ 1 }
            keyboardType='numeric'
            style={ styles.textInput }
          />
        </View>
        <View style={ styles.innerContainer }>
          <Text>Unit</Text>
          <RNPickerSelect
              onValueChange={(value) => setUnit(value)}
              style={ pickerSelectStyles }
              items={[
                  { label: 'Celsius', value: 'Celsius' },
                  { label: 'Fahrenheit', value: 'Fahrenheit' },
              ]}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={ styles.resultContainer } >
          { result ? <Text>This is:</Text> : null }
          <Text style={ styles.resultText }>{ fahrenheit }°F</Text>
        </View>
        <View style={ styles.resultContainer } >
          { result ? <Text>This is:</Text> : null }
          <Text style={ styles.resultText }>{ celsius }°C</Text>
        </View>
        <View style={ styles.resultContainer } >
          { result ? <Text>This is:</Text> : null }
          <Text style={ styles.resultText }>{ kelvin }K</Text>
        </View>
      </View>
      <Pressable
        onPress={ getResult }
        style={ styles.button }>
        <ButtonComp name="Convert" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10
  },
  innerContainer: {
    width: '50%',
    marginLeft: 10
  },
  textInput: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 5
  },
  resultContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '33%',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  kelvinContainer: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 20
  },
  kelvinText: {
    textAlign: 'center'
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 7.5,
    paddingLeft: 5,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginRight: 30
  },
  inputAndroid: {
    fontSize: 18,
    paddingBottom: 10,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});