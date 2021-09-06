
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screen/splashscreen/SplashScreen';
import SignIn from '../screen/auth/signIn/SignIn'
import SignUp from '../screen/auth/signup/SignUp';




const RootStack = createStackNavigator();

const AuthStackScreen = ({navigation}) => {
    return(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignIn" component={SignIn}/>
        <RootStack.Screen name="SignUp" component={SignUp}/>
    </RootStack.Navigator>
    )
    };

export default AuthStackScreen;