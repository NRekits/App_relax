import React, { useState } from 'react';
import { Text, Dimensions, Alert, Image, StyleSheet } from "react-native";
import {
  Container, Header,
  Title, Content,
  Footer, FooterTab,
  Button, Left,
  Right, Body,
  Icon, Text, View,
  Toast
} from 'native-base';
import Calendario from './../Components/calendario';
import {isDefined} from './../CommonFunctions';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATOS_PRUEBA = [

  {
    nombre: "Ansioso",
    fecha: "2021-05-13",
    triunfos: [{ nombre: "Completaste 5 meditaciones"}]
  },

  {
    nombre: "Relajado",
    fecha: "2021-05-06",
    triunfos: [{ nombre: "Meditación sin pausa"}]
  },

  {
    nombre: "Estresado",
    fecha: "2021-05-16",
    triunfos: [{ nombre: "Completaste 5 meditaciones"}]
  },

  {
    nombre: "Triste",
    fecha: "2021-05-17",
  },

  {
    nombre: "Cansado",
    fecha: "2021-05-18",
  },

  {
    nombre: "Inseguro",
    fecha: "2021-05-15",
  },

  {
    nombre: "Emocionado",
    fecha: "2021-05-07",
  },

  {
    nombre: "Contento",
    fecha: "2021-05-09",
    triunfos: [{ nombre: "Meditación sin pausa"}, { nombre: "Completaste 5 meditaciones"}]
  },

  {
    nombre: "Aburrido",
    fecha: "2021-05-19",
  },

  {
    nombre: "Agradecido",
    fecha: "2021-05-08",
    triunfos: [{ nombre: "Meditación sin pausa"}]
  },

  {
    nombre: "Enojado",
    fecha: "2021-05-14",
  },

  {
    nombre: "Feliz",
    fecha: "2021-05-05",
    triunfos: [{ nombre: "Completaste 5 meditaciones"}, { nombre: "Meditación sin pausa"}]
  }

];

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      email: '',
      password: '',
      selectedDate: { day: today.getDate(), month: today.getMonth() + 1, year: today.getFullYear() },
      estados: DATOS_PRUEBA
    };
    this.pickUpDate = this.pickUpDate.bind(this);
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
    this.setState({ selectedDate: { day: date.day, month: date.month, year: date.year } });
  }
  componentDidMount() {

  }
  render() {
    return (
      <Container style={{justifyContent: 'center'}}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <Calendario estados={this.state.estados} pickUpDate={this.pickUpDate} />
            <Button style={{alignSelf: 'center'}} onPress={() => {
              let ListEstados = [...this.state.estados];
              const FindDate = new Date( this.state.selectedDate.year , this.state.selectedDate.month-1, this.state.selectedDate.day-1);

              const Estado = ListEstados.find((estado) => {
                const EstadoDate = new Date(estado.fecha);

                return ((EstadoDate.getDate() == FindDate.getDate()) &&
                (EstadoDate.getFullYear() == FindDate.getFullYear()) &&
                (EstadoDate.getMonth() == FindDate.getMonth()));
              });

              console.log(Estado);
              let triunfos = [];
              if(Estado && isDefined(Estado.triunfos)){
                triunfos = [...Estado.triunfos];
              }
              if (Estado && (isDefined(Estado.nombre) || isDefined(Estado.triunfos))){
                this.props.navigation.navigate('reporte', {estado: Estado.nombre, triunfos: [...triunfos]});
              }
              else {
                Toast.show({
                  text: 'Seleccione un día valido para mirar el reporte',
                  buttonText: 'Entendido',
                });
              }
              }}><Text style={{fontFamily: 'Mulish', fontWeight: '300'}}>Ver reporte del día</Text></Button>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, paddingBottom: 10}}>
              <Button><Text>Añadir síntoma</Text></Button>
              <Button><Text>Añadir estado</Text></Button>
            </View>
        </Content>
        <Footer>
         
        </Footer>
      </Container>
    );
  }
}
export default HomeScreen;
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
    color: "#C4EFFF",
    marginLeft: 5,
    fontFamily: "Dosis",
  },
  Image: {
    alignSelf: "center",
    marginBottom:10
  },
  Input: {
    
    alignSelf: "flex-start",
    color: "white",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 20,
    marginRight: 5,
  },
  Button: {
    alignSelf:'center',
    marginTop: 20,
  }, 
  Label:{
    color: "white",
    fontFamily: "Dosis",
    fontWeight:'400',
    fontSize:20,
    marginRight:5,
    marginBottom: 10,
 
  },
  Item:{
    padding:5,
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