import React,{useEffect,useState} from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'
import SecureStore from 'expo-secure-store';

const Stack = createStackNavigator();




export default function App({ navigation }){
   const [isloggedin,setLogged] = useState(null)

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
  },[]);

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={LoginScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  
  );


}

export default App;
