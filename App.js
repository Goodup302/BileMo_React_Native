import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Platform, Button, ImageBackground, FlatList} from 'react-native';
import Image from './assets/font-home.jpg';
import {API, API_TOKEN, getToken} from "./src/Api";

const request = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const json = await response.json();
    console.log(json);
};

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: API.getProductList()
        };
        API.getProductList().then((res) =>
            this.state = {
                items: res.data.attributes
            }
        );
        console.log(this.state.items)

        // console.log(API.getToken().then(data => console.log(data)))
        // console.log(API_TOKEN)
        //request();
    }

    render () {
        return (
            <ImageBackground source={Image} style={styles.backgroundImage}>
                <View style={styles.titleContainer}>
                    <Text style={styles.text}>BileMo</Text>
                    <Button title="Rechercher" onPress={() => {}}/>
                </View>

                <FlatList
                    data={this.state.items}
                    renderItem={({item}) => <Text>{item.id}</Text>}
                />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex: 1,
    },
    titleContainer: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    }
});


if (Platform.OS === 'web') {
    AppRegistry.registerComponent('App', () => App);
    AppRegistry.runApplication('App', {
        rootTag: document.getElementById('root')
    });
}
