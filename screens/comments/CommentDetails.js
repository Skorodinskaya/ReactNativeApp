import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CommentDetails = ({route: {params: {data}}}) => {
    return <View>
        <Text>{data.body}</Text>
    </View>;
};
export default CommentDetails;

let styles = StyleSheet.create({});