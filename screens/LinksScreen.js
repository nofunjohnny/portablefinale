import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Sales',
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>SALES</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 25,
    marginBottom: 12
  }
});