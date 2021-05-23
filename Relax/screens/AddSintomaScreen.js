import React from 'react';
import {
    Container, Content,
    Header, Left,
    Form, Text,
    Button, Body,
    Icon, Title,
    Textarea
} from 'native-base';
import {View, Picker} from 'react-native';
import {LoadingFull} from './../Components/Loading';

export default class AddSintomaScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: "Ansioso",
            descripcion: '',
            isLoading: true,
            isModification: false,
            selected: undefined
        }
    }
    componentDidMount() {
        this.setState({ isLoading: false });
    }
    onValueChange(value) {
        this.setState({ selected: value })
    }
    render() {
        const { estado, descripcion, isLoading, isModification, selected } = this.state;
        let Action = "Añadir"
        if (isModification){
            Action = "Cambiar"
        }
        if (isLoading) {
            return (
                <LoadingFull />
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
                            <Title>{Action} Estado</Title>
                        </Body>
                    </Header>
                    <Content padder>
                        <Form>

                            <View>
                                <Picker selectedValue={selected}
                                    mode="dropdown"
                                    enabled={true}
                                    onValueChange={(value, index) => {
                                        this.setState({ selected: value });
                                    }}
                                >
                                    <Picker.Item label="Ansioso" value="Ansioso" />
                                    <Picker.Item label="Estresado" value="Estresado" />
                                    <Picker.Item label="Triste" value="Triste" />
                                    <Picker.Item label="Relajado" value="Relajado" />
                                    <Picker.Item label="Enojado" value="Enojado" />
                                    <Picker.Item label="Feliz" value="Feliz" />
                                    <Picker.Item label="Emocionado" value="Emocionado" />
                                    <Picker.Item label="Agradecido" value="Agradecido" />
                                    <Picker.Item label="Contento" value="Contento" />
                                    <Picker.Item label="Cansado" value="Cansado" />
                                    <Picker.Item label="Inseguro" value="Inseguro" />
                                    <Picker.Item label="Aburrido" value="Aburrido" />
                                </Picker>
                            </View>
                            <Textarea bordered placeholder="Describe como te sientes" rowSpan={8} />
                            <Button full><Text>{Action}</Text></Button>
                        </Form>
                    </Content>
                </Container>
            );
        }
    }
}