import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Platform, Button, ImageBackground, FlatList} from 'react-native';
import Api from "../../../src/Api/Api";
import ProductListItem from "../../../src/Components/ProductListItem";

export default class Home extends React.Component{
    state = {
        items: null,
        loading: false,
    };

    constructor(props) {
        super(props);
        Api.getProductList().then((result) => {
            this.setState({
                items: result.data,
                links: result.links
            })
        });
    }

    loadMore = () => {
        if (this.state.links['next'] && !this.state.loading) {
            this.setState({loading: true});
            Api.getProductList(this.state.links['next']).then((res) => {
                this.setState({
                    items: [ ...this.state.items, ...res.data],
                    links: res.links,
                    loading: false
                });
            });
        }
    };

    showDetails = (link) => {
        //this.setState({loading: true});
        Api.getSingleProduct(link).then((data) => {
            this.props.navigation.navigate("ProductDetail", { data: data.attributes })
        });
    };

    render() {//source={require('../../../assets/font-home.jpg')}
        return (
            <ImageBackground style={styles.backgroundImage}>
                <View style={styles.listContainer}>
                    <FlatList
                        style={styles.list}
                        keyExtractor={(item) => item.id.toString()}
                        data={this.state.items}
                        renderItem={({item}) => <ProductListItem showDetails={this.showDetails} data={item}/>}
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
    // titleContainer: {
    //     flex: 0.2,
    //     width: '100%',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 100,
    //         height: 100,
    //     },
    //     shadowOpacity: 1,
    //     shadowRadius: 1.00,
    //     elevation: 9999,
    // },
    listContainer: {
        flex: 1,
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