import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import colors from "../assets/colors/colors";

// TODO: profile fotosu 5s telefonda solda gözüküyor onu düzelt

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/profile-background.jpg")}
        style={styles.backgroundImageContainer}
        imageStyle={styles.backgroundImage}></ImageBackground>
      <View style={styles.infoWrapper}>
        <View style={styles.usernameWrapper}>
          <Text style={styles.usernameText}>Yusuf Berkay Girgin</Text>
          <Text style={styles.userDetailText}>I'm a software Developer</Text>
        </View>
        <View style={styles.profilePictureWrapper}>
          <Image
            source={require("../assets/images/person.png")}
            style={styles.profilePicture}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    height: height * 0.4,
    backgroundColor: "red",
  },
  backgroundImage: {
    height: "100%",
  },
  infoWrapper: {
    borderRadius: 20,
    marginTop: -20,
    width: width,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.white,
  },

  usernameWrapper: {
    width: width * 0.6,
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: -70,
  },
  usernameText: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
  },
  userDetailText: {
    fontFamily: "Lato-Regular",
    fontSize: 18,
    color: colors.gray,
  },

  profilePictureWrapper: {
    position: "absolute",
    right: 40,
    top: -30,
    width: 70,
    height: 70,
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },
});
