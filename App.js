import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Camera from 'react-native-snap-camera';
import SnapEmoji from 'react-native-snap-emoji';
import SnapText from 'react-native-snap-text';


export default class App extends React.Component {

    // Component state
    state = {
        showTextInput: false,
        showEmojiPicker: false,
        cameraType: 'simulate'
    }

    // Toggle between showing and hiding emoji picker
    toggleEmojiPicker() {
        this.setState({ showEmojiPicker: !this.state.showEmojiPicker });
    }

    toggleCamera() {
        this.setState({ cameraType: this.state.cameraType === 'front' ? 'simulate' : 'front' });
    }

    // Toggle between showing and hiding text input
    toggleTextInput() {
        this.setState({ showTextInput: !this.state.showTextInput });
    }

    render() {
    return (
            <View style={styles.container}>
              <View style={styles.header}>
            <Text style={styles.title}>SnapForce</Text>
            <Text style={styles.button} onPress={this.toggleEmojiPicker.bind(this)}>
              😀
        </Text>
            <Text style={styles.button} onPress={this.toggleCamera.bind(this)}>
            { this.state.cameraType === 'front' ? '📷' : '( ͡° ͜ʖ ͡°)' }
        </Text>
            <Text style={styles.button} onPress={this.toggleTextInput.bind(this)}>
            ✏️
        </Text>
            </View>
            <SnapEmoji isVisible={this.state.showEmojiPicker}>
            <SnapText isVisible={this.state.showTextInput}>
            <Camera type={this.state.cameraType} />
            </SnapText>
            </SnapEmoji>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#fff'
  },
    header:{
        backgroundColor: 'blue',
        marginTop: Platform.select({
            ios: 0,
            android: 24
        })
    },
    title: {
        fontSize: 30,
        color: 'white'
    },
    button: {
        fontSize: 25,
        color: 'white',
        padding: 10
    }


});
