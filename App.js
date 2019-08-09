import Navigate from './src/Navigation/Navigate';
import React from 'react';
import {AppRegistry, Platform} from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <Navigate/>
        )
    }
}

if (Platform.OS === 'web') {
    AppRegistry.registerComponent('App', () => App);
    AppRegistry.runApplication('App', {
        rootTag: document.getElementById('root')
    });
}
