import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import {
    Container, Content,
    Header, Icon,
    Left, Body,
    Button, Title,
    Card, CardItem,
    Text
} from 'native-base';
import { ESTADOS_COLOR} from './../CommonFunctions';
import {LoadingFull} from './../Components/Loading';

import { LinearGradient } from "expo-linear-gradient";
export default class EstadoScreen extends React.Component {
  todayDate = () => {
    const fecha = new Date();
    let result = {
      year: fecha.getFullYear(),
      month: fecha.getMonth(),
      day: fecha.getDate(),
    };
    return result;
  };
  constructor(props) {
    super(props);
    this.state = {
      estado: "Estresado",
      descripcion:
        "Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum ",
      fecha: "",
      isLoading: true,
    };
  }
  changeState() {
    const today = this.todayDate();
    const { fecha } = this.state;
    const estadoDate = new Date(fecha);
    if (
      today.year === estadoDate.getFullYear() &&
      today.month === estadoDate.getMonth() &&
      today.day === estadoDate.getDate()
    ) {
      this.props.navigate.navigation("CambiarEstado");
    }
  }
  
  goBack = () => {
    this.props.navigation.goBack();
  }
  componentDidMount() {
    this.setState({ fecha: this.props.fecha, isLoading: false });
  }
  render() {
    const { estado, descripcion, isLoading } = this.state;

    if (isLoading) {
      return (
        <Container style={styles.Container}>
          <Text>Is Loading</Text>
        </Container>
      );
    } else {
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
             
              <Button iconRight transparent >
              <Icon
                name="arrow-back"
                style={{ color: "white", fontSize:30 }}
                onPress={this.goBack}
              /></Button>{" "}{" "}
                Estado
              </Title>
            </Body>
          </Header>

          <Content>
            <Card transparent styles={{marginTop:20}}>
              <CardItem
                style={styles.Card}
                header
                onPress={this.changeState}
              >
                <Text style={styles.H2}>{estado}</Text>
              </CardItem>
              <CardItem style={styles.Card} cardBody>
                <Text style={styles.Text}>{descripcion}</Text>
              </CardItem>
            </Card>
            
          </Content>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center",
      fontFamily: "Dosis",
    
    },
  
    Card: {
      marginTop:20,
      fontWeight: "300",
      fontSize: 20,
      padding: 15,
      color: "#F7F9F9",
      textAlign: "left",
      fontFamily: "Dosis",
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
    Text: {
      alignSelf: "center",
      fontFamily: "Dosis",
      fontWeight: "400",
      fontSize: 25,
      marginTop: 5,
    },
  
    H2: {
      alignSelf: "flex-start",
     // color:'#F7F9F9',
      fontFamily: "Dosis",
      fontWeight: "400",
      fontSize: 25,
      marginTop: 5,
    },
  });
  