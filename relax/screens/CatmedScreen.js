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
        nombre: "Desayuno consciente",
        descripcion: "La misma práctica de mindfulness puede continuar en el desayuno. Deja el móvil mientras estás comiendo y aprovecha estos 10 minutos para centrarte en los alimentos que estás comiendo, su sabor, olor... en todo lo que haces: untar las tostadas, remover el café... Te sorprenderá esta nueva manera de desayunar.",
        url: 'https://vivirmindfulness.com/wp-content/uploads/2020/04/VivirMindfulness-Atenci%C3%B3n_a_la_respiraci%C3%B3n.mp3'
    },

    {
        id: 2,
        nombre: "Respiración de aterrizaje aquí y ahora",
        descripcion: "Este ejercicio es ideal para para apagar el piloto automático. Al practicarlo, la atención se centra en el momento presente y detiene el fluir constante de los pensamientos, recuerdos, imágenes o ideas. Es ideal para descargar de la tensión acumulada de una manera muy sencilla. \
        Para llevarlo a cabo, es necesario centrar la atención en la respiración. Se debe realizar una inspiración suave, profunda y constante por la nariz. Al llenarnos de aire, soltar enseguida el aire por la boca con intensidad pero sin forzar la garganta. Al notar una distracción (que es normal), observamos qué es aquello que captó nuestra atención y regresamos de nuevo a la respiración.",
        url: 'https://vivirmindfulness.com/wp-content/uploads/2020/04/VivirMindfulness-Atenci%C3%B3n_a_la_respiraci%C3%B3n.mp3'
    },
];


export default class ListaMeditacionesScreen extends React.Component {
    constructor(props){
        super(props);
    }
    Item = (propis) => {
        return (
            <ListItem button style={{ borderBottomWidth: 1 }} onPress={() => this.props.navigation.navigate('meditacion', {
                nombre: propis.nombre, descripcion: propis.descripcion, url: propis.url
                })}>
                <Body>
                    <Text>{propis.nombre}</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        );
    }
    render() {
        return (
            <Container >
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
                <List dataArray={LISTA_MEDITACIONES} keyExtractor={(item, index) => index.toString()} renderRow={this.Item} ></List>
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