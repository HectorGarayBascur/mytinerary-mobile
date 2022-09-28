import { View, Text, StyleSheet, FlatList, Image, Dimensions, SafeAreaView, Animated, ScrollView } from 'react-native'
import React from 'react'



export default function Carousel({cities}) {

  return (

    <View>
        <View>
            <Text>Popular Cities</Text>
        </View>
      
          
        

            <View>
                 <Text>Aca va el carousel</Text>
                <FlatList


                data={cities}
                numColumns={1}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(city) => city.photo}
                renderItem={({item})=>{
                    return (
                        <View>
                          <Image 
                              source={{uri:item?.photo}}
                              style={styles.image}
                          />
                         <Text >{item?.city}</Text> 
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
        width:100,
        gap:2,
        resizeMode: 'contain',
      }
    })