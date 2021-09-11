import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const User = ({item}) => {
    return <View style = {[styles.block]}>
        <Text style = {[styles.text]}>{item.name}</Text>
    </View>;
};
export default User;

let styles = StyleSheet.create({
    block: {
        backgroundColor: 'pink',
        margin: 10,
    },

    text: {
        color: 'purple',
        textAlign: 'center',
    }
});