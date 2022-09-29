import {
  ImageBackground
  , StyleSheet, View, Text, TextInput, Button
} from 'react-native'
import React from 'react'


export default function SignInScreen() {

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerForm}>
        <TextInput
          placeholder='Mail'
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          style={styles.input}
          secureTextEntry={true}
        />
        <Button
          title='Sign In'
        />
      </View >
    </View>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerForm: {
    backgroundColor: '#f2f2f2',
    height: 200,
    width: 320,
    justifyContent: 'space-between',
    padding: '2%',
    borderColor: '#73b1bf',
    borderStyle: 'solid',
    borderWidth: 6,
    borderRadius: 20,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 2,
    padding: 6
  },
})