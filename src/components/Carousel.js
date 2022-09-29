import { View, Text, StyleSheet, FlatList, Image, Dimensions, Animated, ScrollView, Button } from 'react-native'
import { SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Carousel({ cities }) {
  let img = cities?.map(item => ([item.photo, item.city, item._id]))
  const navigation = useNavigation();
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
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <View style={styles.carousel}>
                <Image
                  style={styles.image}
                  source={{ uri: item[0] }}
                />
                <View style={styles.cityName} >
                  <Button
                    onPress={() => navigation.navigate("City", item[2])}
                    title={item[1]}
                    color="#fff"
                  />
                </View>
              </View>)
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 30,
  },
  h2: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    padding: 5,
    fontWeight: 'bold'
  },
  carousel: {
    width: 230,
    justifyContent: 'center'
  },
  cities: {
    backgroundColor: '#8C4F2B'
  },
  cityName: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 5,
    backgroundColor: '#73B1BF',
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 20
  }
})