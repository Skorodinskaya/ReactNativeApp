import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Posts from "../../components/posts/Posts";
import PostDetails from "./PostDetails";

const PostDetailsNav = () => {
    const StackNavigator = createStackNavigator();
    return (
       <StackNavigator.Navigator>
           <StackNavigator.Screen name={'Posts'} component={Posts}/>
           <StackNavigator.Screen name={'PostDetails'} component={PostDetails}/>
       </StackNavigator.Navigator>
    )
};
export default PostDetailsNav;

let styles = StyleSheet.create({});