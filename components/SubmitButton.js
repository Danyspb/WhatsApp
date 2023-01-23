import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";



const SubmitButton  = props =>{
    return(

        <TouchableOpacity style={styles.button}>
            <Text >Click Me</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "pink",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SubmitButton;