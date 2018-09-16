import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import Logout from '../src/screens/Logout'
import ChefsList from '../src/screens/chefs/ChefsList'
import AddChef from '../src/screens/chefs/AddChef'
import DetailChef from '../src/screens/chefs/DetailChef'


export default class UserNavigation extends Component {
    constructor(props) {
        super(props)
    }

    renderHomeButton() {
        return (
            <TouchableOpacity style={ styles.cartButton } onPress={ () => Actions.ChefsList() }>
                <Icon 
                    style={{ color: 'white', fontSize: 25 }}
                    name="home" 
                    type='FontAwesome'
                />
            </TouchableOpacity>
        )
    }

    renderMenuButton() {
        return (
        <TouchableOpacity style={ styles.cartButton } onPress={ () => Actions.Logout() }>
            <Icon 
                style={{color: 'white', fontSize: 20 }} 
                name="bars"
                type='FontAwesome'
            />
        </TouchableOpacity>
        )
    }

    render() {
        return (
            <Router>
                <Stack key = 'root'>
                    <Scene
                        key={ 'ChefsList' }
                        component={ ChefsList }
                        navigationBarStyle={ styles.navBar }
                        navBarButtonColor={ 'white' }
                        renderLeftButton={ this.renderMenuButton() }
                        title='Chefs'
                    />
                    <Scene
                        key={ 'AddChef' }
                        component={ AddChef }
                        navigationBarStyle={ styles.navBar }
                        navBarButtonColor={ 'white' }
                        renderRightButton={ this.renderHomeButton() }
                        renderLeftButton={ this.renderMenuButton() }
                        title='Añadir chef'
                    />
                    <Scene
                        key={ 'DetailChef' }
                        component={ DetailChef }
                        navigationBarStyle={ styles.navBar }
                        navBarButtonColor={ 'white' }
                        renderRightButton={ this.renderHomeButton() }
                        renderLeftButton={ this.renderMenuButton() }
                        title='Detalle del chef'
                    />
                    <Scene
                        key={ 'Logout' }
                        component={ Logout }
                        navigationBarStyle={ styles.navBar }
                        navBarButtonColor={ 'white' }
                        title='Cerrar sesión'
                    />
                </Stack>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#f4511e',
  },  
});