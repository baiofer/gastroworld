import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class EmptyLabel extends Component {
    render() {
        const { text } = this.props
        return(
            <View style={ styles.emptyView }>
                <Text style={ styles.emptyText }>
                    { text }
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    emptyView: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 15,
        marginBottom: 15
    },
    emptyText: {
        backgroundColor: 'rgba(10, 255, 10, 1)',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 15
    }
})