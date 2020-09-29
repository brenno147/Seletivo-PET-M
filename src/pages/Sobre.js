import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default () => {
    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={require('../../assets/suspeito.jpg')}/>
            <Text style={styles.text}>
                Sem divulgação de informações 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        marginHorizontal:5,
        justifyContent: "center",
        marginBottom:25
    },
    imageStyle:{
        width:300,
        height:210
    },
    text:{
        fontSize:18,
        marginVertical:10,
        textAlign: "justify"
    },
})