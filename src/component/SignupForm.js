import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Input, Card, CardSection, Button } from './common';

class SignupForm extends Component {
  state = { email: '', name: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@abc.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>Signup</Button>
        </CardSection>
      </Card>
    );
  }
}

export default SignupForm;
