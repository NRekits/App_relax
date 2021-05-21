import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			Loggin: '',
			setLogged: ''
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
      Roboto:require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

render (){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
     headerShown: false
     }} 
  initialRouteName="Login">
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );

  }
}

export default App;
