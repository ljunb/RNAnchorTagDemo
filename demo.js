/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Image
} from 'react-native';
import AnchorView from "react-native-anchor-tag";

export default class RNAnchorTagDemo extends Component {
    tagList = [
        {name: '远处云层', x: 50, y: 100},
        {name: '明亮的太阳', x: 300, y: 220},
        {name: '书页', x: 140, y: 245},
        {name: '小清新的地板', x: 280, y: 320}
    ];

    renderAnchorItem = (tag, key) => {
        return <AnchorView key={key} anchor={tag}/>
    };

    render() {
        const uri = 'http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg';
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={{uri}}>
                    {this.tagList.map(this.renderAnchorItem)}
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 15
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    img: {
        width: Dimensions.get('window').width - 15 * 2,
        height: Dimensions.get('window').width - 15 * 2,
    }
});