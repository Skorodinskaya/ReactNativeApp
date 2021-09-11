import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {getUsers} from "../services/api.service";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
    return <View style = {[styles.users]}>
        <StatusBar style='auto'/>
        <FlatList
            data={users}
            renderItem={(item) => <User item={item}/>}
            keyExtractor={item => '' + item.id}
        />
    </View>;
};
export default Users;

let styles = StyleSheet.create({
    users: {
        flex: 1,
        justifyContent: 'center',
    }
});