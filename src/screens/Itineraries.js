import {StyleSheet, View, Text, FlatList } from 'react-native'
import React from 'react'
import {useGetItinerariesQuery, useGetAllItinerariesQuery} from "../features/itinerariesAPI"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Itineraries({route}) {
    const navigation = useNavigation();
    const {data: itineraries} = useGetItinerariesQuery(route.params)
 
    const itById = itineraries?.response
    const arrayId = itById?.map(item=> ([item.price, item.name, item.tags, item._id]))

const {data:allIt} =useGetAllItinerariesQuery()
const itinerariesResponse = allIt?.response
const arrayAll = itinerariesResponse?.map(item=>([item.price, item.name, item.tags, item._id]))


  return (
    <View>
    <FlatList
         data={(arrayId?.length>0)?arrayId:arrayAll}
         renderItem={({item})=>(
             <View style={styles.card}>
                  <View style={styles.cardContent}>
                 <View>
                  
                  <Text style={styles.title}> {item[1]} </Text>
              </View>
              <View>
                  
                  <Text style={styles.title}> {item[2]} </Text>
              </View>
              <View>
                  
                  <Text style={styles.title}> ${item[0]} </Text>
              </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Activities", item[3])} ><Text>What can you do here?</Text></TouchableOpacity>

             </View>
         )}
     /> 
   
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
      title: {
        width: 430,
        height: 50,
        paddingTop: 5,
        textAlign: 'center',
     fontWeight: 'bold'
    },


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
      width: 300
    },
    image: {
      height: 220,
      width: 200,
      resizeMode: 'cover',
      alignSelf: 'center',
      borderRadius: 30,
    },
    button: {
      color:"white",
    }
  });