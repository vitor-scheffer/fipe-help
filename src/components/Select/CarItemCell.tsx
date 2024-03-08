import { TouchableOpacity, Text } from "react-native";
import { CarItem } from "../../data/models";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface Props {
  selected: string;
  item: CarItem;
  onSelectCell: (item: CarItem) => void;
}

export function CarItemCell({ item, selected, onSelectCell }: Props) {
  return (
    <TouchableOpacity
      style={styles.cellContainer}
      onPress={() => {
        onSelectCell(item);
      }}
    >
      <Text
        style={item.codigo === selected ? styles.textSelected : styles.cellText}
        numberOfLines={1}
      >
        {item.nome}
      </Text>
      {item.codigo === selected && (
        <Ionicons name="checkmark" size={18} color={theme.colors.primary} />
      )}
    </TouchableOpacity>
  );
}
