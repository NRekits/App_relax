import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import * as SecureStore from "expo-secure-store";
import IP_DB from "./../ip_address";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
    };
  }

  // Petición para iniciar sesión
  Verify = () => {
    fetch(`http://${IP_DB}:3000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email, // mandamos el email
        password: this.state.password, // y la contraseña
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        try {
          SecureStore.setItemAsync("token", data.token) // Si la petición fue exitosa, nos vamos a la página de Home
            .then(() => {
              this.setState({ error: false });
            })
            .catch((error) => {
              console.log(error);
              this.setState({ error: true });
            })
            .finally(() => {
              if (!this.state.error) {
                this.props.navigation.navigate("home"); // Cuando finalice, nos vamos a la página de Home, en caso de que la petición fue exitosa
              }
            });
        } catch (e) {
          console.log("error hai", e);
          Alert(e);
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      });
  };
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
  render() {
    return (
     
        <Container>
		<Header/>
          <Text>
            Ingresar con correo
          </Text>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Correo</Label>
                <Input
                  label="Email"
                  mode="outlined"
                  value={this.state.email}
                  style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
                  theme={{ colors: { primary: "blue" } }}
                  onChangeText={(text) => {
                    this.setState({ email: text });
                  }}
                />
              </Item>

              <Item floatingLabel last>
                <Label>Contraseña</Label>

                <Input
                  label="password"
                  mode="outlined"
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(text) => {
                    this.setState({ password: text });
                  }}
                  style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
                  theme={{ colors: { primary: "blue" } }}
                />
              </Item>
              <Button
                mode="contained"
                title="Login"
                style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
                onPress={() => this.Verify()}
              >
                Login
              </Button>
            </Form>
          </Content>
        </Container>
       

    );
  }
}
const styles = StyleSheet.create({
	Container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	 
	},
	Text:{
		fontSize:40
	}
  });
export default LoginScreen;
