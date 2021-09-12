import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const User = ({item}) => {
    return <View style = {[styles.block]}>
        <Text style = {[styles.text]}>{item.name}</Text>
    </View>;
};
export default User;

let styles = StyleSheet.create({
    block: {
        width: 200,
        height: 20,
        backgroundColor: 'pink',
        margin: 10,
    },

    text: {
        textAlign: 'center',
        color: 'purple'
    }
});