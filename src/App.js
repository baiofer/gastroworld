import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebaseConfig from '../src/utils/firebase'
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig)
import GuestNavigation from '../navigations/GuestNavigation'
import UserNavigation from '../navigations/UserNavigation'
import Preloader from './components/Preloader';


console.disableYellowBox = true;

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isLogged: false,
      loaded: false
    }
  }

  async componentDidMount () {
		await firebase.auth().onAuthStateChanged((user) => {
      
			if(user !== null) {
				this.setState({
					isLogged: true,
					loaded: true
        });
			} else {
				this.setState({
					isLogged: false,
					loaded: true
        });
			}
		})
	}

  render() {
    const { isLogged, loaded } = this.state
    if (!loaded) {
      return <Preloader />
    }
    if (isLogged) {
      return <UserNavigation />
    } else {
      return<GuestNavigation />
    }
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#f4511e',
  },  
});
