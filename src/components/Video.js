import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function App() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://player.vimeo.com/external/535473584.sd.mp4?s=acd96c8b59825e392eb973e638bcc4f3023b76bf&profile_id=164&oauth2_token_id=57447761',
                }}
                resizeMode="cover"
                isLooping
                shouldPlay
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    video: {
        width: 430,
        height: 200,
    },
    // container: {
    //     flex: 1,
    //     backgroundColor: 'white',
    // }
})
