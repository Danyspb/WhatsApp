import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SettingsScreen = (props)=>{
    return(
        <View>
            <Text>Le reglage du salon de chat</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default SettingsScreen;