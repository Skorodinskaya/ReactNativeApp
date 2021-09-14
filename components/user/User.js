import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import UserDetails from "../../screens/users/UserDetails";

const User = ({item, nav: {navigate}}) => {
    const onPress = () => {
       navigate('UserDetails', {data: item})
    }
    return <View style = {[styles.block]}>
        <Text style = {[styles.text]}>{item.name}</Text>
        <Button title = {"Details"} onPress = {onPress}/>
    </View>;
};
export default User;

let styles = StyleSheet.create({
    block: {
        width: 200,
        height: 20,
        backgroundColor: 'pink',
        margin: 20,
    },

    text: {
        textAlign: 'center',
        color: 'purple'
    }
});