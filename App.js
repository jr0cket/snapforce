import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.title}>SnapForce</Text>
            </View>
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
