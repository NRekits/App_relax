import React from 'react';
import { Dimensions, StyleSheet } from "react-native";
import {
  Container, Header,
  Title, Content,
  Footer, FooterTab,
  Button, Left,
  Right, Body,
  Icon, Text,
  Card, CardItem, H2
} from 'native-base';

import AudioPlayer from './../Components/AudioPlayer';

import { LinearGradient } from "expo-linear-gradient";
import { isDefined } from "./../CommonFunctions";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class MeditacionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      descripcion: '',
      isLoading: true,
      url: ''
    };
  }

  componentDidMount() {
    this.setState({ nombre: this.props.route.params.nombre, descripcion: this.props.route.params.descripcion, isLoading: false, url: this.props.route.params.url});
  }

 
  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Container><Text>Is Loading</Text></Container>
      );
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
              <Icon
                name="arrow-back"
                style={{ color: "white" }}
                onPress={this.goBack}
              />{" "}
              Meditación
            </Title>
          </Body>
        </Header>

          <Content>
            <Card transparent style={{marginTop:20}}>
              <CardItem bordered>
                <Left>
                  <Body>
                    <H2 style={styles.H2}>
                      {this.state.nombre}
                    </H2>
                  </Body>
                </Left>
              </CardItem>
              <CardItem bordered cardBody>
                <Text style={styles.Card} >
                  {this.state.descripcion}
                </Text>
              </CardItem>
              <CardItem bordered last>
                <Body style={{alignItems: 'center'}}>
                  <AudioPlayer url ={this.state.url} />
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
    }
  }
}
export default MeditacionScreen;
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
    padding:15,
    textAlign: 'left',
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
  H2:{
    alignSelf: "center",
    color: "#BB8FCE",
    fontFamily: "Dosis",
    fontWeight:'400',
    fontSize:25,
    marginTop:5
  },
});
