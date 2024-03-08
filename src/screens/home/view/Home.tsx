import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useHomeViewModel } from "../viewModel/ViewModel";
import { Select, Loading, Details } from "../../../components";
import { styles } from "../styles";

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
