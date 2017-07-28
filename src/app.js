import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SignupForm from './component/SignupForm';
import LoginForm from './component/LoginForm';

import { Header } from './component/common';

const navigationModel = props => {
  return <LoginForm navigation={props.navigation} />;
};

navigationModel.navigationOption = {
  title: 'Login'
};

const App = StackNavigator({
  lLogin: { screen: navigationModel, title: 'Login' },
  Signup: { screen: SignupForm, title: 'Signup' }
});

export default App;
