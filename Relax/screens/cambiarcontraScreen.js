import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  Container,
  Header,
  Body,
  Icon,
  Button,
  Title,
  Content,
  Form,
  Item,
  Input,
  Label,
  Left,
  Right,
  Toast,
  Text,
} from "native-base";

import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class contraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Lorem Ipsum",
      correo: "lorem@ipsum.com",
    };
  }
  goBack = () => {
    this.props.navigation.goBack();
   }
  cambiarcontra =()=>{
   //Proceso

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
          <Body>
            <Title style={styles.Header}>
              {" "}
              <Button iconRight transparent >
              <Icon
                name="arrow-back"
                style={{ color: "white" }}
                onPress={this.goBack}
              /></Button>{" "}
              Contraseña
            </Title>
          </Body>
        </Header>
        <Content style={styles.Content}>
          <Form>
            <Item floatingLabel style={styles.Item}>
              <Label style={styles.Label}>Contraseña</Label>
              <Input
                value={this.state.password}
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
                style={styles.Input}
              />
            </Item>
            <Item floatingLabel style={styles.Item}>
              <Label style={styles.Label}>Confirmar contraseña</Label>
              <Input
                value={this.state.confirmPassword}
                onChangeText={(text) => {
                  this.setState({ confirmPassword: text });
                }}
                style={styles.Input}
              />
            </Item>
            <Button
              block
              bordered
              rounded
              style={styles.Button}
              onPress={this.Register}
            >
              <Text style={styles.Text2}>Confirmar</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Content: {
    marginTop: 40,
  },
  Container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    fontFamily: "Dosis",
    color: "white",
    padding:10,
  },
  Item: {
    marginTop: 30,
    padding: 5,
  },
  Input: {
    alignSelf: "flex-start",
    color: "#BB8FCE",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 20,
    marginRight: 5,
  },
  Label: {
    color: "#BB8FCE",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 100,
  },
  Header: {
    color: "#C4EFFF",
    fontFamily: "Dosis",
    fontSize: 40,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  H2: {
    textAlign: "center",
    color: "#BB8FCE",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 25,
    marginTop: 5,
  },
  Button: {
    alignSelf: "center",
    backgroundColor: "#BB8FCE",
    marginTop: 20,
  },
  Text: {
    textAlign: "center",
    color: "#BB8FCE",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 25,
    marginTop: 5,
  },
  Text2: {
    textAlign: "center",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 25,
    color: "#C4EFFF",
  },
});
