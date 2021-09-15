import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const UserDetails = ({route: {params: {data}}, navigation:{navigate}}) => {
    const onPress = () => {
        // navigate('Posts', {data})
    }
    return <View>
        <Text>{data.name} - {data.email}</Text>
        <Button title = 'Posts' onPress = {onPress}/>
    </View>;
};
export default UserDetails;

let styles = StyleSheet.create({});