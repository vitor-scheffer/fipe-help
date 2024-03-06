import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Modal,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CarItem } from "../../data/models";
import { CarItemCell } from "./CarItemCell";
import { useSelectViewModel } from "./viewModel/ViewModel";
import { useEffect } from "react";

interface Props {
  options: Array<CarItem> | undefined;
  title: string;
  onChangeOptions: (id: string) => void;
  disabled: boolean;
  clear: boolean;
}

const { width } = Dimensions.get("window");

export function Select({
  options,
  onChangeOptions,
  title,
  disabled,
  clear,
}: Props) {
  const {
    textTitle,
    setTextTitle,
    showOptions,
    setShowOptions,
    selected,
    onSelectCell,
    onClearSelect,
  } = useSelectViewModel();

  useEffect(() => {
    setTextTitle(title);
  }, []);

  useEffect(() => {
    if (clear) {
      onClearSelect(title);
    }
  }, [clear]);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setShowOptions(false)}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <FlatList
          data={options}
          keyExtractor={(item) => String(item.codigo)}
          renderItem={(item) => (
            <CarItemCell
              item={item.item}
              selected={selected}
              onSelectCell={(item) => {
                onSelectCell(item);
                onChangeOptions(item.codigo);
              }}
            />
          )}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 20,
    marginBottom: 6,
  },
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
    gap: 10,
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#06b2fc",
    height: 100,
  },
  headerTitle: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
