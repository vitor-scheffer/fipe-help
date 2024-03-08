import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      gap: 16,
    },
    logo: {
      maxWidth: "100%",
      margin: 50,
      alignItems: "center",
    },
    logoText: {
      fontSize: 40,
      fontWeight: "700",
      color: theme.colors.primary,
    },
    button: {
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      height: 45,
      backgroundColor: theme.colors.primary,
    },
    buttonDisabled: {
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      height: 45,
      backgroundColor: theme.colors.gray600,
    },
    buttonSecondary: {
      marginTop: 20,
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      height: 45,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      backgroundColor: theme.colors.white,
    },
    buttonText: {
      color: theme.colors.white,
      fontWeight: "700",
    },
    buttonSecondaryText: {
      color: theme.colors.primary,
      fontWeight: "700",
    },
    buttonTextDisabled: {
      color: theme.colors.gray800,
      fontWeight: "700",
    },
  });
