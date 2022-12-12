import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";



const AuthScreen = (props)=>{

    return(
        <SafeAreaView style={{flex: 1}}>
           <PageContainer style={{backgroundColor: 'blue'}}>
                <Text>
                    Hello motherfuck
                </Text>
           </PageContainer>
        </SafeAreaView>
    )
}

const  styles = StyleSheet.create({
   
})

export default AuthScreen;