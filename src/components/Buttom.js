import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native'

export default function Buttom(props) {

    const { onPress, text } = props

    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    )
}