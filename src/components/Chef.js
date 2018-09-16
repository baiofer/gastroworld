import React, { Component } from 'react'
import { Card, Text } from 'native-base'
import RatingElement from './RatingElement'
import * as Texts from '../utils/Texts'

export default class Chef extends Component {
    render() {
        const { editChef, goHome, chef } = this.props
        return(
            <Card
                title={ chef.fullName }
                image={ require('../../assets/images/restaurant.png')}
            >
                <RatingElement elementId={ chef.id } />
                <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    { Texts.origin } { chef.pais }
                </Text>
                <AppButton
                    bgColor="rgba(255, 38, 74, 0.8)"
                    title={ Texts.editChef }
                    action={ editChef }
                    iconName="pencil"
                    iconSize={ 30 }
                    iconColor="#fff"
                />
                <AppButton
                    bgColor="rgba(28, 25, 21, 0.7)"
                    title={ Texts.home }
                    action={ goHome }
                    iconName="arrow-left"
                    iconSize={ 30 }
                    iconColor="#fff"
                />
            </Card>
        )
    }
}