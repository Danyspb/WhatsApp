import React from "react";
import { Text, View, StyleSheet, Button, ImageBackground, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const ChatScreen = (props) =>{
    return (
        
        <SafeAreaView style={styles.container} edges={['right','bottom','bottom']}>
            <ImageBackground source={require('../assets/images/WallpaperDog-5554827.jpg')} style={styles.backgroundImage} />
            <View style={styles.inputContainer}>
                <Button title="Image" /> 
                <TextInput />
                <Button title="Camera" /> 
            </View>
        </SafeAreaView>
      
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        resizeMode: 'cover'
    },
    backgroundImage:{
        flex: 1
    },
    inputContainer:{
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 50,


    }
})

export default ChatScreen;