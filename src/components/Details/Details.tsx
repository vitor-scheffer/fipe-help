import {
  Modal,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CarDetails } from "../../data/models";

interface Props {
  isOpen: boolean | undefined;
  carData: CarDetails | undefined;
  onClose: () => void;
}

export function Details({ isOpen, carData, onClose }: Props) {
  return (
    <Modal animationType="slide" visible={isOpen === true}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.image}>
          <Ionicons name="car" size={150} color="black" />
        </View>
        <Text style={styles.title}>{carData?.Modelo}</Text>
        <View style={styles.price}>
          <Text style={styles.priceText}>{carData?.Valor}</Text>
        </View>
        <Text style={styles.date}>
          {`Mês de referência: ${carData?.MesReferencia}`}
        </Text>
        <View style={styles.row}>
          <View style={styles.carValue}>
            <Text>Ano</Text>
            <Text style={styles.textCarValue}>{carData?.AnoModelo}</Text>
          </View>
          <View style={styles.carValue}>
            <Text>Código FIPE</Text>
            <Text style={styles.textCarValue}>{carData?.CodigoFipe}</Text>
          </View>
          <View style={styles.carValue}>
            <Text>Combustível</Text>
            <Text
              style={styles.textCarValue}
            >{`${carData?.Combustivel} - ${carData?.SiglaCombustivel}`}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.carValue}>
            <Text>Marca</Text>
            <Text style={styles.textCarValue}>{carData?.Marca}</Text>
          </View>
          <View style={styles.carValue}>
            <Text>Tipo de veículo</Text>
            <Text style={styles.textCarValue}>{carData?.TipoVeiculo}</Text>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#06b2fc",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
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
    color: "#08106b",
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
