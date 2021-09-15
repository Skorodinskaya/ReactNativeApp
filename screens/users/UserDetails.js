import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const UserDetails = ({route: {params: {data}}, navigation:{navigate}}) => {
    const onPress = () => {
        navigate('Posts', {data})
    }
    return <View>
        <Text>{data.name} - {data.email}</Text>
        <Button title = 'Posts' onPress = {onPress}/>
    </View>;
};
export default UserDetails;

let styles = StyleSheet.create({});