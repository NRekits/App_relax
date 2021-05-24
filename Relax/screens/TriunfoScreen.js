import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import {
    Container, Content,
    Header, Icon,
    Left, Body,
    Button, Title,
    Card, CardItem,
    Text, Right
} from 'native-base';
import {LoadingFull} from './../Components/Loading';
import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class TriunfoScreen extends React.Component {
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
      id: '',
      nombre: "Hoy logre aguantarme",
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
  };

  getData = () => {

  }

  componentDidMount() {
    this.setState({ fecha: this.props.fecha, id: this.props.route.params.id});
  }
  render() {
    const { nombre, descripcion, isLoading } = this.state;
    if (isLoading) {
      return (
        <Container>
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
                {" "}
                <Button iconRight transparent >
              <Icon
                name="arrow-back"
                style={{ color: "white" }}
                onPress={this.goBack}
              /></Button>{" "}
                Triunfo
              </Title>
            </Body>
          </Header>

          <Content>
            <Card transparent>
              <CardItem style={styles.Card} header bordered={true}>
                <Body>
                  <Text style={styles.H2}>{nombre}</Text>
                </Body>
              </CardItem>
              <CardItem style={styles.Card} cardBody>
                <Text style={styles.Text}>{descripcion}</Text>
              </CardItem>
              <CardItem style={styles.Card} cardBody>
                <Text style={styles.Text}>Hora: </Text>
              </CardItem>
              <CardItem footer>

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
    color: "white",
  },

  Card: {
    fontWeight: "300",
    fontSize: 20,
    padding: 15,
    textAlign: "left",
    fontFamily: "Dosis",
    alignItems: "center",
    marginTop:20
  },

  Text2: {
    fontWeight: "300",
    fontSize: 20,
    color: "white",
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

  Button: {
    alignSelf: "center",
    backgroundColor: "#BB8FCE",
    fontFamily: "Dosis",
    fontWeight: "400",
  },
  H2: {
    alignSelf: "flex-start",
    color: "#BB8FCE",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 25,
    marginTop: 5,
  },
});
