import React from 'react';
import {
    Container, Content,
    Header, Left,
    Form, Text,
    Button, Body,
    Icon, Title,
    Picker
} from 'native-base';

const Item = Picker.Item;
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
    onValueChange(value){
        this.setState({selected: value})
    }
    render() {
        const { estado, descripcion, isLoading, isModification } = this.state;
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
                            {isModification ? (<Title>Cambiar Estado</Title>) :
                                (<Title>Añadir Estado</Title>)
                            }
                        </Body>
                    </Header>

                    <Content>
                        <Form style={{marginTop: 100}}>
                            <Picker
                            mode="dropdown"
                            style={{width: undefined}}
                            placeholder="Select something"
                            placeholderStyle={{color: "#bfc6ea"}}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            >
                                <Item label="Wallet" value="key0"></Item>
                            </Picker>
                        </Form>
                    </Content>
                </Container>
            );
        }
    }
}