import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'

export default class Informacoes extends React.Component {
    render () {
        const { contato } = this.props.navigation.state.params

        return (
            <View style={ style.conteudo }>
                <View style={ style.info }>
                    <Image style={ style.avatar } source={{ uri: contato.picture.large }} />
                    <View>
                        <Text style={ style.nome }>
                            { `${contato.name.first} ${contato.name.last}` }
                        </Text>
                        <Text style={{ fontSize: 18 }}>
                            { `${contato.location.street.name}, ${contato.location.street.number}`}
                        </Text>
                        <Text style={{ fontSize: 18 }}>{ contato.location.city}</Text>
                        <Text style={{ fontSize: 18 }}>{ contato.location.state}</Text>
                        <Text style={{ fontSize: 18 }}>{ contato.location.country}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    conteudo: {
        flex: 1,
        padding: 5,
        backgroundColor: '#CCC',
        flexDirection: 'column'
    },
    info: {
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        flexDirection: 'column'
    },
    avatar: {
        aspectRatio: 1
    },
    nome: {
        padding: 5,
        fontSize: 25,
        flexGrow: 1,
        textAlign: 'center'
    }
})