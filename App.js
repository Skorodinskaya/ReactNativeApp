import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Users from "./components/Users";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home";
import UserDetails from "./screens/UserDetails";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UserPageNavigator from "./screens/UserPageNavigator";


export default function App() {
    const BottomTabNavigator = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator tabBarOption={{tabStyle: {justifyContent: 'center', alignItems: "center"}}}>
                <BottomTabNavigator.Screen name={'Users'} component={UserPageNavigator}/>
                <BottomTabNavigator.Screen name={'Home'} component={Home}/>
            </BottomTabNavigator.Navigator>

        </NavigationContainer>
    )
};

let styles = StyleSheet.create({
    container: {}
});