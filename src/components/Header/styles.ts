import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.base.gray700,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 173,
    position: "relative",
  },

  form: {
    position: "absolute",
    bottom: -54 / 2,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 54,
    width: "75%",
    backgroundColor: theme.colors.base.gray500,
    borderRadius: 5,
    borderWidth: 1,
    padding: 16,
    color: theme.colors.base.gray100,
    marginRight: 4,
    fontSize: theme.font_size.md,
    borderColor: theme.colors.base.gray700,
  },

  inputBorder: {
    borderColor: theme.colors.brand.purple,
  },

  button: {
    height: 54,
    width: 54,
    backgroundColor: theme.colors.brand.blue_dark,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
