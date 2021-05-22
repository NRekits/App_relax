import React from 'react';
import {
    Container, Content,
    Button, Icon, Text
} from 'native-base';
import { View, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

export default class AudioPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isPlaying: false,
            volume: 1.0,
            playbackInstance: null,
            isBuffering: false,
            url: '',
            isLoading: true
        }
    }
    async componentDidMount(){
        this.setState({url: this.props.url});

        try{
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
                shouldDuckAndroid: true,
                staysActiveInBackground: true,
                playThroughEarpieceAndroid: true
            });
            await this.loadAudio();
        }catch(e){
            console.error(e);
        }
    }

    setOnPlaybackStatusUpdate = status => {
        this.setState({isBuffering: status.isBuffering});
    }

    async loadAudio(){
        const {isPlaying, volume, url} = this.state;
        try {
            const playbackInstance = new Audio.Sound();
            const source = {
                uri: url
            };
            console.log(url);

            const status = {
                shouldPlay: isPlaying,
                volume
            }

            playbackInstance.setOnPlaybackStatusUpdate(this.setOnPlaybackStatusUpdate);
            await playbackInstance.loadAsync(source, status, false);
            this.setState({playbackInstance, isLoading: false});
        }catch(e){
            console.error(e);
        }
    }

    handlePlayPause = async () => {
        const {isPlaying, playbackInstance} = this.state;
        try {
            isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync();
            this.setState({isPlaying: !isPlaying});
        }catch(e){
            console.error(e);
        }
    }

    render(){
        return(
            <Container>
                <Content>
                    <View style={{flexDirection: 'row'}}>

                        { this.state.isLoading ? (<Text>Loading</Text>): (
                        <Button bordered onPress={this.handlePlayPause}>
                            {this.state.isPlaying ? (
                                <Icon style={styles.control} name="pause" /> 
                            ): (
                                <Icon style={styles.control} name="play" /> 
                            )}
                        </Button>)
                        }


                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    controls: {
        fontSize: 24
    }
});