import React from "react";
import { Dimensions, Alert, Image, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  List,
  ListItem,
  Header,
  Left,
  Body,
  Icon,
  Title,
  Footer,
  FooterTab,
  H2,
  Card,
  CardItem,
  Right,
  Item,
  Toast,
} from "native-base";
import { ESTADOS_COLOR, isDefined } from "./../CommonFunctions";
import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import {LoadingFull} from './../Components/Loading';

export default class ReporteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: "",
      id: '',
      triunfos: [],
      isLoading: true,
      fecha: '',
      id_estado: ''
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  componentDidMount() {
    this.setState({
      id: this.props.route.params.id,
      estado: this.props.route.params.estado,
      triunfos: [...this.props.route.params.triunfos],
      isLoading: false,
    });
  }

  Item = (props) => {
    return (
      <ListItem style={{ borderBottomWidth: 1 }}>
        <Body>
          <Text
          style={styles.Text1}
          //debe conectar a la pantalla Triunfo individual donde se oculta el boton de modificar si no es el día
          >
            <Icon name="medal" style={{ color: "white" }} /> {props.nombre}
          </Text>
        
        </Body>
      </ListItem>
    );
  };
  render() {
    if (this.state.isLoading) {
      return (
        <Container>
          <Text>Is Loading</Text>
        </Container>
      );
    } else {
      console.log(this.state);
      const { triunfos, estado } = this.state;
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
                Resumen del día
              </Title>
            </Body>
          </Header>

          <Text
            style={{
              backgroundColor: ESTADOS_COLOR[estado],
              ...styles.Item,
            }}
          >
            Estado: {estado}
          </Text>
          <Text style={{ ...styles.Item }}>
            <Text style={styles.Text3}>
              {" "}
              <Icon
                name="trophy"
                style={{ color: "white" }}
                onPress={this.goBack}
              />{" "}
              Triunfos
            </Text>
          </Text>

          {triunfos && isDefined(triunfos.length) && triunfos.length > 0 ? (
            <List
              keyExtractor={(item, index) => index.toString()}
              dataArray={triunfos}
              renderRow={this.Item}
            ></List>
          ) : (
            <Content>
              <Text style={styles.Text2}>
                No se agregaron triunfos en el día
              </Text>
            </Content>
          )}
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
  Text1: {
    fontWeight: "300",
    fontSize: 20,
    color: "white",
    fontFamily: "Dosis",
    paddingLeft: 10,
  },
  Text2: {
    fontWeight: "300",
    fontSize: 25,
    color: "white",
    fontFamily: "Dosis",
    paddingLeft: 10,
  },

  Button: {
    alignSelf: "center",
    backgroundColor: "#BB8FCE",
    fontFamily: "Dosis",
    fontWeight: "400",
  },

  Item: {
    padding: 15,
    paddingTop: 20,
    color: "white",
    fontFamily: "Dosis",
    fontWeight: "800",
    fontSize: 25,
    marginTop: 5,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight,
  },
  Text3: {
    alignSelf: "center",
    color: "white",
    fontFamily: "Dosis",
    fontWeight: "800",
    fontSize: 25,
    marginTop: 5,
  },
  Header: {
    color: "#C4EFFF",
    fontFamily: "Dosis",
    fontSize: 40,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
});
