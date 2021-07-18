import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Animated,
} from "react-native";
import { LYRICS } from "../assets/LovelyDay";

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  menuItem: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  menuItemText: {
    fontSize: 32,
  },
  seperator: {
    height: 1,
    backgroundColor: "black",
    width: "90%",
  },
});

const Menu = ({ progress, dragX, setText, swipeRef }) => {
  const [selectedId, setSelectedId] = useState(0);

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.menuItem, backgroundColor]}
    >
      <Text style={[styles.menuItemText, textColor]}>{item.shortText}</Text>
    </TouchableOpacity>
  );

  const Seperator = () => <View style={styles.seperator} />;

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#5c5b58" : "#faf9f7";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setText(item.longText);
          swipeRef.close();
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <Animated.View style={styles.view}>
      <FlatList
        data={LYRICS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        ItemSeperatorComponent={Seperator}
        style={styles.list}
      />
    </Animated.View>
  );
};

export default Menu;
