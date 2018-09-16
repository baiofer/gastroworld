import React, { Component } from 'react'
import { Text, Button, Icon } from 'native-base'

export default class AppButton extends Component {
    render() {
        const { action, iconName, iconColor, iconSize, title, bgColor } = this.props
        return(
            <Button block iconRight
                onPress={ action }
                style={{
                    backgroundColor: bgColor,
                    height: 50,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    marginBottom: 5,
                }}
            >
                <Text style={{ fontSize: 15 }}>{ title }</Text>
                <Icon
                    name={ iconName }
                    style={{ color: iconColor, fontSize: iconSize }}
                    type='FontAwesome'
                />
            </Button>
        )
    }
}