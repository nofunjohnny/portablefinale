import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Rentals',
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>RENTALS</Text>
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