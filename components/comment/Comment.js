import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const Comment = ({item, nav: {navigate}}) => {
    const onPress = () => {
        navigate('CommentDetails', {data:item})
    }
    return <View>
        <Text>{item.name}</Text>
        <Button title ={'Details'} onPress = {onPress}/>
    </View>;
};
export default Comment;

let styles = StyleSheet.create({});