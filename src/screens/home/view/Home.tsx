import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useHomeViewModel } from "../viewModel/ViewModel";
import { Loading } from "../../../components/Loading";

export function Home() {
  const focused = useIsFocused();

  const { getCarBrands, isLoading } = useHomeViewModel();

  useEffect(() => {
    async function getData() {
      await getCarBrands();
    }

    getData();
  }, [focused]);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Loading visible={isLoading}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
