/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper'
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { useSelector } from 'react-redux';

import SplashScreen from './src/screen/splashscreen/SplashScreen';
import { Provider } from 'react-redux';
import store from './src/config/Store';
import AuthStackScreen from './src/navigation/AuthStack'
import MainTab from './src/tab/MainTab';
import DeleteStudent from './src/students/deletestudent/DeleteStudent';



const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
  console.log("Initial AuthState: ", authState);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>


        {
          authState !== false ? (
            
             <MainTab /> 
          ) :
            <AuthStackScreen />
        }



      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

