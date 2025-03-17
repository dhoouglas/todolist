import Loading from "@components/Loading";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import Home from "@screens/index";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <View style={{ flex: 1 }}>{fontsLoaded ? <Home /> : <Loading />}</View>
  );
}
