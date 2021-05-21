import React, { useState } from 'react';
import {
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Calendario from './../Components/calendario';

const DATOS_PRUEBA = [

  {
    nombre: "Ansioso",
    fecha: "2021-05-13",
    triunfos: [{nombre: "Completaste 5 meditaciones"}]
  },

  {
    nombre: "Relajado",
    fecha: "2021-05-06",
    triunfos: [{nombre: "Meditación sin pausa"}]
  },

  {
    nombre: "Estresado",
    fecha: "2021-05-16",
    triunfos: [{nombre: "Completaste 5 meditaciones"}]
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
    triunfos: [{nombre: "Meditación sin pausa"}, {nombre: "Completaste 5 meditaciones"}]
  },

  {
    nombre: "Aburrido",
    fecha: "2021-05-19",
  },

  {
    nombre: "Agradecido",
    fecha: "2021-05-08",
    triunfos: [{nombre: "Meditación sin pausa"}]
  },

  {
    nombre: "Enojado",
    fecha: "2021-05-14",
  },

  {
    nombre: "Feilz",
    fecha: "2021-05-05",
    triunfos: [{nombre: "Completaste 5 meditaciones"}, {nombre: "Meditación sin pausa"}]
  }

];

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      email: '',
      password: '',
      selectedDate: {day: today.getDate(), month: today.getMonth()+1, year: today.getFullYear()},
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
  pickUpDate(date){
    this.setState({selectedDate: {day: date.day, month: date.month, year: date.year}});
  }
  componentDidMount() {

  }
  render() {
    return (
      <Container>
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
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default HomeScreen;
