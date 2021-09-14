import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../../components/users/Users";
import UserDetails from "./UserDetails";

const UserPageNav = () => {
    const StackNavigator = createStackNavigator()
    return (
        <StackNavigator.Navigator>
           <StackNavigator.Screen name={'Users'} component={Users}/>
           <StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>
        </StackNavigator.Navigator>
    )
};
export default UserPageNav;

let styles = StyleSheet.create({});