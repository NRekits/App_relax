import React from 'react';
import {
    Container, Content,
    Header, Icon,
    Left, Body,
    Button, Title,
    Card, CardItem,
    Text, Right
} from 'native-base';

export default class TriunfoScreen extends React.Component {
    todayDate = () => {
        const fecha = new Date();
        let result = { year: fecha.getFullYear(), month: fecha.getMonth(), day: fecha.getDate() }
        return result;
    }
    constructor(props) {
        super(props);
        this.state = {
            nombre: 'Hoy logre aguantarme',
            descripcion: 'Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum ',
            fecha: '',
            isLoading: true
        }
    }
    changeState() {
        const today = this.todayDate();
        const {fecha} = this.state;
        const estadoDate = new Date(fecha);
        if ( today.year === estadoDate.getFullYear() && 
             today.month === estadoDate.getMonth() && 
             today.day === estadoDate.getDate()){
            this.props.navigate.navigation('CambiarEstado');
        }
    }
    componentDidMount() {
        this.setState({ fecha: this.props.fecha, isLoading: false });
    }
    render() {
        const { nombre, descripcion, isLoading } = this.state;
        if (isLoading) {
            return (<Container><Text>Is Loading</Text></Container>);
        } else {
            return (
                <Container>
                    <Header>
                        <Left>
                            <Button>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Estado</Title>
                        </Body>
                    </Header>
                    <Content>
                        <Card>
                            <CardItem header bordered={true}>
                                <Left/>
                                <Body style={{alignSelf: 'center'}}>
                                    <Text>{nombre}</Text>
                                </Body>
                                <Right/>
                            </CardItem>
                            <CardItem cardBody>
                                <Text>
                                    {descripcion}
                                </Text>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            );
        }


    }
}