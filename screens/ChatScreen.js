import React, { useCallback, useState } from "react";
import { Text, View, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const ChatScreen = (props) =>{

    const [message, setMesage] = useState('');

   const sendMessage = useCallback(()=>{
    setMesage("");
   }, [message])
    
    return (
        
        <SafeAreaView style={styles.container} edges={['right','bottom','bottom']}>
            <ImageBackground source={require('../assets/images/WallpaperDog-5554827.jpg')} style={styles.backgroundImage} />
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.button} onPress={()=> console.log("#0002A1")}>
                <Feather name="plus" size={24} color="#5837D0" />
                </TouchableOpacity>

                <TextInput 
                style={styles.textbox} 
                onChangeText={text=> setMesage(text)}
                value={message}
                onSubmitEditing={sendMessage}
                />

                { message === "" && <TouchableOpacity style={styles.button} onPress={()=> console.log("press")}>
                <Ionicons name="camera" size={24} color="#5837D0" />
                </TouchableOpacity>}

                { message !== "" && <TouchableOpacity style={{...styles.button, ...styles.sendButton}} onPress={sendMessage}>
                <Feather name="send" size={19} color="#fff" />
                </TouchableOpacity>}

                
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
    },
    textbox:{
        flex: 1,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#E8C4C4',
        marginHorizontal: 10,
        paddingHorizontal: 12
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 30
    },
    sendButton:{
        backgroundColor: '#A460ED',
        borderRadius: 45,
        padding: 5,
        width: 30
        
    }
})

export default ChatScreen;