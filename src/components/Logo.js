import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "../../global.css";
export default function Logo({logoInstituteName}) {
  return (
      <View className="bg-[#EE5344] rounded-full mb-20">
        <Text className="p-20 font-bold text-7xl text-white">{logoInstituteName}</Text>
      </View>
  );
}
