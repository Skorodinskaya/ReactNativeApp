import React from 'react';
import {StyleSheet, View} from 'react-native';
import Users from "./components/Users";
import {StatusBar} from "expo-status-bar";

export default function App () {
    return <View style={styles.container}>
        <StatusBar style = "auto"/>
        <Users/>
    </View>;
};


let styles = StyleSheet.create({
    container: {}
});