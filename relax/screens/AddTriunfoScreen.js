import React from "react";
import { Dimensions, Alert, Image, StyleSheet } from "react-native";
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
  Item,
  Input,
  Textarea,
  Label,
} from "native-base";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import { set } from "react-native-reanimated";

export default class AddTriunfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      descripcion: "",
      isLoading: true,
      isModification: false,
      selectedHours: 0,
      selectedMinutes: 0,
      show: false,
    };
  }
  goBack = () => {
    this.props.navigation.goBack();
   }
  componentDidMount() {
    this.setState({ isLoading: false });
  }

  changeHoursMinutes = (hours, minutes) => {
    this.setState({ selectedMinutes: minutes, selectedHours: hours });
  };

  showTimePicker = () => {
    this.setState({ show: true });
  };

  onChangeTime = (event, date) => {
    this.setState({
      selectedHours: date.getHours(),
      selectedMinutes: date.getMinutes(),
    });
  };

  render() {
    const {
      nombre,
      descripcion,
      isLoading,
      isModification,
      selectedHours,
      selectedMinutes,
    } = this.state;
    let Action = "Añadir";
    if (isModification) {
      Action = "Cambiar";
    }
    if (isLoading) {
      return (
        <Container>
          <Text>Is Loading</Text>
        </Container>
      );
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
              <Button rounded style={styles.Button}onPress={this.showTimePicker}>
                <Text>
                  Elegir Hora ({selectedHours}:{selectedMinutes})
                </Text>
              </Button>
              {this.state.show && (
                <RNDateTimePicker
                  onChange={this.onChangeTime}
                  locale="es-MX"
                  is24Hour={true}
                  value={new Date()}
                  mode="time"
                  componentRef={(instance) => (this.datePicker = instance)}
                />
              )}
            </Form>

            <Button block rounded style={styles.Button}>
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
      padding:10,
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
      borderRadius:20,
      fontSize: 20,

    },
  });
  