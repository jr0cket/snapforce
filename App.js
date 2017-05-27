import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from 'react-native-snap-camera';
import SnapEmoji from 'react-native-snap-emoji';




export default class App extends React.Component {

    // Component state
    state = {
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
            </View>
            <SnapEmoji isVisible={this.state.showEmojiPicker}>
            <Camera type={this.state.cameraType} />
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
        backgroundColor: 'blue'
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
