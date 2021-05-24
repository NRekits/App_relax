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
import {LoadingFull} from './../Components/Loading';
import IP_BD from './../ip_address';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class PerfilScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Lorem Ipsum",
      correo: "lorem@ipsum.com",
      error: false,
      isLoading: true
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  cambiarcontra = () => {
    this.props.navigation.navigate('CambiarContraseña');
  }
  componentDidMount() {
    this.obtenerDatosPerfil();
  }

  obtenerDatosPerfil = () => {
    fetch(`http://${IP_BD}:3000/user/user/${this.props.route.params.idUsuario}`)
      .then((res) => res.json())
      .then((res) => res.data[0])
      .then((data) => {
        this.setState({correo: data.email, nombre: data.name});
      })
      .catch((error) => console.error(error))
      .finally(() => {
        if (!this.state.error) {
          this.setState({ isLoading: false })
        }
      })
  }

  render() {
    if (this.state.isLoading) {
      return(<LoadingFull />);
    }
    else {
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
          </Content>
        </Container>
      );
    }

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
  H2: {
    textAlign: 'center',
    color: "#BB8FCE",
    fontFamily: "Dosis",
    fontWeight: '400',
    fontSize: 25,
    marginTop: 5
  },
  Button: {
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: '#BB8FCE',
    fontFamily: 'Dosis',
    fontWeight: "400",
  },
  Text: {
    textAlign: 'center',
    color: "#BB8FCE",
    fontFamily: "Dosis",
    fontWeight: '400',
    fontSize: 25,
    marginTop: 5
  },
});