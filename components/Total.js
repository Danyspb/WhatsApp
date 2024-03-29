import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Total(props){

    const calculateTotal = props.getTotal;

    const [total, setTotal] = useState(0);

    useEffect(()=>{
        console.log('calculating');
        setTotal(calculateTotal());
    }, [calculateTotal]);

    return(
        <View >
            <Text>{`Total: ${total} cfa`}</Text>
        </View>
       
    );

}
