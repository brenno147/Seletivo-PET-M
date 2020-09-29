import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SimpleButton from '../components/SimpleButton';

const Homepage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    CiberSegurança
                </Text>
            </View>
            <SimpleButton textoPrincipal="Tipos de malware" navigation = {() => navigation.navigate("MalwareMenu")}/>
            <SimpleButton textoPrincipal="Formas de prevenção" navigation = {() => navigation.navigate("PrevencaoMenu")}/>
            <SimpleButton textoPrincipal="Casos Famosos" navigation = {() => navigation.navigate("CasosMenu")}/>
            <SimpleButton textoPrincipal="Sobre mim" navigation = {() => navigation.navigate("Sobre")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems:"center",
        backgroundColor: "#000000",
    },
    headerText:{
        fontWeight:"bold",
        color: "#39ff14",
        fontSize: 26,
    },
    headerContainer:{
        justifyContent:"center",
        height: "20%",
        alignItems:"center"
    }
})

export default Homepage;