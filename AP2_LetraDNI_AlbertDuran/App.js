import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { LetraDNI } from './components/LetraDNI';

class App extends Component {
  render() {
    return (
        <View style={styles.txtInput}>
          <LetraDNI/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  txtInput: {
    backgroundColor: 'orange',
    fontSize: 10,
    fontWeight: '300',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
    },
});

export default App;
