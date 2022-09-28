import { View, Text } from 'react-native'
import React from 'react'

export default function CitiesCards(props) {
  return (
    <View >
    <View >
      { props.children }
    </View>
  </View>
  )
}