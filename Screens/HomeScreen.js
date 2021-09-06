import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profile from "../assets/images/person.png";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

// icons and colors
import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

// local datas
import activitiesData from "../assets/data/activitiesData";
import learnMoreData from "../assets/data/learnMoreData";
import discoverData from "../assets/data/discoverData";

// pages

Feather.loadFont();
Entypo.loadFont();

const HomeScreen = ({ navigation }) => {
  // FOR RENDERING THE ITEM BY PRESSED BUTTON
  const [allButton, setAllButton] = useState(false);
  const [destinationButton, setDestinationButton] = useState(false);
  const [citiesButton, setCitiesButton] = useState(false);
  const [experiencesButton, setExperiencesButton] = useState(false);
  // FOR ICON COLOR
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const renderDiscoverList = ({ item }) => {
    return (
      <View style={styles.discoverWrapper}>
        <Text style={styles.discoverTitle}>Discover</Text>
        <View style={styles.discoverCategoriesWrapper}></View>
      </View>
    );
  };

  // DISCOVER
  const renderDiscoverItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate("Details", {
            item: item,
          })
        }>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            { marginLeft: item.id === "discover-1" ? 20 : 0 },
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  // ACTIVITY LIST
  const renderActivityItem = ({ item }) => {
    return (
      <View
        style={[
          styles.activityItemWrapper,
          {
            marginLeft: item.id === "activities-1" ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const renderLearnMoreItem = ({ item }) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          {
            marginLeft: item.id === "learnMore-1" ? 20 : 0,
          },
        ]}
        imageStyle={styles.learnMoreItemImage}>
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/* Discover */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <TouchableOpacity styles={styles.discoverCategoriesItem}>
              <Text
                style={[styles.discoverCategoryText, { color: colors.orange }]}>
                All
              </Text>
            </TouchableOpacity>
            {/* <Text style={styles.discoverCategoryText}>Destinations</Text> */}
            <TouchableOpacity styles={styles.discoverCategoriesItem}>
              <Text
                style={[
                  styles.discoverCategoryText,
                  { color: toggle ? colors.orange : colors.gray },
                ]}>
                Destinations
              </Text>
            </TouchableOpacity>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Activities */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: colors.black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: colors.gray,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default HomeScreen;
