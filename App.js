import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from 'react-native-snap-camera';
import SnapEmoji from 'react-native-snap-emoji';


export default class App extends React.Component {
  render() {
    return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.title}>SnapForce</Text>
            </View>
            <SnapEmoji isVisible={true}>
              <Camera type="back" />
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
    }

});
