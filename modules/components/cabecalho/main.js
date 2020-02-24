import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header(props) {
    return (
        <View style={ style.header }>
            <Text style={ style.title }>
                { props.title }
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        marginTop: 23 ,
        padding: 10,
        backgroundColor: '#343434'
    },
    title: {
        fontSize: 18,
        color: '#2196f3'
    }
})