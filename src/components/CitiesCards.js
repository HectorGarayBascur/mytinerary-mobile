import { View, StyleSheet, FlatList, Text, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CitiesCards({ cities }) {
  const navigation = useNavigation();
  let img = cities?.map(item => ([item.photo, item.city, item.description, item._id, item.country]))
  console.log(cities);
  return (
    <View style={styles.card} >
      < FlatList
        data={img}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity onPress={() => navigation.navigate("City", item[3])}>
                <View style={styles.cardContent} >
                  <Text style={styles.title}> {item[1]} </Text>
                  <Image
                    source={{ uri: item[0] }}
                    style={styles.image}
                  />
                  <Text style={styles.country}> {item[4]} </Text>
                  <View style={styles.info}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("City", item[3])} >
                      <Text style={styles.txt}>Go to {item[1]} Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Itineraries", item[3])} >
                      <Text style={styles.txt}>Go to {item[1]} Itineraries</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>


            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black'
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
    width: 300,
    borderRadius: 20,
  },
  image: {
    height: 220,
    width: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 30,
  },
  button: {
    color: "white",
    backgroundColor: '#73B1BF',
    borderRadius: 20,
    padding: 5,
    margin: 3
  },
  container: {
    alignItems: 'center'
  },
  txt: {
    color: 'white'
  },
  country: {
    fontSize: 20,
    margin: 4,
    color: '#8C4F2B',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 20,
    margin: 4,
    color: '#73B1BF',
    fontWeight: 'bold'
  },
  info: {
    margin: 3,
    alignItems: 'center'
  }
});