import React from "react";
import { Text, View, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const ChatScreen = (props) =>{
    return (
        
        <SafeAreaView style={styles.container} edges={['right','bottom','bottom']}>
            <ImageBackground source={require('../assets/images/WallpaperDog-5554827.jpg')} style={styles.backgroundImage} />
            <View style={styles.inputContainer}>
                <TouchableOpacity onPress={()=> console.log("#0002A1")}>
                <Feather name="plus" size={24} color="#3498db" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> console.log("press")}>
                <Ionicons name="camera" size={24} color="#0002A1" />
                </TouchableOpacity>
                <TextInput />
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