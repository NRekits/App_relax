import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/LoginScreen';
import SecureStore from 'expo-secure-store';

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
render (){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
       <Stack.Screen name="login" component={LoginScreen} />
       <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );

  }
}

export default App;
