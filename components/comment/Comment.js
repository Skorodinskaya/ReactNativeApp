import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const Comment = ({item, nav: {navigate}}) => {
    const onPress = () => {
        navigate("CommentDetails", {data:item})
    }

    return <View style = {styles.block}>
        <Text style = {styles.text}>{item.id} - {item.name}</Text>
        <Button color = 'green' title = 'Comments' onPress ={onPress}/>
    </View>;
};
export default Comment;

let styles = StyleSheet.create({
    block: {
        width: 200,
        height: 60,
        backgroundColor: 'pink',
        margin: 20,
    },

    text: {
        textAlign: 'center',
        color: 'purple',
        marginBottom: 6
    },
});