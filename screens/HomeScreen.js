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
import call from "react-native-phone-call";
import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Portable Cooling Systems"
  };
  call = () => {
    //handler to make a call
    const args = {
      number: "7136617077",
      prompt: false
    };

    call(args).catch(console.error);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.contentContainer}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.emergencyContainer}>
            <TouchableOpacity
              style={styles.contentContainer}
              onPress={this.call}
            >
              <Image
                source={
                  __DEV__
                    ? require("../assets/images/1x/emergency.png")
                    : require("../assets/images/1x/emergency.png")
                }
                style={styles.emergencyImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.container1}>
            <Image
              source={
                __DEV__
                  ? require("../assets/images/1x/sales.png")
                  : require("../assets/images/1x/sales.png")
              }
              style={styles.image1}
            />
          
          
            <Image
              source={
                __DEV__
                  ? require("../assets/images/1x/heatload.png")
                  : require("../assets/images/1x/heatload.png")
              }
              style={styles.image1}
            />
</View> 

<View style={styles.container2}>
            <Image
              source={
                __DEV__
                  ? require("../assets/images/1x/rentals.png")
                  : require("../assets/images/1x/rentals.png")
              }
              style={styles.image2}
            />
          

          



              <Image
                source={
                  __DEV__
                    ? require("../assets/images/1x/location.png")
                    : require("../assets/images/1x/location.png")
                }
                style={styles.image2}
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
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#1DAAD6"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 5,
    flexDirection: "column"
  },
  emergencyContainer: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 25
  },
  emergencyImage: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image1: {
    width: 170,
    height: 170,
    margin: 5
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image2: {
    width: 170,
    height: 170,
    margin: 5
  },
  container3: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
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
    backgroundColor: "#1DAAD6",
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
        shadowRadius: 3,
        backgroundColor: "#1DAAD6"
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#1DAAD6",
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
