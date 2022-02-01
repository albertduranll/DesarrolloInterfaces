import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { CalculadoraIMC } from './components/CalculadoraIMC.js';

class App extends Component {
  render() {
    return (
      <View style={styles.backgroundStyle}>
        <CalculadoraIMC/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    height:800,
    backgroundColor: 'purple',
    padding:10,
  },
});

export default App;
