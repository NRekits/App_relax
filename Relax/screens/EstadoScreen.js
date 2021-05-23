import React from 'react';
import {
    Container, Content,
    Header, Icon,
    Left, Body,
    Button, Title,
    Card, CardItem,
    Text
} from 'native-base';
import { ESTADOS_COLOR } from './../CommonFunctions';

export default class EstadoScreen extends React.Component {
    todayDate = () => {
        const fecha = new Date();
        let result = { year: fecha.getFullYear(), month: fecha.getMonth(), day: fecha.getDate() }
        return result;
    }
    constructor(props) {
        super(props);
        this.state = {
            estado: 'Cansado',
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

        const { estado, descripcion, isLoading } = this.state;

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
                            <CardItem style={{backgroundColor: ESTADOS_COLOR[estado]}} header bordered={true} button onPress={this.changeState}>
                                <Text>{estado}</Text>
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