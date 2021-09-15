import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const CommentDetails = ({route: {params: {data}}}) => {
    return <View>
        <Text>{data.body}</Text>
    </View>;
};
export default CommentDetails;

let styles = StyleSheet.create({});