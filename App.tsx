import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { ActivityIndicator, Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <View>
      {fontsLoaded ? <Text>Carregou</Text> : <ActivityIndicator size={30} />}
    </View>
  );
}
