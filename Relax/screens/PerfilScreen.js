import React from 'react';
import {
    Container, Header,
    Left, Body,
    Icon, Button,
    Title, Content,
    Text, H2
} from 'native-base';
import {StyleSheet} from 'react-native';

export default class PerfilScreen extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            nombre: 'Lorem Ipsum',
            correo: 'lorem@ipsum.com'
        }
    }
    render(){
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Perfil</Title>
                    </Body>
                </Header>
                <Content>
                    <H2 style={{...styles.selfCenter, ...styles.setMarginTop}}>{this.state.nombre}</H2>
                    <Text style={{...styles.selfCenter, ...styles.setMarginTop}}>{this.state.correo}</Text>
                    <Button style={{...styles.selfCenter, ...styles.setMarginTop}}><Text>Cambiar Contraseña</Text></Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    selfCenter: {
        alignSelf: 'center'
    },
    setMarginTop: {
        marginTop: 20
    }
});