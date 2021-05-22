import React from 'react';
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
    if (this.state.isLoading) {
      return (
        <Container><Text>Is Loading</Text></Container>
      );
    }
    else {
      return (
        <Container>
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
            <Card>
              <CardItem bordered>
                <Left>
                  <Body>
                    <H2>
                      {this.state.nombre}
                    </H2>
                  </Body>
                </Left>
              </CardItem>
              <CardItem bordered cardBody>
                <Text style={{textAlign: 'justify'}} >
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
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
  }
}
export default MeditacionScreen;