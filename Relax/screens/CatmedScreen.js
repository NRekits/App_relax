import React from "react";
import { Dimensions, Alert, Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Icon,
  Body,
  Title,
  ListItem,
  Text,
  List,
  Right,
  Button
} from "native-base";

import { LinearGradient } from "expo-linear-gradient";
import { isDefined } from "./../CommonFunctions";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const LISTA_MEDITACIONES = [
  {
    id: 1,
    nombre: "Desayuno consciente",
    descripcion:
      "La misma práctica de mindfulness puede continuar en el desayuno. Deja el móvil mientras estás comiendo y aprovecha estos 10 minutos para centrarte en los alimentos que estás comiendo, su sabor, olor... en todo lo que haces: untar las tostadas, remover el café... Te sorprenderá esta nueva manera de desayunar.",
    url: "https://vivirmindfulness.com/wp-content/uploads/2020/04/VivirMindfulness-Atenci%C3%B3n_a_la_respiraci%C3%B3n.mp3",
  },

  {
    id: 2,
    nombre: "Respiración de aterrizaje aquí y ahora",
    descripcion:
      "Este ejercicio es ideal para para apagar el piloto automático. Al practicarlo, la atención se centra en el momento presente y detiene el fluir constante de los pensamientos, recuerdos, imágenes o ideas. Es ideal para descargar de la tensión acumulada de una manera muy sencilla. \
        Para llevarlo a cabo, es necesario centrar la atención en la respiración. Se debe realizar una inspiración suave, profunda y constante por la nariz. Al llenarnos de aire, soltar enseguida el aire por la boca con intensidad pero sin forzar la garganta. Al notar una distracción (que es normal), observamos qué es aquello que captó nuestra atención y regresamos de nuevo a la respiración.",
    url: "https://vivirmindfulness.com/wp-content/uploads/2020/04/VivirMindfulness-Atenci%C3%B3n_a_la_respiraci%C3%B3n.mp3",
  },
  {
    id: 3,
    nombre: "Escaneo del cuerpo",
    descripcion:
      "Esta meditación está diseñada para familiarizarnos con las sensaciones más sutiles de nuestro cuerpo y darnos cuenta de la forma en que cambian continuamente, para así aprender a prestar más atención a cómo nos sentimos en el momento presente",
    url: "https://kensho.life/meditaciones-guiadas/escaneo-del-cuerpo-10-minutos",
    
  },
  {
    id: 4,
    nombre: "Reconocer el estrés",
    descripcion:
      "En esta meditación practicamos localizar y abrirnos a las sensaciones físicas que se crean cuando algo nos estresa. Esta apertura y aceptación nos ayuda a que nos sintamos menos atrapados por el estrés.",
    url: "https://kensho.life/meditaciones-guiadas/reconocer-el-estres-12-minutos",
    
  },
  {
    id: 5,
    nombre: "Meditación de S.O.S",
    descripcion:
      "En esta meditación practicamos hacer una breve pausa cuando nos sentimos estresados para evitar dejarnos arrastrar por la reactividad o entrar en una espiral de pensamientos negativos.",
    url: "https://kensho.life/meditaciones-guiadas/meditacion-sos-5-minutos",
    
  },
];

export default class ListaMeditacionesScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  goBack = () => {
    this.props.navigation.goBack();
   }
  Item = (propis) => {
    return (
      <ListItem
        button
        style={{ borderBottomWidth: 1 }}
        onPress={() =>
          this.props.navigation.navigate("meditacion", {
            nombre: propis.nombre,
            descripcion: propis.descripcion,
            url: propis.url,
          })
        }
      >
        <Body>
          <Text style={styles.Text2}>{propis.nombre}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  };
  render() {
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
              Meditación
            </Title>
          </Body>
        </Header>

        <List
          dataArray={LISTA_MEDITACIONES}
          keyExtractor={(item, index) => index.toString()}
          renderRow={this.Item}
        ></List>
      </Container>
    );
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
    padding: 5,
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
    height: windowHeight,
  },
  Header: {
    color: "#C4EFFF",
    fontFamily: "Dosis",
    fontSize: 40,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
});
