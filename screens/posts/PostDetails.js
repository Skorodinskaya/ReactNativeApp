import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const PostDetails = ({route: {params: {data}}}) => {
    return <View>
        <Text>{data.body}</Text>
    </View>;
};
export default PostDetails;

let styles = StyleSheet.create({});