import { StyleSheet, View, Text, FlatList } from 'react-native'
import React from 'react'
import { useGetItinerariesQuery, useGetAllItinerariesQuery, useGetAllCommentsQuery } from "../features/itinerariesAPI"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';


export default function Itineraries({ route }) {
  const navigation = useNavigation();
  const { data: itineraries } = useGetItinerariesQuery(route.params)

  const itById = itineraries?.response
  const arrayId = itById?.map(item => ([item.price, item.name, item.tags, item._id]))
  const Id = itById?.map(item => ([item._id]))

  const { data: allIt } = useGetAllItinerariesQuery()
  const itinerariesResponse = allIt?.response
  const arrayAll = itinerariesResponse?.map(item => ([item.price, item.name, item.tags, item._id]))


  return (
    <View>
      <FlatList
        data={(arrayId?.length > 0) ? arrayId : arrayAll}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View>
                <Text style={styles.title}> {item[1]} </Text>
              </View>
              <View>
                <Text style={styles.desc}>Price: ${item[0]} </Text>
              </View>
              <View>
                <Text style={styles.desc}> {item[2]} </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Activities", item[3])} >
              <View style={styles.button}>
                <Text style={styles.text}>What can you do here?</Text>
              </View>
            </TouchableOpacity>

           
          </View>
        )}
      />
 <View>
            <TouchableOpacity  onPress={() => {
                                            navigation.navigate('Cities')
                                        }} >
              <View style={styles.button}>
                <Text style={styles.text}>Go Back to Cities</Text>
              </View>
            </TouchableOpacity>

             </View>
    </View>
  )

}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 0,
    backgroundColor: '#73b1bf',
    borderRadius: 10,
  },
  cardContent: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 2,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 3,
  },
  desc: {
    color: '#ffffff'
  },
  button: {
    backgroundColor: '#8c4f2b',
    padding: 5,
    borderRadius: 5
  },
  text: {
    color: '#ffffff',
  }
});