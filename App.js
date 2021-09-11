import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Users from "./components/Users";

const App = () => {
    return <View style={styles.container}>
        <StatusBar style = "auto"/>
        <Users/>
    </View>;
};
export default App;

let styles = StyleSheet.create({
    container: {}
});