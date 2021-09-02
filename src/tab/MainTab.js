
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screen/screens/HomeScreen';
import Table from '../dummy/Table'
import DetailsScreen from '../screen/screens/DetailScreen';
import SettingsScreen from '../screen/screens/SettingScreen';
import ProfileScreen from '../screen/screens/ProfileScreen';
import ExploreScreen from '../screen/screens/ExploreScreen';

import AddStudent from '../students/addstudent/AddStudent' 
import FetchStudents from '../students/fetchstudents/FetchStudents';
import DeleteStudent from '../students/deletestudent/DeleteStudent';


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={FetchStudents} options={{
            title: 'All Students',
            // headerLeft: () => (
            //     <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            // )
        }} />
        {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}

    </HomeStack.Navigator>
);


const DeleteStack = createNativeStackNavigator();


const DeleteStackScreen = ({ navigation }) => (
    <DeleteStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <DeleteStack.Screen name="DeleteStudent" component={DeleteStudent}  options={{title: 'Delete Student'}} />
        {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}

    </DeleteStack.Navigator>
);




const ExploreStack = createNativeStackNavigator();

// function ExploreStackScreen() {
//     return (
const ExploreStackScreen = ({ navigation }) => (
    <ExploreStack.Navigator screenOptions={{
        headerStyle: {
            // backgroundColor: '#1f65ff',
            backgroundColor: '#d02860',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#d02860" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </ExploreStack.Navigator>
);


const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

export default function MainTab() {
    return (

        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="AddStudent"
                component={AddStudent}
                options={{
                    tabBarLabel: 'Add New',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="add-circle-sharp" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Delete"
                component={DeleteStackScreen}
                options={{
                    tabBarLabel: 'Delete',
                    // tabBarColor: '#694fad',
                    tabBarColor: '#009387' ,
                    tabBarIcon: ({ color }) => (
                        <Icon name="md-trash-sharp" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreStackScreen}
                options={{
                    tabBarLabel: 'Explore',
                    // tabBarColor: '#d02860',
                    tabBarColor: '#009387' ,
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-aperture" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>

    );
}
