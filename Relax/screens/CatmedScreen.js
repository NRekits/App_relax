import React from 'react';
import {
    Container, Header,
    Left, Icon,
    Body, Title,
    Button, ListItem,
    Footer, FooterTab,
    Text, List,
    Right
} from 'native-base';

const LISTA_MEDITACIONES = [
    {
        id: 1,
        nombre: "kkdvk",
        descripcion: "Esto es solo una prueba de la lista"
    }
];

const Item = (props) => {
    console.log(props);
    return (
        <ListItem>
            <Text>{props.nombre}</Text>
        </ListItem>
    );
}

export default class ListaMeditacionesScreen extends React.Component {
    render(){
        return (
            <Container>
                <Header>
                    <Left>
                        <Button>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
                <List dataArray={LISTA_MEDITACIONES} keyExtractor={(item, index) => index.toString()} renderRow={Item} />
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