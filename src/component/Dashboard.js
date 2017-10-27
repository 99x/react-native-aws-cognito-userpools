import React, { Component } from "react";
import { Text } from "react-native";


import {  Card, CardSection } from "./common";

class Dashboard extends Component {
  state = { code: "" };

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Text>Successfully Logged in</Text>
        </CardSection>
      </Card>
    );
  }
}

Dashboard.navigationOptions = {
  title: "Dashboard"
};

export default Dashboard;
