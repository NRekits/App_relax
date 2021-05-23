import React from "react";
import {
  Container,
  Header,
  Body,
  Icon,
  Button,
  Title,
  Content,
  Text,
  H2,
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class PerfilScreen extends React.Component {
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
    this.props.navigation.navigate('CambiarContraseña');

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
              <Icon
                name="arrow-back"
                style={{ color: "white" }}
                onPress={this.goBack}
              />{" "}
              Perfil
            </Title>
          </Body>
        </Header>
        <Content style={styles.Content}>
         
          <H2 style={styles.H2}>
            Nombre: {' '}
            {this.state.nombre}
          </H2>
          <Text style={styles.Text}>
            Correo:{' '}
            {this.state.correo}
          </Text>
          <Button rounded style={styles.Button} onPress={this.cambiarcontra}>
            <Text>Cambiar Contraseña</Text>
          </Button>
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
    H2:{
      textAlign:'center',
      color: "#BB8FCE",
      fontFamily: "Dosis",
      fontWeight:'400',
      fontSize:25,
      marginTop:5
    },
    Button: {
        alignSelf: "center",
        marginTop:20,
        backgroundColor:'#BB8FCE',
        fontFamily:'Dosis',
        fontWeight: "400",
      },
    Text:{
        textAlign:'center',
        color: "#BB8FCE",
        fontFamily: "Dosis",
        fontWeight:'400',
        fontSize:25,
        marginTop:5
      },
  });