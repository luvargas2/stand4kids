import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'
import {Actions} from 'react-native-router-flux'
export default class Login extends React.Component {
  signup(){
    Actions.signup()
  }
  render() {
    return (
      <View style={styles.container}>
       <Logo/>
       <Form type="Iniciar sesión"/>
       <View style={styles.signupTextCont}>
       <Text>¿Aún no tienes cuenta?</Text>
       <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Regístrate</Text>
       </TouchableOpacity>
       </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupButton: {
    color: "black",
    fontSize: 17,
    textAlign:'center',
    fontWeight:'bold',
    fontWeight:'500'

  }
});
