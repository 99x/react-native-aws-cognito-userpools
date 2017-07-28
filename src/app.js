import React, { Component } from 'react';
import { View } from 'react-native';

import SignupForm from './component/SignupForm';

import { Header } from './component/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <SignupForm />
      </View>
    );
  }
}

export default App;
