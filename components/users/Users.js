import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getUsers} from "../../services/api.service";
import User from "../user/User";

const Users = ({navigation}) => {
    const [users, setUsers] = useState();
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
    return <View style={[styles.base]}>
        <FlatList data={users}
                  renderItem={({item}) => <User item={item} nav={navigation}/>}
                  keyExtractor={item => '' + item.id}/>
    </View>;
};
export default Users;

let styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});