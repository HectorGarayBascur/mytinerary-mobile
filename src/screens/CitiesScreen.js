import { View,   StyleSheet, Image, TextInput, Text } from 'react-native'
import { useGetAllCitiesQuery } from '../features/citiesAPI';
import CitiesCards from '../components/CitiesCards';
import React from 'react'
import { useState } from 'react'

import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CityScreen() {
  const [input, setInput] = useState()
  const { data: items } = useGetAllCitiesQuery()

  function upperCaseOne(value){
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  const filteredData = items?.filter(item => item?.city?.includes(input))

console.log("holaaa")
console.log(filteredData)

  return (
    <View>
      <TextInput placeholder={"Enter your city..."} style={styles.input} onChangeText={(value)=> setInput(upperCaseOne(value))} />
      <CitiesCards cities={(filteredData.length>0)? filteredData: items} />
  
    </View>
  )
}


const styles = StyleSheet.create({

  images: {
    width: 300,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

})