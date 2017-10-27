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

class VerifyEmail extends Component {
  state = { code: "" };

  handleSubmit = () => {
    // alert(this.state.email + ' ' + this.state.password);
    console.log(this.props);

    try {
      let newUser = this.confirm(this.state.code);
      alert("Succesfully verified");

      this.props.navigation.navigate("Login");
    } catch (exception) {
      alert(exception);
    }
  };

  confirm(code) {
    let userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });

    const cognitoUser = new CognitoUser({
      Username: this.props.navigation.state.params.email,
      Pool: userPool
    });

    return new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(code, true, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  resendCode = () => {
    let userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });

    const cognitoUser = new CognitoUser({
      Username: this.props.navigation.state.params.email,
      Pool: userPool
    });

    return new Promise((resolve, reject) => {
      cognitoUser.resendConfirmationCode((err, result) => {
        if (err) reject(err);
        alert("Confirmation code resent");
      });
    });
  };

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Text>Check your email for the verification code</Text>
        </CardSection>
        <CardSection>
          <Input
            label="Code "
            placeholder="111111"
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.handleSubmit.bind(this)}>Verify</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleSubmit.bind(this)}>Resend code</Button>
        </CardSection>
      </Card>
    );
  }
}

VerifyEmail.navigationOptions = {
  title: "Sign Up"
};

export default VerifyEmail;
