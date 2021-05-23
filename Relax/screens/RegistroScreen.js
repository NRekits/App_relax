import React from "react";

import { Text, StyleSheet, Dimensions } from "react-native";

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Title,
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import * as SecureStore from "expo-secure-store";
import IP_DB from "./../ip_address";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    return (
      <Container style={styles.Container}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#00B0E8", "#BB8FCE"]}
          style={styles.background}
        />
        <Header transparent androidStatusBarColor="#00B0E8">
          <Left />
          <Body>
            <Title style={styles.Header}>Registro</Title>
          </Body>
          <Right />
        </Header>

        <Content style={styles.Content}>
          <Form>
            <Item floatingLabel style={styles.Item}>
              <Label style={styles.Label}>Nombre</Label>
              <Input  
              style={styles.Input}/>
            </Item>
            <Item floatingLabel style={styles.Item}>
              <Label style={styles.Label}>Correo electrónico</Label>
              <Input style={styles.Input}/>
            </Item>
            <Item floatingLabel style={styles.Item}>
              <Label style={styles.Label}>Contraseña</Label>
              <Input style={styles.Input} />
            </Item>
            <Item floatingLabel style={styles.Item}>
              <Label style={styles.Label}>Confirmar contraseña</Label>
              <Input style={styles.Input} />
            </Item>
            <Button block
              bordered
              rounded
              success
              style={styles.Button}
              onPress={() => {
                this.props.navigation.navigate("Home")
              }}
              
            >
              
              <Text style={styles.Text2}>Continuar</Text>

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
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 20,
    fontFamily: "Dosis",
    color: "white",
  },
  Text2: {
    marginTop: 5,
    fontWeight: "400",
    fontSize: 20,
    color: "white",
    marginLeft: 5,
    fontFamily: "Dosis",
  },
  Text3: {
    marginTop: 10,
    fontSize: 15,
    color: "#C4EFFF",
    marginLeft: 5,
    fontFamily: "Dosis",
  },
  Image: {
    alignSelf: "center",
    marginBottom: 10,
  },
  Input: {
    alignSelf: "flex-start",
    color: "white",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 20,
    marginRight: 5,
  },
  Label: {
    color: "white",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 20,
    padding:10,
    marginBottom: 10,
  },
  Button: {
    alignSelf: "center",
    marginTop: 20,
    borderColor:'#9BFFA3'
  },
  Item: {
    marginTop: 30,
    padding:5,
  },
  H1: {
    alignSelf: "center",
    color: "white",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 30,
    marginTop: 20,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight,
  },
  Header: {
    color: "#C4EFFF",
    fontFamily: "Dosis",
    fontSize: 40,
    fontWeight: "600",
  },
});
export default RegisterScreen;