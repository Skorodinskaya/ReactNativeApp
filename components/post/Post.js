import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Post = ({item, nav: {navigate}}) => {
    const onPress = () => {
        navigate('PostDetails', {data:item})
    }
    return <View style = {styles.block}>
        <Text style = {styles.text}>{item.title}</Text>
        <Button color = 'grey' title = 'Details' onPress = {onPress}/>
    </View>;
};
export default Post;

let styles = StyleSheet.create({
    block: {
        width: 200,
        height: 60,
        backgroundColor: 'pink',
        margin: 40,
    },

    text: {
        textAlign: 'center',
        color: 'purple',
        marginBottom: 6
    },

});