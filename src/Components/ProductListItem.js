import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View,  TouchableOpacity, Icon} from 'react-native';
import {COLOR_PRIMARY, COLOR_PRIMARY_VARIANT} from "../Styles/Colors";

export default class ProductListItem extends React.PureComponent{
    render () {
        const {showDetails} = this.props;
        const {_id, model} = this.props.data.attributes;
        const {id} = this.props.data;
        return (
            <View style={styles.container}>
                <View style={[styles.row, {flex: 0.7}]}>
                    <Text style={styles.text}>{model}</Text>
                    <Text style={styles.text}>Ref: {_id}</Text>
                </View>
                <View style={[styles.row, {flex: 0.3}]}>
                    <TouchableOpacity onPress={() => showDetails(id)} style={styles.roundedButton}>
                        <Text style={{
                            fontSize: 50,
                            color: 'black'
                        }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

ProductListItem.propTypes = {
    data: PropTypes.object.isRequired,
    //onClick: PropTypes.func.isPrototypeOf()
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        margin: 15,
        elevation: 5,
        backgroundColor: COLOR_PRIMARY,
    },
    row: {
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    roundedButton: {
        borderWidth:2,
        borderColor: COLOR_PRIMARY_VARIANT,
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:80,
        backgroundColor: COLOR_PRIMARY,
        borderRadius:50,
    }
});