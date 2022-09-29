import { ImageBackground
  , StyleSheet,  View, Text, TextInput, Button } from 'react-native'
import React from 'react'


export default function SignInScreen() {

  

  return (

 

    <View  style={styles.container}>
    
    <TextInput
        placeholder='Mail'
        style={styles.mail}
        
    />
    <TextInput
        placeholder='Password'
        style={styles.pass}
        secureTextEntry={true}
    />
  
    <Button
        title='Sign Up'
        style={styles.button}
    />
</View >


  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        gap:60,
    
     
    
    },
    mail :{
      borderWidth: 5,
      padding: 10,
     borderColor: "black",

    },
    pass:{
      borderWidth: 5,
      padding: 10,
      borderColor: "black",
    },
    button:{

    }
  
  
}) 