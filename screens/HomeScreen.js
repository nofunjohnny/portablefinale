import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Portable Cooling Systems"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.emergencyContainer}>
            <Image
              source={
                __DEV__
                  ? require("../assets/images/1x/emergency.png")
                  : require("../assets/images/1x/emergency.png")
              }
              style={styles.emergencyImage}
            />
          </View>
          <View style={styles.rowoneContainer}>
            <Image
              source={
                __DEV__
                  ? require("../assets/images/1x/sales.png")
                  : require("../assets/images/1x/sales.png")
              }
              style={styles.salesImage}
            />
            
                        <Image
              source={
                __DEV__
                  ? require("../assets/images/1x/heatload.png")
                  : require("../assets/images/1x/heatload.png")
              }
              style={styles.heatloadImage}
            />
          </View>
          <View style={styles.rowtwoContainer}>
            <Image
              source={
                __DEV__
                  ? require("../assets/images/1x/rentals.png")
                  : require("../assets/images/1x/rentals.png")
              }
              style={styles.salesImage}
            />
            <Image
              source={
                __DEV__
                  ? require("../assets/images/1x/home.png")
                  : require("../assets/images/robot-prod.png")
              }
              style={styles.locationImage}
            />
            <Image
              source={
                __DEV__
                  ? require("../assets/images/1x/location.png")
                  : require("../assets/images/1x/location.png")
              }
              style={styles.locationImage}
            />
            
          </View>

          
            
          
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 15,
    flexDirection: 'column'
  },
  emergencyContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40
  },
  emergencyImage: {
    width: 150,
    height: 120,
    resizeMode: "contain",
    marginTop: 3,
    
  },
  rowoneContainer: {
    alignItems: "flex-end",
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10
  },
  rowtwoContainer: {
    alignItems: "flex-end",
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40
    
  },
  salesImage: {
    width: 150,
    height: 120,
    resizeMode: "contain",
    marginTop: 3
    
  },
  locationContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40
  },
  locationImage: {
    width: 150,
    height: 120,
    resizeMode: "contain",
    marginTop: 30
    
  },
  heatloadContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40
  },
  heatloadImage: {
    width: 150,
    height: 120,
    resizeMode: "contain",
    marginTop: 30,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
