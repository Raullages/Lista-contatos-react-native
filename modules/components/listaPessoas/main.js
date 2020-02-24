import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Pessoas = props => {

    const { lista, onPress } = props

    const textElements = lista.map( o => {

        return (
            <TouchableOpacity onPress={ () => { onPress({contato: o}) }}>
                <View style={ style.lista } >
                    <Image style={ style.avatar } source={{ uri: o.picture.thumbnail }}></Image>
                    <Text style={ style.item } >
                        {o.name.first + ' ' + o.name.last}
                    </Text>
                </View>
            </TouchableOpacity>
        ) 
    })

    return (
        <View>
            { textElements }
        </View>
    )


}

const style = StyleSheet.create({
    lista: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#FFF',
        marginBottom: 5,
        borderRadius: 5
    },
    item: {
        marginLeft: 20,
        fontSize: 18,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1
    }
})

export default Pessoas