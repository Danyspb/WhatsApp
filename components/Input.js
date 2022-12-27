import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Input = (props) =>{
    return (
        <View style={styles.container}>
            <Text>
                {props.label}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
       width: '100%',
    },
    inputContainer:{
        width: '100%',
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
        backgroundColor: '#F4F8F7',

    }
})
export default Input;
