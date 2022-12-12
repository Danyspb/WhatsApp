import React from "react";
import { StyleSheet, Text, View } from "react-native";



const AuthScreen = (props)=>{

    return(
        <View style={styles.container}>
           <Text  >
           login Screen
           </Text>
        </View>
    )
}

const  styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AuthScreen;