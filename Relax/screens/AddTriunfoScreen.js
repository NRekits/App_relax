import React from 'react';
import {
    Container, Content,
    Header, Left,
    Form, Text,
    Button, Body,
    Icon, Title,
    Item, Input,
    Textarea,
    Label,
} from 'native-base';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { set } from 'react-native-reanimated';

export default class AddTriunfoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            descripcion: '',
            isLoading: true,
            isModification: false,
            selectedHours: 0,
            selectedMinutes: 0,
            show: false
        }
    }
    componentDidMount() {
        this.setState({ isLoading: false });
    }

    changeHoursMinutes = (hours, minutes) => {
        this.setState({selectedMinutes: minutes, selectedHours: hours});
    }

    showTimePicker = () => {
        this.setState({show: true});
    }

    onChangeTime = (event, date) =>{
        this.setState({selectedHours: date.getHours(), selectedMinutes: date.getMinutes()})
    }

    render() {
        const { nombre, descripcion, isLoading, isModification, selectedHours, selectedMinutes } = this.state;
        if (isLoading) {
            return (
                <Container><Text>Is Loading</Text></Container>
            );
        }
        else {
            return (
                <Container>

                    <Header>
                        <Left>
                            <Button>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body>
                            {isModification ? (<Title>Cambiar triunfo</Title>) :
                                (<Title>Añadir triunfo</Title>)
                            }
                        </Body>
                    </Header>
                    <Content padder>
                        <Form>
                            <Item floatingLabel>
                                <Label>Triunfo</Label>
                                <Input
                                    value={nombre}
                                    onChangeText={(text) => {
                                        this.setState({ nombre: text })
                                    }}
                                    label="Triunfo" />
                            </Item>
                            <Textarea value={descripcion} onChangeText={(text) => {this.setState({descripcion: text})}} rowSpan={5} bordered placeholder="Descripción" />
                            <Button full onPress={this.showTimePicker}><Text>Elegir Hora ({selectedHours}:{selectedMinutes})</Text></Button>
                            {this.state.show && 
                                (<RNDateTimePicker onChange={this.onChangeTime} locale="es-MX" is24Hour={true} value={new Date()} mode="time" componentRef={instance => this.datePicker = instance}/>)
                            }
                        </Form>

                        <Button full>
                            <Text>Agregar</Text>
                        </Button>
                    </Content>
                </Container>
            );
        }
    }
}