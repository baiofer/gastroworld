import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux'
import Start from '../src/screens/Start'
import Login from '../src/screens/Login'
import RegisterUser from '../src/screens/RegisterUser'


export default class GuestNavigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Stack key = 'root'>
          <Scene
            key={ 'Start' }
            component={ Start }
            navigationBarStyle={ styles.navBar }
            navBarButtonColor={ 'white' }
            title='Gastroworld'
          />
          <Scene
            key={ 'Login' }
            component={ Login }
            navigationBarStyle={ styles.navBar }
            navBarButtonColor={ 'white' }
            title='Iniciar sesión'
          />
          <Scene
            key={ 'RegisterUser' }
            component={ RegisterUser }
            navigationBarStyle={ styles.navBar }
            navBarButtonColor={ 'white' }
            title='Registrarme'
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