import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Users from "../components/Users";
import UserDetails from "./UserDetails";

const StackNavigator = createStackNavigator();

const UserPageNavigator = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'users'} component={Users}/>
            <StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>
        </StackNavigator.Navigator>
    )
};
export default UserPageNavigator;

let styles = StyleSheet.create({});