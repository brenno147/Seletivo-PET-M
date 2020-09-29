import React from 'react';
import {StyleSheet, View} from 'react-native';
import SimpleButton from '../components/SimpleButton';

const MalwareMenu = ({navigation}) => {
    return(
        <View style={styles.container}>
            <SimpleButton textoPrincipal="Stuxnet" navigation = {() => navigation.navigate("Stuxnet")}/>
            <SimpleButton textoPrincipal="Anonymous" navigation = {() => navigation.navigate("Anonymous")}/>
            <SimpleButton textoPrincipal="ASTRA" navigation = {() => navigation.navigate("Astra")}/>
            <SimpleButton textoPrincipal="Adrian Lamo" navigation = {() => navigation.navigate("AdrianLamo")}/>

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

export default MalwareMenu;