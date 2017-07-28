import React from 'react';
import { View } from 'react-native';

const CardSection = props => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0.5,
    borderColor: '#bdc3c7',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row'
    // postiton: 'relative'
  }
};

export { CardSection };
