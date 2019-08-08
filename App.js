import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Platform, Button, ImageBackground, FlatList} from 'react-native';
import Image from './assets/font-home.jpg';
import Api from "./src/Api";
import ProductListItem from "./src/components/ProductListItem";

export default class App extends React.Component{
    state = {
        items: null,
        loading: false,
    };

    constructor(props) {
        super(props);
        Api.tokenIsfind().then(() => {
            Api.getProductList().then((result) => {
                this.setState({
                    items: result.data,
                    links: result.links
                })
            });
        });
    }

    loadMore = () => {
        if (this.state.links['next'] && !this.state.loading) {
            this.setState({loading: true});
            Api.tokenIsfind().then(() => {
                Api.getProductList(this.state.links['next']).then((res) => {
                    this.setState({
                        items: [ ...this.state.items, ...res.data],
                        links: res.links,
                        loading: false
                    });
                });
            });
        }
    };

    render() {
        return (
            <ImageBackground source={Image} style={styles.backgroundImage}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>BileMo</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        style={styles.list}
                        keyExtractor={(item) => item.id.toString()}
                        data={this.state.items}
                        renderItem={({item}) => <ProductListItem data={item}/>}
                        onEndReachedThreshold={0.1}
                        onEndReached={() => this.loadMore()}
                    />
                </View>
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
        flex: 0.2,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    listContainer: {
        flex: 0.8,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    list: {
        width: '100%',
    },
    title: {
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    }
});

if (Platform.OS === 'web') {
    //AppRegistry.registerComponent('App', () => App);
    AppRegistry.runApplication('App', {
        rootTag: document.getElementById('root')
    });
}
