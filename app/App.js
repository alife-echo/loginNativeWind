import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "../global.css";
import ButtonFormLogin from "../src/components/ButtonFormLogin";
import Logo from "../src/components/Logo";
export default function App() {
  return (
    <View className="bg-[#010101] flex-1 items-center justify-center">
      <Logo logoInstituteName={"SI"}/>
      <View className="flex gap-y-4">
        <ButtonFormLogin nameButtonLogin={"Cadastre-se"} />
        <ButtonFormLogin nameButtonLogin={"Faça Login"} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
