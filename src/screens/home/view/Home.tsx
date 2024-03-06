import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
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
    idYear,
    setIdYear,
    carDetails,
    showDetails,
    setShowDetails,
    clearFilters,
  } = useHomeViewModel();

  useEffect(() => {
    async function getData() {
      await getCarBrands();
    }

    getData();
  }, [focused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>FIPE Help</Text>
      </View>
      <Select
        options={listCarBrands}
        title="Marca"
        onChangeOptions={(idBrand) => {
          setIdBrand(Number(idBrand));
          clearFilters(true);
        }}
        disabled={!listCarBrands}
        clear={idBrand === undefined}
      />
      <Select
        options={listCarModels?.modelos}
        title="Modelo"
        onChangeOptions={(idModel) => setIdModel(Number(idModel))}
        disabled={!idBrand}
        clear={idModel === undefined}
      />
      <Select
        options={listCarYears}
        title="Ano"
        onChangeOptions={(idYear) => setIdYear(idYear)}
        disabled={!idModel}
        clear={idYear === undefined}
      />
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => clearFilters()}
      >
        <Text style={styles.buttonSecondaryText}>Limpar filtros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={!carDetails ? styles.buttonDisabled : styles.button}
        disabled={!carDetails}
        onPress={() => setShowDetails(true)}
      >
        <Text
          style={!carDetails ? styles.buttonTextDisabled : styles.buttonText}
        >
          Consultar carro
        </Text>
      </TouchableOpacity>
      <Details
        isOpen={showDetails}
        carData={carDetails}
        onClose={() => setShowDetails(false)}
      />
      <Loading visible={isLoading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
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
    color: "#06b2fc",
  },
  button: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 45,
    backgroundColor: "#06b2fc",
  },
  buttonDisabled: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 45,
    backgroundColor: "#CCC",
  },
  buttonSecondary: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 45,
    borderColor: "#06b2fc",
    borderWidth: 1,
    backgroundColor: "#ffff",
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "700",
  },
  buttonSecondaryText: {
    color: "#06b2fc",
    fontWeight: "700",
  },
  buttonTextDisabled: {
    color: "#555",
    fontWeight: "700",
  },
});
