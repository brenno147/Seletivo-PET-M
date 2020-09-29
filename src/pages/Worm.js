import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default () => {
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Worm
            </Text>
            <Image style={styles.imageStyle} source={require('../../assets/worm.jpg')}/>
            <Text style={styles.text}>
                O worm é um tipo de malware mais perigoso que um vírus comum, pois sua propagação é rápida e ocorre sem controle da vítima. Assim que ele contamina um computador, o programa malicioso cria cópias de si mesmo em diferentes locais do sistema e se espalha para outras máquinas, seja por meio de Internet, mensagens, conexões locais, dispositivos USB ou arquivos. O objetivo do golpe, em geral, é roubar dados do usuário ou de empresas.
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
        width:255,
        height:140
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