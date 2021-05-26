import React from "react";
import { Dimensions, Alert, Image, StyleSheet } from "react-native";
import {
  Container, Content,
  Header, Left,
  Form, Text,
  Button, Body,
  Icon, Title,
  Item, Input,
  Textarea,
  Label,
  Toast
} from 'native-base';
import Modal from 'react-native-modalbox';
import { LoadingFull } from './../Components/Loading';
import { LinearGradient } from 'expo-linear-gradient';
import IP_DB from './../ip_address';

export default class AddTriunfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idUsuario: '',
      nombre: "",
      descripcion: "",
      isLoading: true,
      isModification: false,
      error: false,
      isDisabled: false
    };
  }
  goBack = () => {
    this.props.navigation.goBack();
  }
  componentDidMount() {
    this.setState({ idUsuario: this.props.route.params.idUsuario, isLoading: false });
  }

  changeHoursMinutes = (hours, minutes) => {
    this.setState({ selectedMinutes: minutes, selectedHours: hours });
  };

  addTriunfo = () => {
    let today = new Date();
    today.setHours(today.getHours() - 5);
    fetch(`http://${IP_DB}:3000/Triunfo/insertar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        iduser: this.state.idUsuario,
        nombre: this.state.nombre,
        descripcion: this.state.descripcion,
        fecha: today.toISOString()
      })
    })
      .then((res) => res.json())
      .then(() => { this.setState({ error: false }) })
      .catch((error) => {
        console.error(error);
        this.setState({ error: true });
      })
      .finally(() => {
        if (!this.state.error) {
          // Si vas a usar el modal, descomenta esta línea para que aparezca cuando realizaste un triunfo
          //this.refs.modalTriunfo.open()

          // Comenta es toast si vas a usar el modal
          Toast.show({
            text: 'Has ganado una medalla',
            buttonText: 'Continuar',
            position: 'top',
            type: 'success',
            duration: 3000
          });

          //También comenta esta línea para evitar que se cambie de pantalla cuando abres el modal
          this.props.navigation.navigate('Home', {id: this.state.diUsuario, isLoading: true});
        }
      });
  }

  closeModal() {
    this.props.navigation.navigate('Home');
  }

  onChangeTime = (event, date) => {
    this.setState({
      selectedHours: date.getHours(),
      selectedMinutes: date.getMinutes(),
      selectedDate: date
    });
  };


  render() {

    const modalAlert = (
      <Modal
        onClosed={this.closeModal.bind(this)}
        ref={"modalTriunfo"}
        position={"center"}
        isDisabled={this.state.isDisabled}
        style={styles.modal}
      >
        <Text>Holis</Text>
        <Button onPress={() => { this.setState({ isDisabled: !this.state.isDisabled }) }}><Text>Continuar</Text></Button>
      </Modal>
    );

    const {
      nombre,
      descripcion,
      isLoading,
      isModification,
    } = this.state;
    let Action = "Añadir";
    if (isModification) {
      Action = "Cambiar";
    }
    if (isLoading) {
      return (
        <LoadingFull />
      );
    } else {
      console.log(this.state);
      return (
        <Container>
          <LinearGradient
            // Background Linear Gradient
            colors={["#00B0E8", "#BB8FCE"]}
            style={styles.background}
          />

          {modalAlert}

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
                {Action} Triunfo
              </Title>
            </Body>
          </Header>

          <Content padder>
            <Form>
              <Item floatingLabel style={styles.Item}>
                <Label style={styles.Label}>¿Qué triunfo cumpliste hoy?</Label>
                <Input
                  style={styles.Input}
                  value={nombre}
                  onChangeText={(text) => {
                    this.setState({ nombre: text });
                  }}
                  label="Triunfo"
                />
              </Item>
              <Textarea
                value={descripcion}
                onChangeText={(text) => {
                  this.setState({ descripcion: text });
                }}
                rowSpan={5}
                bordered
                style={styles.Textarea}
                placeholder="Describe tu triunfo..."
              />

            </Form>

            <Button block rounded style={styles.Button} onPress={() => { this.addTriunfo() }}>
              <Text>{Action}</Text>
            </Button>
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
    padding: 10,
  },
  Item: {
    marginTop: 30,
    padding: 10,
  },
  Input: {
    alignSelf: "flex-start",

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
    marginBottom: 0,
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
  Textarea: {
    textAlign: "left",
    fontFamily: "Dosis",
    fontWeight: "400",
    borderRadius: 20,
    fontSize: 20,
    padding: 5,

  },
  modal: {
    height: 300,
    width: 300
  }
});
