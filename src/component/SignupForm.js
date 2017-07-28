import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from '../lib';

import config from '../config/config';

import { Input, Card, CardSection, Button } from './common';

class SignupForm extends Component {
  state = { email: '', password: '', newUser: '' };

  handleSubmit = () => {
    // alert(this.state.email + ' ' + this.state.password);

    try {
      let newUser = this.signup(this.state.email, this.state.password);
      alert('Succesfully created');
      console.log(newUser);
    } catch (exception) {
      alert(exception);
    }
  };

  signup(username, password) {
    let userpool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });

    let attributeDetails = new CognitoUserAttribute({
      Name: 'email',
      Value: username
    });

    return new Promise((resolve, reject) => {
      userpool.signUp(username, password, [attributeDetails], null, function(
        err,
        result
      ) {
        if (err) {
          reject(err);
        }

        resolve(result.user);
      });
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name "
            placeholder="Charith Wick"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
        </CardSection>
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
          <Button onPress={this.handleSubmit.bind(this)}>Signup</Button>
        </CardSection>
      </Card>
    );
  }
}

SignupForm.navigationOptions = {
  title: 'Sign Up'
};

export default SignupForm;

// aws cognito-idp admin-confirm-sign-up \
//   --region us-east-2 \
//   --user-pool-id us-east-2_lpw08UyRk \
//   --username Test@test.com
