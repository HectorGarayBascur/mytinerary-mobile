import React from 'react';
import { StyleSheet, View, TextInput, Button, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/authSlice";
import { useGetNewUserMutation } from "../features/usersAPI";
import { useState } from "react";

export default function SignUp() {

    const [formData, setformData] = useState(defaultformData)
    const [newUser] = useGetNewUserMutation();

    const onChange = (e, type) => {
        setformData({ ...formData, [type]: e.nativeEvent.text })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await newUser(formData).unwrap();
            const user = response.response.user;
            console.log(user)
            // dispatch(setCredentials({ user }));
            // setObjectValue = async (user) => {
            //     try {
            //       const jsonValue = JSON.stringify(user)
            //       await AsyncStorage.setItem('user', jsonValue)
            //     } catch(e) {
            //       // save error
            //     }

            //     console.log('Done.')
            //   }
        } catch (error) {
            console.error(error);
        }
    };

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
                    onChange={(e) => onChange(e, "password")}
                />
                {/* <TextInput
                    placeholder='from'
                    onChange={(e) => onChange(e, "from")}
                />
                <TextInput
                    placeholder='role'
                    onChange={(e) => onChange(e, "role")}
                /> */}
                <Button
                    style={styles.btn}
                    title='Sign Up'
                    onPress={handleSubmit}
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
    // btn: {
    //     backgroundColo,
    // }
})