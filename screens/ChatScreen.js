import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";



const ChatScreen = (props) =>{
    return (
        <View style={styles.container}>
            <Text>Chat screen ok </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ChatScreen;