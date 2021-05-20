import React,{useState} from 'react';
import { Button ,TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';
import SecureStore from 'expo-secure-store';

class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}
  
  
   Verify = async ()=>{
    await fetch("http://192.168.56.1:3000/user/login",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":this.state.email,
       "password":this.state.password
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             await SecureStorage.setItemAsync('token',data.token);
             navigation.navigate("home")
             
           } catch (e) {
             console.log("error hai",e);
              Alert(e)
           }
    })
 }
/*
	fetchJsonGetMethod() {
		return fetch('https://reactnative.dev/movies.json', {method: 'POST',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue'
    })
  }).then((res) => res.json())
		.then((data) => {this.setState({email: data.movies[0].title, password: data.movies[1].title})})
		.catch((error) => console.error(error))
		.finally(() => console.log(this.state.email, this.state.password));
	}
*/
	render(){
		return (
			<View>
			<StatusBar barStyle="light-content" />
			<View
			style={{
				borderBottomColor:"blue",
				borderBottomWidth:4,
				borderRadius:10,
				marginLeft:20,
				marginRight:150,
				marginTop:4
			}}
			/>
				<Text
					style={{
						fontSize:20,marginLeft:18,marginTop:20
				}}>
					Login with email
				</Text>

				<TextInput
					label='Email'
					mode="outlined"
					value={this.state.email}
					style={{marginLeft:18,marginRight:18,marginTop:18}}
					theme={{colors:{primary:"blue"}}}
					onChangeText={(text)=>{this.setState({email: text})}}
				/>
				<TextInput
					label='password'
					mode="outlined"
					secureTextEntry={true}
					value={this.state.password}
					onChangeText={(text)=>{this.setState({password: text})}}
					style={{marginLeft:18,marginRight:18,marginTop:18}}
					theme={{colors:{primary:"blue"}}}
				/>
				<Button 
					mode="contained"
					title= "Login"
					style={{marginLeft:18,marginRight:18,marginTop:18}}
					onPress={() => this.Verify()}>
						Login
				</Button>
				<TouchableOpacity 
				
				>
					<Text
						style={{
							fontSize:18,marginLeft:18,marginTop:20
						}}>
						dont have a account ?
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
export default LoginScreen;
