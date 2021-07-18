import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import MySwipeable from "./components/MySwipeable";
import Menu from "./components/Menu";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 32,
    padding: 5,
  },
});

export default function App() {
  const [text, setText] = useState("Swiper be swiping");
  const [swipeRef, setSwipeRef] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <MySwipeable
        ref={setSwipeRef}
        renderLeftActions={(progress, dragX) => (
          <Menu
            progress={progress}
            dragX={dragX}
            setText={setText}
            swipeRef={swipeRef}
          />
        )}
      >
        <View style={styles.view}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </MySwipeable>
    </SafeAreaView>
  );
}
