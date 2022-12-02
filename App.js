import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(()=> {
    console.log('ca marche')
  },[count, newCount])

  const add = ()=>{
    setCount(plus => plus +1)
    if(count > 9){
      setCount(10)
    }
  }
  const dimu = ()=>{
    setNewCount(newCount -1)
    if(count < 1){
      setCount(0)
    }
  }
 
   
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
       <Button title='Touche pas +' onPress={add} />
        <Text style={styles.text}>{count}</Text>
        <Button title='Click Me -' onPress={dimu} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 25,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center'
  }

});
 