import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useHomeViewModel } from "../viewModel/ViewModel";
import { Select, Loading, Details } from "../../../components";

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
    setIdYear,
    carDetails,
    showDetails,
    setShowDetails
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
      <TouchableOpacity style={!carDetails ? styles.buttonDisabled : styles.button} disabled={!carDetails} onPress={() => setShowDetails(true)}>
        <Text style={!carDetails ? styles.buttonTextDisabled : styles.buttonText}>Consultar carro</Text>
      </TouchableOpacity>
      <Details isOpen={showDetails} carData={carDetails} onClose={() => setShowDetails(false)}/>
      <Loading visible={isLoading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFF",
    gap: 16,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 45,
    backgroundColor: "#06b2fc"
  },
  buttonDisabled: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 45,
    backgroundColor: "#CCC",
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "700",
  },
  buttonTextDisabled: {
    color: "#555",
    fontWeight: "700",
  }
});
