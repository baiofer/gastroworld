import React, { Component } from 'react'
import BackgroundImage from '../../components/BackgroundImage'
import Preloader from '../../components/Preloader'
import { StyleSheet, FlatList } from 'react-native'
import { ListItem } from 'native-base'
import * as firebase from 'firebase'
import EmptyLabel from '../../components/EmptyLabel'
import AddButton from '../../components/AddButton'
import { Actions } from 'react-native-router-flux'
import * as Texts from '../../utils/Texts'

export default class ChefsList extends Component {
    constructor() {
        super()
        this.state = {
            chefs: [],
            loaded: false,
        }
        this.refChefs = firebase.database().ref().child('chefs')
    }

    componentDidMount() {
        this.refChefs.on('value', snapshot => {
            let chefs = []
            snapshot.forEach( row => {
                chefs.push({
                    id: row.key,
                    first_name: row.val().first_name,
                    last_name: row.val().last_name,
                    full_name: `${ row.val().first_name} ${ row.val().last_name }`,
                    avatar: row.val().avatar,
                    email: row.val().email,
                    phone: row.val().phone,
                    country: row.val().country
                })
            });
            this.setState({
                chefs,
                loaded: true
            })
        })
    }
    addChef() {
        Actions.AddChef()
    }

    chefDetail(chef) {
        Actions.DetailChef(chef)
    }

    renderChef(chef) {
        return(
            <ListItem
                //containerStyle={ styles.item }
                //titleStyle={ styles.title }
                title={ `${ chef.full_name }${ Texts.cuisine } ${ chef.country }.` }
                //leftAvatar={{ source: chef.avatar }}
                onPress={ () => this.chefDetail(chef) }
                rightIcon={{ name: 'arrow-right', type: 'FontAwesome', style: styles.listIconStyle }}
            />
        )
    }

    render() {
        const { loaded, chefs } = this.state
        if (!loaded) {
            return <Preloader />
        }
        if (!chefs.length) {
            return(
                <BackgroundImage source={ require('../../../assets/images/bg-auth.png')}>
                    <EmptyLabel text={ Texts.emptyLabel } />
                    <AddButton addElement={ this.addChef.bind(this) } text={ Texts.textAddButton } />
                </BackgroundImage>
            )
        }
        return (
            <BackgroundImage source={ require('../../../assets/images/bg-auth.png')}>
                <FlatList
                    data={ chefs }
                    renderItem={ (data) => this.renderChef(data.item) }
                    keyExtractor={ (data) => data.id }
                />
                <AddButton addElement={ this.addChef.bind(this) } text={ Texts.textAddButton } />
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#fff'
    },
    listIconStyle: {
        marginRight: 10,
        fontSize: 15,
        color: 'rgba(255, 38, 74, 0.6)'
    },
    item: {
        padding: 0,
        backgroundColor: 'rgba(206, 206, 206, 0.6)'
    }
})