import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import "../../global.css";

export default function ButtonFormLogin({ nameButtonLogin }) {
  return (
    <TouchableOpacity className="bg-[#fff] w-11/12  rounded-3xl">
      <Text className="font-bold text-2xl p-3 text-center">
        {nameButtonLogin}
      </Text>
    </TouchableOpacity>
  );
}
