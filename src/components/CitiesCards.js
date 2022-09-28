import { View, StyleSheet } from 'react-native'
import React from 'react'

export default function CitiesCards(props) {
  return (
    <View style={styles.card} >
    <View style={styles.cardContent} >
      { props.children }
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContent: {
    backgroundColor: '#F2F2F2',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 18,
    marginVertical: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300
  }
});