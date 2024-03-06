import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { useHomeViewModel } from "../viewModel/ViewModel";
import { Select, Loading } from "../../../components";

export function Home() {
  const focused = useIsFocused();

  const { isLoading, getCarBrands, listCarBrands } = useHomeViewModel();

  useEffect(() => {
    async function getData() {
      await getCarBrands();
    }

    getData();
  }, [focused]);

  return (
    <SafeAreaView style={styles.container}>
      <Select options={listCarBrands} title="Marca" onChangeOptions={(id) => alert(id)}/>
      <Select options={listCarBrands} title="Modelo" onChangeOptions={(id) => alert(id)}/>
      <Select options={listCarBrands} title="Ano" onChangeOptions={(id) => alert(id)}/>
      <Loading visible={isLoading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFF",
    gap: 8
  },
});
