import React, { Component } from 'react'
import BackgroundImage from '../../components/BackgroundImage'
import AppButton from '../../components/AppButton'
import { View, StyleSheet } from 'react-native'
import * as firebase from 'firebase'
import { options, ChefForm } from '../../forms/ChefForm'
import t from 'tcomb-form-native'
const Form = t.form.Form
import { Card, Toast } from 'native-base'
import * as Texts from '../../utils/Texts'
import { Actions } from 'react-native-router-flux'

export default class AddChef extends Component {
    constructor() {
        super()
        this.state = {
            chef: {
                first_name: '',
                last_name: '',
                avatar: '',
                email: '',
                phone: '',
                country: ''
            }
        }
    }

    save() {
        const validate = this.refs.form.getValue()
        if (validate) {
            let data = {}
            const key = firebase.database().ref().child('chefs').push().key
            data[`chefs/${ key }`] = this.state.chef
            firebase.database().ref().update(data)
                .then( () => {
                    console.log(Texts.save)
                    Actions.ChefsList()
                })
        }
    }

    onChange(chef) {
        this.setState( { chef })
    }

    render() {
        const { chef } = this.state
        return(
            <BackgroundImage source={ require('../../../assets/images/bg-auth.png') }>
                <View style={ StyleSheet.container }>
                    <Card title={ Texts.chefForm } style={{ padding: 15 }}>
                        <View>
                            <Form
                                ref='form'
                                type={ ChefForm }
                                options={ options }
                                value={ chef }
                                onChange={ (v) => this.onChange(v) }
                            />
                        </View>
                        <AppButton
                            bgColor="rgba(255, 38, 74, 0.9)"
                            title={ Texts.addChefButton }
                            action={ this.save.bind(this) }
                            iconName="plus"
                            iconSize={ 30 }
                            iconColor="#fff"
                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(231, 228, 224, 0.8)',
        padding: 10
    }
})