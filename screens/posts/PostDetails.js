import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PostDetails = ({route: {params: {data}}}) => {
    return <View>
        <Text>{data.body}</Text>
    </View>;
};
export default PostDetails;

let styles = StyleSheet.create({});