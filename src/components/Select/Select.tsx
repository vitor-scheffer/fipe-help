import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  FlatList,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CarItem } from "../../data/models";
import { CarItemCell } from "./CarItemCell";
import { useSelectViewModel } from "./viewModel/ViewModel";
import { useEffect } from "react";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface Props {
  options: Array<CarItem> | undefined;
  title: string;
  onChangeOptions: (id: string) => void;
  disabled: boolean;
  clear: boolean;
}

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
    searchText,
    setSearchText,
    optionsFiltered,
    setOptionsFiltered,
  } = useSelectViewModel();

  useEffect(() => {
    if (searchText === "") {
      setOptionsFiltered(options);
    } else {
      setOptionsFiltered(
        options?.filter(
          (item) =>
            item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText, showOptions]);

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
        onPress={() => {
          setShowOptions(true);
          setSearchText("");
        }}
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={searchText}
            onChangeText={(txt) => setSearchText(txt)}
            placeholder="Pesquise"
          />
          <Ionicons name="search" size={24} color={theme.colors.primary} />
        </View>
        <FlatList
          data={optionsFiltered}
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
