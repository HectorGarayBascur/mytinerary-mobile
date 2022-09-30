import React from 'react';
import { StyleSheet, View, TextInput, Button, } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {

    const [formData, setformData] = useState(defaultformData)
    const navigation = useNavigation(); 

    const onChange = (e, type) => {
        setformData({ ...formData, [type]: e.nativeEvent.text })
    }

    return (
        <View style={styles.containerMain}>
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    onChange={(e) => onChange(e, "name")}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Last Name'
                    onChange={(e) => onChange(e, "lastName")}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Mail'
                    onChange={(e) => onChange(e, "mail")}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Country'
                    onChange={(e) => onChange(e, "country")}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Photo URL'
                    onChange={(e) => onChange(e, "photo")}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChange={(e) => onChange(e, "password")}
                />
                <Button
                    style={styles.btn}
                    title='Sign Up'
                    onPress={() => navigation.navigate('Sign In')}
                />
            </View >
        </View>
    )
}

const defaultformData = () => {
    return { mail: "", password: "", name: "", lastName: "", photo: "", country: "", role: "", from: "" }
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
        height: 450,
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