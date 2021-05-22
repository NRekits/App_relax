import React from "react";

import {
  Text,
  StyleSheet,
  Button
} from "react-native";

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import * as SecureStore from "expo-secure-store";
import IP_DB from "./../ip_address";

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    };
  }
  /*
    fetchJsonGetMethod() {
      return fetch('https://reactnative.dev/movies.json', {method: 'POST',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue'
    })
    }).then((res) => res.json())
      .then((data) => {this.setState({email: data.movies[0].title, password: data.movies[1].title})})
      .catch((error) => console.error(error))
      .finally(() => console.log(this.state.email, this.state.password));
    }
  */
  render() {
    return (
        <Container style={{paddingTop: 50}}>
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="Nombre completo"/>
                    </Item>
                    <Item>
                        <Input placeholder="Correo electrónico"/>
                    </Item>
                    <Item>
                        <Input placeholder="Contraseña"/>
                    </Item>
                    <Item>
                        <Input placeholder="Confirmar contraseña"/>
                    </Item>
                    <Button style={{marginTop: 30, marginLeft: 18, marginRight: 18}} title="Registrarse" mode="contained" />
                </Form>
            </Content>
        </Container>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  fgwhite: {
    color: 'white'
  },
  Text: {
    fontSize: 40
  }
});
export default RegisterScreen;
