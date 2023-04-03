import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { scale } from "react-native-size-matters";
import { RadioButton } from "react-native-paper";

const planets = [
  {
    id: 0,
    name: "Mercury",
    moons: 0,
  },
  {
    id: 1,
    name: "Venus",
    moons: 0,
  },
  {
    id: 2,
    name: "Earth",
    moons: 1,
  },
  {
    id: 3,
    name: "Mars",
    moons: 2,
  },
  {
    id: 4,
    name: "Jupiter",
    moons: 79,
  },
  {
    id: 5,
    name: "Saturn",
    moons: 82,
  },
  {
    id: 6,
    name: "Uranus",
    moons: 27,
  },
  {
    id: 7,
    name: "Neptune",
    moons: 14,
  },
];

export default function App() {
  const [selectedId, setSelectedId] = useState();

  return (
    <View style={styles.container}>
      <Text>Pick a Planet, Explore Moons</Text>
      {planets.map((planet) => {
        return (
          <View style={styles.radioButtonRow} key={planet.id}>
            <RadioButton.Item
              value={planet.id}
              status={selectedId === planet.id ? "checked" : "unchecked"}
              onPress={() => setSelectedId(planet.id)}
              label={planet.name}
            />
          </View>
        );
      })}
      {selectedId >= 0 && (
        <Text>
          The number of moons on planet {planets[selectedId].name} is{" "}
          {planets[selectedId].moons}.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    padding: 32,
  },
  radioButtonRow: {
    borderStyle: "solid",
    borderColor: "black",
  },
});
