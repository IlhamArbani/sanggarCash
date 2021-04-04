import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { EditProfile, History, Home, Konfirmasi, Login, Pembayaran, Profile, Scan, Setting, SignUp, Splash, Tas } from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="History" component={History}/>
            <Tab.Screen name="Pembayaran" component={Pembayaran}/>
            <Tab.Screen name="Tas" component={Tas}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
            <Stack.Screen name="Scan" component={Scan} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}}/>
            <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}}/>
            <Stack.Screen name="Konfirmasi" component={Konfirmasi} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Router;