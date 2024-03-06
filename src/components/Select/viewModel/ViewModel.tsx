import { useState } from "react";
import { CarItem } from "../../../data/models";

export const useSelectViewModel = () => {
  const [textTitle, setTextTitle] = useState<string | undefined>(undefined);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const onSelectCell = (item: CarItem) => {
    setTextTitle(item.nome);
    setShowOptions(false);
    setSelected(item.codigo);
  };

  const onClearSelect = (title: string) => {
    setTextTitle(title);
    setSelected("");
  };

  return {
    textTitle,
    setTextTitle,
    showOptions,
    setShowOptions,
    selected,
    setSelected,
    onSelectCell,
    onClearSelect,
  };
};
