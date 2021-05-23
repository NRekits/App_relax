import React, { useState } from "react";
import { Dimensions, Alert, Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Item,
  Toast,
  Footer,
  FooterTab,
} from "native-base";
import Calendario from "./../Components/calendario";
import { LinearGradient } from "expo-linear-gradient";
import { isDefined } from "./../CommonFunctions";
import * as SecureStore from 'expo-secure-store';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DATOS_PRUEBA = [
  {
    nombre: "Ansios@",
    fecha: "2021-05-13",
    triunfos: [{ nombre: "Completaste 5 meditaciones" }],
  },

  {
    nombre: "Relajad@",
    fecha: "2021-05-06",
    triunfos: [{ nombre: "Meditación sin pausa" }],
  },

  {
    nombre: "Estresad@",
    fecha: "2021-05-16",
    triunfos: [{ nombre: "Completaste 5 meditaciones" }],
  },

  {
    nombre: "Triste",
    fecha: "2021-05-17",
  },

  {
    nombre: "Cansad@",
    fecha: "2021-05-18",
  },

  {
    nombre: "Insegur@",
    fecha: "2021-05-15",
  },

  {
    nombre: "Emocionad@",
    fecha: "2021-05-07",
  },

  {
    nombre: "Content@",
    fecha: "2021-05-09",
    triunfos: [
      { nombre: "Meditación sin pausa" },
      { nombre: "Completaste 5 meditaciones" },
    ],
  },

  {
    nombre: "Aburrid@",
    fecha: "2021-05-19",
  },

  {
    nombre: "Agradecid@",
    fecha: "2021-05-08",
    triunfos: [{ nombre: "Meditación sin pausa" }],
  },

  {
    nombre: "Enojad@",
    fecha: "2021-05-14",
  },

  {
    nombre: "Feliz",
    fecha: "2021-05-05",
    triunfos: [
      { nombre: "Completaste 5 meditaciones" },
      { nombre: "Meditación sin pausa" },
    ],
  },
];

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      email: "",
      password: "",
      selectedDate: {
        day: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear(),
      },
      estados: DATOS_PRUEBA,
      error: false
    };
    this.pickUpDate = this.pickUpDate.bind(this);
  }
  //rutas
  
  goPerfil = () => {
    this.props.navigation.navigate('Perfil');
  }
  goLista = () => {
    this.props.navigation.navigate('Lista');
  }
  goEstado = () => {
    this.props.navigation.navigate('Estado');
  }
  goLista = () => {
    this.props.navigation.navigate('Lista');
  }
  goADDESTADO= () => {
    this.props.navigation.navigate('CambiarEstado');
  }
  goADDTRIUNFO= () => {
    this.props.navigation.navigate('CambiarTriunfo');
  }
  logout = () => {
    // log-out
    SecureStore.deleteItemAsync('token').then(() => {this.setState({error: false})})
    .catch((error) => {
      console.error(error); // aqui es para poner bonito el mensaje de error en caso de que no se haya podido eliminar
      this.setState({error: true});
    }).finally(() => {
      this.props.navigation.navigate('Login');
    });
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

  pickUpDate(date) {
    this.setState({
      selectedDate: { day: date.day, month: date.month, year: date.year },
    });
  }

  selectDate(date, today) {

    let ListEstados = [...this.state.estados];
    const FindDate = new Date(
      date.year,
      date.month - 1,
      date.day - 1
    );
    const Estado = ListEstados.find((estado) => {
      const EstadoDate = new Date(estado.fecha);
      return (
        EstadoDate.getDate() == FindDate.getDate() &&
        EstadoDate.getFullYear() == FindDate.getFullYear() &&
        EstadoDate.getMonth() == FindDate.getMonth()
      );
    });
    let triunfos = [];
    if (Estado && isDefined(Estado.triunfos)) {
      triunfos = [...Estado.triunfos];
    }
    if (
      Estado &&
      (isDefined(Estado.nombre) || isDefined(Estado.triunfos))
    ) {
      this.props.navigation.navigate("Reporte", {
        estado: Estado.nombre,
        triunfos: [...triunfos],
      });
    } else {
      if (today) {
        Toast.show({
          text: "No ha agredado un estado para el día de hoy",
          buttonText: "Entendido",
        });
      }
      else {
        Toast.show({
          text: "Seleccione un día valido para mirar el reporte",
          buttonText: "Entendido",
        });
      }
    }
  }
  selectDateCalendar = (date) => {
    this.selectDate(date, false);
  }
  componentDidMount() { }
  render() {
    return (
      <Container style={styles.Container}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#00B0E8", "#BB8FCE"]}
          style={styles.background}
        />
        <Header
          transparent
          androidStatusBarColor="#00B0E8"
          style={styles.Header}
        >
          <Left>
            <Icon name="home" style={{ color: "white" }} />
          </Left>
          <Body>
            <Title style={styles.Header}> HOME </Title>
          </Body>
          <Right
          //Poner ruta a log-out
          >
          <Button iconLeft transparent onPress={this.logout.bind(this)} >
             <Icon name="log-out" style={{ color: "white" }} />
          </Button>
           
          </Right>
        </Header>

        <Content >
          <Calendario
            estados={this.state.estados}
            pickUpDate={this.selectDateCalendar.bind(this)}
          />
          <Button rounded
            style={styles.Button}
            onPress={() => {
              this.selectDate(new Date(), true);
            }}
          >
            <Text style={styles.Text2}>
              Ver reporte del día
            </Text>
          </Button>
          <Item
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
              paddingBottom: 10,
            }}
          >
            <Button rounded style={styles.Button}
            onPress={this.goADDESTADO}>
              <Text style={styles.Text2}>¿Cómo te sientes hoy?</Text>
            </Button>
            <Button rounded style={styles.Button}
            onPress={this.goADDTRIUNFO}>
              <Text style={styles.Text2}>¿Qué hiciste hoy?</Text>
            </Button>
          </Item>
        </Content>
        <Footer>
          <FooterTab>

            
            <Button style={styles.Button}
              onPress={this.goEstado}
            >
              <Icon name="heart" />
            </Button>
            <Button active style={styles.Button}
              onPress={this.goPerfil}
            >
              <Icon name="person" />
            </Button>
            <Button style={styles.Button}
              onPress={this.goLista}
            >
              <Icon name="flame" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default HomeScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "stretch",
    justifyContent: "center",
    fontFamily: "Dosis",
    color: "white",
  },

  Text2: {

    fontWeight: "300",
    fontSize: 15,
    color: "white",
    fontFamily: "Dosis",
  },
  Text3: {
    marginTop: 10,
    fontSize: 15,
    color: "#C4EFFF",
    marginLeft: 5,
    fontFamily: "Dosis",
  },


  Button: {
    alignSelf: "center",
    backgroundColor: '#BB8FCE',
    fontFamily: 'Dosis',
    fontWeight: "400",
  },

  Item: {
    padding: 5,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 80,
  },
  Header: {
    color: "#C4EFFF",
    fontFamily: "Dosis",
    fontSize: 40,
    fontWeight: "600",
    alignSelf: "center",
  },
});
