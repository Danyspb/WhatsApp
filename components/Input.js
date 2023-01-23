import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';

const Input = (props) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {props.label}
            </Text>
            <View style={styles.inputContainer}>
            
                <FontAwesome 
                name={props.icon} 
                size={20}  
                style={styles.icon}/>
            
                <TextInput  style={styles.input}/>

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
        flexDirection: 'row'
    },
    icon:{
        margin: 10,
        color: '#7f8c8d',

    },
    label:{
        marginVertical: 8,
        fontStyle: 'italic',
        letterSpacing: 0.3,
        color: '#1c1e21'

    },
    input:{
         color: '#1c1e21',
         flex: 1, 
         fontFamily: 'regular',
         letterSpacing: 0.3,
         paddingTop: 0,

    }
})
export default Input;
