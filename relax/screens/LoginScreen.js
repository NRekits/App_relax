import React from "react";
import { Text, Dimensions, Alert, Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  H1
} from "native-base";
import * as SecureStore from "expo-secure-store";
import { LinearGradient } from 'expo-linear-gradient';
import IP_DB from "./../ip_address";
import * as Font from "expo-font";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
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
              console.log(this.state.error);
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

  render() {
    return (
      <Container style={styles.Container}>
        <Header transparent  androidStatusBarColor="#00B0E8"/>
        <LinearGradient
        // Background Linear Gradient
        colors={['#00B0E8', '#08799C']}
        style={styles.background}
      />
        <Image
          source={require("../assets/logo_renew_transparente_100x100.png")}
          style={styles.Image}
        />
        <H1 style={styles.H1}>Bienvenido</H1>
        <Content>
          <Form>
            <Item floatingLabel style={styles.Item}>
              <Label   style={styles.Input}>Correo</Label>
              <Input
                label="Email"
                value={this.state.email}
             
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
              />
            </Item>

            <Item floatingLabel style={styles.Item}>
              <Label style={styles.Input}>Contraseña</Label>

              <Input
                label="password"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => {
                  this.setState({ password: text });

                }}
                style={{alignSelf:'stretch'}}
              />
            </Item>

            <Button block bordered rounded info style={styles.Button}
              onPress={() => {
                this.Verify();
              }}>
              <Text style={styles.Text2}>Login</Text>
            </Button>
          </Form>
          <Text style={styles.Text2}>
            ¿No tienes cuenta?
            <Text
              style={styles.Text3}
              onPress={() => {
                this.props.navigation.navigate("Registro");
              }}
            >
              {" "}
              Registrate
            </Text>
          </Text>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection:'column',
    alignItems: "stretch",
    justifyContent: "center",
    padding: 20,
    fontFamily: "Dosis",
    color: "white",
  },
  Text: {
    fontSize: 40,
  },
  Text2: {
    marginTop: 5,
    fontWeight:'400',
    fontSize:20,
    color: "white",
    marginLeft: 5,
    fontFamily: "Dosis",
  },
  Text3: {
    marginTop: 10,
    fontSize: 15,
    color: "rgb(183,215,222)",
    marginLeft: 5,
    fontFamily: "Dosis",
  },
  Image: {
    alignSelf: "center",
    marginBottom:10
  },
  Input: {
    alignSelf:"flex-start",
    color: "white",
    fontFamily: "Dosis",
    fontWeight:'400',
    fontSize:20,
    marginRight:5,
    marginBottom:10
  },
  Button: {
    alignSelf:'center',
    marginTop: 20,
  },
  Item:{
    marginTop:30,
  },
  H1:{
    alignSelf: "center",
    color: "white",
    fontFamily: "Dosis",
    fontWeight:'400',
    fontSize:30,
    marginTop:20
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight,
  }
});
export default LoginScreen;
