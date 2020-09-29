import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleButton from '../components/SimpleButton';

const PrevencaoMenu = ({navigation}) => {
    return(
        <View style={styles.container}>
            <SimpleButton textoPrincipal="Senha" navigation = {() => navigation.navigate("Senha")}/>
            <SimpleButton textoPrincipal="Antivirus" navigation = {() => navigation.navigate("Antivirus")}/>
            <SimpleButton textoPrincipal="Boas Práticas" navigation = {() => navigation.navigate("BoasPraticas")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#000000",
    },
})

export default PrevencaoMenu;