import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './modules/layout/contatos/main'
import Info from './modules/layout/contatos/detalhes/main'

const stackNavigator = createStackNavigator({
  'Main' : {
    screen: Main
  },

  'Info' : {
    screen: Info,
    navigationOptions: ({ navigation }) => {
      const nomeCompleto = `${navigation.state.params.contato.name.first} ${navigation.state.params.contato.name.last}`
      return ({
        title: nomeCompleto
      })
    }
  }
}, {
  defaultNavigationOptions: {
    title : 'Lista de Contatos',
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#343434',
    },
    headerTitleStyle: {
      color: '#FFF'
    }
  }
})

const appContainer = createAppContainer(stackNavigator)

export default appContainer;

