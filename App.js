import Navigate from './src/Navigation/Navigate';
import React from 'react';
import {AppRegistry, Platform} from "react-native";
import Settings from "./app.json";

export default class App extends React.Component {
    render() {
        return (
            <Navigate/>
        )
    }
}

if (Platform.OS === 'web') {
    AppRegistry.registerComponent(Settings.name, () => App);
    AppRegistry.runApplication(Settings.name, {
        rootTag: document.getElementById('root')
    });
}
