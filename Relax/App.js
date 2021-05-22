import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Container, Text} from 'native-base';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegistroScreen';
import ListaMeditacionesScreen from './screens/CatmedScreen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

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
    }).finally(() => { this.setState({ isLoading: false }) });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Container><Text>Is Loading</Text></Container>
      );
    }
    else {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}
            initialRouteName="lista">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="lista" component={ListaMeditacionesScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

export default App;
