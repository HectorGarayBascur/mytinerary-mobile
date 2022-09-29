import { View, Text, FlatList, StyleSheet, Image, TextInput, Touchable } from 'react-native'
import { useGetAllCitiesQuery } from '../features/citiesAPI';
import CitiesCards from '../components/CitiesCards';
import React from 'react'




export default function CityScreen() {

  const { data: items } = useGetAllCitiesQuery()


  console.log("holaaa")
  console.log(items)
  return (
    <View>

      <TextInput placeholder={"Enter your city..."} style={styles.input} />
      <CitiesCards cities={items} />


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