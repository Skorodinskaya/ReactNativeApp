import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Users from "./components/users/Users";
import Home from "./components/home/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UserPageNav from "./screens/users/UserPageNav";
import PostDetailsNav from "./screens/posts/PostDetailsNav";
import CommentDetailsNav from "./screens/comments/CommentDetailsNav";
import Comments from "./components/comments/Comments";

export default function App() {
    const BottomTabNavigator = createBottomTabNavigator()
    return (
<NavigationContainer>
    <BottomTabNavigator.Navigator>
        <BottomTabNavigator.Screen name={'Users'} component={UserPageNav}/>
        <BottomTabNavigator.Screen name={'Post'} component={PostDetailsNav}/>
        <BottomTabNavigator.Screen name={'Comments'} component={CommentDetailsNav}/>

    </BottomTabNavigator.Navigator>
</NavigationContainer>

    )
};

let styles = StyleSheet.create({
    container: {}
});