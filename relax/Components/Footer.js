import React, { Component } from 'react';
import { Text, Dimensions, Alert, Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  H1,
  Footer, 
  FooterTab, 
  Icon
} from "native-base";
import * as SecureStore from "expo-secure-store";
import { LinearGradient } from 'expo-linear-gradient';
import IP_DB from "./../ip_address";
import * as Font from "expo-font";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class FooterTabsIconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection:'column',
    alignItems: "stretch",
    justifyContent: "center",
    padding: 20,
    fontFamily: "Dosis",
    color: "white",
  },
  Text: {
    fontSize: 40,
  },
  Text2: {
    marginTop: 5,
    fontWeight:'400',
    fontSize:20,
    color: "white",
    marginLeft: 5,
    fontFamily: "Dosis",
  },
  Text3: {
    marginTop: 10,
    fontSize: 15,
    color: "#C4EFFF",
    marginLeft: 5,
    fontFamily: "Dosis",
  },
  Image: {
    alignSelf: "center",
    marginBottom:10
  },
  Input: {
    
    alignSelf: "flex-start",
    color: "white",
    fontFamily: "Dosis",
    fontWeight: "400",
    fontSize: 20,
    marginRight: 5,
  },
  Button: {
    alignSelf:'center',
    marginTop: 20,
  }, 
  Label:{
    color: "white",
    fontFamily: "Dosis",
    fontWeight:'400',
    fontSize:20,
    marginRight:5,
    marginBottom: 10,
 
  },
  Item:{
    padding:5,
    marginTop:30,
  },
  H1:{
    alignSelf: "center",
    color: "white",
    fontFamily: "Dosis",
    fontWeight:'400',
    fontSize:30,
    marginTop:20
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight,
  }
});
export default LoginScreen;
