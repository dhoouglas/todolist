import { View, Text, StatusBar } from "react-native";
import { styles } from "./styles";
import Header from "@components/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
};

export default Home;
