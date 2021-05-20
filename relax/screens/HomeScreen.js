import React,{useState} from 'react';
import { Button ,TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import SecureStore from 'expo-secure-store';

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
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
	render(){
		return(
            <View> <Container>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Text>
                This is Content Section
              </Text>
            </Content>
            <Footer>
              <FooterTab>
                <Button full>
                  <Text>Footer</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container></View>
        );
	}
}
export default HomeScreen;
