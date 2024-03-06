import { useState } from "react";
import { CarItem } from "../../../data/models/car";

export const useSelectViewModel = () => {
  const [textTitle, setTextTitle] = useState<string | undefined>(undefined);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const onSelectCell = (item: CarItem) => {
    setTextTitle(item.nome);
    setShowOptions(false);
    setSelected(item.codigo);
  };

  return {
    textTitle,
    setTextTitle,
    showOptions,
    setShowOptions,
    selected,
    setSelected,
    onSelectCell,
  };
};
