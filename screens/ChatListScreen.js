import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";



const ChatListScreen = (props) =>{
    return (
        <View style={styles.container}>
            <Text>Chat list screen</Text>

            <Button title="Go to Chat Sceen" 
            onPress={()=>{props.navigation.navigate("ChatS")}}/>
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

export default ChatListScreen;