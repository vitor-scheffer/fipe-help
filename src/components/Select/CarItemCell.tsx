import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { CarItem } from "../../data/models";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  selected: string;
  item: CarItem;
  onSelectCell: (item: CarItem) => void;
}

export function CarItemCell({ item, selected, onSelectCell }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onSelectCell(item);
      }}
    >
      <Text
        style={item.codigo === selected ? styles.textSelected : styles.text}
        numberOfLines={1}
      >
        {item.nome}
      </Text>
      {item.codigo === selected && (
        <Ionicons name="checkmark" size={18} color="#06b2fc" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
  textSelected: {
    fontSize: 18,
    fontWeight: "400",
    color: "#06b2fc",
  },
});
