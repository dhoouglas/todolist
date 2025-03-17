import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} color={theme.colors.brand.blue} />
    </View>
  );
};

export default Loading;
