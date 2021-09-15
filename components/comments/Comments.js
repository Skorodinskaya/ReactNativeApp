import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getComments} from "../../services/api.service";
import Comment from "../comment/Comment";

const Comments = ({navigation}) => {
    const [comments, setComments] = useState();
    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])
    return (
        <View style={styles.base}>
            <FlatList
                data={comments}
                renderItem={({item}) => <Comment item={item} nav={navigation}/>}
                keyExtractor={item => '' + item.id}/>
        </View>
    )
};
export default Comments;

let styles = StyleSheet.create({
    base: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});