import React, { Component } from 'react'
import AppButton from './AppButton'
import { StyleSheet, View } from 'react-native'

export default class AddButton extends Component {
    render() {
        const { addElement, text } = this.props
        return(
            <View style={ styles.buttonContainer }>
                <AppButton
                    bgColor="rgba(255, 38, 74, 0.6)"
                    title={ text }
                    action={ addElement }
                    iconName="plus"
                    iconSize={ 30 }
                    iconColor="#fff"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
    }
})