import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import logoImage from "../../assets/logo.png";
import { theme } from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

type HeaderProps = {
  task: string;
  inputRef: React.RefObject<TextInput>;
  onChangeText: (task: string) => void;
  onPress: () => void;
};

const Header = ({ task, inputRef, onChangeText, onPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={logoImage} />
      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            inputRef.current?.isFocused() && task ? styles.inputBorder : null,
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.colors.base.gray300}
          value={task}
          onChangeText={onChangeText}
          ref={inputRef}
          autoCorrect={false}
          onSubmitEditing={onPress}
          returnKeyType="done"
        />

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={22}
            color={theme.colors.base.gray100}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
