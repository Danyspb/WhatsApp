import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import SigneUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import colors from "../constants/colors";
import logo from '../assets/images/whatsap.png'

const AuthScreen = (props)=>{

    const [isSignIn, setIsSignIn] = useState();
    const [isSignUp, setIsSignUP] = useState(false);

    return(
        <SafeAreaView style={{flex: 1}}>
           <PageContainer>
            <View style={styles.logoContainer}>
                <Image  source={logo} style={styles.logoStyle} resizeMode="contain" />
            </View>
               {
                isSignUp ?
                <SigneUpForm /> : 
                <SignInForm /> 
               }  

               <TouchableOpacity
                onPress={()=> setIsSignUP(prevState => !prevState)}
                style={styles.linkContainer}
                >

                    <Text style={styles.link}>
                        {`Swith to ${isSignUp ? "Singn In" : "Sign Up"}`}
                    </Text>
               </TouchableOpacity>     
           </PageContainer>
        </SafeAreaView>
    )
}

const  styles = StyleSheet.create({
    linkContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15, 
    },
    link:{
        color: colors.blue,
        fontFamily: 'lobster'

       },
       logoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
       },
       logoStyle:{
        width: 110,
        height: 110
       }
})

export default AuthScreen;