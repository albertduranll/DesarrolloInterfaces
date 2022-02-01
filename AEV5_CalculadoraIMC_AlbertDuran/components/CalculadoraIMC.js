/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import { calcularIMC, getResultColor } from '../utils/utils';

export class CalculadoraIMC extends Component {

    constructor(props){
        super(props);
        this.state = {peso: 0, altura: 0, resultado:'', imc:0};
    }

    actualizaResultado = (result, imc) => {
        this.setState({
             resultado: result,
             imc:  imc,
        });
    }


    clickImc = ()=>{

        console.log('Peso indicado:' +  this.state.peso);
        console.log('Altura indicada: ' + this.state.altura);

        let imc = calcularIMC(this.state.peso, this.state.altura);

        let imcResult = '';

        if (!isNaN(imc)){
            if (imc < 18.5)
            {
                imcResult = 'Peso insuficiente';
            }
            else if (imc >= 18.5 && imc <= 24.9)
            {
                imcResult = 'Normopeso';
            }
            else if (imc >= 25 && imc <= 26.9)
            {
                imcResult = 'Sobrepeso grado I';
            }
            else if (imc >= 27 && imc <= 29.9)
            {
                imcResult = 'Sobrepeso grado II (preobesidad)';
            }
            else if (imc >= 30 && imc <= 34.9)
            {
                imcResult = 'Obesidad de tipo I';
            }
            else if (imc >= 35 && imc <= 39.9)
            {
                imcResult = 'Obesidad de tipo II';
            }
            else if (imc >= 40 && imc <= 49.9)
            {
                imcResult = 'Obesidad de tipo III (mórbida)';
            }
            else if (imc >= 50)
            {
                imcResult = 'Obesidad de tipo VI (extrema)';
            }
        }

        // this.state.resultado = imcResult;
        this.actualizaResultado(imcResult, imc);
        console.log('Resultado: ' + this.state.resultado);
    }

    render() {
        return (
            <>
                <View style={styles.body}>
                    <Text style={styles.dataTxt}>Calculadora IMC</Text>
                </View>
                <View style={styles.infoWindow}>
                    <Text style={styles.dataTxt}>Datos</Text>

                    <Text style={styles.dataTitle}>PESO</Text>
                    <TextInput
                        underlineColorAndroid={'grey'}
                        placeholder={'Introduce tu peso'}
                        keyboardType={'numeric'}
                        style={{marginBottom:15}}
                        onChangeText={(peso) => this.setState({peso})}
                        value={this.state.peso}
                    />

                    <Text style={styles.dataTitle}>ALTURA</Text>
                    <TextInput
                        underlineColorAndroid={'grey'}
                        placeholder={'Introduce tu altura'}
                        keyboardType={'numeric'}
                        onChangeText={(altura) => this.setState({altura})}
                        value={this.state.altura}
                    />

                    <Text style={styles.buttonIMC} onPress={this.clickImc}>Calcular IMC</Text>

                    <Text>Resultado</Text>
                    <Text style={{marginBottom: 15, color: getResultColor(this.state.imc)}}>{this.state.resultado}</Text>
                </View>
                <Text>Created by Albert Duran</Text>
            </>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        margin: 10,
        backgroundColor:'purple',
    },
    infoWindow: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom:10,
    },
    dataTxt:{
        margin: 10,
        fontSize: 24,
        color:'red',
    },
    dataTitle:{
        fontWeight: 'bold',
        color:'blue',
        fontSize: 12,
    },
    buttonIMC:{
        textAlign:'center',
        color:'cyan',
        margin:15,
        padding:10,
        borderBottomColor: 'cyan',
        borderBottomWidth: 1,
        borderTopColor: 'cyan',
        borderTopWidth: 1,
    },
    resultTxt_orange:{
        color:'orange',
        marginBottom: 15,
    },
    resultTxt_green:{
        color:'green',
        marginBottom: 15,
    },
    resultTxt_red:{
        color:'red',
        marginBottom: 15,
    },
});
