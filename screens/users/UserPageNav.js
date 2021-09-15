import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../../components/users/Users";
import UserDetails from "./UserDetails";
import Posts from "../../components/posts/Posts";

const UserPageNav = () => {
    const StackNavigator = createStackNavigator()
    return (
        <StackNavigator.Navigator>
           <StackNavigator.Screen name={'Users'} component={Users}/>
           <StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>
           <StackNavigator.Screen name={'Posts'} component={Posts}/>
        </StackNavigator.Navigator>
    )
};
export default UserPageNav;

let styles = StyleSheet.create({});