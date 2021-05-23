import React from 'react';
import { Animated, StyleSheet, Dimensions, Easing } from 'react-native';
import { Icon, Container, Content, Header } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { withOrientation } from 'react-navigation';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function LoadingFull(props) {
    return (
        <Container style={style.Container}>
            <LinearGradient colors={['#00B0E8', '#BB8FCE']} style={style.background} />
            <Header transparent androidStatusBarColor="#00B0E8" />
            <Loading color={"white"} />
        </Container>
    );
}
export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spinAnim: new Animated.Value(0) };
    }

    componentDidMount() {
        Animated.loop(Animated.timing(
            this.state.spinAnim,
            {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )).start();
    }

    render() {
        const spin = this.state.spinAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
                <Content padder style={{ alignSelf: 'center' }}>
                    <Animated.View style={{transform: [{rotate: spin}]}}>
                        <Icon type={"FontAwesome"} style={{fontSize: 128, color: this.props.color}} name="spinner"/>
                    </Animated.View>
                </Content>
        );
    }


}
const style = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "stretch",
        justifyContent: "center",
        padding: 20,
        fontFamily: "Dosis",
        color: "white",
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: windowHeight
    }
});