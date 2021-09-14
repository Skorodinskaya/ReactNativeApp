import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {getPosts} from "../../services/api.service";
import Post from "../post/Post";

const Posts = ({navigation}) => {
    const [posts, setPosts] = useState();
    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])
    return <View style = {[styles.base]}>
        <FlatList
            data={posts}
            renderItem={({item}) => <Post item={item} nav={navigation}/>}
            keyExtractor={item => '' + item.id}
        />
    </View>;
};
export default Posts;

let styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});