import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Users from "./components/Users";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home";
import UserDetails from "./screens/UserDetails";

let StackNavigator = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName = 'Users'>
                <StackNavigator.Screen name={'Home'} component={Home}/>
                <StackNavigator.Screen name={'Users'} component={Users}/>
                <StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>

            </StackNavigator.Navigator>

        </NavigationContainer>
    )
};

let styles = StyleSheet.create({
    container: {}
});