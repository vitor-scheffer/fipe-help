import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: theme.colors.primary,
    alignItems: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: theme.colors.white,
    paddingLeft: 8,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  image: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 20,
  },
  price: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBlockColor: "black",
    width: "100%",
    paddingVertical: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "700",
    color: theme.colors.blue900,
  },
  date: {
    marginTop: 8,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    gap: 30,
  },
  carValue: {
    gap: 6,
    marginVertical: 10,
    width: "28%",
  },
  textCarValue: {
    fontWeight: "700",
    fontSize: 16,
  },
});
