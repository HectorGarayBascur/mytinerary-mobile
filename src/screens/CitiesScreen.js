import { View, Text, FlatList, StyleSheet , Image } from 'react-native'
import { useGetAllCitiesQuery } from '../features/citiesAPI';
import CitiesCards from '../components/CitiesCards';
import React from 'react'

export default function CityScreen() {

  const {data: items} = useGetAllCitiesQuery()
  
  console.log("holaaa")
  console.log(items)
  return (
    <View>
      
    < FlatList
        data={items}
        renderItem={({item})=>(
          <CitiesCards>
            <Text> {item?.city} </Text>
              <Image
                source={{uri:item?.photo}}
                style={styles.images}
            />  
             <Text> {item.description} </Text>

          </CitiesCards>
        )}
    />

    </View>
  )
}


const styles = StyleSheet.create({

  images: {
    width: 300,
  },
 
})