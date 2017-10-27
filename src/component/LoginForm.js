import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from "../lib";

import config from "../config/config";

import { Input, Card, CardSection, Button } from "./common";

class LoginForm extends Component {
  state = { email: "", password: "", newUser: "" };

  handleSubmit = async () => {
    // alert(this.state.email + ' ' + this.state.password);

    try {
      let userToken = await this.login(this.state.email, this.state.password);
      this.props.navigation.navigate("Dashboard");
    } catch (exception) {
      alert(exception);
    }
  };

  login(username, password) {
    let userpool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });

    let autheticationData = {
      Username: username,
      Password: password
    };

    let user = new CognitoUser({ Username: username, Pool: userpool });
    let authenticationDetails = new AuthenticationDetails(autheticationData);

    return new Promise((resolve, reject) => {
      user.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(result.getIdToken().getJwtToken()),
        onFailure: err => reject(err)
      });
    });
  }

  render() {
    const { navigate } = this.props.navigation;

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
          <Button onPress={this.handleSubmit.bind(this)}>Login</Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => navigate("Signup")}>Click to signup</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

// aws cognito-idp admin-confirm-sign-up \
//   --region us-east-2 \
//   --user-pool-id us-east-2_lpw08UyRk \
//   --username Test@test.com
