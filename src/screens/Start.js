import React, { Component } from 'react'
import { View } from 'react-native'
import BackgroundImage from '../components/BackgroundImage'
//import Toast from 'react-native-simple-toast'
import * as firebase from 'firebase'
import facebook from '../utils/facebook'
import { Actions } from 'react-native-router-flux'
import AppButton from '../components/AppButton';
import * as Texts from '../utils/Texts'

export default class Start extends Component {
    login() {
        Actions.Login()
    }

    register() {
        Actions.RegisterUser()
    }

    facebook() {

    }

    render() {
        return(
            <BackgroundImage source={ require('../../assets/images/login-bg.png') }>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <AppButton
                        bgColor="rgba(111, 38, 74, 0.7)"
	      				title={ Texts.enter }
	    				action={ this.login.bind(this) }
	    				iconName="sign-in"
	    				iconSize={ 30 }
	    				iconColor="#fff"
                    />
                    <AppButton
                        bgColor="rgba(200, 200, 50, 0.7)"
	    				title={ Texts.register }
	    				action={ this.register.bind(this) }
	    				iconName="user-plus"
	    				iconSize={ 30 }
	    				iconColor="#fff"
                    />
                    <AppButton
                        bgColor="rgba(67, 67, 146, 0.7)"
						title={ Texts.facebook }
						action={ this.facebook.bind(this) }
						iconName="facebook"
						iconSize={ 30 }
						iconColor="#fff"
                    />
                </View>
            </BackgroundImage>
        )
    }
}