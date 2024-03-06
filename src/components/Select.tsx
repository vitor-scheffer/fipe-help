import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Modal,
  FlatList,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { CarItem } from "../data/models/car";
import { CarItemCell } from "./CarItemCell";

interface Props {
  options: Array<CarItem> | undefined;
  title: string;
  onChangeOptions: (id: string) => void;
  disabled: boolean
}

const { width } = Dimensions.get("window");

export function Select({ options, onChangeOptions, title, disabled }: Props) {
  const [textTitle, setTextTitle] = useState<string>(title);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const onSelectCell = (item: CarItem) => {
    onChangeOptions(item.codigo);
    setTextTitle(item.nome);
    setShowOptions(false);
    setSelected(item.codigo);
  };

  return (
    <View>
      <TouchableOpacity
        style={!disabled ? styles.container : styles.containerDisabled}
        onPress={() => setShowOptions(true)}
        disabled={disabled}
      >
        <Text style={styles.text} numberOfLines={1}>
          {textTitle}
        </Text>
        <Ionicons name="chevron-down" size={18} color="black" />
      </TouchableOpacity>
      <Modal
        visible={showOptions}
        animationType="slide"
        onRequestClose={() => setShowOptions(false)}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setShowOptions(false)}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
            <TouchableOpacity onPress={() => setShowOptions(false)}>
              <Text style={{ color: "white" }}>Limpar</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={options}
            keyExtractor={(item) => String(item.codigo)}
            renderItem={(item) => (
              <CarItemCell
                item={item.item}
                selected={selected}
                onSelectCell={(item) => onSelectCell(item)}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#ecf5ff",
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 6,
    borderColor: "#CCC",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerDisabled: {
    height: 50,
    backgroundColor: "#CCC",
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 6,
    borderColor: "#CCC",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#555",
    fontSize: 16,
    maxWidth: width - 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#06b2fc",
  },
  headerTitle: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
