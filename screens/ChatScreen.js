import React from "react";
import { Text, View, StyleSheet, Button, ImageBackground } from "react-native";
import backgroundImage from "../assets/images/WallpaperDog-5554827.jpg"

const ChatScreen = (props) =>{
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    },
    backgroundImage:{
        flex: 1
    }
})

export default ChatScreen;