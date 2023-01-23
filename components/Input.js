import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';



const Input = (props) =>{



    
    const Feat = () =>{
        return(
            
            <Feather
                name={props.icon} 
                size={20}  
                style={styles.icon}/>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {props.label}
            </Text>
            <View style={styles.inputContainer}>

                <Feat />
                <TextInput  style={styles.input}/>
            </View>
            {
              props.errorText &&
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText}</Text>
                </View>
            }

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
        fontWeight: 'bold',
        letterSpacing: 0.3,
        color: '#1c1e21'

    },
    input:{
         color: '#1c1e21',
         flex: 1, 
         fontFamily: 'regular',
         letterSpacing: 0.3,
         paddingTop: 0,
    },
    errorContainer:{
        marginVertical: 5
    },
    errorText:{
        color: 'red',
        fontSize: 13,
        fontFamily: 'regular',
        letterSpacing: 0.3,
        fontStyle: 'italic'
    }
})
export default Input; 
