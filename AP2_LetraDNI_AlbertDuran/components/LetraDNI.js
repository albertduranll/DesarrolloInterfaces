/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const calculoLetraDNI = (dni)=>{

  const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P',
  'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  let pos = dni % 23;
  let letra = letras[pos];
  console.log(letra);

  return letra;
};

export class LetraDNI extends Component {

    constructor(props) {
        super(props);
        this.state = {letra: '', numeros: ''};
    }

    render() {
    return (
      <>
        <View style={styles.header}>
            <View style={{alignItems: 'center'}}>
                <Text style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
                }}>DNI</Text>
            </View>
            <View style={{alignItems: 'center'}}>
            <Text style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
                }}>LETRA</Text>
            </View>
        </View>
          <View style={styles.campos}>
            <View style={{alignItems: 'center'}}>
              <TextInput
                underlineColorAndroid={'blue'}
                maxLength={8}
                placeholder="DNI"
                keyboardType="numeric"
                onChangeText={(numeros) => {

                  this.setState({numeros}, () => {
                    // Do something here.
                    if (this.state.numeros.length >= 8)
                    {
                      this.setState({letra: calculoLetraDNI(this.state.numeros)});
                    }
                    else {
                      this.setState({letra: ''});
                    }
                  });
                }}
                value={this.state.numeros}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <TextInput
                underlineColorAndroid={'blue'}
                editable={false}
                placeholder="Letra"
                value={this.state.letra}
              />
            </View>
          </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  campos: {
    marginTop: 5,
    backgroundColor: '#ebdb93',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
  header: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
