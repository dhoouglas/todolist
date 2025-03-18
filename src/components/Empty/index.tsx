import { Image, View, Text } from "react-native";
import { styles } from "./styles";

import clipboard from "@assets/clipboard.png";

const Empty = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image source={clipboard} style={styles.image} />
      <Text style={styles.textBold}>
        Voce ainda nao possui tarefas cadastradas
      </Text>
      <Text style={[styles.textBold, styles.textRegular]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};

export default Empty;
