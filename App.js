import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Total from './components/Total';
import AppNavigator from './navigation/AppNavigator';


SplashScreen.preventAutoHideAsync();


export default function App() {

  const [fontsLoaded] = useFonts({
    'teko': require('./assets/fonts/Teko-Regular.ttf'),
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'dancing': require('./assets/fonts/DancingScript-Regular.ttf'),
    'emilia': require('./assets/fonts/EmiliaKerenDemo.otf'),
    'kavon': require('./assets/fonts/Kavoon-Regular.ttf'),
    'lobster': require('./assets/fonts/LobsterTwo-Regular.ttf'),
  });

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }

 

  // const [sandwich, setSandwic] = useState(0);
  // const [water, setWater] = useState(0);


  // const addSan = ()=>{
  //     setSandwic(sandwich=> sandwich+1)
  // }
  // const addWat = ()=>{
  //     setWater(water => water +1)
  // }
  // const getTotal = useCallback(()=>{
  //     return sandwich * 1300;
  // }, [sandwich]);
   
  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text:{
    fontSize: 25,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
    fontFamily: 'roboto',
  }

});
 