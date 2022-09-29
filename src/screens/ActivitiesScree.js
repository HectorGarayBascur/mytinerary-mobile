import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {useGetActivitiesQuery, useGetAllActivitiesQuery} from "../features/activitiesAPI"

export default function ActivitiesScree({route}) {

const {data:activities} = useGetActivitiesQuery (route.params)
const activitiesById = activities?.response
const arrayId = activitiesById?.map(item=>([item.photo, item.name]))

 const {data: allAct} = useGetAllActivitiesQuery()
const activitiesResponse = allAct?.response 
const arrayAll = activitiesResponse?.map(item=> ([item.photo, item.name]))
console.log(arrayId)
console.log(arrayAll)


  return (
    <View>
 <FlatList
            data={(arrayId?.length>0)?arrayId:arrayAll}
            renderItem={({item})=>(
                <View>
                       <View>
                        <Image
                            source={{ uri: item[0]}}
                            style={styles.image}
                        />
                        <Text style={styles.title}> {item[1]} </Text>
                    </View>
                   

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

})