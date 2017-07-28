import React, { Component } from 'react';
import { View } from 'react-native';

import SignupForm from './component/SignupForm';
import LoginForm from './component/LoginForm';

import { Header } from './component/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Login" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
