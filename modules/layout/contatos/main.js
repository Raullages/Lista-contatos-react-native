import React from 'react'
import { View, ActivityIndicator, ToastAndroid } from 'react-native'
import axios from 'axios'
import ListaPessoas from '../../components/listaPessoas/main';

export default class Main extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            pessoas: [],
            loading: false,
            exibeError: false
        }
    }

    componentDidMount () {
        
        this.setState({ loading: true })

        axios.get('https://randomuser.me/api/?nat=br&results=10').then((lista) => {

            const { results } = lista.data;
            
            this.setState({
                pessoas: results,
                loading: false
            })
    
        }).catch((err) => {
            
            this.setState({
                pessoas: [],
                loading: false

            })
        })
        
    }

    carregaLista () {
        
        if(this.state.pessoas.length > 0) {
            return <ListaPessoas
                onPress={ params => {
                    this.props.navigation.navigate('Info', params)
                }}
                lista={this.state.pessoas}>
            </ListaPessoas>
        }

        return (
            ToastAndroid.showWithGravity(
                "Erro ao conectar com a base de dados",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
        )
            
    }

    render () {  

        const styles = {
            flex: 1,
            backgroundColor: '#CCC',

            container: {
                flex: 1,
                backgroundColor: '#CCC',
                padding: 5
            }
        }

        return (
            <View style={ styles } >
                <View style={ styles.container }>
                    { this.state.loading ? <ActivityIndicator size="large" color="#2196f3" /> : this.carregaLista() }
                </View>
            </View>
        )
    }
}
