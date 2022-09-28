import { View, Text, StyleSheet, FlatList, Image, Dimensions, Animated, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import React from 'react'
export default function Carousel({ cities }) {
  let img = cities?.map(item => ([item.photo, item.city]))
  return (
    <View>
      <View style={styles.cities}>
        <Text style={styles.h2}>Popular Cities</Text>
      </View>
      <View style={styles.container} >
        <FlatList
          data={img}
          snapToInterval={300}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 100, paddingHorizontal: 50 }}
          // keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <View style={styles.carousel}>
                <Image
                  style={styles.image}
                  source={{ uri: item[0] }}
                />
                <Text >{item[1]}</Text>
              </View>)
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  h2: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white'
  },
  carousel: {
    width: '100%',
    height: 300,
    flex: 1,
  },
  cities: {
    backgroundColor: '#8C4F2B'
  }
})