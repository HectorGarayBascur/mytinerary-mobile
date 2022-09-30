import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { useGetActivitiesQuery, useGetAllActivitiesQuery } from "../features/activitiesAPI"
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export default function ActivitiesScree({ route }) {
  const navigation = useNavigation();

  //Activities by Id
  const { data: activities } = useGetActivitiesQuery(route.params)
  const activitiesById = activities?.response
  const arrayId = activitiesById?.map(item => ([item.photo, item.name]))

  //All activities
  const { data: allAct } = useGetAllActivitiesQuery()
  const activitiesResponse = allAct?.response
  const arrayAll = activitiesResponse?.map(item => ([item.photo, item.name]))

  return (
    <View>
      <TouchableOpacity onPress={() => { navigation.navigate('Cities') }} >
        <View style={styles.button}>
          <Text style={styles.text}>Go Back to Cities</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={(arrayId?.length > 0) ? arrayId : arrayAll}
        renderItem={({ item }) => (
          <View>
            <View style={styles.container}>
              <Image
                source={{ uri: item[0] }}
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: 430,
    height: 50,
    paddingTop: 5,
    //textAlign: 'center',
    fontWeight: 'bold',
    textAlign: "center",
  },
  button: {
    backgroundColor: '#8c4f2b',
    padding: 5,
    borderRadius: 5
  },
  text: {
    color: '#ffffff',
  }

})