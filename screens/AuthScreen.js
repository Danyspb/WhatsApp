import React from "react";

import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";





const AuthScreen = (props)=>{

    return(
        <SafeAreaView style={{flex: 1}}>
           <PageContainer>
                <Input label="First Name" icon="user"  />

                <Input label="Last Name" icon="user" />

                <Input label="Email" icon="mail" />

                <Input label="Password" icon="lock" />

                
           </PageContainer>
        </SafeAreaView>
    )
}

const  styles = StyleSheet.create({
   
})

export default AuthScreen;