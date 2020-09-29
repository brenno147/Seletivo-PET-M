import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SimpleButton = ({ textoPrincipal, navigation}) => {
    return(
        <TouchableOpacity style = {styles.buttonContainer} onPress = {navigation}>
                <Text style = {styles.buttonText}>{textoPrincipal}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 100,
        width: "60%",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 6,
        borderColor: "#39ff14",
        backgroundColor: "#000000", 
    },
    buttonText:{
        fontSize: 22,
        color: "#39ff14",
    },
});

export default SimpleButton;