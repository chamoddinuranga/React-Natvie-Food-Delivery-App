import { View, Text, ScrollView } from "react-native";
import React from "react";
import { categories } from "../constants";

export default function Catergories() {
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {categories.map((category, index) => {
          return (
            <View
              key={index}
              className="flex justify-center items-center mr-6"
            ></View>
          );
        })}
      </ScrollView>
    </View>
  );
}
