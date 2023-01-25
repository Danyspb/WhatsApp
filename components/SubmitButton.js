import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";


const SubmitButton  = props =>{

    const enabledBGColor = props.color || colors.primary;
    const disabledBGColor = colors.lightGrey;
    const bgColor = props.disabled ? disabledBGColor : enabledBGColor;
        
    

    return(

        <TouchableOpacity 
                    onPress={props.disabled ?  () => {} : props.onPress }
                style={{
                    ...styles.button, 
                    ...{backgroundColor: bgColor },
                    ...props.style}}
                    >
            <Text style={{color: props.disabled ? colors.grey: 'white'}} >{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button:{
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SubmitButton;