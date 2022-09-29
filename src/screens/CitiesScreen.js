import { View, Text, FlatList, StyleSheet , Image, TextInput, Touchable } from 'react-native'
import { useGetAllCitiesQuery } from '../features/citiesAPI';
import CitiesCards from '../components/CitiesCards';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function CityScreen() {

  const {data: items} = useGetAllCitiesQuery()
  const navigation = useNavigation(); 

  console.log("holaaa")
  console.log(items)
  return (
    <View>

      <TextInput  placeholder={"Enter your city..."} style={styles.input} />
      
    < FlatList
        data={items}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.photo}
        renderItem={({item})=> {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("City", item?._id)}>
          <CitiesCards key={item?._id}>
            <Text style={styles.title}> {item?.city} </Text>
              <Image
                source={{uri:item?.photo}}
                style={styles.images}
            />  
             <Text> {item.description} </Text>

          </CitiesCards>
          </TouchableOpacity>)
        } }
    />

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