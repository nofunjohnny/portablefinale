import React, { Component } from "react";
import { Image, StyleSheet, View, Button, Text } from "react-native";
import call from "react-native-phone-call";
import {
  Container,
  Header,
  Col,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import Touchable from "react-native-platform-touchable";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Portable Cooling Systems"
  };

  call = () => {
    //handler to make a call
    const args = {
      number: "7133359852",
      prompt: false
    };

    call(args).catch(console.error);
  };
  render() {
    return (
      <Container>
        <Touchable style={styles.container} onPress={this.call}>
          <View>
            <View>
              <Image
                source={require("../assets/images/calling.png")}
                resizeMode="contain"
                fadeDuration={0}
                style={{
                  width: 128,
                  height: 128,
                  marginTop: 1,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.optionText}>Click to Call</Text>
              
            </View>
          </View>
        </Touchable>
        <Touchable style={styles.container}
        onPress={() => this.props.navigation.navigate('Sales')}>
          <View>
            <View>
              <Image
                source={require("../assets/images/sale.png")}
                resizeMode="contain"
                onPress={() => this.props.navigation.navigate('Links')}
                fadeDuration={0}
                style={{
                  width: 128,
                  height: 128,
                  marginTop: 1,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.optionText}>Sales</Text>
              
            </View>
          </View>
        </Touchable>
        <Touchable style={styles.container}
        onPress={() => this.props.navigation.navigate('Rentals')}>
          <View>
            <View>
              <Image
                source={require("../assets/images/rental.png")}
                resizeMode="contain"
                fadeDuration={0}
                style={{
                  width: 128,
                  height: 128,
                  marginTop: 1,
                  alignSelf: "center"
                }}
              />
              <Text style={styles.optionText}>Rentals</Text>
            </View>
          </View>
        </Touchable>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 5,
    justifyContent: "center",
    flexDirection: "row"
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 25,
    marginBottom: 12
  },
  optionIconContainer: {
    marginRight: 9
  },
  option: {
    backgroundColor: "#00ffffff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EDEDED"
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: 'center',
  }
});
