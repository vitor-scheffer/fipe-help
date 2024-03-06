import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { useHomeViewModel } from "../viewModel/ViewModel";
import { Select, Loading } from "../../../components";

export function Home() {
  const focused = useIsFocused();

  const {
    isLoading,
    getCarBrands,
    listCarBrands,
    idBrand,
    setIdBrand,
    listCarModels,
    idModel,
    setIdModel,
    listCarYears,
    idYear,
    setIdYear,
    carDetails,
  } = useHomeViewModel();

  useEffect(() => {
    async function getData() {
      await getCarBrands();
    }

    getData();
  }, [focused]);

  return (
    <SafeAreaView style={styles.container}>
      <Select
        options={listCarBrands}
        title="Marca"
        onChangeOptions={(idBrand) => setIdBrand(Number(idBrand))}
        disabled={!listCarBrands}
      />
      <Select
        options={listCarModels?.modelos}
        title="Modelo"
        onChangeOptions={(idModel) => setIdModel(Number(idModel))}
        disabled={!idBrand}
      />
      <Select
        options={listCarYears}
        title="Anos"
        onChangeOptions={(idYear) => setIdYear(idYear)}
        disabled={!idModel}
      />
      <Loading visible={isLoading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFF",
    gap: 16,
  },
});
