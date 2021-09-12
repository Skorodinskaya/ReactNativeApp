import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Users from "./components/Users";
import {StatusBar} from "expo-status-bar";

export default function App() {
    return <View style={[styles.container]}>
        <StatusBar style="auto"/>
        <Users/>
    </View>;
};

let styles = StyleSheet.create({
    container: {}
});