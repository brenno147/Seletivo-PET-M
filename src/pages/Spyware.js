import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default () => {
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Spyware
            </Text>
            <Image style={styles.imageStyle} source={require('../../assets/spy.png')}/>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id lectus eros. Nulla varius euismod mattis. Etiam consequat, risus non mattis congue, ipsum ipsum eleifend urna, vel hendrerit urna urna.
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
        height:168
    },
    headerText:{
        fontWeight:"bold",
        color: "#39ff14",
        fontSize: 22,
        marginVertical:10
    },
    text:{
        color: "#ff0000",
        fontSize:18,
        marginVertical:10,
        textAlign: "justify"
    },
})