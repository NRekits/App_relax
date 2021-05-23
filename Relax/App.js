import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Content } from 'native-base';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PerfilScreen from './screens/PerfilScreen';
import RegisterScreen from './screens/RegistroScreen';
import ListaMeditacionesScreen from './screens/CatmedScreen';
import MeditacionScreen from './screens/MeditacionScreen';
import ReporteScreen from './screens/DíaResumen';
import EstadoScreen from './screens/EstadoScreen';
import TriunfoScreen from './screens/TriunfoScreen';
import AddSintomaScreen from './screens/AddSintomaScreen';
import AddTriunfoScreen from './screens/AddTriunfoScreen';
import contraScreen from './screens/cambiarcontraScreen';
import * as Font from 'expo-font';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Root } from 'native-base';
import {LoadingFull} from './Components/Loading';

const Stack = createStackNavigator();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loggin: '',
      setLogged: '',
      isLoading: true
    };
  }

  /*const [isloggedin,setLogged] = useState(null)
  const detectLogin= async ()=>{
     const token = await AsyncStorage.getItem('token')
     if(token){
         setLogged(true)
     }else{
         setLogged(false)
     }
  }
 useEffect(()=>{
    detectLogin()
 },[]);*/

  async componentDidMount() {
    await Font.loadAsync({
      "Roboto": require('native-base/Fonts/Roboto.ttf'),
      "Roboto_medium": require('native-base/Fonts/Roboto_medium.ttf'),
      "Dosis": require('./assets/dosis.ttf'),
      "Mulish": require('./assets/mulish.ttf'),
      ...Ionicons.font,
      ...FontAwesome.font
    }).finally(() => { this.setState({ isLoading: false }) });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <LoadingFull />
      );
    }
    else {
      return (
        <Root>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false
            }}
              initialRouteName='Home'>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Registro" component={RegisterScreen} />
              <Stack.Screen name="meditacion" component={MeditacionScreen} />
              <Stack.Screen name='Reporte' component={ReporteScreen}
              //falta estilo
              />
              <Stack.Screen name='Perfil' component={PerfilScreen} />
              <Stack.Screen name='Estado' component={EstadoScreen} />
              <Stack.Screen name='Triunfo' component={TriunfoScreen} />
              <Stack.Screen name="Lista" component={ListaMeditacionesScreen} />
              <Stack.Screen name='CambiarEstado' component={AddSintomaScreen}
              //Falta estilo
               />
              <Stack.Screen name='CambiarTriunfo' component={AddTriunfoScreen} 
              //
              />
              <Stack.Screen name='CambiarContraseña' component={contraScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Root>
      );
    }
  }
}

export default App;
