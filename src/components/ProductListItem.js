import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class ProductListItem extends React.PureComponent{
    render () {
        const {_id, model} = this.props.data.attributes;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{model}</Text>
                <Text style={styles.text}>Ref: {_id}</Text>
            </View>
        );
    }
}

ProductListItem.propTypes = {
    data: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    container: {
        //width: '50%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: 'white',
    }
});