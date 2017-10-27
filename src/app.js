import React, { Component } from "react";
import { View } from "react-native";
import { StackNavigator } from "react-navigation";

import SignupForm from "./component/SignupForm";
import LoginForm from "./component/LoginForm";
import VerifyEmail from "./component/VerifyEmail";
import Dashboard from "./component/Dashboard";

import { Header } from "./component/common";

const navigationModel = props => {
  return <LoginForm navigation={props.navigation} />;
};

navigationModel.navigationOptions = {
  title: "Login"
};

const App = StackNavigator({
  Login: {
    screen: navigationModel,
    title: "Login",
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Signup: {
    screen: SignupForm,
    title: "Signup",
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  VerifyEmail: { screen: VerifyEmail, title: "Verify Email" },
  Dashboard: { screen: Dashboard, title: "Dashboard" }
});

export default App;
