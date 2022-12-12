import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const PageContainer = (props) =>{View
    return (
        <View style={{...styles.container, ...props.style}}>
            {props.children }
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff',
    }
})
export default PageContainer;
