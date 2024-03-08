import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  title: {
    marginHorizontal: 20,
    marginBottom: 6,
  },
  container: {
    height: 50,
    backgroundColor: theme.colors.blue100,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 6,
    borderColor: theme.colors.gray600,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerDisabled: {
    height: 50,
    backgroundColor: theme.colors.gray600,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 6,
    borderColor: theme.colors.gray600,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: theme.colors.gray800,
    fontSize: 16,
    maxWidth: width - 100,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: theme.colors.primary,
    height: 100,
  },
  headerTitle: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: width - 84,
    borderWidth: 1,
    borderColor: theme.colors.gray600,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  cellContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: theme.colors.gray600,
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  cellText: {
    fontSize: 18,
    fontWeight: "400",
  },
  textSelected: {
    fontSize: 18,
    fontWeight: "400",
    color: theme.colors.primary,
  },
});
