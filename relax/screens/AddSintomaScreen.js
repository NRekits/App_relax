import React from "react";
import {
  Container,
  Content,
  Header,
  Left,
  Form,
  Text,
  Button,
  Body,
  Icon,
  Title,
  Textarea,
  Toast
} from "native-base";
import { View, Picker } from "react-native";
import { LoadingFull } from "./../Components/Loading";
import IP_DB from './../ip_address';

import { Dimensions, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class AddSintomaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      estado: "Ansios@",
      descripcion: "",
      isLoading: true,
      isModification: false,
      error: false
    };
  }

  addEstado = () => {
    const today= new Date();
    today.setHours(today.getHours() - 5);
    fetch(`http://${IP_DB}:3000/Estado/insertar`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        iduser: this.state.id,
        nombre: this.state.estado,
        descripcion: this.state.descripcion,
        fecha: today.toISOString()
      })
    })
    .then((res) => res.json())
    .then((res) => {
      this.setState({error: false});
    })
    .catch((error) => {
      console.error(error);
      this.setState({error: true})
    })
    .finally(() => {

      if(!this.state.error){
        Toast.show({
          text: 'Se ha añadido ',
          buttonText: 'Entendido',
          type: 'success'
        })
        this.props.navigation.navigate('Home', {id: this.state.id});
      }
    });
  }

  goBack = () => {
    this.props.navigation.goBack();
   }
  componentDidMount() {
    this.setState({id: this.props.route.params.id,  isLoading: false });
  }
  onValueChange(value) {
    this.setState({ selected: value });
  }
  render() {
    const { estado, descripcion, isLoading, isModification } =
      this.state;
    let Action = "Añadir";
    if (isModification) {
      Action = "Cambiar";
    }
    if (isLoading) {
      return <LoadingFull />;
    } else {
      return (
        <Container>
          <LinearGradient
            // Background Linear Gradient
            colors={["#00B0E8", "#BB8FCE"]}
            style={styles.background}
          />
          <Header transparent androidStatusBarColor="#00B0E8">
            <Body>
              <Title style={styles.Header}>
                {" "}
                <Button iconRight transparent>
                  <Icon
                    name="arrow-back"
                    style={{ color: "white" }}
                    onPress={this.goBack}
                  />
                </Button>{" "}
                {Action} Estado
              </Title>
            </Body>
          </Header>

          <Content padder>
            <Form>
              <View style={styles.Item}>
                <Picker
                  selectedValue={estado}
                  style={styles.PickerItem}
                  mode="dropdown"
                  enabled={true}
                  onValueChange={(value, index) => {
                    this.setState({ estado: value });
                  }}
                >
                  <Picker.Item label="Ansios@" value="Ansios@" />
                  <Picker.Item label="Estresad@" value="Estresad@" />
                  <Picker.Item label="Triste" value="Triste" />
                  <Picker.Item label="Relajad@" value="Relajad@" />
                  <Picker.Item label="Enojad@" value="Enojad@" />
                  <Picker.Item label="Feliz" value="Feliz" />
                  <Picker.Item label="Emocionad@" value="Emocionad@" />
                  <Picker.Item label="Agradecid@" value="Agradecid@" />
                  <Picker.Item label="Cansad@" value="Cansad@" />
                  <Picker.Item label="Insegur@" value="Insegur@" />
                  <Picker.Item label="Aburrid@" value="Aburrid@" />
                </Picker>
              </View>
              <Textarea
                style={styles.Textarea}
                value={descripcion}
                bordered
                placeholder="¿Cómo te sientes hoy?"
                rowSpan={8}
                onChangeText={(text) => {
                  this.setState({descripcion: text})
                }}
              />
              <Button  block rounded style={styles.Button} onPress={() => {
                this.addEstado(this.state.estado, this.state.descripcion, new Date());
              }}>
                <Text>{Action}</Text>
              </Button>
            </Form>
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
      padding:10,
    },
    Item: {
      marginTop: 30,
      padding: 10,
    },
    Input: {

      fontFamily: "Dosis",
      fontWeight: "400",
      fontSize: 20,
      marginRight: 5,
    },
    PickerItem: {
      color: "#BB8FCE",
      fontFamily: "Dosis",
      fontWeight: "400",
      fontSize: 25,
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
      borderRadius:20,
      padding:5,
      fontSize: 20,

    },
  });