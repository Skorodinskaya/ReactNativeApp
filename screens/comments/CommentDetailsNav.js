import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Comments from "../../components/comments/Comments";
import CommentDetails from "./CommentDetails";

const CommentDetailsNav = () => {
    const StackNavigator = createStackNavigator()
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'Comments'} component={Comments}/>
            <StackNavigator.Screen name={'CommentDetails'} component={CommentDetails}/>
        </StackNavigator.Navigator>
    )
};
export default CommentDetailsNav;

let styles = StyleSheet.create({});