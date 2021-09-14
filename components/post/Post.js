import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const Post = ({item, nav: {navigate}}) => {
    const onPress = () => {
        navigate('PostDetails', {data:item})
    }
    return <View>
        <Text>{item.title}</Text>
        <Button title = 'Details' onPress = {onPress}/>
    </View>;
};
export default Post;

let styles = StyleSheet.create({});