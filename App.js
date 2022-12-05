import { useState, useEffect, useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Total from './components/Total';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatListScreen from './screens/ChatListScreen';
import ChatSettingsScreen from './screens/ChatSettingsScreen';



SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {

  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(()=>{

    const prepare = async()=>{
      try {
        await Font.loadAsync({
          "prefer": require('./assets/fonts/DancingScript-Medium.ttf'),
          "test": require('./assets/fonts/EmiliaKerenDemo.otf')
        })
      } catch (error) {
        console.log(error);
      }
      finally{
        setAppIsLoaded(true)
      }
    };

    prepare();
    // load font 

  },[SplashScreen.hideAsync()]);

  const onLayout = useCallback(async()=>{
    if(appIsLoaded){
       await SplashScreen.hideAsync();
    }
  });

 

  const [sandwich, setSandwic] = useState(0);
  const [water, setWater] = useState(0);


  const addSan = ()=>{
      setSandwic(sandwich=> sandwich+1)
  }
  const addWat = ()=>{
      setWater(water => water +1)
  }
  const getTotal = useCallback(()=>{
      return sandwich * 1300;
  }, [sandwich]);
   
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={ChatListScreen} />
          <Stack.Screen name='Settings' component={ChatSettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
    fontFamily: 'prefer',
  }

});
 