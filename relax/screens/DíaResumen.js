import React from 'react';
import {
    Container, Content,
    Text, Button,
    List, ListItem,
    Header, Left,
    Body, Icon,
    Title, Footer,
    FooterTab, H2,
    Card, CardItem
} from 'native-base';

import { ESTADOS_COLOR, isDefined } from './../CommonFunctions';

export default class ReporteScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: '',
            triunfos: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            estado: this.props.route.params.estado,
            triunfos: [...this.props.route.params.triunfos],
            isLoading: false
        })
    }

    Item = (props) => {
        return(
        <ListItem style={{ borderBottomWidth: 1 }}>
            <Body>
                <Text>{props.nombre}</Text>
            </Body>
        </ListItem>);
    }
    render() {
        if (this.state.isLoading) {
            return (<Container>
                <Text>Is Loading</Text>
            </Container>);
        } else {
            const {triunfos, estado} = this.state;
            return (
                <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Header</Title>
                        </Body>
                    </Header>
                    <Card>
                        <CardItem style={{ backgroundColor: ESTADOS_COLOR[estado] }} header>
                            <H2 style={{ alignSelf: 'center', marginTop: 10 }}>{estado}</H2>
                        </CardItem>
                    </Card>
                    {(triunfos && isDefined(triunfos.length) && triunfos.length > 0) ?
                        (
                            <List keyExtractor={(item, index) => index.toString()} dataArray={triunfos} renderRow={this.Item}></List> 
                        ) :
                        (
                            <Content><Text>No se agregaron triunfos en el día</Text></Content>
                        )
                    }
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