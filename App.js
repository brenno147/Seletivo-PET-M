import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homepage from './src/pages/Homepage';
import MalwareMenu from './src/pages/MalwareMenu';
import PrevencaoMenu from './src/pages/PrevencaoMenu';
import CasosMenu from './src/pages/CasosMenu';
import Sobre from './src/pages/Sobre';
import Virus from './src/pages/Virus';
import Worm from './src/pages/Worm';
import Bots from './src/pages/Bots';
import Spyware from './src/pages/Spyware';
import Trojan from './src/pages/Trojan';
import Senha from './src/pages/Senha';
import Antivirus from './src/pages/Antivirus';
import BoasPraticas from './src/pages/BoasPraticas';
import Stuxnet from './src/pages/Stuxnet';
import Anonymous from './src/pages/Anonymous';
import Astra from './src/pages/Astra';
import AdrianLamo from './src/pages/AdrianLamo';
//Inicio do aplicativo

//Criação de uma navegação da forma "Stack"
const navigator = createStackNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({
      //title: "test"
    })
  },
  Sobre: {
    screen: Sobre,
    navigationOptions: ({navigation}) => ({
      title: "Sobre"
    })
  },
  MalwareMenu: {
    screen: MalwareMenu,
    navigationOptions: ({navigation}) => ({
      title: "Tipos de Malware"
    })
  },
  PrevencaoMenu: {
    screen: PrevencaoMenu,
    navigationOptions: ({navigation}) => ({
      title: "Prevenção"
    })
  },
  CasosMenu: {
    screen: CasosMenu,
    navigationOptions: ({navigation}) => ({
      title: "Casos Famosos"
    })
  },
  Virus: {
    screen: Virus,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  Worm: {
    screen: Worm,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  Bots: {
    screen: Bots,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  Spyware: {
    screen: Spyware,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  Trojan: {
    screen: Trojan,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  Senha: {
    screen: Senha,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  Antivirus: {
    screen: Antivirus,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  BoasPraticas: {
    screen: BoasPraticas,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  Stuxnet: {
    screen: Stuxnet,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  Anonymous: {
    screen: Anonymous,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  Astra: {
    screen: Astra,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
  AdrianLamo: {
    screen: AdrianLamo,
    navigationOptions: ({navigation}) => ({
      title: ""
    })
  },
},
{
  initialRouteName: 'Homepage',
  defaultNavigationOptions: {
    title: 'Homepage',
    headerStyle:{
      backgroundColor: "#ffffff"
    }
  }
});

//Export do container para esse navigator
export default createAppContainer(navigator)