import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default () => {
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Virus
            </Text>
            <Image style={styles.imageStyle} source={require('../../assets/virus.jpg')}/>
            <Text style={styles.text}>
                Um vírus de computador é um programa ou trecho de código projetado para danificar seu PC através da corrupção de arquivos do sistema, utilização de recursos, destruição de dados ou sendo, de algum outro modo, um aborrecimento. Vírus são únicos dentre as outras formas de malware, pois podem se autorreplicar, ou seja, são capazes de se copiar para outros arquivos e computadores sem consentimento do usuário. Basicamente, eles são realmente contagiosos.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        backgroundColor: "#000000"
    },
    imageStyle:{
        width:300,
        height:200
    },
    headerText:{
        fontWeight:"bold",
        color: "#39ff14",
        fontSize: 22,
        marginVertical:10
    },
    text:{
        color: "#ffffff",
        fontSize:18,
        marginVertical:10,
        textAlign: "justify"
    },
})