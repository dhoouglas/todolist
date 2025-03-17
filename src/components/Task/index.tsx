import { TouchableOpacity, View, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { styles } from "./styles";

const Task = () => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="checkbox-marked-circle-outline"
          size={22}
          color={theme.colors.brand.purple}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.textDone}>Testando react</Text>
      </View>

      <TouchableOpacity>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color={theme.colors.base.gray300}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
