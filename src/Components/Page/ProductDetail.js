import React from 'react';
import {StyleSheet, Text, ScrollView, Image, View} from 'react-native';
import Color from "react-native-material-color";
import AppStyles from "../Styles";
import {COLOR_PRIMARY} from "../Styles";

export default class ProductDetail extends React.PureComponent {
    render () {
        const {_id, model, price, available, description, color, memory} = this.props.navigation.getParam('data');
        return (
            <ScrollView style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                <View style={{padding: 20}}>
                    {!available && (
                        <Text style={styles.notAvailable}>Non Disponible</Text>
                    )}
                    <Image style={styles.image} resizeMode="contain" source={require('../../../assets/product.png')}/>


                    <Text style={[styles.text, {textAlign: 'center'}]}>{price} €</Text>


                    <Text style={AppStyles.CLEAR_TEXT}>Description</Text>
                    <Text style={styles.text}>{description}</Text>
                    <Text style={styles.title}>Caractéristique</Text>
                    <Text style={styles.text}>{color}</Text>
                    <Text style={styles.text}>{memory}</Text>
                    <Text style={[styles.text, {textAlign: 'left'}]}>Ref. {_id}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLOR_PRIMARY,
    },
    image: {
        width: '100%',
        height: 300
    },
    text: {
        fontSize: 16,
        //color: 'red',
    },
    notAvailable: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 10,

        textAlign: 'center',
        textAlignVertical: 'center',

        borderWidth: 3,
        borderRadius: 1,

        borderColor: Color.RED[700],
        backgroundColor: Color.RED[500],
        color: 'white',

        fontSize: 18
    }
});